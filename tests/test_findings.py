from __future__ import annotations

import unittest

from nis2_harness.registry import ControlActionMapping, FindingRecord
from nis2_harness.validation import validate_control_action_mapping, validate_findings


def finding(**changes: str) -> FindingRecord:
    values = {
        "finding_id": "F-0001", "section_ref": "7.1.1", "scope_eir": "Szervezet",
        "requirement_family": "1", "control_ref": "1.1", "control_title": "Szabályzat",
        "rating": "Kiemelt mértékű eltérés", "assessment_method": "Dokumentum, Interjú",
        "finding_summary": "Hiányosság.", "source_ref": "SRC-008",
        "source_page_start": "19", "source_page_end": "21",
        "source_confidence": "machine_unvalidated", "human_validated": "no",
        "direct_action_ids": "A-001", "mapping_status": "DIRECT",
        "row_number": 2, "source_path": "findings.csv",
    }
    values.update(changes)
    return FindingRecord(**values)


def mapping(**changes: str) -> ControlActionMapping:
    values = {
        "mapping_id": "M-0001", "action_id": "A-001", "requirement_family": "1",
        "control_ref": "1.1", "scope_eir": "Szervezet",
        "mapping_basis": "EXACT_CONTROL", "matched_finding_ids": "F-0001",
        "human_owner": "Tesztgazda", "evidence_required": "Review log.",
        "source_ref": "SRC-008:p19", "source_confidence": "machine_unvalidated",
        "human_review_status": "PROPOSED", "row_number": 2, "source_path": "mapping.csv",
    }
    values.update(changes)
    return ControlActionMapping(**values)


class FindingValidationTests(unittest.TestCase):
    def test_machine_record_is_valid_but_warns_for_human_review(self) -> None:
        result = validate_findings([finding()], {"A-001"})
        self.assertFalse(result.errors)
        self.assertIn("W_FINDING_HUMAN_REVIEW_PENDING", {item.code for item in result.warnings})

    def test_human_validation_requires_reviewer(self) -> None:
        result = validate_findings([finding(human_validated="yes", source_confidence="audited")])
        self.assertIn("E_FINDING_HUMAN_REVIEW", {item.code for item in result.errors})

    def test_mapping_status_must_match_action_links(self) -> None:
        result = validate_findings([finding(direct_action_ids="", mapping_status="DIRECT")])
        self.assertIn("E_FINDING_MAPPING_INCONSISTENT", {item.code for item in result.errors})

    def test_mapping_references_are_validated(self) -> None:
        result = validate_control_action_mapping([mapping(action_id="A-X")], {"A-001"}, {"F-0001"})
        self.assertIn("E_MAPPING_ACTION_REF", {item.code for item in result.errors})

    def test_approved_mapping_requires_human_metadata(self) -> None:
        result = validate_control_action_mapping(
            [mapping(human_review_status="APPROVED")], {"A-001"}, {"F-0001"}
        )
        self.assertIn("E_MAPPING_HUMAN_REVIEW", {item.code for item in result.errors})


if __name__ == "__main__":
    unittest.main()
