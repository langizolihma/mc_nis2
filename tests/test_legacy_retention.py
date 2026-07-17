from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.legacy_retention import validate_legacy_retention_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "legacy_retention_plan.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class LegacyRetentionValidationTests(unittest.TestCase):
    def test_proposal_has_expected_warnings(self) -> None:
        result = validate_legacy_retention_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_LEGACY_LEGAL_PENDING", "W_LEGACY_INVENTORY_PENDING", "W_LEGACY_TEST_PENDING", "W_LEGACY_REVIEW_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_all_families_are_required(self) -> None:
        value = plan(); value["requirement_families"] = ["7", "13"]
        self.assertIn("E_LEGACY_FAMILY", {i.code for i in validate_legacy_retention_plan(value, "x").errors})

    def test_source_must_remain_unverified(self) -> None:
        value = plan(); value["source_position"]["source_confidence"] = "audited"
        self.assertIn("E_LEGACY_SOURCE", {i.code for i in validate_legacy_retention_plan(value, "x").errors})

    def test_g2_and_g3_are_required(self) -> None:
        value = plan(); value["safety"]["required_gates"] = ["G2_SECURITY_LEGAL"]
        self.assertIn("E_LEGACY_GATES", {i.code for i in validate_legacy_retention_plan(value, "x").errors})

    def test_export_is_forbidden_in_proposal(self) -> None:
        value = plan(); value["safety"]["export_allowed"] = True
        self.assertIn("E_LEGACY_UNSAFE", {i.code for i in validate_legacy_retention_plan(value, "x").errors})

    def test_pending_legal_decision_cannot_claim_basis(self) -> None:
        value = plan(); value["legal_retention_decision"]["legal_basis_refs"] = ["claimed"]
        self.assertIn("E_LEGACY_FALSE_LEGAL", {i.code for i in validate_legacy_retention_plan(value, "x").errors})

    def test_pending_inventory_cannot_claim_data(self) -> None:
        value = plan(); value["data_inventory"] = [self._pending_record()]
        value["data_inventory"][0]["data_category"] = "claimed"
        self.assertIn("E_LEGACY_FALSE_CLAIM", {i.code for i in validate_legacy_retention_plan(value, "x").errors})

    def test_export_evidence_cannot_be_reduced(self) -> None:
        value = plan(); value["export_plan"]["required_outputs"] = value["export_plan"]["required_outputs"][:-1]
        self.assertIn("E_LEGACY_EXPORT_OUTPUTS", {i.code for i in validate_legacy_retention_plan(value, "x").errors})

    def test_unexecuted_test_cannot_claim_result(self) -> None:
        value = plan(); value["restore_read_test"]["result"] = "PASS"
        self.assertIn("E_LEGACY_FALSE_TEST", {i.code for i in validate_legacy_retention_plan(value, "x").errors})

    def test_migration_cannot_be_false_approved(self) -> None:
        value = plan(); value["migration_decision"]["approver"] = "claimed"
        self.assertIn("E_LEGACY_FALSE_DECISION", {i.code for i in validate_legacy_retention_plan(value, "x").errors})

    @staticmethod
    def _pending_record() -> dict:
        return {
            "data_set_id": "DATA-001", "status": "PENDING_HUMAN", "protected_application_ref": "", "data_category": "", "eir_refs": [],
            "business_owner": "", "data_owner": "", "sensitivity": "", "legal_basis_ref": "", "retention_rule_ref": "",
            "legal_hold_status": "", "source_location_ref": "", "volume_class": "", "export_format": "", "completeness_method": "",
            "proposed_disposition": "", "evidence_refs": [], "reviewer": "", "reviewed_at": "",
        }


if __name__ == "__main__":
    unittest.main()
