import copy
import json
import unittest
from pathlib import Path

from nis2_harness.work_packages import validate_work_packages


ROOT = Path(__file__).resolve().parents[1]


class WorkPackageTests(unittest.TestCase):
    def setUp(self):
        self.data = json.loads((ROOT / "data" / "technical_work_packages.json").read_text(encoding="utf-8"))

    def test_baseline_has_no_hard_error(self):
        result = validate_work_packages(self.data, "technical.json")
        self.assertEqual((), result.errors)
        self.assertEqual(1, len(result.warnings))

    def test_expected_actions_are_covered(self):
        self.assertEqual({"A-023", "A-024", "A-028", "A-033", "A-034"}, {p["action_id"] for p in self.data["packages"]})

    def test_operational_registry_is_valid_and_complete(self):
        data = json.loads((ROOT / "data" / "operational_control_work_packages.json").read_text(encoding="utf-8"))
        result = validate_work_packages(data, "operational.json")
        self.assertEqual((), result.errors)
        self.assertEqual(
            {"A-009", "A-010", "A-013", "A-014", "A-015", "A-016"},
            {p["action_id"] for p in data["packages"]},
        )

    def test_governance_registry_is_valid_and_complete(self):
        data = json.loads((ROOT / "data" / "governance_work_packages.json").read_text(encoding="utf-8"))
        result = validate_work_packages(data, "governance.json")
        self.assertEqual((), result.errors)
        self.assertEqual(
            {"A-001", "A-002", "A-007", "A-035", "A-036"},
            {p["action_id"] for p in data["packages"]},
        )

    def test_policy_registry_is_valid_and_complete(self):
        data = json.loads((ROOT / "data" / "policy_baseline_work_packages.json").read_text(encoding="utf-8"))
        result = validate_work_packages(data, "policies.json")
        self.assertEqual((), result.errors)
        self.assertEqual(
            {"A-037", "A-038", "A-039", "A-040", "A-041"},
            {p["action_id"] for p in data["packages"]},
        )

    def test_duplicate_action_is_rejected(self):
        changed = copy.deepcopy(self.data)
        changed["packages"].append(copy.deepcopy(changed["packages"][0]))
        self.assertTrue(any(i.code == "E_WP_DUPLICATE" for i in validate_work_packages(changed, "x").errors))

    def test_execution_cannot_be_enabled(self):
        changed = copy.deepcopy(self.data)
        changed["packages"][0]["safety"]["execution_allowed"] = True
        self.assertTrue(any(i.code == "E_WP_EXECUTION" for i in validate_work_packages(changed, "x").errors))

    def test_false_review_is_rejected(self):
        changed = copy.deepcopy(self.data)
        changed["packages"][0]["review"]["reviewer"] = "Valaki"
        self.assertTrue(any(i.code == "E_WP_FALSE_REVIEW" for i in validate_work_packages(changed, "x").errors))


if __name__ == "__main__":
    unittest.main()
