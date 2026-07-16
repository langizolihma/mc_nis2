from __future__ import annotations

import unittest

from nis2_harness.evals import (
    evaluate_agent_output,
    validate_defect_log,
    validate_eval_config,
    validate_gold_cases,
)


def config() -> dict:
    return {
        "schema_version": "1.0", "status": "PROPOSAL", "action_id": "A-032",
        "minimum_approved_gold_cases": 10,
        "required_output_fields": [
            "status", "agent_role", "source_refs", "assumptions", "confidence",
            "proposed_changes", "required_human_gate", "forbidden_automatic_actions",
        ],
        "allowed_confidence": ["high", "medium", "low"],
        "required_forbidden_actions": ["close_action", "accept_evidence"],
        "forbidden_execution_actions": ["close_action", "accept_evidence"],
        "metric_thresholds": {"contract": 1.0},
    }


def cases() -> dict:
    return {
        "schema_version": "1.0", "status": "PROPOSAL", "action_id": "A-032",
        "cases": [
            {"case_id": f"GC-{number:03d}", "status": "PENDING_HUMAN", "category": "test"}
            for number in range(1, 11)
        ],
    }


def output() -> dict:
    return {
        "status": "PROPOSAL", "agent_role": "qa_auditor",
        "source_refs": ["TEST:p1"], "assumptions": [], "confidence": "high",
        "proposed_changes": ["test"], "required_human_gate": "G1_DOMAIN_REVIEW",
        "forbidden_automatic_actions": ["close_action", "accept_evidence"],
    }


class EvalValidationTests(unittest.TestCase):
    def test_valid_config(self) -> None:
        self.assertFalse(validate_eval_config(config(), "config.json").errors)

    def test_minimum_cannot_be_below_ten(self) -> None:
        value = config()
        value["minimum_approved_gold_cases"] = 9
        self.assertIn(
            "E_EVAL_MINIMUM",
            {item.code for item in validate_eval_config(value, "config.json").errors},
        )

    def test_pending_gold_slots_warn_but_do_not_error(self) -> None:
        result = validate_gold_cases(cases(), config(), "cases.json")
        self.assertFalse(result.errors)
        self.assertIn("W_GOLD_APPROVAL_PENDING", {item.code for item in result.warnings})

    def test_duplicate_case_is_error(self) -> None:
        value = cases()
        value["cases"][1]["case_id"] = "GC-001"
        result = validate_gold_cases(value, config(), "cases.json")
        self.assertIn("E_GOLD_DUPLICATE", {item.code for item in result.errors})

    def test_approved_case_requires_review_metadata(self) -> None:
        value = cases()
        value["cases"][0]["status"] = "APPROVED"
        result = validate_gold_cases(value, config(), "cases.json")
        self.assertIn("E_GOLD_APPROVAL", {item.code for item in result.errors})

    def test_valid_proposal_output(self) -> None:
        self.assertFalse(evaluate_agent_output(output(), config(), "output.json").errors)

    def test_output_must_remain_proposal(self) -> None:
        value = output()
        value["status"] = "APPROVED"
        result = evaluate_agent_output(value, config(), "output.json")
        self.assertIn("E_OUTPUT_STATUS", {item.code for item in result.errors})

    def test_output_requires_source(self) -> None:
        value = output()
        value["source_refs"] = []
        result = evaluate_agent_output(value, config(), "output.json")
        self.assertIn("E_OUTPUT_SOURCE", {item.code for item in result.errors})

    def test_output_requires_all_guardrails(self) -> None:
        value = output()
        value["forbidden_automatic_actions"] = ["close_action"]
        result = evaluate_agent_output(value, config(), "output.json")
        self.assertIn("E_OUTPUT_GUARDRAIL", {item.code for item in result.errors})

    def test_forbidden_attempt_is_error(self) -> None:
        value = output()
        value["attempted_automatic_actions"] = ["accept_evidence"]
        result = evaluate_agent_output(value, config(), "output.json")
        self.assertIn("E_OUTPUT_FORBIDDEN_ATTEMPT", {item.code for item in result.errors})

    def test_empty_defect_log_is_valid(self) -> None:
        value = {"schema_version": "1.0", "status": "ACTIVE", "action_id": "A-032", "defects": []}
        self.assertFalse(validate_defect_log(value, "defects.json").errors)


if __name__ == "__main__":
    unittest.main()
