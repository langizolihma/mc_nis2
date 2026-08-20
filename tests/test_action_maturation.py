from __future__ import annotations

from datetime import date
from pathlib import Path
import unittest

from nis2_harness.action_maturation import build_maturation, read_csv, render_review_markdown


ROOT = Path(__file__).resolve().parents[1]


class ActionMaturationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        _, cls.actions = read_csv(ROOT / "data" / "actions.csv")
        _, cls.catalog = read_csv(ROOT / "data" / "control_catalog.csv")

    def test_all_85_actions_receive_detailed_records(self) -> None:
        _, details = build_maturation(self.actions, self.catalog, as_of=date(2026, 8, 19))
        self.assertEqual(85, len(details))
        self.assertEqual(85, len({row["action_id"] for row in details}))
        self.assertTrue(all(row["implementation_steps"] for row in details))
        self.assertTrue(all(row["acceptance_criteria"] for row in details))

    def test_canonical_dates_are_preserved_from_d035_schedule(self) -> None:
        updated, details = build_maturation(self.actions, self.catalog, as_of=date(2026, 8, 19))
        new_actions = [row for row in updated if 43 <= int(row["action_id"][2:]) <= 127]
        original = {row["action_id"]: row["target_date"] for row in self.actions}
        self.assertTrue(all(row["target_date"] == original[row["action_id"]] for row in new_actions))
        self.assertTrue(all(row["proposed_completion_date"] for row in details))
        self.assertTrue(
            all(row["schedule_status"] == "MANAGEMENT_BASELINE_D035_PENDING_FINAL_G4" for row in details)
        )

    def test_tasks_are_control_specific_and_reviewable(self) -> None:
        updated, details = build_maturation(self.actions, self.catalog, as_of=date(2026, 8, 19))
        new_actions = [row for row in updated if 43 <= int(row["action_id"][2:]) <= 127]
        self.assertEqual(85, len({row["task"] for row in new_actions}))
        self.assertTrue(all("Részletes rekord: data/action_execution_details.csv" in row["notes"] for row in new_actions))
        self.assertTrue(all(row["human_review_status"] == "PROPOSED" for row in details))

    def test_known_roles_and_unresolved_internal_owners_are_preserved(self) -> None:
        _, details = build_maturation(self.actions, self.catalog, as_of=date(2026, 8, 19))
        by_control = {row["control_ref"]: row for row in details}
        self.assertIn("Koncz Erika", by_control["3.2"]["proposed_control_owner"])
        self.assertIn("Német Péter", by_control["12.37"]["proposed_control_owner"])
        self.assertTrue(by_control["17.49"]["proposed_control_owner"].startswith("TBD"))
        self.assertIn("Kollár Csaba", by_control["17.49"]["proposed_contributors"])

    def test_outdated_catalog_reference_is_not_used_for_control_5_4(self) -> None:
        _, details = build_maturation(self.actions, self.catalog, as_of=date(2026, 8, 19))
        audit = next(row for row in details if row["control_ref"] == "5.4")
        self.assertIn("SRC-010", audit["implementation_steps"])
        self.assertIn("elavult", audit["notes"])

    def test_local_evidence_candidates_are_only_proposals(self) -> None:
        paths = [
            Path("alapadatok/_feltöltve_/2.15_access.png"),
            Path("alapadatok/_feltöltve_/2.100_vpn.png"),
        ]
        _, details = build_maturation(
            self.actions,
            self.catalog,
            as_of=date(2026, 8, 19),
            candidate_paths=paths,
        )
        by_control = {row["control_ref"]: row for row in details}
        self.assertIn("LOCAL_CANDIDATE:", by_control["2.15"]["existing_evidence_candidates"])
        self.assertEqual("", by_control["2.108"]["existing_evidence_candidates"])

    def test_review_package_lists_all_actions_without_approval(self) -> None:
        _, details = build_maturation(self.actions, self.catalog, as_of=date(2026, 8, 19))
        rendered = render_review_markdown(details)
        self.assertIn("A-043", rendered)
        self.assertIn("A-127", rendered)
        self.assertIn("PROPOSAL", rendered)
        self.assertNotIn("CLOSED_ACCEPTED", rendered)

    def test_repeated_maturation_is_idempotent(self) -> None:
        first, _ = build_maturation(self.actions, self.catalog, as_of=date(2026, 8, 19))
        second, _ = build_maturation(first, self.catalog, as_of=date(2026, 8, 19))
        first_by_id = {row["action_id"]: row for row in first}
        second_by_id = {row["action_id"]: row for row in second}
        for number in range(43, 128):
            action_id = f"A-{number:03d}"
            self.assertEqual(
                first_by_id[action_id]["evidence_required"],
                second_by_id[action_id]["evidence_required"],
            )


if __name__ == "__main__":
    unittest.main()
