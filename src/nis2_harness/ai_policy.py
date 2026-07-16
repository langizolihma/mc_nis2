"""Validation rules for the proposal-only AI usage and data-handling policy."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any

from .validation import HUMAN_GATES, Issue, ValidationResult


POLICY_STATUSES = {"DRAFT_FOR_G2_REVIEW", "APPROVED"}
ENVIRONMENT_STATUSES = {"BLOCKED_PENDING_G2", "APPROVED"}
PROCESSING_DECISIONS = {"ALLOWED", "REDACTION_REQUIRED", "BLOCKED"}


def _issue(
    path: str | Path, severity: str, code: str, message: str, identity: str = ""
) -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _required(
    value: dict[str, Any], names: tuple[str, ...], path: str | Path,
    code: str, identity: str = "",
) -> list[Issue]:
    return [
        _issue(path, "ERROR", code, f"hiányzó kötelező mező: {name}", identity)
        for name in names if name not in value or value[name] in (None, "")
    ]


def _timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def validate_ai_policy(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Validate that the policy is deny-by-default and retains human authority."""
    issues: list[Issue] = []
    top_fields = (
        "schema_version", "status", "action_id", "source_refs",
        "external_environment", "handling_classes", "redaction_requirements",
        "source_hierarchy", "prompt_injection_controls", "required_output_fields",
        "required_forbidden_actions", "human_gates", "audit_log_fields",
        "human_approval",
    )
    issues.extend(_required(data, top_fields, path, "E_AI_POLICY_REQUIRED", "A-031"))
    status = data.get("status")
    if status not in POLICY_STATUSES:
        issues.append(_issue(
            path, "ERROR", "E_AI_POLICY_STATUS", f"ismeretlen policy status: {status!r}"
        ))
    if data.get("action_id") != "A-031":
        issues.append(_issue(
            path, "ERROR", "E_AI_POLICY_ACTION", "a policy action_id értéke A-031 kell legyen"
        ))

    environment = data.get("external_environment", {})
    if not isinstance(environment, dict):
        issues.append(_issue(
            path, "ERROR", "E_AI_ENVIRONMENT_TYPE", "external_environment objektum szükséges"
        ))
        environment = {}
    issues.extend(_required(
        environment, ("status", "environment_ref", "approved_by"),
        path, "E_AI_ENVIRONMENT_REQUIRED",
    ))
    environment_status = environment.get("status")
    if environment_status not in ENVIRONMENT_STATUSES:
        issues.append(_issue(
            path, "ERROR", "E_AI_ENVIRONMENT_STATUS",
            f"ismeretlen environment status: {environment_status!r}",
        ))
    if environment_status == "APPROVED":
        for field in ("environment_ref", "approved_by", "approved_at"):
            value = str(environment.get(field, ""))
            if not value or value.upper().startswith("TBD"):
                issues.append(_issue(
                    path, "ERROR", "E_AI_ENVIRONMENT_APPROVAL",
                    f"APPROVED környezethez valós {field} szükséges",
                ))
        approved_at = str(environment.get("approved_at", ""))
        if approved_at and not _timestamp(approved_at):
            issues.append(_issue(
                path, "ERROR", "E_AI_ENVIRONMENT_TIMESTAMP",
                "external_environment.approved_at nem időzónás ISO-8601 időbélyeg",
            ))
    else:
        issues.append(_issue(
            path, "WARNING", "W_AI_ENVIRONMENT_PENDING",
            "a külső AI-környezet D-017/G2 jóváhagyásig blokkolt",
        ))

    classes = data.get("handling_classes", [])
    if not isinstance(classes, list) or not classes:
        issues.append(_issue(
            path, "ERROR", "E_AI_CLASS_LIST", "legalább egy handling class szükséges"
        ))
        classes = []
    seen: set[str] = set()
    prohibited_class_found = False
    for item in classes:
        if not isinstance(item, dict):
            issues.append(_issue(
                path, "ERROR", "E_AI_CLASS_TYPE", "minden handling class objektum kell legyen"
            ))
            continue
        identity = str(item.get("class_id", ""))
        issues.extend(_required(
            item, ("class_id", "name", "description", "local_processing", "external_processing"),
            path, "E_AI_CLASS_REQUIRED", identity,
        ))
        if identity in seen:
            issues.append(_issue(
                path, "ERROR", "E_AI_CLASS_DUPLICATE", "duplikált class_id", identity
            ))
        seen.add(identity)
        for field in ("local_processing", "external_processing"):
            if item.get(field) not in PROCESSING_DECISIONS:
                issues.append(_issue(
                    path, "ERROR", "E_AI_PROCESSING_DECISION",
                    f"ismeretlen {field}: {item.get(field)!r}", identity,
                ))
        if item.get("external_processing") != "BLOCKED" and environment_status != "APPROVED":
            issues.append(_issue(
                path, "ERROR", "E_AI_EXTERNAL_DEFAULT_DENY",
                "külső feldolgozás nem engedhető jóváhagyott környezet nélkül", identity,
            ))
        if item.get("local_processing") == "BLOCKED" and item.get("external_processing") == "BLOCKED":
            prohibited_class_found = True
    if not prohibited_class_found:
        issues.append(_issue(
            path, "ERROR", "E_AI_PROHIBITED_CLASS",
            "legalább egy minden AI-feldolgozásból kizárt osztály szükséges",
        ))

    required_lists = (
        "redaction_requirements", "source_hierarchy", "prompt_injection_controls",
        "required_output_fields", "required_forbidden_actions", "audit_log_fields",
    )
    for name in required_lists:
        if name in data and (not isinstance(data[name], list) or not data[name]):
            issues.append(_issue(
                path, "ERROR", "E_AI_POLICY_LIST", f"{name} nem üres lista kell legyen"
            ))

    required_guardrails = {
        "close_action", "accept_evidence", "submit_external", "change_production", "purchase"
    }
    guardrails = set(data.get("required_forbidden_actions", []))
    missing_guardrails = sorted(required_guardrails - guardrails)
    if missing_guardrails:
        issues.append(_issue(
            path, "ERROR", "E_AI_POLICY_GUARDRAIL",
            f"hiányzó kötelező tiltás: {', '.join(missing_guardrails)}",
        ))

    gates = data.get("human_gates", {})
    if not isinstance(gates, dict):
        issues.append(_issue(
            path, "ERROR", "E_AI_GATES_TYPE", "human_gates objektum szükséges"
        ))
    else:
        declared = set(str(value) for value in gates.values())
        unknown = sorted(declared - HUMAN_GATES)
        if unknown:
            issues.append(_issue(
                path, "ERROR", "E_AI_GATE", f"ismeretlen emberi kapu: {', '.join(unknown)}"
            ))
        for required_gate in HUMAN_GATES:
            if required_gate not in declared:
                issues.append(_issue(
                    path, "ERROR", "E_AI_GATE_COVERAGE",
                    f"a policy nem rendeli hozzá a(z) {required_gate} kaput",
                ))

    approval = data.get("human_approval", {})
    if not isinstance(approval, dict):
        issues.append(_issue(
            path, "ERROR", "E_AI_APPROVAL_TYPE", "human_approval objektum szükséges"
        ))
        approval = {}
    if status == "APPROVED":
        for field in ("security_reviewer", "legal_reviewer", "approved_at", "decision_ref"):
            value = str(approval.get(field, ""))
            if not value or value.upper().startswith("TBD"):
                issues.append(_issue(
                    path, "ERROR", "E_AI_POLICY_APPROVAL",
                    f"APPROVED policyhoz valós human_approval.{field} szükséges",
                ))
        approved_at = str(approval.get("approved_at", ""))
        if approved_at and not _timestamp(approved_at):
            issues.append(_issue(
                path, "ERROR", "E_AI_POLICY_APPROVAL_TIMESTAMP",
                "human_approval.approved_at nem időzónás ISO-8601 időbélyeg",
            ))
    else:
        issues.append(_issue(
            path, "WARNING", "W_AI_POLICY_APPROVAL_PENDING",
            "az AI használati szabály G2 biztonsági és jogi jóváhagyása függőben van",
        ))
    return ValidationResult(tuple(issues))
