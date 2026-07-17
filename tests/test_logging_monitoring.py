from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.logging_monitoring import validate_logging_monitoring_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "logging_monitoring_plan.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class LoggingMonitoringValidationTests(unittest.TestCase):
    def test_proposal_has_only_expected_warnings(self) -> None:
        result = validate_logging_monitoring_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_LOG_SOURCE_PENDING", "W_LOG_RETENTION_PENDING", "W_LOG_ALERT_PENDING", "W_LOG_REVIEW_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_all_ten_source_categories_are_required(self) -> None:
        value = plan(); value["log_sources"] = value["log_sources"][:-1]
        self.assertIn("E_LOG_SOURCE_COVERAGE", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})

    def test_minimum_content_fields_cannot_be_reduced(self) -> None:
        value = plan(); value["log_sources"][0]["required_content_fields"].remove("subject_or_actor")
        self.assertIn("E_LOG_CONTENT_FIELDS", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})

    def test_pending_source_cannot_claim_review(self) -> None:
        value = plan(); value["log_sources"][0]["evidence_refs"] = ["EV-001"]
        self.assertIn("E_LOG_FALSE_SOURCE_REVIEW", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})

    def test_read_only_is_mandatory(self) -> None:
        value = plan(); value["safety"]["read_only_required"] = False
        self.assertIn("E_LOG_READ_ONLY", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})

    def test_automated_response_is_forbidden(self) -> None:
        value = plan(); value["safety"]["automated_response_allowed"] = True
        self.assertIn("E_LOG_UNSAFE", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})

    def test_retention_stays_tbd_until_reviewed(self) -> None:
        value = plan(); value["retention_classes"][0]["retention_days"] = 365
        self.assertIn("E_LOG_PENDING_RETENTION", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})

    def test_all_five_alerts_are_required(self) -> None:
        value = plan(); value["alert_definitions"] = value["alert_definitions"][:-1]
        self.assertIn("E_LOG_ALERT_COVERAGE", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})

    def test_untested_alert_cannot_have_evidence(self) -> None:
        value = plan(); value["alert_definitions"][0]["test_method"] = "simulation"
        self.assertIn("E_LOG_FALSE_ALERT_TEST", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})

    def test_daily_and_weekly_review_are_required(self) -> None:
        value = plan(); value["review_schedule"] = value["review_schedule"][:-1]
        self.assertIn("E_LOG_SCHEDULE_COVERAGE", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})

    def test_human_reviewed_package_requires_execution_evidence(self) -> None:
        value = plan(); value["status"] = "HUMAN_REVIEWED"
        self.assertIn("E_LOG_APPROVAL", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})

    def test_review_run_hash_must_be_sha256(self) -> None:
        value = plan(); value["review_runs"] = [{
            "run_id": "LOGRUN-001", "frequency": "DAILY", "performed_at": "2026-07-17T09:00:00+02:00",
            "reviewer": "Reviewer", "result": "NO_EXCEPTION", "protected_uri": "protected://log/review",
            "sha256": "bad", "human_review_status": "PENDING",
        }]
        self.assertIn("E_LOG_RUN_HASH", {i.code for i in validate_logging_monitoring_plan(value, "x").errors})


if __name__ == "__main__":
    unittest.main()
