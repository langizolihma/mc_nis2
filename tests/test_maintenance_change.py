from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.maintenance_change import validate_maintenance_change_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "maintenance_change_plan.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class MaintenanceChangeValidationTests(unittest.TestCase):
    def test_proposal_has_expected_warnings(self) -> None:
        result = validate_maintenance_change_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_MAINT_SCOPE_PENDING", "W_MAINT_CALENDAR_PENDING", "W_MAINT_EXECUTION_PENDING", "W_MAINT_REVIEW_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_all_four_workstreams_are_required(self) -> None:
        value = plan(); value["workstreams"] = value["workstreams"][:-1]
        self.assertIn("E_MAINT_WORKSTREAM_COVERAGE", {i.code for i in validate_maintenance_change_plan(value, "x").errors})

    def test_workflow_stage_order_is_fixed(self) -> None:
        value = plan(); value["workflow_stages"].reverse()
        self.assertIn("E_MAINT_STAGE_ORDER", {i.code for i in validate_maintenance_change_plan(value, "x").errors})

    def test_execution_is_forbidden_in_proposal(self) -> None:
        value = plan(); value["safety"]["execution_allowed"] = True
        self.assertIn("E_MAINT_UNSAFE", {i.code for i in validate_maintenance_change_plan(value, "x").errors})

    def test_g3_is_required(self) -> None:
        value = plan(); value["safety"]["required_gates"] = ["G1_DOMAIN_REVIEW"]
        self.assertIn("E_MAINT_GATES", {i.code for i in validate_maintenance_change_plan(value, "x").errors})

    def test_pending_workstream_cannot_claim_scope(self) -> None:
        value = plan(); value["workstreams"][0]["scope_refs"] = ["EIR-001"]
        self.assertIn("E_MAINT_FALSE_WORKSTREAM_REVIEW", {i.code for i in validate_maintenance_change_plan(value, "x").errors})

    def test_proposed_change_cannot_claim_approval(self) -> None:
        value = plan(); value["change_records"] = [{
            "change_id": "CHG-001", "workstream_id": "CHANGE_MANAGEMENT", "scope_ref": "EIR-001", "status": "PROPOSED",
            "risk_and_impact": "documented risk", "owner_approval_ref": "claimed", "g3_approval_ref": "", "backup_proof_ref": "", "rollback_plan_ref": "",
            "scheduled_window_ref": "", "pre_validation_ref": "", "post_validation_ref": "", "evidence_uri": "", "sha256": "", "reviewer": "", "reviewed_at": ""
        }]
        self.assertIn("E_MAINT_FALSE_EXECUTION", {i.code for i in validate_maintenance_change_plan(value, "x").errors})

    def test_change_workstream_must_be_known(self) -> None:
        value = plan(); value["change_records"] = [{
            "change_id": "CHG-001", "workstream_id": "UNKNOWN", "scope_ref": "EIR-001", "status": "PROPOSED",
            "risk_and_impact": "documented risk", "owner_approval_ref": "", "g3_approval_ref": "", "backup_proof_ref": "", "rollback_plan_ref": "",
            "scheduled_window_ref": "", "pre_validation_ref": "", "post_validation_ref": "", "evidence_uri": "", "sha256": "", "reviewer": "", "reviewed_at": ""
        }]
        self.assertIn("E_MAINT_CHANGE_WORKSTREAM", {i.code for i in validate_maintenance_change_plan(value, "x").errors})

    def test_executed_change_requires_complete_evidence(self) -> None:
        value = plan(); value["change_records"] = [{
            "change_id": "CHG-001", "workstream_id": "PATCH_MANAGEMENT", "scope_ref": "EIR-001", "status": "EXECUTED_PENDING_REVIEW",
            "risk_and_impact": "risk", "owner_approval_ref": "approval", "g3_approval_ref": "g3", "backup_proof_ref": "backup", "rollback_plan_ref": "rollback",
            "scheduled_window_ref": "window", "pre_validation_ref": "pre", "post_validation_ref": "post", "evidence_uri": "protected://change", "sha256": "bad", "reviewer": "Reviewer", "reviewed_at": "2026-07-17T10:00:00+02:00"
        }]
        self.assertIn("E_MAINT_EXECUTION_EVIDENCE", {i.code for i in validate_maintenance_change_plan(value, "x").errors})

    def test_open_ended_exception_is_forbidden(self) -> None:
        value = plan(); value["exception_policy"]["open_ended_exception_allowed"] = True
        self.assertIn("E_MAINT_EXCEPTION_UNSAFE", {i.code for i in validate_maintenance_change_plan(value, "x").errors})

    def test_required_evidence_cannot_be_reduced(self) -> None:
        value = plan(); value["required_evidence"].remove("rollback_test_or_proof")
        self.assertIn("E_MAINT_EVIDENCE_SET", {i.code for i in validate_maintenance_change_plan(value, "x").errors})


if __name__ == "__main__":
    unittest.main()
