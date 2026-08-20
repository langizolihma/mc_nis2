from __future__ import annotations

from datetime import date
from pathlib import Path
import unittest

from nis2_harness.action_scheduling import (
    CALENDAR_COMPLETION_CAP,
    OPERATIONAL_COMPLETION_CAP,
    build_schedule,
    complexity_band,
    read_csv,
)


ROOT = Path(__file__).resolve().parents[1]


def sample(**changes: str) -> dict[str, str]:
    row = {
        "action_id": "A-900",
        "workstream": "Dokumentáció",
        "finding_summary": "Hiányzó nyilvántartás",
        "task": "Készítsen nyilvántartást és review naptárt.",
        "deliverable": "Jóváhagyott nyilvántartás.",
        "evidence_required": "Review rekord.",
        "notes": "",
        "purchase_trigger": "",
        "cost_band": "B0",
        "human_gate": "G1_DOMAIN_REVIEW",
        "ai_eligibility": "yes",
        "priority": "P0",
        "dependencies": "",
        "status": "NEW",
        "target_date": "",
        "deadline_basis": "management_schedule",
        "target_offset_days": "",
    }
    row.update(changes)
    return row


class ActionSchedulingTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        _, cls.actions = read_csv(ROOT / "data" / "actions.csv")

    def test_sixty_day_calendar_and_operational_caps(self) -> None:
        self.assertEqual(date(2027, 8, 1), CALENDAR_COMPLETION_CAP)
        self.assertEqual(date(2027, 7, 30), OPERATIONAL_COMPLETION_CAP)

    def test_complexity_classification(self) -> None:
        self.assertEqual("SIMPLE", complexity_band(sample()))
        self.assertEqual(
            "COMPLEX",
            complexity_band(sample(human_gate="G1_DOMAIN_REVIEW;G3_PRODUCTION_CHANGE")),
        )
        self.assertEqual(
            "PROCUREMENT_GATED",
            complexity_band(sample(cost_band="B2", human_gate="G5_PURCHASE")),
        )

    def test_resource_governance_precedes_actual_procurement(self) -> None:
        by_id = {row["action_id"]: row for row in self.actions}
        self.assertEqual("MODERATE", complexity_band(by_id["A-010"]))
        self.assertEqual("PROCUREMENT_GATED", complexity_band(by_id["A-016"]))

    def test_all_registry_actions_receive_a_date(self) -> None:
        updated, schedule = build_schedule(self.actions)
        self.assertEqual(127, len(updated))
        self.assertEqual(127, len(schedule))
        self.assertTrue(all(row["target_date"] for row in updated))
        self.assertTrue(
            all(date.fromisoformat(row["calculated_target_date"]) <= CALENDAR_COMPLETION_CAP for row in schedule)
        )

    def test_done_date_and_statutory_submission_are_preserved(self) -> None:
        _, schedule = build_schedule(self.actions)
        by_id = {row["action_id"]: row for row in schedule}
        self.assertEqual("2026-06-27", by_id["A-002"]["calculated_target_date"])
        self.assertEqual("2026-09-24", by_id["A-007"]["calculated_target_date"])

    def test_simple_precedes_complex_and_procurement(self) -> None:
        actions = [
            sample(action_id="A-901"),
            sample(action_id="A-902", human_gate="G3_PRODUCTION_CHANGE", task="Konfiguráció bevezetése"),
            sample(action_id="A-903", cost_band="B2", human_gate="G5_PURCHASE"),
        ]
        _, schedule = build_schedule(actions)
        dates = {row["action_id"]: row["calculated_target_date"] for row in schedule}
        self.assertLess(dates["A-901"], dates["A-902"])
        self.assertLess(dates["A-902"], dates["A-903"])

    def test_dependency_is_not_scheduled_after_dependant(self) -> None:
        _, schedule = build_schedule(self.actions)
        by_id = {row["action_id"]: row for row in schedule}
        for row in schedule:
            for dependency in row["dependency_ids"].split(";"):
                if not dependency or dependency not in by_id:
                    continue
                self.assertLessEqual(
                    by_id[dependency]["calculated_target_date"],
                    row["calculated_target_date"],
                    f"{dependency} -> {row['action_id']}",
                )

    def test_schedule_notes_are_idempotent(self) -> None:
        first, _ = build_schedule(self.actions)
        second, _ = build_schedule(first)
        self.assertEqual(
            [row["notes"] for row in first],
            [row["notes"] for row in second],
        )
        self.assertTrue(
            all(row["notes"].count("D-035 ütemezés:") == 1 for row in second)
        )


if __name__ == "__main__":
    unittest.main()
