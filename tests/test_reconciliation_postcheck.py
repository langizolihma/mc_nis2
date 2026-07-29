from __future__ import annotations

from dataclasses import replace
import json
from pathlib import Path
import tempfile
import unittest

from nis2_harness.cli import main
from nis2_harness.reconciliation_postcheck import (
    render_reconciliation_application_verification,
    verify_reconciliation_application,
)
from nis2_harness.reconciliation_preflight import (
    build_reconciliation_application_preflight,
)
from nis2_harness.registry import load_actions
from tests.test_reconciliation_preflight import _action, _change_proposal


ROOT = Path(__file__).resolve().parents[1]


class ReconciliationPostcheckTests(unittest.TestCase):
    def test_no_change_required_is_verified_without_evidence_acceptance(self) -> None:
        preflight = build_reconciliation_application_preflight(
            _change_proposal(),
            [_action()],
        )
        output = verify_reconciliation_application(preflight, [_action()])
        self.assertEqual(
            "REGISTRY_APPLICATION_VERIFIED_EVIDENCE_UNCHANGED",
            output["status"],
        )
        record = output["records"][0]
        self.assertEqual("NO_REGISTRY_CHANGE_REQUIRED", record["application_status"])
        self.assertEqual(
            "PENDING_SEPARATE_HUMAN_REVIEW",
            record["evidence_review_status"],
        )
        self.assertFalse(record["formal_effect"])

    def test_unapplied_status_change_remains_pending(self) -> None:
        preflight = build_reconciliation_application_preflight(
            _change_proposal(outcome="NOT_STARTED"),
            [_action()],
        )
        output = verify_reconciliation_application(preflight, [_action()])
        self.assertEqual("PENDING_MANUAL_APPLICATION", output["status"])
        self.assertEqual(1, output["summary"]["pending_change_count"])

    def test_expected_manual_status_change_is_verified(self) -> None:
        preflight = build_reconciliation_application_preflight(
            _change_proposal(outcome="NOT_STARTED"),
            [_action()],
        )
        updated = replace(_action(), status="NEW")
        output = verify_reconciliation_application(preflight, [updated])
        self.assertEqual(1, output["summary"]["verified_change_count"])
        self.assertEqual(
            "MANUAL_REGISTRY_CHANGE_VERIFIED",
            output["records"][0]["application_status"],
        )

    def test_unexpected_registry_change_is_rejected(self) -> None:
        preflight = build_reconciliation_application_preflight(
            _change_proposal(outcome="NOT_STARTED"),
            [_action()],
        )
        unexpected = replace(_action(), status="BLOCKED")
        with self.assertRaisesRegex(ValueError, "sem a preflight előtti"):
            verify_reconciliation_application(preflight, [unexpected])

    def test_change_to_done_is_rejected_even_if_hashes_are_tampered(self) -> None:
        preflight = build_reconciliation_application_preflight(
            _change_proposal(outcome="NOT_STARTED"),
            [_action()],
        )
        preflight["checklist"][0]["fields_to_change"][0]["to"] = "DONE"
        with self.assertRaisesRegex(ValueError, "Tiltott vagy hibás"):
            verify_reconciliation_application(preflight, [_action()])

    def test_tampered_preflight_summary_is_rejected(self) -> None:
        preflight = build_reconciliation_application_preflight(
            _change_proposal(),
            [_action()],
        )
        preflight["summary"]["registry_change_count"] = 99
        with self.assertRaisesRegex(ValueError, "összesítése eltér"):
            verify_reconciliation_application(preflight, [_action()])

    def test_cli_verifies_current_no_change_record(self) -> None:
        actions = load_actions(ROOT / "data" / "actions.csv")
        action = next(item for item in actions if item.action_id == "A-001")
        review_package = _change_proposal()
        record = review_package["records"][0]
        record["registered_snapshot"] = {
            "status": action.status,
            "target_date": action.target_date,
            "owner": action.human_owner,
            "approver": action.human_approver,
        }
        record["required_gates"] = list(action.gates)
        record["proposed_update"]["status"] = action.status
        preflight = build_reconciliation_application_preflight(
            review_package,
            actions,
        )
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            preflight_path = root / "preflight.json"
            json_output = root / "verification.json"
            markdown_output = root / "verification.md"
            preflight_path.write_text(json.dumps(preflight), encoding="utf-8")
            self.assertEqual(0, main([
                "verify-reconciliation-application",
                "--actions", str(ROOT / "data" / "actions.csv"),
                "--preflight", str(preflight_path),
                "--json-output", str(json_output),
                "--markdown-output", str(markdown_output),
            ]))
            output = json.loads(json_output.read_text(encoding="utf-8"))
            self.assertEqual(0, output["summary"]["pending_change_count"])
            self.assertIn(
                "Evidenciát nem fogad el",
                render_reconciliation_application_verification(output),
            )


if __name__ == "__main__":
    unittest.main()
