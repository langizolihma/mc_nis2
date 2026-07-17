from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.exchange_dependency import validate_exchange_dependency_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "exchange_dependency_plan.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class ExchangeDependencyValidationTests(unittest.TestCase):
    def test_proposal_has_expected_warnings(self) -> None:
        result = validate_exchange_dependency_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_EXCHANGE_SCOPE_PENDING", "W_EXCHANGE_INVENTORY_PENDING", "W_EXCHANGE_TEST_PENDING", "W_EXCHANGE_REVIEW_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_source_confidence_cannot_be_promoted(self) -> None:
        value = plan(); value["source_positions"][1]["source_confidence"] = "audited"
        self.assertIn("E_EXCHANGE_SOURCE_POSITION", {i.code for i in validate_exchange_dependency_plan(value, "x").errors})

    def test_all_discovery_sources_are_required(self) -> None:
        value = plan(); value["discovery_plan"]["required_sources"] = value["discovery_plan"]["required_sources"][:-1]
        self.assertIn("E_EXCHANGE_DISCOVERY_COVERAGE", {i.code for i in validate_exchange_dependency_plan(value, "x").errors})

    def test_production_query_is_forbidden(self) -> None:
        value = plan(); value["safety"]["production_query_allowed"] = True
        self.assertIn("E_EXCHANGE_UNSAFE", {i.code for i in validate_exchange_dependency_plan(value, "x").errors})

    def test_g3_is_required_for_execution(self) -> None:
        value = plan(); value["safety"]["required_gates"] = ["G1_DOMAIN_REVIEW"]
        self.assertIn("E_EXCHANGE_GATES", {i.code for i in validate_exchange_dependency_plan(value, "x").errors})

    def test_pending_dependency_cannot_claim_system_fact(self) -> None:
        value = plan(); value["dependency_records"] = [self._pending_dependency()]
        value["dependency_records"][0]["protected_system_ref"] = "claimed"
        self.assertIn("E_EXCHANGE_FALSE_CLAIM", {i.code for i in validate_exchange_dependency_plan(value, "x").errors})

    def test_all_test_scenarios_are_required(self) -> None:
        value = plan(); value["test_scenarios"] = value["test_scenarios"][:-1]
        self.assertIn("E_EXCHANGE_SCENARIO_COVERAGE", {i.code for i in validate_exchange_dependency_plan(value, "x").errors})

    def test_unexecuted_test_cannot_claim_result(self) -> None:
        value = plan(); value["test_scenarios"][0]["result"] = "PASS"
        self.assertIn("E_EXCHANGE_FALSE_TEST", {i.code for i in validate_exchange_dependency_plan(value, "x").errors})

    def test_rollback_requirements_cannot_be_reduced(self) -> None:
        value = plan(); value["rollback_requirements"] = value["rollback_requirements"][:-1]
        self.assertIn("E_EXCHANGE_ROLLBACK", {i.code for i in validate_exchange_dependency_plan(value, "x").errors})

    def test_migration_cannot_be_false_approved(self) -> None:
        value = plan(); value["migration_decision"]["approver"] = "claimed"
        self.assertIn("E_EXCHANGE_FALSE_DECISION", {i.code for i in validate_exchange_dependency_plan(value, "x").errors})

    @staticmethod
    def _pending_dependency() -> dict:
        return {
            "dependency_id": "DEP-001", "status": "PENDING_HUMAN", "dependency_type": "", "protected_system_ref": "", "eir_refs": [],
            "business_owner": "", "technical_owner": "", "smtp_role": "", "authentication_mode": "", "tls_requirement": "",
            "source_endpoint_ref": "", "target_domain_ref": "", "volume_class": "", "criticality": "", "continuity_requirement": "",
            "evidence_refs": [], "reviewer": "", "reviewed_at": "",
        }


if __name__ == "__main__":
    unittest.main()
