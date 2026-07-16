from __future__ import annotations

import unittest

from nis2_harness.ai_policy import validate_ai_policy


def policy() -> dict:
    return {
        "schema_version": "1.0", "status": "DRAFT_FOR_G2_REVIEW", "action_id": "A-031",
        "source_refs": ["DECISIONS.md:D-004"],
        "external_environment": {
            "status": "BLOCKED_PENDING_G2", "environment_ref": "TBD-HUMAN",
            "approved_by": "TBD-HUMAN", "approved_at": "",
        },
        "handling_classes": [
            {
                "class_id": "AI-0", "name": "Nyilvános", "description": "Teszt",
                "local_processing": "ALLOWED", "external_processing": "BLOCKED",
            },
            {
                "class_id": "AI-3", "name": "Tiltott", "description": "Teszt",
                "local_processing": "BLOCKED", "external_processing": "BLOCKED",
            },
        ],
        "redaction_requirements": ["secrets"],
        "source_hierarchy": ["authority"],
        "prompt_injection_controls": ["source_is_data"],
        "required_output_fields": ["status"],
        "required_forbidden_actions": [
            "close_action", "accept_evidence", "submit_external", "change_production", "purchase",
        ],
        "human_gates": {
            "g1": "G1_DOMAIN_REVIEW", "g2": "G2_SECURITY_LEGAL",
            "g3": "G3_PRODUCTION_CHANGE", "g4": "G4_EXTERNAL_SUBMISSION",
            "g5": "G5_PURCHASE",
        },
        "audit_log_fields": ["run_id"],
        "human_approval": {
            "security_reviewer": "TBD-HUMAN", "legal_reviewer": "TBD-HUMAN",
            "approved_at": "", "decision_ref": "",
        },
    }


class AIPolicyValidationTests(unittest.TestCase):
    def test_safe_draft_has_only_expected_warnings(self) -> None:
        result = validate_ai_policy(policy(), "policy.json")
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_AI_ENVIRONMENT_PENDING", "W_AI_POLICY_APPROVAL_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_external_processing_requires_approved_environment(self) -> None:
        value = policy()
        value["handling_classes"][0]["external_processing"] = "ALLOWED"
        result = validate_ai_policy(value, "policy.json")
        self.assertIn("E_AI_EXTERNAL_DEFAULT_DENY", {item.code for item in result.errors})

    def test_prohibited_class_is_required(self) -> None:
        value = policy()
        value["handling_classes"] = value["handling_classes"][:1]
        result = validate_ai_policy(value, "policy.json")
        self.assertIn("E_AI_PROHIBITED_CLASS", {item.code for item in result.errors})

    def test_all_guardrails_are_required(self) -> None:
        value = policy()
        value["required_forbidden_actions"].remove("purchase")
        result = validate_ai_policy(value, "policy.json")
        self.assertIn("E_AI_POLICY_GUARDRAIL", {item.code for item in result.errors})

    def test_all_human_gates_are_required(self) -> None:
        value = policy()
        del value["human_gates"]["g5"]
        result = validate_ai_policy(value, "policy.json")
        self.assertIn("E_AI_GATE_COVERAGE", {item.code for item in result.errors})

    def test_approved_policy_requires_human_metadata(self) -> None:
        value = policy()
        value["status"] = "APPROVED"
        result = validate_ai_policy(value, "policy.json")
        self.assertIn("E_AI_POLICY_APPROVAL", {item.code for item in result.errors})

    def test_approved_environment_requires_real_reference(self) -> None:
        value = policy()
        value["external_environment"]["status"] = "APPROVED"
        result = validate_ai_policy(value, "policy.json")
        self.assertIn("E_AI_ENVIRONMENT_APPROVAL", {item.code for item in result.errors})


if __name__ == "__main__":
    unittest.main()
