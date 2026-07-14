from __future__ import annotations

import unittest

from nis2_harness.registry import Action
from nis2_harness.validation import validate_actions, validate_project_dates


def valid_action(**changes: str) -> Action:
    values = {
        "action_id": "A-TEST",
        "requirement_family": "1",
        "scope_eir": "Mind",
        "workstream": "Teszt",
        "source_ref": "SRC-TEST:p1",
        "source_type": "test_fixture",
        "source_confidence": "audited",
        "finding_summary": "Teszt megállapítás.",
        "task": "Tesztfeladat.",
        "deliverable": "Teszt deliverable.",
        "evidence_required": "Tesztevidencia.",
        "priority": "P0",
        "phase": "M0_STARTUP",
        "status": "NEW",
        "human_owner": "Tesztgazda",
        "human_approver": "Tesztjóváhagyó",
        "deadline_basis": "receipt_date_plus_days",
        "target_offset_days": "10",
        "target_date": "2026-07-06",
        "cost_band": "B0",
        "spend_timing": "NOW_B0",
        "ai_eligibility": "yes",
        "ai_role": "qa_auditor",
        "human_gate": "G1_DOMAIN_REVIEW",
        "external_submission": "no",
        "production_change": "no",
        "row_number": 2,
        "source_path": "fixture.csv",
    }
    values.update(changes)
    return Action(**values)


def error_codes(*actions: Action) -> set[str]:
    return {issue.code for issue in validate_actions(actions).errors}


class ValidationTests(unittest.TestCase):
    def test_valid_complete_registry(self) -> None:
        self.assertFalse(validate_actions([valid_action()]).errors)

    def test_duplicate_id(self) -> None:
        self.assertIn("E_DUPLICATE_ID", error_codes(valid_action(), valid_action()))

    def test_missing_required_field(self) -> None:
        self.assertIn("E_REQUIRED", error_codes(valid_action(task="")))

    def test_invalid_enum(self) -> None:
        self.assertIn("E_ENUM", error_codes(valid_action(priority="PX")))

    def test_missing_g4(self) -> None:
        self.assertIn("E_G4", error_codes(valid_action(external_submission="yes")))

    def test_missing_g5(self) -> None:
        self.assertIn("E_G5", error_codes(valid_action(purchase_trigger="Új licenc")))

    def test_missing_g3_explicit_production_change(self) -> None:
        self.assertIn("E_G3", error_codes(valid_action(production_change="yes")))

    def test_unverified_internal_cannot_be_done(self) -> None:
        self.assertIn(
            "E_UNVERIFIED_CLOSURE",
            error_codes(valid_action(source_confidence="unverified_internal", status="DONE")),
        )

    def test_invalid_target_date(self) -> None:
        self.assertIn("E_DATE", error_codes(valid_action(target_date="2026-13-01")))

    def test_tbd_owner_warning(self) -> None:
        codes = {issue.code for issue in validate_actions([valid_action(human_owner="TBD-HUMAN")]).warnings}
        self.assertIn("W_OWNER_TBD", codes)

    def test_source_conflict_warning(self) -> None:
        codes = {issue.code for issue in validate_actions([valid_action(source_confidence="conflict")]).warnings}
        self.assertIn("W_SOURCE_CONFLICT", codes)

    def test_missing_receipt_date_is_warning(self) -> None:
        result = validate_project_dates({}, "project_dates.json")
        self.assertFalse(result.errors)
        self.assertIn("W_RECEIPT_MISSING", {issue.code for issue in result.warnings})

    def test_invalid_receipt_date_is_error(self) -> None:
        result = validate_project_dates({"receipt_date": "not-a-date"}, "project_dates.json")
        self.assertIn("E_RECEIPT_DATE", {issue.code for issue in result.errors})

    def test_human_acceptance_without_receipt_evidence_remains_warning(self) -> None:
        result = validate_project_dates(
            {
                "receipt_date": "2026-06-26",
                "receipt_evidence_reference": "NOT_AVAILABLE; human acceptance: D-022",
            },
            "project_dates.json",
        )
        self.assertIn("W_RECEIPT_EVIDENCE", {issue.code for issue in result.warnings})


if __name__ == "__main__":
    unittest.main()
