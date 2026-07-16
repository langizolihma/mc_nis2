from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.quarterly_reporting import validate_quarterly_reporting_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "quarterly_reporting_plan.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class QuarterlyReportingValidationTests(unittest.TestCase):
    def test_proposal_has_only_expected_warnings(self) -> None:
        result = validate_quarterly_reporting_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_QUARTERLY_ACTUAL_SUBMISSION_PENDING", "W_QUARTERLY_REVIEW_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_actual_submission_requires_evidence(self) -> None:
        value = plan()
        value["submission_anchor"]["status"] = "ACTUAL_SUBMISSION_VERIFIED"
        result = validate_quarterly_reporting_plan(value, "plan.json")
        self.assertIn("E_QUARTERLY_ANCHOR_EVIDENCE", {item.code for item in result.errors})

    def test_four_reports_are_required(self) -> None:
        value = plan()
        value["reports"] = value["reports"][:3]
        result = validate_quarterly_reporting_plan(value, "plan.json")
        self.assertIn("E_QUARTERLY_REPORT_COUNT", {item.code for item in result.errors})

    def test_due_dates_follow_three_month_rule(self) -> None:
        value = plan()
        value["reports"][1]["due_date"] = "2027-03-25"
        result = validate_quarterly_reporting_plan(value, "plan.json")
        self.assertIn("E_QUARTERLY_DUE", {item.code for item in result.errors})

    def test_workflow_must_precede_due_date(self) -> None:
        value = plan()
        value["reports"][0]["owner_review"] = value["reports"][0]["due_date"]
        result = validate_quarterly_reporting_plan(value, "plan.json")
        self.assertIn("E_QUARTERLY_WORKFLOW_ORDER", {item.code for item in result.errors})

    def test_external_report_requires_g4(self) -> None:
        value = plan()
        value["reports"][0]["required_gate"] = "G1_DOMAIN_REVIEW"
        result = validate_quarterly_reporting_plan(value, "plan.json")
        self.assertIn("E_QUARTERLY_EXTERNAL_GATE", {item.code for item in result.errors})

    def test_dry_run_requires_g1(self) -> None:
        value = plan()
        value["dry_run"]["required_gate"] = "G4_EXTERNAL_SUBMISSION"
        result = validate_quarterly_reporting_plan(value, "plan.json")
        self.assertIn("E_QUARTERLY_DRY_RUN_GATE", {item.code for item in result.errors})

    def test_template_sections_are_mandatory(self) -> None:
        value = plan()
        value["template_sections"].remove("forrásjegyzék")
        result = validate_quarterly_reporting_plan(value, "plan.json")
        self.assertIn("E_QUARTERLY_TEMPLATE", {item.code for item in result.errors})

    def test_approved_plan_requires_human_metadata(self) -> None:
        value = plan()
        value["status"] = "APPROVED"
        result = validate_quarterly_reporting_plan(value, "plan.json")
        self.assertIn("E_QUARTERLY_APPROVAL", {item.code for item in result.errors})


if __name__ == "__main__":
    unittest.main()
