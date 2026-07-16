from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.physical_security import validate_physical_security_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "physical_security_walkthrough.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class PhysicalSecurityValidationTests(unittest.TestCase):
    def test_unperformed_proposal_has_expected_warnings(self) -> None:
        result = validate_physical_security_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_PHYSICAL_SITE_PENDING", "W_PHYSICAL_WALKTHROUGH_PENDING", "W_PHYSICAL_REVIEW_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_all_nine_controls_are_required(self) -> None:
        value = plan()
        value["control_checks"] = value["control_checks"][:-1]
        result = validate_physical_security_plan(value, "plan.json")
        self.assertIn("E_PHYSICAL_CONTROL_COVERAGE", {item.code for item in result.errors})

    def test_unassessed_control_cannot_claim_observation(self) -> None:
        value = plan()
        value["control_checks"][0]["observation"] = "Kitalált megfigyelés"
        result = validate_physical_security_plan(value, "plan.json")
        self.assertIn("E_PHYSICAL_UNOBSERVED_FACT", {item.code for item in result.errors})

    def test_assessed_control_requires_evidence_and_observer(self) -> None:
        value = plan()
        value["control_checks"][0]["status"] = "GAP"
        result = validate_physical_security_plan(value, "plan.json")
        self.assertIn("E_PHYSICAL_OBSERVATION_EVIDENCE", {item.code for item in result.errors})

    def test_unperformed_walkthrough_cannot_have_participants(self) -> None:
        value = plan()
        value["walkthrough"]["participants"] = ["Tesztelő"]
        result = validate_physical_security_plan(value, "plan.json")
        self.assertIn("E_PHYSICAL_FALSE_EXECUTION", {item.code for item in result.errors})

    def test_walkthrough_requires_g2(self) -> None:
        value = plan()
        value["walkthrough"]["required_gate"] = "G1_DOMAIN_REVIEW"
        result = validate_physical_security_plan(value, "plan.json")
        self.assertIn("E_PHYSICAL_GATE", {item.code for item in result.errors})

    def test_photo_rules_cannot_be_removed(self) -> None:
        value = plan()
        value["photo_rules"].remove("protected_store_only")
        result = validate_physical_security_plan(value, "plan.json")
        self.assertIn("E_PHYSICAL_PHOTO_RULE", {item.code for item in result.errors})

    def test_gap_requires_traceable_human_record(self) -> None:
        value = plan()
        value["gap_register"] = [{"gap_id": "PG-001"}]
        result = validate_physical_security_plan(value, "plan.json")
        self.assertIn("E_PHYSICAL_GAP_REQUIRED", {item.code for item in result.errors})

    def test_approved_plan_requires_human_metadata(self) -> None:
        value = plan()
        value["status"] = "APPROVED"
        result = validate_physical_security_plan(value, "plan.json")
        self.assertIn("E_PHYSICAL_APPROVAL", {item.code for item in result.errors})


if __name__ == "__main__":
    unittest.main()
