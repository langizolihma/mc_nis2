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

from nis2_harness.portal import (
    ReconciliationDraftStore,
    ReviewDraftStore,
    build_live_snapshot,
    load_actions,
    load_control_catalog_projection,
    load_deferred,
    validate_reconciliation_draft,
    validate_review_draft,
)
from nis2_harness.portal_server import _kill_switch_engaged, make_handler, serve_portal
from nis2_harness.task_workflow import (
    TaskAttachmentStore,
    TaskWorkflowDraftStore,
)


ROOT = Path(__file__).parents[1]


class PortalMvpTests(unittest.TestCase):
    def setUp(self) -> None:
        self.actions = {item["action_id"]: item for item in load_actions(ROOT / "data" / "actions.csv")}
        self.valid_payload = {
            "action_id": "A-001", "gate": "G2_SECURITY_LEGAL",
            "actor_display": "Teszt Reviewer", "decision": "REQUEST_REVIEW",
            "note": "A formális aláírás és védett evidencia pótlása szükséges.",
        }
        self.valid_reconciliation_payload = {
            "action_id": "A-001",
            "actor_display": "Teszt Rögzítő",
            "outcome": "IN_PROGRESS",
            "actual_progress_summary": "A végrehajtás folyamatban van.",
            "proposed_new_target_date": "",
            "evidence_uri": "",
            "evidence_sha256": "",
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

    def test_reconciliation_draft_is_append_only_and_not_formal(self) -> None:
        source = json.loads(
            (ROOT / "data" / "deadline_reconciliation.json").read_text(
                encoding="utf-8"
            )
        )
        known = {item["action_id"]: item for item in source["records"]}
        errors = validate_reconciliation_draft(
            self.valid_reconciliation_payload,
            known,
            date.fromisoformat(source["as_of"]),
        )
        self.assertEqual([], errors)
        with tempfile.TemporaryDirectory() as temp:
            store = ReconciliationDraftStore(
                Path(temp) / "reconciliation.jsonl",
                clock=lambda: datetime(
                    2026, 7, 29, 8, 0, tzinfo=timezone.utc
                ),
            )
            record = store.append(self.valid_reconciliation_payload)
            self.assertEqual("DRAFT_RECONCILIATION_NOTE", record["status"])
            self.assertFalse(record["formal_effect"])
            self.assertTrue(record["actor_claim_unverified"])
            self.assertEqual([record], store.load())

    def test_reconciliation_draft_rejects_unsafe_claims(self) -> None:
        source = json.loads(
            (ROOT / "data" / "deadline_reconciliation.json").read_text(
                encoding="utf-8"
            )
        )
        known = {item["action_id"]: item for item in source["records"]}
        payload = dict(
            self.valid_reconciliation_payload,
            outcome="COMPLETED_READY_FOR_REVIEW",
            proposed_new_target_date="2026-07-01",
            formal_effect=True,
        )
        errors = validate_reconciliation_draft(
            payload,
            known,
            date.fromisoformat(source["as_of"]),
        )
        self.assertGreaterEqual(len(errors), 3)

    def test_live_snapshot_uses_all_current_sources(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            store = ReviewDraftStore(Path(temp) / "drafts.jsonl")
            reconciliation_store = ReconciliationDraftStore(
                Path(temp) / "reconciliation.jsonl"
            )
            task_workflow_store = TaskWorkflowDraftStore(
                Path(temp) / "task-workflow.jsonl"
            )
            snapshot = build_live_snapshot(
                ROOT,
                store,
                date(2026, 7, 20),
                reconciliation_store,
                task_workflow_store,
            )
        self.assertEqual(42, snapshot["summary"]["total_actions"])
        self.assertEqual(66, snapshot["summary"]["days_to_deadline"])
        self.assertGreater(snapshot["summary"]["overdue_actions"], 0)
        self.assertIn("due_within_7_days", snapshot["summary"])
        self.assertIn("undated_actions", snapshot["summary"])
        self.assertEqual(
            16, snapshot["summary"]["deadline_reconciliation_pending"]
        )
        self.assertEqual(
            "PROPOSAL_PENDING_HUMAN_RECONCILIATION",
            snapshot["deadline_reconciliation"]["status"],
        )
        self.assertEqual(16, snapshot["deadline_reconciliation"]["record_count"])
        self.assertFalse(snapshot["deadline_reconciliation"]["formal_effect"])
        self.assertEqual([], snapshot["reconciliation_drafts"])
        self.assertEqual(len(load_deferred(ROOT / "DEFERRED_EVIDENCE_LOG.md")), len(snapshot["deferred_tasks"]))
        self.assertEqual("PROPOSAL", snapshot["agent_pilot"]["status"])
        self.assertEqual("H002-CA-JOB-001", snapshot["agent_pilot"]["pilot_id"])
        self.assertEqual(10, len(snapshot["agent_pilot"]["proposals"]))
        self.assertFalse(snapshot["agent_pilot"]["formal_effect"])
        self.assertEqual("NOT_CONFIGURED", snapshot["meta"]["auth_status"])
        self.assertEqual(914, snapshot["summary"]["catalog_controls"])
        self.assertEqual("PENDING_G1_REVIEW", snapshot["summary"]["catalog_review_status"])
        self.assertEqual(6, snapshot["summary"]["catalog_pending_checks"])
        self.assertEqual(5, snapshot["summary"]["catalog_pending_eir_classifications"])
        self.assertEqual("DEF-036", snapshot["catalog_review"]["deferred_task_id"])
        self.assertFalse(snapshot["catalog_review"]["formal_effect"])
        self.assertEqual(
            "READY_FOR_G1_HUMAN_REVIEW",
            snapshot["catalog_review"]["legal_precheck_status"],
        )
        self.assertEqual(914, snapshot["catalog_review"]["identifier_match_count"])
        self.assertEqual(914, snapshot["catalog_review"]["title_match_count"])
        self.assertEqual(914, snapshot["catalog_review"]["applicability_match_count"])
        self.assertEqual(7, snapshot["catalog_review"]["text_review_required_count"])
        self.assertEqual(["5.3", "5.4"], snapshot["catalog_review"]["amended_controls"])
        action = next(item for item in snapshot["actions"] if item["id"] == "A-001")
        self.assertEqual("OVERDUE", action["deadline_bucket"])
        self.assertLess(action["days_to_target"], 0)
        self.assertEqual(["1.2"], action["control_refs"])
        self.assertEqual("SRC-009", action["control_details"][0]["source_ref"])
        self.assertEqual(38, len(snapshot["sharepoint_tasks"]))
        self.assertEqual(38, snapshot["summary"]["linked_human_tasks"])
        self.assertEqual(0, snapshot["summary"]["unlinked_human_tasks"])
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
        auth = snapshot["portal_auth_readiness"]
        self.assertEqual("BLOCKED_PENDING_G1_G2_G3", auth["status"])
        self.assertEqual(3, len(auth["pending_gates"]))
        self.assertEqual(0, auth["hard_errors"])
        self.assertFalse(auth["authentication_enabled"])
        self.assertFalse(auth["network_allowed"])
        self.assertFalse(auth["formal_effect"])
        self.assertEqual(5, snapshot["human_task_pilot"]["task_count"])
        self.assertEqual(
            "LOCAL_PILOT_READY",
            snapshot["human_task_pilot"]["status"],
        )
        self.assertFalse(snapshot["human_task_pilot"]["formal_effect"])
        self.assertTrue(
            snapshot["human_task_pilot"][
                "authentication_required_for_formal_use"
            ]
        )

    def test_http_api_serves_snapshot_and_appends_draft(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            store = ReviewDraftStore(Path(temp) / "drafts.jsonl")
            reconciliation_store = ReconciliationDraftStore(
                Path(temp) / "reconciliation.jsonl"
            )
            task_workflow_store = TaskWorkflowDraftStore(
                Path(temp) / "task-workflow.jsonl"
            )
            task_attachment_store = TaskAttachmentStore(
                Path(temp) / "attachments"
            )
            server = ThreadingHTTPServer(
                ("127.0.0.1", 0),
                make_handler(
                    ROOT,
                    store,
                    lambda: date(2026, 7, 20),
                    reconciliation_store,
                    task_workflow_store,
                    task_attachment_store,
                ),
            )
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
                body = json.dumps(
                    self.valid_reconciliation_payload,
                    ensure_ascii=False,
                ).encode("utf-8")
                connection.request(
                    "POST",
                    "/api/reconciliation-drafts",
                    body=body,
                    headers={"Content-Type": "application/json"},
                )
                response = connection.getresponse()
                result = json.loads(response.read())
                self.assertEqual(201, response.status)
                self.assertFalse(result["record"]["formal_effect"])
                self.assertEqual(1, len(reconciliation_store.load()))
                work_payload = {
                    "task_id": "DEF-002",
                    "actor_display": "Pásztor András",
                    "transition": "START_WORK",
                    "note": "A dokumentumellenőrzés megkezdődött.",
                    "evidence_uri": "",
                    "evidence_sha256": "",
                }
                body = json.dumps(
                    work_payload,
                    ensure_ascii=False,
                ).encode("utf-8")
                connection.request(
                    "POST",
                    "/api/task-work-events",
                    body=body,
                    headers={"Content-Type": "application/json"},
                )
                response = connection.getresponse()
                result = json.loads(response.read())
                self.assertEqual(201, response.status)
                self.assertFalse(result["record"]["formal_effect"])
                self.assertEqual(1, len(task_workflow_store.load()))
                connection.request(
                    "GET",
                    (
                        "/api/task-materials/DEF-002/"
                        "DEF-002_kanonikus_auditjelentes_review.docx"
                    ),
                )
                response = connection.getresponse()
                material = response.read()
                self.assertEqual(200, response.status)
                self.assertTrue(material.startswith(b"PK"))
                self.assertIn(
                    "attachment;",
                    response.getheader("Content-Disposition"),
                )
                connection.request(
                    "POST",
                    "/api/task-attachments/DEF-002",
                    body=b"%PDF-1.7 attachment",
                    headers={
                        "Content-Type": "application/pdf",
                        "X-Filename": "alairt-review.pdf",
                    },
                )
                response = connection.getresponse()
                result = json.loads(response.read())
                self.assertEqual(201, response.status)
                self.assertFalse(result["record"]["formal_effect"])
                self.assertEqual(
                    "LOCAL_STAGED_NOT_EVIDENCE",
                    result["record"]["status"],
                )
                self.assertEqual(1, len(task_attachment_store.load()))
                connection.request(
                    "GET",
                    result["record"]["download_url"],
                )
                response = connection.getresponse()
                self.assertEqual(200, response.status)
                self.assertEqual(
                    b"%PDF-1.7 attachment",
                    response.read(),
                )
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
        self.assertIn("reconciliation-modal", identifiers)
        self.assertIn("work-modal", identifiers)
        self.assertIn("work-grid", identifiers)
        javascript = (ROOT / "portal_demo" / "app.js").read_text(encoding="utf-8")
        self.assertIn("safeSharePointUrl", javascript)
        self.assertIn("sharepoint_tasks", javascript)
        self.assertIn("sharepoint_live_readiness", javascript)
        self.assertIn("portal_auth_readiness", javascript)
        self.assertIn("control_details", javascript)
        self.assertIn("catalog_review", javascript)
        self.assertIn("human_task_pilot", javascript)
        self.assertIn("/api/task-work-events", javascript)
        self.assertIn("/api/task-attachments/", javascript)
        self.assertIn("work-attachment", identifiers)
        self.assertIn("work-attachment-upload", identifiers)
        self.assertIn('rel="noopener noreferrer"', javascript)

    def test_control_catalog_projection_is_proposal_only(self) -> None:
        records = load_control_catalog_projection(ROOT / "data" / "control_catalog.csv")
        self.assertEqual(914, len(records))
        self.assertTrue(all(item["human_review_status"] == "PROPOSED" for item in records))

    def test_portal_config_forbids_formal_and_network_actions(self) -> None:
        config = json.loads((ROOT / "config" / "portal_mvp.json").read_text(encoding="utf-8"))
        self.assertEqual("LOCAL_LOOPBACK_MVP", config["mode"])
        self.assertTrue(all(value is False for value in config["safety"].values()))

    def test_non_loopback_binding_is_rejected(self) -> None:
        with self.assertRaisesRegex(ValueError, "G2/G3"):
            serve_portal(ROOT, "0.0.0.0", 0)


if __name__ == "__main__":
    unittest.main()
