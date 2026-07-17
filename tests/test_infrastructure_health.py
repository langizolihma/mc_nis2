from __future__ import annotations

import json
import unittest
from pathlib import Path

from nis2_harness.infrastructure_health import validate_infrastructure_health_plan


PLAN_PATH = Path(__file__).parents[1] / "data" / "infrastructure_health_snapshot_plan.json"


def plan() -> dict:
    return json.loads(PLAN_PATH.read_text(encoding="utf-8"))


class InfrastructureHealthValidationTests(unittest.TestCase):
    def test_safe_proposal_has_expected_warnings(self) -> None:
        result = validate_infrastructure_health_plan(plan(), PLAN_PATH)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_INFRA_GATES_PENDING", "W_INFRA_TARGETS_PENDING", "W_INFRA_OBSERVATIONS_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_source_must_remain_unverified(self) -> None:
        value = plan()
        value["source_confidence"] = "audited"
        self.assertIn("E_INFRA_SOURCE_CONFIDENCE", {i.code for i in validate_infrastructure_health_plan(value, "x").errors})

    def test_collection_must_be_read_only(self) -> None:
        value = plan()
        value["collection"]["read_only_required"] = False
        self.assertIn("E_INFRA_READ_ONLY", {i.code for i in validate_infrastructure_health_plan(value, "x").errors})

    def test_dangerous_operations_are_forbidden(self) -> None:
        value = plan()
        value["collection"]["configuration_change_allowed"] = True
        self.assertIn("E_INFRA_UNSAFE_OPERATION", {i.code for i in validate_infrastructure_health_plan(value, "x").errors})

    def test_both_g2_and_g3_are_required(self) -> None:
        value = plan()
        value["collection"]["required_gates"] = ["G3_PRODUCTION_CHANGE"]
        self.assertIn("E_INFRA_GATES", {i.code for i in validate_infrastructure_health_plan(value, "x").errors})

    def test_all_five_scopes_are_required(self) -> None:
        value = plan()
        value["scopes"] = value["scopes"][:-1]
        self.assertIn("E_INFRA_SCOPE_COVERAGE", {i.code for i in validate_infrastructure_health_plan(value, "x").errors})

    def test_pending_scope_cannot_name_unapproved_target(self) -> None:
        value = plan()
        value["scopes"][0]["targets"] = ["server-01"]
        self.assertIn("E_INFRA_PENDING_TARGETS", {i.code for i in validate_infrastructure_health_plan(value, "x").errors})

    def test_evidence_set_cannot_be_reduced(self) -> None:
        value = plan()
        value["required_evidence"].remove("human_review")
        self.assertIn("E_INFRA_EVIDENCE_SET", {i.code for i in validate_infrastructure_health_plan(value, "x").errors})

    def test_verified_claim_requires_observation_and_review(self) -> None:
        value = plan()
        value["claim_status"] = "HUMAN_VERIFIED"
        self.assertIn("E_INFRA_CLAIM_EVIDENCE", {i.code for i in validate_infrastructure_health_plan(value, "x").errors})

    def test_observation_hash_must_be_sha256(self) -> None:
        value = plan()
        value["observations"] = [{
            "observation_id": "OBS-001", "scope_id": "HOSTS", "target_ref": "protected-ref",
            "observed_state": "sample", "source_ref": "protected:export", "collected_at": "2026-07-16T10:00:00+02:00",
            "collector": "Test Collector", "collection_method": "approved read-only export",
            "protected_uri": "protected://example", "sha256": "bad", "review_status": "PENDING",
            "reviewer": "", "reviewed_at": "",
        }]
        self.assertIn("E_INFRA_OBSERVATION_HASH", {i.code for i in validate_infrastructure_health_plan(value, "x").errors})


if __name__ == "__main__":
    unittest.main()
