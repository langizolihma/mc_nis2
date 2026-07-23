from __future__ import annotations

from datetime import date, datetime, timezone
from http.client import HTTPConnection
from http.server import ThreadingHTTPServer
import json
from pathlib import Path
import re
import tempfile
import threading
import unittest

from nis2_harness.portal import ReviewDraftStore, build_live_snapshot, load_actions, load_deferred, validate_review_draft
from nis2_harness.portal_server import _kill_switch_engaged, make_handler, serve_portal


ROOT = Path(__file__).parents[1]


class PortalMvpTests(unittest.TestCase):
    def setUp(self) -> None:
        self.actions = {item["action_id"]: item for item in load_actions(ROOT / "data" / "actions.csv")}
        self.valid_payload = {
            "action_id": "A-001", "gate": "G2_SECURITY_LEGAL",
            "actor_display": "Teszt Reviewer", "decision": "REQUEST_REVIEW",
            "note": "A formális aláírás és védett evidencia pótlása szükséges.",
        }

    def test_review_draft_is_valid_but_not_formal(self) -> None:
        self.assertEqual([], validate_review_draft(self.valid_payload, self.actions))
        with tempfile.TemporaryDirectory() as temp:
            store = ReviewDraftStore(
                Path(temp) / "drafts.jsonl",
                clock=lambda: datetime(2026, 7, 20, 8, 0, tzinfo=timezone.utc),
            )
            record = store.append(self.valid_payload)
            self.assertFalse(record["formal_effect"])
            self.assertTrue(record["actor_claim_unverified"])
            self.assertEqual("DRAFT_REVIEW_NOTE", record["status"])
            self.assertEqual([record], store.load())

    def test_unknown_action_wrong_gate_and_approval_are_rejected(self) -> None:
        payload = dict(self.valid_payload, action_id="A-999", gate="G4_EXTERNAL_SUBMISSION", decision="APPROVE")
        errors = validate_review_draft(payload, self.actions)
        self.assertGreaterEqual(len(errors), 2)

    def test_live_snapshot_uses_all_current_sources(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            store = ReviewDraftStore(Path(temp) / "drafts.jsonl")
            snapshot = build_live_snapshot(ROOT, store, date(2026, 7, 20))
        self.assertEqual(42, snapshot["summary"]["total_actions"])
        self.assertEqual(66, snapshot["summary"]["days_to_deadline"])
        self.assertEqual(len(load_deferred(ROOT / "DEFERRED_EVIDENCE_LOG.md")), len(snapshot["deferred_tasks"]))
        self.assertEqual("PROPOSAL", snapshot["agent_pilot"]["status"])
        self.assertEqual("H002-CA-JOB-001", snapshot["agent_pilot"]["pilot_id"])
        self.assertEqual(10, len(snapshot["agent_pilot"]["proposals"]))
        self.assertFalse(snapshot["agent_pilot"]["formal_effect"])
        self.assertEqual("NOT_CONFIGURED", snapshot["meta"]["auth_status"])
        self.assertEqual(35, len(snapshot["sharepoint_tasks"]))
        self.assertEqual(35, snapshot["summary"]["linked_human_tasks"])
        self.assertEqual("READ_ONLY_SNAPSHOT_ACTIVE", snapshot["sharepoint_integration"]["status"])
        self.assertFalse(snapshot["sharepoint_integration"]["network_allowed"])
        self.assertFalse(snapshot["sharepoint_integration"]["write_back_allowed"])
        self.assertFalse(snapshot["sharepoint_integration"]["formal_effect"])
        readiness = snapshot["sharepoint_live_readiness"]
        self.assertEqual("BLOCKED_PENDING_HUMAN_GATES", readiness["status"])
        self.assertEqual(3, len(readiness["pending_gates"]))
        self.assertEqual(0, readiness["hard_errors"])
        self.assertFalse(readiness["network_allowed"])
        self.assertFalse(readiness["token_acquisition_allowed"])
        self.assertFalse(readiness["write_back_allowed"])
        self.assertFalse(readiness["formal_effect"])

    def test_http_api_serves_snapshot_and_appends_draft(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            store = ReviewDraftStore(Path(temp) / "drafts.jsonl")
            server = ThreadingHTTPServer(("127.0.0.1", 0), make_handler(ROOT, store, lambda: date(2026, 7, 20)))
            thread = threading.Thread(target=server.serve_forever, daemon=True)
            thread.start()
            try:
                connection = HTTPConnection("127.0.0.1", server.server_port, timeout=5)
                connection.request("GET", "/api/snapshot")
                response = connection.getresponse()
                snapshot = json.loads(response.read())
                self.assertEqual(200, response.status)
                self.assertEqual(42, snapshot["summary"]["total_actions"])
                self.assertIn("frame-ancestors 'none'", response.getheader("Content-Security-Policy"))
                body = json.dumps(self.valid_payload, ensure_ascii=False).encode("utf-8")
                connection.request("POST", "/api/review-drafts", body=body, headers={"Content-Type": "application/json"})
                response = connection.getresponse()
                result = json.loads(response.read())
                self.assertEqual(201, response.status)
                self.assertFalse(result["record"]["formal_effect"])
                self.assertEqual(1, len(store.load()))
                connection.close()
            finally:
                server.shutdown()
                server.server_close()
                thread.join(timeout=5)

    def test_kill_switch_defaults_to_safe_when_missing(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            self.assertTrue(_kill_switch_engaged(Path(temp)))

    def test_kill_switch_reads_explicit_engaged_state(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            (root / "config").mkdir()
            (root / "config" / "continuous_assurance_pilot.json").write_text(
                json.dumps({"kill_switch": {"engaged": True}}), encoding="utf-8"
            )
            self.assertTrue(_kill_switch_engaged(root))

    def test_frontend_has_unique_ids_and_no_external_asset(self) -> None:
        html = (ROOT / "portal_demo" / "index.html").read_text(encoding="utf-8")
        identifiers = re.findall(r'\bid="([^"]+)"', html)
        self.assertEqual(len(identifiers), len(set(identifiers)))
        self.assertNotIn("https://", html)
        self.assertIn("review-modal", identifiers)
        javascript = (ROOT / "portal_demo" / "app.js").read_text(encoding="utf-8")
        self.assertIn("safeSharePointUrl", javascript)
        self.assertIn("sharepoint_tasks", javascript)
        self.assertIn("sharepoint_live_readiness", javascript)
        self.assertIn('rel="noopener noreferrer"', javascript)

    def test_portal_config_forbids_formal_and_network_actions(self) -> None:
        config = json.loads((ROOT / "config" / "portal_mvp.json").read_text(encoding="utf-8"))
        self.assertEqual("LOCAL_LOOPBACK_MVP", config["mode"])
        self.assertTrue(all(value is False for value in config["safety"].values()))

    def test_non_loopback_binding_is_rejected(self) -> None:
        with self.assertRaisesRegex(ValueError, "G2/G3"):
            serve_portal(ROOT, "0.0.0.0", 0)


if __name__ == "__main__":
    unittest.main()
