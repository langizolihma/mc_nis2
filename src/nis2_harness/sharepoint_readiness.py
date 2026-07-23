"""Fail-closed validation for the proposed Microsoft Graph read-only integration."""

from __future__ import annotations

from pathlib import Path
from typing import Any
from urllib.parse import urlparse

from .validation import HUMAN_GATES, Issue, ValidationResult


EXPECTED_GATES = {
    "G1_DOMAIN_REVIEW",
    "G2_SECURITY_LEGAL",
    "G3_PRODUCTION_CHANGE",
}
ALLOWED_STATUSES = {"BLOCKED_PENDING_HUMAN_GATES", "APPROVED_FOR_NON_PRODUCTION_PILOT"}
ALLOWED_MODES = {"DESIGN_ONLY_NO_NETWORK", "NON_PRODUCTION_READ_ONLY_PILOT"}
FORBIDDEN_PERMISSION_FRAGMENTS = {"READWRITE", "FULLCONTROL"}
SECRET_KEY_FRAGMENTS = {"secret", "password", "private_key", "access_token", "refresh_token"}


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
    names: tuple[str, ...],
    path: str | Path,
    code: str,
    identity: str = "",
) -> list[Issue]:
    return [
        _issue(path, "ERROR", code, f"hiányzó kötelező mező: {name}", identity)
        for name in names
        if name not in value or value[name] in (None, "")
    ]


def _contains_plaintext_secret(value: Any, path: str = "") -> list[str]:
    findings: list[str] = []
    if isinstance(value, dict):
        for key, item in value.items():
            child = f"{path}.{key}" if path else str(key)
            lowered = str(key).lower()
            if any(fragment in lowered for fragment in SECRET_KEY_FRAGMENTS):
                if isinstance(item, str) and item and not item.upper().startswith("TBD"):
                    findings.append(child)
            findings.extend(_contains_plaintext_secret(item, child))
    elif isinstance(value, list):
        for index, item in enumerate(value):
            findings.extend(_contains_plaintext_secret(item, f"{path}[{index}]"))
    return findings


def validate_sharepoint_graph_readiness(
    data: dict[str, Any],
    path: str | Path,
) -> ValidationResult:
    """Validate that an integration design remains read-only and human-gated."""
    issues: list[Issue] = []
    top_fields = (
        "schema_version",
        "status",
        "mode",
        "action_ids",
        "source_refs",
        "target",
        "identity",
        "permissions",
        "sync",
        "required_canonical_fields",
        "human_gates",
        "runtime_controls",
        "forbidden_automatic_actions",
    )
    issues.extend(_required(data, top_fields, path, "E_SP_READY_REQUIRED", "A-042"))

    status = data.get("status")
    mode = data.get("mode")
    if status not in ALLOWED_STATUSES:
        issues.append(_issue(path, "ERROR", "E_SP_READY_STATUS", f"ismeretlen status: {status!r}"))
    if mode not in ALLOWED_MODES:
        issues.append(_issue(path, "ERROR", "E_SP_READY_MODE", f"ismeretlen mode: {mode!r}"))
    if status == "BLOCKED_PENDING_HUMAN_GATES" and mode != "DESIGN_ONLY_NO_NETWORK":
        issues.append(_issue(
            path,
            "ERROR",
            "E_SP_READY_BLOCKED_MODE",
            "függő emberi kapuk mellett csak DESIGN_ONLY_NO_NETWORK mód engedélyezett",
        ))

    target = data.get("target", {})
    if not isinstance(target, dict):
        issues.append(_issue(path, "ERROR", "E_SP_READY_TARGET_TYPE", "target objektum szükséges"))
        target = {}
    issues.extend(_required(
        target,
        ("tenant_domain", "site_url", "list_url", "site_id", "list_id"),
        path,
        "E_SP_READY_TARGET_REQUIRED",
    ))
    for field in ("site_url", "list_url"):
        parsed = urlparse(str(target.get(field, "")))
        if (
            parsed.scheme != "https"
            or parsed.hostname != "metalcom.sharepoint.com"
            or not parsed.path.startswith("/sites/NIS2")
        ):
            issues.append(_issue(
                path,
                "ERROR",
                "E_SP_READY_TARGET_SCOPE",
                f"{field} csak a jóváhagyott HTTPS NIS2 SharePoint-webhelyre mutathat",
            ))

    identity = data.get("identity", {})
    if not isinstance(identity, dict):
        issues.append(_issue(path, "ERROR", "E_SP_READY_IDENTITY_TYPE", "identity objektum szükséges"))
        identity = {}
    issues.extend(_required(
        identity,
        (
            "flow",
            "credential_preference",
            "client_id_ref",
            "credential_ref",
            "plaintext_secret_allowed",
            "credential_in_repository_allowed",
        ),
        path,
        "E_SP_READY_IDENTITY_REQUIRED",
    ))
    if identity.get("plaintext_secret_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_SP_READY_SECRET_POLICY", "plaintext secret nem engedélyezhető"))
    if identity.get("credential_in_repository_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_SP_READY_REPO_CREDENTIAL", "credential nem kerülhet repositoryba"))

    permissions = data.get("permissions", {})
    if not isinstance(permissions, dict):
        issues.append(_issue(path, "ERROR", "E_SP_READY_PERMISSION_TYPE", "permissions objektum szükséges"))
        permissions = {}
    issues.extend(_required(
        permissions,
        (
            "candidate_application_permission",
            "resource_grant",
            "broad_permissions_allowed",
            "allowed_http_methods",
            "write_operations_allowed",
            "technical_validation_status",
        ),
        path,
        "E_SP_READY_PERMISSION_REQUIRED",
    ))
    candidate = str(permissions.get("candidate_application_permission", "")).upper()
    if any(fragment in candidate for fragment in FORBIDDEN_PERMISSION_FRAGMENTS):
        issues.append(_issue(path, "ERROR", "E_SP_READY_WRITE_PERMISSION", "írási Graph-jogosultság tiltott"))
    if permissions.get("broad_permissions_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_SP_READY_BROAD_PERMISSION", "széles tenantjogosultság nem engedélyezett"))
    if permissions.get("allowed_http_methods") != ["GET"]:
        issues.append(_issue(path, "ERROR", "E_SP_READY_HTTP_METHOD", "kizárólag GET művelet engedélyezhető"))
    if permissions.get("write_operations_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_SP_READY_WRITE_OPERATION", "SharePoint write művelet tiltott"))

    controls = data.get("runtime_controls", {})
    if not isinstance(controls, dict):
        issues.append(_issue(path, "ERROR", "E_SP_READY_CONTROL_TYPE", "runtime_controls objektum szükséges"))
        controls = {}
    required_false = (
        "network_allowed",
        "token_acquisition_allowed",
        "sharepoint_write_back_allowed",
        "formal_effect",
    )
    for field in required_false:
        if controls.get(field) is not False:
            issues.append(_issue(
                path,
                "ERROR",
                "E_SP_READY_RUNTIME_DISABLED",
                f"emberi kapuk előtt {field}=false kötelező",
            ))
    if controls.get("fail_closed") is not True:
        issues.append(_issue(path, "ERROR", "E_SP_READY_FAIL_CLOSED", "fail_closed=true kötelező"))

    gates = data.get("human_gates", [])
    if not isinstance(gates, list):
        issues.append(_issue(path, "ERROR", "E_SP_READY_GATE_TYPE", "human_gates lista szükséges"))
        gates = []
    seen_gates: set[str] = set()
    all_approved = True
    for gate in gates:
        if not isinstance(gate, dict):
            issues.append(_issue(path, "ERROR", "E_SP_READY_GATE_RECORD", "minden human gate objektum legyen"))
            all_approved = False
            continue
        gate_id = str(gate.get("gate", ""))
        issues.extend(_required(
            gate,
            ("gate", "status", "required_decision", "reviewer", "evidence_ref"),
            path,
            "E_SP_READY_GATE_REQUIRED",
            gate_id,
        ))
        if gate_id not in HUMAN_GATES or gate_id not in EXPECTED_GATES:
            issues.append(_issue(path, "ERROR", "E_SP_READY_GATE_UNKNOWN", f"nem engedélyezett kapu: {gate_id!r}"))
        if gate_id in seen_gates:
            issues.append(_issue(path, "ERROR", "E_SP_READY_GATE_DUPLICATE", "duplikált kapu", gate_id))
        seen_gates.add(gate_id)
        gate_status = gate.get("status")
        if gate_status not in {"PENDING", "APPROVED"}:
            issues.append(_issue(path, "ERROR", "E_SP_READY_GATE_STATUS", f"ismeretlen kapustátusz: {gate_status!r}", gate_id))
        if gate_status != "APPROVED":
            all_approved = False
            issues.append(_issue(
                path,
                "WARNING",
                "W_SP_READY_GATE_PENDING",
                "az élő integráció e kapu jóváhagyásáig blokkolt",
                gate_id,
            ))
        else:
            for field in ("reviewer", "evidence_ref"):
                value = str(gate.get(field, ""))
                if not value or value.upper().startswith("TBD"):
                    issues.append(_issue(
                        path,
                        "ERROR",
                        "E_SP_READY_FALSE_APPROVAL",
                        f"APPROVED kapuhoz valós {field} szükséges",
                        gate_id,
                    ))
    if seen_gates != EXPECTED_GATES:
        missing = ", ".join(sorted(EXPECTED_GATES - seen_gates))
        issues.append(_issue(path, "ERROR", "E_SP_READY_GATE_COVERAGE", f"hiányzó kötelező kapuk: {missing}"))

    if status == "APPROVED_FOR_NON_PRODUCTION_PILOT" and not all_approved:
        issues.append(_issue(
            path,
            "ERROR",
            "E_SP_READY_PREMATURE_APPROVAL",
            "pilot csak mindhárom emberi kapu igazolt jóváhagyásával engedélyezhető",
        ))
    if status == "BLOCKED_PENDING_HUMAN_GATES" and controls.get("network_allowed") is False:
        issues.append(_issue(
            path,
            "WARNING",
            "W_SP_READY_DESIGN_ONLY",
            "a csomag tervkész; hálózat és tokenkérés szándékosan tiltott",
        ))

    for secret_path in _contains_plaintext_secret(data):
        issues.append(_issue(
            path,
            "ERROR",
            "E_SP_READY_PLAINTEXT_SECRET",
            f"lehetséges plaintext hitelesítő adat: {secret_path}",
        ))
    return ValidationResult(tuple(issues))


def readiness_summary(data: dict[str, Any], result: ValidationResult) -> dict[str, Any]:
    """Return a non-sensitive portal projection of readiness state."""
    gates = data.get("human_gates", [])
    return {
        "status": data.get("status", "INVALID"),
        "mode": data.get("mode", "UNKNOWN"),
        "candidate_permission": data.get("permissions", {}).get(
            "candidate_application_permission", ""
        ),
        "gate_count": len(gates) if isinstance(gates, list) else 0,
        "pending_gates": [
            item.get("gate", "")
            for item in gates
            if isinstance(item, dict) and item.get("status") != "APPROVED"
        ] if isinstance(gates, list) else [],
        "hard_errors": len(result.errors),
        "warnings": len(result.warnings),
        "network_allowed": False,
        "token_acquisition_allowed": False,
        "write_back_allowed": False,
        "formal_effect": False,
    }
