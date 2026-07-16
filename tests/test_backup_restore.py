from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.backup_restore import validate_backup_restore_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "backup_restore_plan.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class BackupRestoreValidationTests(unittest.TestCase):
    def test_safe_proposal_has_only_expected_warnings(self) -> None:
        result = validate_backup_restore_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_BACKUP_INPUT_PENDING", "W_RESTORE_G3_PENDING", "W_RESTORE_SCOPE_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_all_five_eirs_are_required(self) -> None:
        value = plan()
        value["eir_backup_matrix"] = value["eir_backup_matrix"][:-1]
        result = validate_backup_restore_plan(value, "plan.json")
        self.assertIn("E_BACKUP_EIR_COVERAGE", {item.code for item in result.errors})

    def test_rpo_rto_must_be_positive_or_tbd(self) -> None:
        value = plan()
        value["eir_backup_matrix"][0]["rpo_hours"] = 0
        result = validate_backup_restore_plan(value, "plan.json")
        self.assertIn("E_BACKUP_RPO_RTO", {item.code for item in result.errors})

    def test_restore_requires_g3(self) -> None:
        value = plan()
        value["restore_test"]["required_gate"] = "G1_DOMAIN_REVIEW"
        result = validate_backup_restore_plan(value, "plan.json")
        self.assertIn("E_RESTORE_G3", {item.code for item in result.errors})

    def test_proposal_forbids_production_change(self) -> None:
        value = plan()
        value["restore_test"]["production_change_allowed"] = True
        result = validate_backup_restore_plan(value, "plan.json")
        self.assertIn("E_RESTORE_DESTRUCTIVE", {item.code for item in result.errors})

    def test_proposal_forbids_overwrite_and_delete(self) -> None:
        value = plan()
        value["restore_test"]["overwrite_existing"] = True
        value["restore_test"]["delete_allowed"] = True
        result = validate_backup_restore_plan(value, "plan.json")
        self.assertGreaterEqual(
            sum(item.code == "E_RESTORE_DESTRUCTIVE" for item in result.errors), 2
        )

    def test_required_evidence_cannot_be_removed(self) -> None:
        value = plan()
        value["required_evidence"].remove("cleanup_record")
        result = validate_backup_restore_plan(value, "plan.json")
        self.assertIn("E_RESTORE_EVIDENCE", {item.code for item in result.errors})

    def test_approved_plan_requires_complete_human_record(self) -> None:
        value = plan()
        value["status"] = "APPROVED_FOR_G3"
        result = validate_backup_restore_plan(value, "plan.json")
        self.assertIn("E_RESTORE_APPROVAL", {item.code for item in result.errors})


if __name__ == "__main__":
    unittest.main()
