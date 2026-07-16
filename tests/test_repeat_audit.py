from __future__ import annotations

import copy
import json
import unittest
from pathlib import Path

from nis2_harness.repeat_audit import validate_repeat_audit_roadmap


ROADMAP_PATH = Path(__file__).parents[1] / "data" / "repeat_audit_roadmap.json"


def roadmap() -> dict:
    return json.loads(ROADMAP_PATH.read_text(encoding="utf-8"))


class RepeatAuditValidationTests(unittest.TestCase):
    def test_proposal_has_only_expected_warnings(self) -> None:
        result = validate_repeat_audit_roadmap(roadmap(), ROADMAP_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_REPEAT_SCOPE_PENDING", "W_REPEAT_REVIEW_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_approved_d021_target_cannot_be_changed(self) -> None:
        value = roadmap()
        value["approved_internal_target"] = "2027-10-01"
        result = validate_repeat_audit_roadmap(value, "roadmap.json")
        self.assertIn("E_REPEAT_TARGET", {item.code for item in result.errors})

    def test_only_d021_target_can_be_approved_baseline(self) -> None:
        value = roadmap()
        value["milestones"][0]["status"] = "APPROVED_BASELINE"
        result = validate_repeat_audit_roadmap(value, "roadmap.json")
        self.assertIn("E_REPEAT_BASELINE", {item.code for item in result.errors})

    def test_four_quarterly_gates_are_required(self) -> None:
        value = roadmap()
        value["milestones"] = [
            item for item in value["milestones"] if item["milestone_id"] != "QG-2026-Q3"
        ]
        result = validate_repeat_audit_roadmap(value, "roadmap.json")
        self.assertIn("E_REPEAT_QUARTERLY", {item.code for item in result.errors})

    def test_mock_audit_is_required(self) -> None:
        value = roadmap()
        value["milestones"] = [item for item in value["milestones"] if item["type"] != "MOCK_AUDIT"]
        result = validate_repeat_audit_roadmap(value, "roadmap.json")
        self.assertIn("E_REPEAT_MOCK", {item.code for item in result.errors})

    def test_remediation_must_follow_mock(self) -> None:
        value = roadmap()
        for item in value["milestones"]:
            if item["type"] == "REMEDIATION_BUFFER_END":
                item["date"] = "2027-07-01"
        result = validate_repeat_audit_roadmap(value, "roadmap.json")
        self.assertIn("E_REPEAT_BUFFER_ORDER", {item.code for item in result.errors})

    def test_procurement_requires_g5(self) -> None:
        value = roadmap()
        for item in value["milestones"]:
            if item["type"] == "AUDITOR_PROCUREMENT_GATE":
                item["required_gate"] = "G1_DOMAIN_REVIEW"
        result = validate_repeat_audit_roadmap(value, "roadmap.json")
        self.assertIn("E_REPEAT_PROCUREMENT_GATE", {item.code for item in result.errors})

    def test_approved_roadmap_requires_human_metadata(self) -> None:
        value = copy.deepcopy(roadmap())
        value["status"] = "APPROVED"
        result = validate_repeat_audit_roadmap(value, "roadmap.json")
        self.assertIn("E_REPEAT_APPROVAL", {item.code for item in result.errors})


if __name__ == "__main__":
    unittest.main()
