from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.license_entitlement import validate_license_entitlement_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "license_entitlement_plan.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class LicenseEntitlementValidationTests(unittest.TestCase):
    def test_empty_proposal_has_expected_warnings(self) -> None:
        result = validate_license_entitlement_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_LICENSE_INPUT_PENDING", "W_LICENSE_REVIEW_PENDING", "W_LICENSE_DECISION_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_all_six_categories_are_required(self) -> None:
        value = plan()
        value["records"] = value["records"][:-1]
        self.assertIn("E_LICENSE_COVERAGE", {i.code for i in validate_license_entitlement_plan(value, "x").errors})

    def test_pending_record_cannot_claim_entitlement(self) -> None:
        value = plan()
        value["records"][0]["entitlement_position"] = "ADEQUATE"
        self.assertIn("E_LICENSE_UNSUPPORTED_CLAIM", {i.code for i in validate_license_entitlement_plan(value, "x").errors})

    def test_pending_record_cannot_claim_support(self) -> None:
        value = plan()
        value["records"][0]["support_status"] = "SUPPORTED"
        self.assertIn("E_LICENSE_UNSUPPORTED_CLAIM", {i.code for i in validate_license_entitlement_plan(value, "x").errors})

    def test_cost_policy_requires_all_seven_inputs(self) -> None:
        value = plan()
        value["cost_gate_policy"]["pilot_required"] = False
        self.assertIn("E_LICENSE_COST_POLICY", {i.code for i in validate_license_entitlement_plan(value, "x").errors})

    def test_purchase_execution_is_forbidden(self) -> None:
        value = plan()
        value["cost_gate_policy"]["purchase_execution_allowed"] = True
        self.assertIn("E_LICENSE_PURCHASE_FORBIDDEN", {i.code for i in validate_license_entitlement_plan(value, "x").errors})

    def test_paid_proposal_requires_g5(self) -> None:
        value = plan()
        value["cost_decisions"] = [paid_decision()]
        value["cost_decisions"][0]["required_gate"] = "G1_DOMAIN_REVIEW"
        self.assertIn("E_LICENSE_DECISION_G5", {i.code for i in validate_license_entitlement_plan(value, "x").errors})

    def test_paid_proposal_requires_cost_inputs(self) -> None:
        value = plan()
        value["cost_decisions"] = [paid_decision()]
        value["cost_decisions"][0]["pilot"] = ""
        self.assertIn("E_LICENSE_COST_INPUTS", {i.code for i in validate_license_entitlement_plan(value, "x").errors})

    def test_blocked_proposal_cannot_contain_false_g5_decision(self) -> None:
        value = plan()
        value["cost_decisions"] = [paid_decision()]
        value["cost_decisions"][0]["human_decision"]["decider"] = "Valaki"
        self.assertIn("E_LICENSE_FALSE_G5", {i.code for i in validate_license_entitlement_plan(value, "x").errors})

    def test_human_reviewed_record_requires_evidence(self) -> None:
        value = plan()
        record = value["records"][0]
        record.update({"scope_status": "HUMAN_REVIEWED", "publisher": "Vendor", "product_or_service": "Product", "deployment_scope": "Protected scope", "usage_metric": "count", "entitlement_position": "ADEQUATE", "support_status": "SUPPORTED", "support_lifecycle_ref": "official:ref"})
        self.assertIn("E_LICENSE_REVIEW_EVIDENCE", {i.code for i in validate_license_entitlement_plan(value, "x").errors})


def paid_decision() -> dict:
    return {
        "decision_id": "COST-001", "category": "WINDOWS_SERVER", "cost_band": "B1",
        "status": "BLOCKED_BY_COST_GATE", "existing_entitlement": "reviewed",
        "existing_capacity": "reviewed", "b0_alternative": "assessed", "pilot": "defined",
        "acceptance_criterion": "measurable", "purchase_trigger": "documented",
        "deferral_risk": "documented", "required_gate": "G5_PURCHASE", "evidence_refs": [],
        "human_decision": {"decider": "", "decided_at": "", "decision_ref": ""},
    }


if __name__ == "__main__":
    unittest.main()
