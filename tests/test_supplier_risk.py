from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.supplier_risk import validate_supplier_risk_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "supplier_risk_plan.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class SupplierRiskValidationTests(unittest.TestCase):
    def test_proposal_has_expected_warnings(self) -> None:
        result = validate_supplier_risk_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_SUPPLIER_INVENTORY_PENDING", "W_SUPPLIER_ASSESSMENT_PENDING", "W_SUPPLIER_CALENDAR_PENDING", "W_SUPPLIER_REVIEW_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_both_controls_are_required(self) -> None:
        value = plan(); value["control_refs"] = ["19.1"]
        self.assertIn("E_SUPPLIER_CONTROL_COVERAGE", {i.code for i in validate_supplier_risk_plan(value, "x").errors})

    def test_both_findings_are_required(self) -> None:
        value = plan(); value["finding_refs"] = ["F-0072"]
        self.assertIn("E_SUPPLIER_FINDING_COVERAGE", {i.code for i in validate_supplier_risk_plan(value, "x").errors})

    def test_all_dimensions_are_required(self) -> None:
        value = plan(); value["criticality_model"]["dimensions"] = value["criticality_model"]["dimensions"][:-1]
        self.assertIn("E_SUPPLIER_DIMENSIONS", {i.code for i in validate_supplier_risk_plan(value, "x").errors})

    def test_all_contract_controls_are_required(self) -> None:
        value = plan(); value["contract_control_catalog"] = value["contract_control_catalog"][:-1]
        self.assertIn("E_SUPPLIER_CATALOG_COVERAGE", {i.code for i in validate_supplier_risk_plan(value, "x").errors})

    def test_supplier_contact_is_forbidden(self) -> None:
        value = plan(); value["safety"]["supplier_contact_allowed"] = True
        self.assertIn("E_SUPPLIER_UNSAFE", {i.code for i in validate_supplier_risk_plan(value, "x").errors})

    def test_automatic_risk_acceptance_is_forbidden(self) -> None:
        value = plan(); value["safety"]["automatic_risk_acceptance_allowed"] = True
        self.assertIn("E_SUPPLIER_UNSAFE", {i.code for i in validate_supplier_risk_plan(value, "x").errors})

    def test_pending_supplier_cannot_claim_facts(self) -> None:
        value = plan(); value["suppliers"] = [self._pending_supplier()]
        value["suppliers"][0]["service_scope"] = "claimed"
        self.assertIn("E_SUPPLIER_FALSE_CLAIM", {i.code for i in validate_supplier_risk_plan(value, "x").errors})

    def test_reviewed_supplier_requires_all_control_assessments(self) -> None:
        value = plan(); value["suppliers"] = [self._reviewed_supplier()]
        value["suppliers"][0]["control_assessments"] = value["suppliers"][0]["control_assessments"][:-1]
        self.assertIn("E_SUPPLIER_ASSESSMENT_COVERAGE", {i.code for i in validate_supplier_risk_plan(value, "x").errors})

    def test_criticality_must_match_score(self) -> None:
        value = plan(); value["suppliers"] = [self._reviewed_supplier()]
        value["suppliers"][0]["criticality"] = "LOW"
        self.assertIn("E_SUPPLIER_CRITICALITY", {i.code for i in validate_supplier_risk_plan(value, "x").errors})

    def test_calendar_must_reference_known_supplier(self) -> None:
        value = plan(); value["review_calendar"] = [{
            "review_id": "REV-001", "supplier_id": "SUP-404", "due_at": "2026-10-01T10:00:00+02:00",
            "owner": "Owner", "status": "HUMAN_APPROVED", "decision_ref": "DEC-001",
        }]
        self.assertIn("E_SUPPLIER_CALENDAR_VALUE", {i.code for i in validate_supplier_risk_plan(value, "x").errors})

    @staticmethod
    def _pending_supplier() -> dict:
        return {
            "supplier_id": "SUP-001", "status": "PENDING_HUMAN", "protected_supplier_ref": "", "service_scope": "", "eir_refs": [],
            "business_owner": "", "contract_owner": "", "dimension_scores": {}, "criticality_score": None, "criticality": "", "contract_ref": "",
            "control_assessments": [], "questionnaire_ref": "", "risk_decision_ref": "", "next_review_at": "", "evidence_refs": [], "reviewer": "", "reviewed_at": "",
        }

    @staticmethod
    def _reviewed_supplier() -> dict:
        controls = json.loads(PLAN_PATH.read_text(encoding="utf-8"))["contract_control_catalog"]
        return {
            "supplier_id": "SUP-001", "status": "HUMAN_REVIEWED", "protected_supplier_ref": "protected://supplier/SUP-001",
            "service_scope": "reviewed service", "eir_refs": ["EIR-001"], "business_owner": "Owner", "contract_owner": "Contract Owner",
            "dimension_scores": {"SERVICE_CRITICALITY": 3, "EIR_DEPENDENCY": 2, "DATA_ACCESS": 2, "PRIVILEGED_ACCESS": 1, "REPLACEABILITY": 2, "SUBCONTRACTOR_DEPENDENCY": 1},
            "criticality_score": 11, "criticality": "HIGH", "contract_ref": "protected://contract/CTR-001",
            "control_assessments": [{"control_id": item["control_id"], "status": "PRESENT", "evidence_or_gap": "protected evidence"} for item in controls],
            "questionnaire_ref": "protected://questionnaire/Q-001", "risk_decision_ref": "", "next_review_at": "2026-10-01T10:00:00+02:00",
            "evidence_refs": ["protected://evidence/E-001"], "reviewer": "Reviewer", "reviewed_at": "2026-07-17T10:00:00+02:00",
        }


if __name__ == "__main__":
    unittest.main()
