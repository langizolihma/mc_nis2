from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.rds_separation import validate_rds_separation_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "rds_separation_plan.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class RdsSeparationValidationTests(unittest.TestCase):
    def test_proposal_has_expected_warnings(self) -> None:
        result = validate_rds_separation_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_RDS_INPUT_PENDING", "W_RDS_TEST_PENDING", "W_RDS_DECISION_PENDING", "W_RDS_REVIEW_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_source_must_remain_unverified(self) -> None:
        value = plan(); value["source_position"]["source_confidence"] = "audited"
        self.assertIn("E_RDS_SOURCE", {i.code for i in validate_rds_separation_plan(value, "x").errors})

    def test_all_domains_are_required(self) -> None:
        value = plan(); value["assessment_domains"] = value["assessment_domains"][:-1]
        self.assertIn("E_RDS_DOMAIN_COVERAGE", {i.code for i in validate_rds_separation_plan(value, "x").errors})

    def test_pending_domain_cannot_claim_finding(self) -> None:
        value = plan(); value["assessment_domains"][0]["finding"] = "claimed"
        self.assertIn("E_RDS_FALSE_DOMAIN", {i.code for i in validate_rds_separation_plan(value, "x").errors})

    def test_consolidation_is_forbidden_in_proposal(self) -> None:
        value = plan(); value["safety"]["consolidation_allowed"] = True
        self.assertIn("E_RDS_UNSAFE", {i.code for i in validate_rds_separation_plan(value, "x").errors})

    def test_g3_and_g5_are_required(self) -> None:
        value = plan(); value["safety"]["required_gates"] = ["G1_DOMAIN_REVIEW"]
        self.assertIn("E_RDS_GATES", {i.code for i in validate_rds_separation_plan(value, "x").errors})

    def test_all_tests_are_required(self) -> None:
        value = plan(); value["test_scenarios"] = value["test_scenarios"][:-1]
        self.assertIn("E_RDS_TEST_COVERAGE", {i.code for i in validate_rds_separation_plan(value, "x").errors})

    def test_unexecuted_test_cannot_claim_result(self) -> None:
        value = plan(); value["test_scenarios"][0]["result"] = "PASS"
        self.assertIn("E_RDS_FALSE_TEST", {i.code for i in validate_rds_separation_plan(value, "x").errors})

    def test_cost_inputs_cannot_be_reduced(self) -> None:
        value = plan(); value["cost_gate"]["required_inputs"] = value["cost_gate"]["required_inputs"][:-1]
        self.assertIn("E_RDS_COST_GATE", {i.code for i in validate_rds_separation_plan(value, "x").errors})

    def test_pending_decision_cannot_claim_approval(self) -> None:
        value = plan(); value["consolidation_decision"]["approver"] = "claimed"
        self.assertIn("E_RDS_FALSE_DECISION", {i.code for i in validate_rds_separation_plan(value, "x").errors})


if __name__ == "__main__":
    unittest.main()
