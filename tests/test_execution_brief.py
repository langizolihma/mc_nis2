from __future__ import annotations

from datetime import date
from pathlib import Path
import tempfile
import unittest

from nis2_harness.cli import main
from nis2_harness.execution_brief import (
    build_execution_items,
    deadline_bucket,
    render_daily_execution_brief,
)
from nis2_harness.registry import Action


ROOT = Path(__file__).resolve().parents[1]


def action(**changes: str) -> Action:
    values = {
        "action_id": "A-TEST",
        "workstream": "Teszt",
        "task": "Emberi feladat végrehajtása.",
        "deliverable": "Ellenőrzött eredmény.",
        "evidence_required": "Védett URI, SHA-256 és reviewer.",
        "priority": "P1",
        "status": "NEW",
        "human_owner": "Pásztor András",
        "human_approver": "Lángi Zoltán",
        "target_date": "2026-07-29",
        "human_gate": "G1_DOMAIN_REVIEW",
        "source_ref": "TEST",
    }
    values.update(changes)
    return Action(**values)


class ExecutionBriefTests(unittest.TestCase):
    def test_deadline_buckets_are_boundary_safe(self) -> None:
        as_of = date(2026, 7, 29)
        self.assertEqual(("OVERDUE", -1), deadline_bucket("2026-07-28", as_of))
        self.assertEqual(("DUE_7_DAYS", 0), deadline_bucket("2026-07-29", as_of))
        self.assertEqual(("DUE_7_DAYS", 7), deadline_bucket("2026-08-05", as_of))
        self.assertEqual(("DUE_30_DAYS", 8), deadline_bucket("2026-08-06", as_of))
        self.assertEqual(("LATER", 31), deadline_bucket("2026-08-29", as_of))
        self.assertEqual(("DATE_REQUIRED", None), deadline_bucket("", as_of))
        self.assertEqual(("TERMINAL", None), deadline_bucket("", as_of, "DONE"))

    def test_queue_is_stable_and_marks_pending_dependencies(self) -> None:
        actions = [
            action(action_id="A-002", target_date="", dependencies="A-001"),
            action(action_id="A-001", priority="P0", target_date="2026-07-28"),
        ]
        first = build_execution_items(actions, date(2026, 7, 29))
        second = build_execution_items(list(reversed(actions)), date(2026, 7, 29))
        self.assertEqual(first, second)
        self.assertEqual("A-001", first[0]["action_id"])
        self.assertEqual(["A-001"], first[1]["pending_dependencies"])

    def test_render_is_proposal_only_and_deterministic(self) -> None:
        actions = [action()]
        first = render_daily_execution_brief(actions, date(2026, 7, 29))
        second = render_daily_execution_brief(actions, date(2026, 7, 29))
        self.assertEqual(first, second)
        self.assertIn("Státusz: `PROPOSAL`", first)
        self.assertIn("feladatlezárás", first)
        self.assertIn("Védett URI, SHA-256 és reviewer.", first)

    def test_cli_writes_current_repository_brief(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "brief.md"
            exit_code = main([
                "daily-execution-brief",
                "--actions", str(ROOT / "data" / "actions.csv"),
                "--project-dates", str(ROOT / "data" / "project_dates.json"),
                "--as-of", "2026-07-29",
                "--output", str(output),
            ])
            self.assertEqual(0, exit_code)
            text = output.read_text(encoding="utf-8")
            self.assertIn("Állapot dátuma: `2026-07-29`", text)
            self.assertIn("A-001", text)


if __name__ == "__main__":
    unittest.main()
