from __future__ import annotations

import copy
import json
from pathlib import Path
import tempfile
import unittest

from nis2_harness.cli import main
from nis2_harness.portal_auth import (
    auth_readiness_summary,
    evaluate_portal_authorization,
    validate_portal_auth_policy,
)


ROOT = Path(__file__).parents[1]
POLICY_PATH = ROOT / "config" / "portal_auth_policy.json"


class PortalAuthPolicyTests(unittest.TestCase):
    def setUp(self) -> None:
        self.policy = json.loads(POLICY_PATH.read_text(encoding="utf-8"))

    def _approved_policy(self) -> dict[str, object]:
        policy = copy.deepcopy(self.policy)
        policy["status"] = "APPROVED_FOR_NON_PRODUCTION_PILOT"
        policy["mode"] = "NON_PRODUCTION_ENTRA_PILOT"
        policy["identity"]["tenant_id"] = "11111111-1111-4111-8111-111111111111"
        policy["identity"]["client_id"] = "22222222-2222-4222-8222-222222222222"
        policy["identity"]["redirect_uri"] = "https://nis2.internal.example/signin-oidc"
        policy["identity"]["token_library"] = "APPROVED_TEST_LIBRARY"
        policy["admission"]["cache_ttl_minutes"] = 5
        policy["session_controls"]["idle_timeout_minutes"] = 15
        policy["session_controls"]["absolute_timeout_minutes"] = 480
        for gate in policy["human_gates"]:
            gate["status"] = "APPROVED"
            gate["reviewer"] = "Synthetic Reviewer"
            gate["evidence_ref"] = f"TEST-EVIDENCE:{gate['gate']}"
        for field in (
            "authentication_enabled",
            "network_allowed",
            "token_acquisition_allowed",
            "admission_enabled",
            "role_enforcement_enabled",
        ):
            policy["runtime_controls"][field] = True
        return policy

    def test_baseline_is_valid_but_sign_in_is_blocked(self) -> None:
        result = validate_portal_auth_policy(self.policy, POLICY_PATH)
        self.assertEqual(0, len(result.errors))
        self.assertEqual(
            3,
            sum(issue.code == "W_PORTAL_AUTH_GATE_PENDING" for issue in result.warnings),
        )
        summary = auth_readiness_summary(self.policy, result)
        self.assertEqual("BLOCKED_PENDING_G1_G2_G3", summary["status"])
        self.assertEqual(3, len(summary["pending_gates"]))
        self.assertFalse(summary["authentication_enabled"])
        self.assertFalse(summary["network_allowed"])
        self.assertFalse(summary["formal_effect"])

    def test_client_claim_or_email_domain_cannot_admit_user(self) -> None:
        policy = copy.deepcopy(self.policy)
        policy["admission"]["client_side_membership_claim_allowed"] = True
        policy["admission"]["email_domain_only_allowed"] = True
        result = validate_portal_auth_policy(policy, POLICY_PATH)
        codes = {issue.code for issue in result.errors}
        self.assertIn("E_PORTAL_AUTH_CLIENT_CLAIM", codes)
        self.assertIn("E_PORTAL_AUTH_EMAIL_ONLY", codes)

    def test_formal_or_write_permission_cannot_be_assigned(self) -> None:
        policy = copy.deepcopy(self.policy)
        policy["roles"][3]["permissions"].extend(["formal_approval", "sharepoint_write_back"])
        result = validate_portal_auth_policy(policy, POLICY_PATH)
        self.assertIn(
            "E_PORTAL_AUTH_FORBIDDEN_PERMISSION",
            {issue.code for issue in result.errors},
        )

    def test_pending_policy_denies_every_request(self) -> None:
        decision = evaluate_portal_authorization(
            self.policy,
            {
                "server_validated_identity": True,
                "tenant_validated": True,
                "site_access_verified": True,
                "roles_from_trusted_store": True,
            },
            "view_dashboard",
        )
        self.assertFalse(decision["allowed"])
        self.assertEqual("POLICY_NOT_APPROVED", decision["reason"])

    def test_approved_synthetic_policy_requires_site_access(self) -> None:
        policy = self._approved_policy()
        context = {
            "server_validated_identity": True,
            "tenant_validated": True,
            "tenant_id": policy["identity"]["tenant_id"],
            "site_access_verified": False,
            "roles_from_trusted_store": True,
            "server_authorized_roles": ["VIEWER"],
        }
        decision = evaluate_portal_authorization(policy, context, "view_dashboard")
        self.assertFalse(decision["allowed"])
        self.assertEqual("NIS2_SITE_ACCESS_NOT_VERIFIED", decision["reason"])

    def test_approved_synthetic_policy_enforces_server_roles(self) -> None:
        policy = self._approved_policy()
        context = {
            "server_validated_identity": True,
            "tenant_validated": True,
            "tenant_id": policy["identity"]["tenant_id"],
            "site_access_verified": True,
            "roles_from_trusted_store": True,
            "server_authorized_roles": ["VIEWER"],
        }
        self.assertTrue(
            evaluate_portal_authorization(policy, context, "view_dashboard")["allowed"]
        )
        denied = evaluate_portal_authorization(policy, context, "create_review_draft")
        self.assertFalse(denied["allowed"])
        self.assertEqual("ROLE_DENIED", denied["reason"])
        self.assertFalse(
            evaluate_portal_authorization(policy, context, "formal_approval")["allowed"]
        )

    def test_false_pilot_approval_is_rejected(self) -> None:
        policy = copy.deepcopy(self.policy)
        policy["status"] = "APPROVED_FOR_NON_PRODUCTION_PILOT"
        result = validate_portal_auth_policy(policy, POLICY_PATH)
        codes = {issue.code for issue in result.errors}
        self.assertIn("E_PORTAL_AUTH_PREMATURE_APPROVAL", codes)
        self.assertIn("E_PORTAL_AUTH_PILOT_RUNTIME", codes)
        self.assertIn("E_PORTAL_AUTH_PILOT_ID", codes)

    def test_cli_accepts_design_and_rejects_unsafe_policy(self) -> None:
        self.assertEqual(0, main(["validate-portal-auth", "--policy", str(POLICY_PATH)]))
        policy = copy.deepcopy(self.policy)
        policy["runtime_controls"]["authentication_enabled"] = True
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "unsafe-auth.json"
            path.write_text(json.dumps(policy, ensure_ascii=False), encoding="utf-8")
            self.assertEqual(1, main(["validate-portal-auth", "--policy", str(path)]))


if __name__ == "__main__":
    unittest.main()
