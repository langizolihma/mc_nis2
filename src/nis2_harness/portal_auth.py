"""Fail-closed portal authentication and local authorization policy model."""

from __future__ import annotations

from pathlib import Path
import re
from typing import Any
from urllib.parse import urlparse

from .validation import Issue, ValidationResult


EXPECTED_ROLES = {"VIEWER", "TASK_OWNER", "REVIEWER", "PORTAL_ADMIN"}
EXPECTED_GATES = {"G1_DOMAIN_REVIEW", "G2_SECURITY_LEGAL", "G3_PRODUCTION_CHANGE"}
ALLOWED_STATUSES = {"BLOCKED_PENDING_G1_G2_G3", "APPROVED_FOR_NON_PRODUCTION_PILOT"}
ALLOWED_MODES = {"DESIGN_ONLY_NO_SIGN_IN", "NON_PRODUCTION_ENTRA_PILOT"}
FORBIDDEN_PERMISSIONS = {
    "accept_evidence",
    "close_action",
    "formal_approval",
    "assign_privileged_role",
    "sharepoint_write_back",
    "submit_external",
    "change_production",
}
GUID_PATTERN = re.compile(
    r"^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-"
    r"[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
)


def _issue(
    path: str | Path,
    severity: str,
    code: str,
    message: str,
    identity: str = "",
) -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _required(
    value: dict[str, Any],
    fields: tuple[str, ...],
    path: str | Path,
    code: str,
    identity: str = "",
) -> list[Issue]:
    return [
        _issue(path, "ERROR", code, f"hiányzó kötelező mező: {field}", identity)
        for field in fields
        if field not in value or value[field] in ("", None)
    ]


def validate_portal_auth_policy(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Validate deny-by-default Entra and SharePoint admission design."""
    issues: list[Issue] = []
    issues.extend(_required(
        data,
        (
            "schema_version",
            "status",
            "mode",
            "decision_ref",
            "source_refs",
            "identity",
            "admission",
            "roles",
            "default_role_after_admission",
            "role_assignments",
            "session_controls",
            "human_gates",
            "runtime_controls",
            "forbidden_automatic_actions",
        ),
        path,
        "E_PORTAL_AUTH_REQUIRED",
    ))
    status = data.get("status")
    if status not in ALLOWED_STATUSES:
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_STATUS", f"ismeretlen status: {status!r}"))
    if data.get("mode") not in ALLOWED_MODES:
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_MODE", f"ismeretlen mode: {data.get('mode')!r}"))
    if data.get("decision_ref") != "DECISIONS.md:D-029":
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_DECISION", "a D-029 baseline hivatkozása kötelező"))

    identity = data.get("identity", {})
    if not isinstance(identity, dict):
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_IDENTITY_TYPE", "identity objektum szükséges"))
        identity = {}
    issues.extend(_required(
        identity,
        (
            "provider",
            "tenant_mode",
            "tenant_id",
            "client_id",
            "flow",
            "redirect_uri",
            "token_library",
            "server_validated_session_required",
            "id_token_as_authorization_allowed",
        ),
        path,
        "E_PORTAL_AUTH_IDENTITY_REQUIRED",
    ))
    if identity.get("provider") != "MICROSOFT_ENTRA_ID":
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_PROVIDER", "kizárólag Microsoft Entra ID engedélyezett"))
    if identity.get("tenant_mode") != "SINGLE_TENANT":
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_TENANT_MODE", "single-tenant beállítás kötelező"))
    if identity.get("flow") != "AUTHORIZATION_CODE_WITH_PKCE_PROPOSED":
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_FLOW", "authorization code + PKCE szükséges"))
    if identity.get("server_validated_session_required") is not True:
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_SERVER_SESSION", "szerveroldalon validált session kötelező"))
    if identity.get("id_token_as_authorization_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_ID_TOKEN", "ID token nem használható SharePoint-jogosultság igazolására"))

    admission = data.get("admission", {})
    if not isinstance(admission, dict):
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_ADMISSION_TYPE", "admission objektum szükséges"))
        admission = {}
    issues.extend(_required(
        admission,
        (
            "rule",
            "target_site",
            "probe_method",
            "probe_resource",
            "client_side_membership_claim_allowed",
            "email_domain_only_allowed",
            "failure_behavior",
            "cache_ttl_minutes",
            "recheck_on_new_session",
        ),
        path,
        "E_PORTAL_AUTH_ADMISSION_REQUIRED",
    ))
    parsed = urlparse(str(admission.get("target_site", "")))
    if (
        parsed.scheme != "https"
        or parsed.hostname != "metalcom.sharepoint.com"
        or parsed.path.rstrip("/") != "/sites/NIS2"
    ):
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_SITE_SCOPE", "csak a jóváhagyott NIS2 site használható"))
    if admission.get("rule") != "ENTRA_AUTH_AND_NIS2_SITE_READ_PROBE":
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_ADMISSION_RULE", "D-029 szerinti admission rule kötelező"))
    if admission.get("probe_method") != "GET":
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_PROBE_METHOD", "a hozzáférési próba csak GET lehet"))
    if admission.get("client_side_membership_claim_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_CLIENT_CLAIM", "kliensoldali tagsági állítás nem fogadható el"))
    if admission.get("email_domain_only_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_EMAIL_ONLY", "e-mail-domain önmagában nem jogosít belépésre"))
    if admission.get("failure_behavior") != "DENY":
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_FAILURE", "hiba esetén DENY kötelező"))

    roles = data.get("roles", [])
    if not isinstance(roles, list):
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_ROLE_TYPE", "roles lista szükséges"))
        roles = []
    seen_roles: set[str] = set()
    for item in roles:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_ROLE_RECORD", "minden szerepkör objektum legyen"))
            continue
        role = str(item.get("role", ""))
        permissions = item.get("permissions", [])
        if role in seen_roles:
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_ROLE_DUPLICATE", "duplikált szerepkör", role))
        seen_roles.add(role)
        if role not in EXPECTED_ROLES:
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_ROLE_UNKNOWN", f"ismeretlen szerepkör: {role!r}"))
        if not isinstance(permissions, list) or not permissions:
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_PERMISSION_LIST", "nem üres permissions lista szükséges", role))
            continue
        forbidden = sorted(set(map(str, permissions)) & FORBIDDEN_PERMISSIONS)
        if forbidden:
            issues.append(_issue(
                path,
                "ERROR",
                "E_PORTAL_AUTH_FORBIDDEN_PERMISSION",
                "tiltott szerepkörjog: " + ", ".join(forbidden),
                role,
            ))
    if seen_roles != EXPECTED_ROLES:
        issues.append(_issue(
            path,
            "ERROR",
            "E_PORTAL_AUTH_ROLE_COVERAGE",
            "kötelező szerepkörök: " + ", ".join(sorted(EXPECTED_ROLES)),
        ))
    if data.get("default_role_after_admission") != "VIEWER":
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_DEFAULT_ROLE", "alapértelmezett szerepkör csak VIEWER lehet"))

    session = data.get("session_controls", {})
    if not isinstance(session, dict):
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_SESSION_TYPE", "session_controls objektum szükséges"))
        session = {}
    for field in (
        "https_required",
        "secure_cookie_required",
        "http_only_cookie_required",
        "csrf_protection_required",
    ):
        if session.get(field) is not True:
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_SESSION_CONTROL", f"{field}=true kötelező"))
    for field in ("raw_token_in_browser_storage_allowed", "token_logging_allowed"):
        if session.get(field) is not False:
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_TOKEN_HANDLING", f"{field}=false kötelező"))
    if session.get("same_site") not in {"Lax", "Strict"}:
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_SAMESITE", "SameSite Lax vagy Strict szükséges"))

    gates = data.get("human_gates", [])
    seen_gates: set[str] = set()
    all_approved = True
    if not isinstance(gates, list):
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_GATE_TYPE", "human_gates lista szükséges"))
        gates = []
    for gate in gates:
        if not isinstance(gate, dict):
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_GATE_RECORD", "minden kapu objektum legyen"))
            all_approved = False
            continue
        gate_id = str(gate.get("gate", ""))
        seen_gates.add(gate_id)
        gate_status = gate.get("status")
        if gate_status != "APPROVED":
            all_approved = False
            issues.append(_issue(
                path,
                "WARNING",
                "W_PORTAL_AUTH_GATE_PENDING",
                "a valós bejelentkezés e kapu jóváhagyásáig blokkolt",
                gate_id,
            ))
        else:
            for field in ("reviewer", "evidence_ref"):
                value = str(gate.get(field, ""))
                if not value or value.upper().startswith("TBD"):
                    issues.append(_issue(
                        path,
                        "ERROR",
                        "E_PORTAL_AUTH_FALSE_APPROVAL",
                        f"APPROVED kapuhoz valós {field} szükséges",
                        gate_id,
                    ))
    if seen_gates != EXPECTED_GATES:
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_GATE_COVERAGE", "G1, G2 és G3 kapu kötelező"))

    runtime = data.get("runtime_controls", {})
    if not isinstance(runtime, dict):
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_RUNTIME_TYPE", "runtime_controls objektum szükséges"))
        runtime = {}
    runtime_switches = (
        "authentication_enabled",
        "network_allowed",
        "token_acquisition_allowed",
        "admission_enabled",
        "role_enforcement_enabled",
    )
    if status == "BLOCKED_PENDING_G1_G2_G3":
        for field in runtime_switches:
            if runtime.get(field) is not False:
                issues.append(_issue(
                    path,
                    "ERROR",
                    "E_PORTAL_AUTH_PREMATURE_ENABLE",
                    f"függő kapuk mellett {field}=false kötelező",
                ))
    if runtime.get("formal_effect") is not False:
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_FORMAL_EFFECT", "formális hatás nem engedélyezhető"))
    if runtime.get("fail_closed") is not True:
        issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_FAIL_CLOSED", "fail_closed=true kötelező"))

    if status == "APPROVED_FOR_NON_PRODUCTION_PILOT":
        if not all_approved:
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_PREMATURE_APPROVAL", "pilothoz G1/G2/G3 jóváhagyás szükséges"))
        if data.get("mode") != "NON_PRODUCTION_ENTRA_PILOT":
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_PILOT_MODE", "jóváhagyott pilothoz NON_PRODUCTION_ENTRA_PILOT mód szükséges"))
        for field in runtime_switches:
            if runtime.get(field) is not True:
                issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_PILOT_RUNTIME", f"pilothoz {field}=true szükséges"))
        for field in ("tenant_id", "client_id"):
            if GUID_PATTERN.fullmatch(str(identity.get(field, ""))) is None:
                issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_PILOT_ID", f"pilothoz valós GUID {field} szükséges"))
        redirect = urlparse(str(identity.get("redirect_uri", "")))
        if redirect.scheme != "https" or not redirect.netloc:
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_REDIRECT", "pilothoz regisztrált HTTPS redirect URI szükséges"))
        if str(identity.get("token_library", "")).upper().startswith("TBD"):
            issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_LIBRARY", "pilothoz jóváhagyott tokenkönyvtár szükséges"))
        for field, source in (
            ("cache_ttl_minutes", admission),
            ("idle_timeout_minutes", session),
            ("absolute_timeout_minutes", session),
        ):
            value = source.get(field)
            if not isinstance(value, int) or value <= 0:
                issues.append(_issue(path, "ERROR", "E_PORTAL_AUTH_TIMEOUT", f"pilothoz pozitív egész {field} szükséges"))
    else:
        issues.append(_issue(
            path,
            "WARNING",
            "W_PORTAL_AUTH_DESIGN_ONLY",
            "a policy tervkész, de hitelesítés és admission szándékosan kikapcsolt",
        ))
    return ValidationResult(tuple(issues))


def evaluate_portal_authorization(
    policy: dict[str, Any],
    context: dict[str, Any],
    action: str,
) -> dict[str, Any]:
    """Evaluate a server-provided synthetic authorization context without token parsing."""
    runtime = policy.get("runtime_controls", {})
    if (
        policy.get("status") != "APPROVED_FOR_NON_PRODUCTION_PILOT"
        or not all(runtime.get(field) is True for field in (
            "authentication_enabled",
            "admission_enabled",
            "role_enforcement_enabled",
        ))
    ):
        return {"allowed": False, "reason": "POLICY_NOT_APPROVED", "formal_effect": False}
    checks = (
        ("server_validated_identity", "IDENTITY_NOT_VALIDATED"),
        ("tenant_validated", "TENANT_NOT_VALIDATED"),
        ("site_access_verified", "NIS2_SITE_ACCESS_NOT_VERIFIED"),
        ("roles_from_trusted_store", "ROLE_SOURCE_NOT_TRUSTED"),
    )
    for field, reason in checks:
        if context.get(field) is not True:
            return {"allowed": False, "reason": reason, "formal_effect": False}
    if context.get("tenant_id") != policy.get("identity", {}).get("tenant_id"):
        return {"allowed": False, "reason": "TENANT_MISMATCH", "formal_effect": False}

    catalog = {
        item["role"]: set(map(str, item.get("permissions", [])))
        for item in policy.get("roles", [])
        if isinstance(item, dict) and item.get("role") in EXPECTED_ROLES
    }
    roles = [
        role for role in context.get("server_authorized_roles", [])
        if role in catalog
    ]
    if not roles:
        roles = [str(policy.get("default_role_after_admission", "VIEWER"))]
    allowed = action not in FORBIDDEN_PERMISSIONS and any(
        action in catalog.get(role, set()) for role in roles
    )
    return {
        "allowed": allowed,
        "reason": "ALLOWED" if allowed else "ROLE_DENIED",
        "roles": sorted(roles),
        "formal_effect": False,
    }


def auth_readiness_summary(data: dict[str, Any], result: ValidationResult) -> dict[str, Any]:
    """Build a non-sensitive portal summary."""
    gates = data.get("human_gates", [])
    return {
        "status": data.get("status", "INVALID"),
        "mode": data.get("mode", "UNKNOWN"),
        "admission_rule": data.get("admission", {}).get("rule", ""),
        "pending_gates": [
            item.get("gate", "")
            for item in gates
            if isinstance(item, dict) and item.get("status") != "APPROVED"
        ] if isinstance(gates, list) else [],
        "hard_errors": len(result.errors),
        "warnings": len(result.warnings),
        "authentication_enabled": False,
        "network_allowed": False,
        "formal_effect": False,
    }
