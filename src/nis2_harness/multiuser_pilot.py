"""Fail-closed readiness validation for the multi-user portal pilot."""

from __future__ import annotations

from pathlib import Path
from typing import Any
from urllib.parse import urlparse

from .validation import Issue, ValidationResult


EXPECTED_GATES = {
    "G1_DOMAIN_REVIEW",
    "G2_SECURITY_LEGAL",
    "G3_PRODUCTION_CHANGE",
}
EXPECTED_ROLES = {"VIEWER", "TASK_OWNER", "REVIEWER", "PORTAL_ADMIN"}
FORBIDDEN_KEYS = {
    "client_secret",
    "password",
    "private_key",
    "refresh_token",
}


def _issue(
    path: str | Path,
    severity: str,
    code: str,
    message: str,
) -> Issue:
    return Issue(severity, code, message, str(path))


def _walk_keys(value: Any) -> set[str]:
    if isinstance(value, dict):
        keys = {str(key).lower() for key in value}
        for nested in value.values():
            keys.update(_walk_keys(nested))
        return keys
    if isinstance(value, list):
        result: set[str] = set()
        for item in value:
            result.update(_walk_keys(item))
        return result
    return set()


def validate_multiuser_pilot(
    data: dict[str, Any],
    path: str | Path,
) -> ValidationResult:
    """Validate a deployable design without enabling its human gates."""
    issues: list[Issue] = []
    required = {
        "schema_version",
        "status",
        "formal_effect",
        "topology",
        "storage",
        "identity",
        "authorization",
        "sharepoint_upload",
        "backup",
        "runtime_controls",
        "human_gates",
    }
    for field in sorted(required - set(data)):
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_REQUIRED",
                f"hiányzó kötelező mező: {field}",
            )
        )
    if _walk_keys(data) & FORBIDDEN_KEYS:
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_SECRET",
                "titok vagy jelszó nem tárolható a verziókezelt tervben",
            )
        )
    status = data.get("status")
    if status not in {
        "BLOCKED_PENDING_G1_G2_G3",
        "APPROVED_FOR_NON_PRODUCTION_PILOT",
    }:
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_STATUS",
                f"ismeretlen státusz: {status!r}",
            )
        )
    if data.get("formal_effect") is not False:
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_FORMAL_EFFECT",
                "a pilotnak nem lehet formális hatása",
            )
        )

    topology = data.get("topology", {})
    if topology.get("backend_bind_host") not in {
        "127.0.0.1",
        "localhost",
        "::1",
    }:
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_BACKEND_EXPOSURE",
                "a Python backend csak loopback címen hallgathat",
            )
        )
    if topology.get("https_gateway_required") is not True:
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_HTTPS_GATEWAY",
                "a felhasználók előtt HTTPS gateway kötelező",
            )
        )

    storage = data.get("storage", {})
    if storage.get("engine") != "SQLITE_WAL":
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_STORAGE",
                "a pilot tranzakciós SQLite WAL tárolást igényel",
            )
        )
    for field in ("database_path", "attachment_path"):
        value = Path(str(storage.get(field, ""))).as_posix()
        if not value.startswith("portal_runtime/") or ".." in Path(value).parts:
            issues.append(
                _issue(
                    path,
                    "ERROR",
                    "E_MULTIUSER_RUNTIME_PATH",
                    f"{field} csak portal_runtime alatt lehet",
                )
            )

    identity = data.get("identity", {})
    if identity.get("provider") != "MICROSOFT_ENTRA_ID":
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_IDENTITY",
                "Microsoft Entra ID szükséges",
            )
        )
    if identity.get("protocol") != "OIDC_AUTH_CODE_PKCE":
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_PROTOCOL",
                "OIDC authorization code + PKCE szükséges",
            )
        )
    if identity.get("handcrafted_protocol_allowed") is not False:
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_AUTH_LIBRARY",
                "saját készítésű tokenkezelés nem engedélyezett",
            )
        )

    authorization = data.get("authorization", {})
    roles = set(map(str, authorization.get("roles", [])))
    if roles != EXPECTED_ROLES:
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_ROLES",
                "a négy jóváhagyott portalszerepkör szükséges",
            )
        )
    if authorization.get("default_role") != "VIEWER":
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_DEFAULT_ROLE",
                "az alapértelmezett szerepkör csak VIEWER lehet",
            )
        )
    if authorization.get("server_side_enforcement_required") is not True:
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_SERVER_AUTHZ",
                "a szerveroldali jogosultság-ellenőrzés kötelező",
            )
        )

    upload = data.get("sharepoint_upload", {})
    if upload.get("target_site") != (
        "https://metalcom.sharepoint.com/sites/NIS2"
    ):
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_SHAREPOINT_SCOPE",
                "csak a jóváhagyott NIS2 SharePoint-webhely célozható",
            )
        )
    if upload.get("broad_graph_permissions_allowed") is not False:
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_GRAPH_SCOPE",
                "széles Graph-jogosultság nem engedélyezett",
            )
        )

    backup = data.get("backup", {})
    if (
        backup.get("consistent_sqlite_snapshot_required") is not True
        or backup.get("restore_test_required_before_pilot") is not True
    ):
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_BACKUP",
                "konzisztens mentés és pilot előtti visszaállítási próba kell",
            )
        )

    gates = data.get("human_gates", [])
    gate_ids = {
        str(item.get("gate", ""))
        for item in gates
        if isinstance(item, dict)
    }
    all_approved = bool(gates) and all(
        isinstance(item, dict)
        and item.get("status") == "APPROVED"
        and str(item.get("reviewer", "")).strip()
        and not str(item.get("reviewer", "")).upper().startswith("TBD")
        and str(item.get("evidence_ref", "")).strip()
        and not str(item.get("evidence_ref", "")).upper().startswith("TBD")
        for item in gates
    )
    if gate_ids != EXPECTED_GATES:
        issues.append(
            _issue(
                path,
                "ERROR",
                "E_MULTIUSER_GATES",
                "G1, G2 és G3 kapu kötelező",
            )
        )
    for item in gates:
        if isinstance(item, dict) and item.get("status") != "APPROVED":
            issues.append(
                _issue(
                    path,
                    "WARNING",
                    "W_MULTIUSER_GATE_PENDING",
                    f"{item.get('gate', '')} még jóváhagyandó",
                )
            )

    runtime = data.get("runtime_controls", {})
    switches = (
        "publish_enabled",
        "authentication_enabled",
        "role_enforcement_enabled",
        "sharepoint_write_enabled",
    )
    if status == "BLOCKED_PENDING_G1_G2_G3":
        for field in switches:
            if runtime.get(field) is not False:
                issues.append(
                    _issue(
                        path,
                        "ERROR",
                        "E_MULTIUSER_PREMATURE_ENABLE",
                        f"függő kapuk mellett {field}=false kötelező",
                    )
                )
        issues.append(
            _issue(
                path,
                "WARNING",
                "W_MULTIUSER_DESIGN_ONLY",
                "a csomag elkészült, de a hálózati pilot nincs engedélyezve",
            )
        )
    else:
        if not all_approved:
            issues.append(
                _issue(
                    path,
                    "ERROR",
                    "E_MULTIUSER_FALSE_APPROVAL",
                    "pilotstátuszhoz igazolt G1/G2/G3 jóváhagyás kell",
                )
            )
        for field in (
            "publish_enabled",
            "authentication_enabled",
            "role_enforcement_enabled",
        ):
            if runtime.get(field) is not True:
                issues.append(
                    _issue(
                        path,
                        "ERROR",
                        "E_MULTIUSER_RUNTIME_DISABLED",
                        f"jóváhagyott pilothoz {field}=true szükséges",
                    )
                )
        public_url = urlparse(str(topology.get("public_base_url", "")))
        if public_url.scheme != "https" or not public_url.netloc:
            issues.append(
                _issue(
                    path,
                    "ERROR",
                    "E_MULTIUSER_PUBLIC_URL",
                    "jóváhagyott pilothoz valós HTTPS URL kell",
                )
            )
        library = str(identity.get("supported_library", ""))
        if not library or library.upper().startswith("TBD"):
            issues.append(
                _issue(
                    path,
                    "ERROR",
                    "E_MULTIUSER_LIBRARY_PENDING",
                    "jóváhagyott Microsoft auth-könyvtár szükséges",
                )
            )
        if backup.get("last_restore_test_status") != "PASSED":
            issues.append(
                _issue(
                    path,
                    "ERROR",
                    "E_MULTIUSER_RESTORE_NOT_TESTED",
                    "sikeres visszaállítási próba nélkül nem publikálható",
                )
            )
    return ValidationResult(tuple(issues))

