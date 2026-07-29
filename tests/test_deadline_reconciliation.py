from __future__ import annotations

from datetime import date
import json
from pathlib import Path
import tempfile
import unittest

from nis2_harness.cli import main
from nis2_harness.deadline_reconciliation import (
    build_deadline_reconciliation,
    render_deadline_reconciliation_form,
    validate_deadline_reconciliation,
)
from nis2_harness.registry import Action, load_actions


ROOT = Path(__file__).resolve().parents[1]


def sample_actions() -> list[Action]:
    return [
        Action(
            action_id="A-001",
            priority="P0",
            status="NEW",
            human_owner="Pásztor András",
            human_approver="Lángi Zoltán",
            target_date="2026-07-20",
            human_gate="G1_DOMAIN_REVIEW",
        ),
        Action(
            action_id="A-002",
            priority="P1",
            status="DONE",
            human_owner="Pásztor András",
            human_approver="Lángi Zoltán",
            target_date="2026-07-10",
            human_gate="G2_SECURITY_LEGAL",
        ),
    ]


class DeadlineReconciliationTests(unittest.TestCase):
    def test_build_contains_only_nonterminal_overdue_actions(self) -> None:
        data = build_deadline_reconciliation(
            sample_actions(), date(2026, 7, 29)
        )
        self.assertEqual(1, data["record_count"])
        self.assertEqual("A-001", data["records"][0]["action_id"])
        self.assertEqual(9, data["records"][0]["days_overdue"])
        self.assertFalse(data["formal_effect"])

    def test_pending_baseline_is_valid_but_warns(self) -> None:
        actions = sample_actions()
        data = build_deadline_reconciliation(actions, date(2026, 7, 29))
        result = validate_deadline_reconciliation(data, actions)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_DEADLINE_RECON_PENDING"},
            {issue.code for issue in result.warnings},
        )

    def test_snapshot_tampering_is_rejected(self) -> None:
        actions = sample_actions()
        data = build_deadline_reconciliation(actions, date(2026, 7, 29))
        data["records"][0]["registered_target_date"] = "2026-08-01"
        result = validate_deadline_reconciliation(data, actions)
        self.assertIn(
            "E_DEADLINE_RECON_SNAPSHOT",
            {issue.code for issue in result.errors},
        )

    def test_pending_record_cannot_contain_decision_data(self) -> None:
        actions = sample_actions()
        data = build_deadline_reconciliation(actions, date(2026, 7, 29))
        data["records"][0]["reviewer"] = "Valaki"
        result = validate_deadline_reconciliation(data, actions)
        self.assertIn(
            "E_DEADLINE_RECON_PENDING_DATA",
            {issue.code for issue in result.errors},
        )

    def test_ready_for_review_requires_protected_evidence(self) -> None:
        actions = sample_actions()
        data = build_deadline_reconciliation(actions, date(2026, 7, 29))
        record = data["records"][0]
        record.update({
            "outcome": "COMPLETED_READY_FOR_REVIEW",
            "actual_progress_summary": "A feladat elkészült.",
            "reviewer": "Lángi Zoltán",
            "reviewed_at": "2026-07-29T10:00:00+02:00",
            "decision_ref": "DR-001",
        })
        result = validate_deadline_reconciliation(data, actions)
        codes = {issue.code for issue in result.errors}
        self.assertIn("E_DEADLINE_RECON_EVIDENCE_URI", codes)
        self.assertIn("E_DEADLINE_RECON_EVIDENCE_HASH", codes)

    def test_form_and_build_are_deterministic(self) -> None:
        actions = sample_actions()
        first = build_deadline_reconciliation(actions, date(2026, 7, 29))
        second = build_deadline_reconciliation(
            list(reversed(actions)), date(2026, 7, 29)
        )
        self.assertEqual(first, second)
        self.assertEqual(
            render_deadline_reconciliation_form(first),
            render_deadline_reconciliation_form(second),
        )

    def test_cli_build_and_validate_repository_register(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            json_output = Path(temp) / "register.json"
            markdown_output = Path(temp) / "form.md"
            build_exit = main([
                "build-deadline-reconciliation",
                "--actions", str(ROOT / "data" / "actions.csv"),
                "--project-dates", str(ROOT / "data" / "project_dates.json"),
                "--as-of", "2026-07-29",
                "--json-output", str(json_output),
                "--markdown-output", str(markdown_output),
            ])
            self.assertEqual(0, build_exit)
            self.assertEqual(
                17,
                json.loads(json_output.read_text(encoding="utf-8"))["record_count"],
            )
            validate_exit = main([
                "validate-deadline-reconciliation",
                "--actions", str(ROOT / "data" / "actions.csv"),
                "--register", str(json_output),
            ])
            self.assertEqual(0, validate_exit)


if __name__ == "__main__":
    unittest.main()
