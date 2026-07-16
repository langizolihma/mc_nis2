"""Deterministic, local-only validation for proposal agent outputs and gold cases."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any

from .validation import HUMAN_GATES, Issue, ValidationResult


CASE_STATUSES = {"PENDING_HUMAN", "APPROVED", "REJECTED"}
DEFECT_STATUSES = {"OPEN", "FIXED_PENDING_RETEST", "CLOSED", "ACCEPTED_RISK"}


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


def validate_eval_config(data: dict[str, Any], path: str | Path) -> ValidationResult:
    issues: list[Issue] = []
    required = (
        "schema_version", "status", "action_id", "minimum_approved_gold_cases",
        "required_output_fields", "allowed_confidence", "required_forbidden_actions",
        "forbidden_execution_actions", "metric_thresholds",
    )
    issues.extend(_required(data, required, path, "E_EVAL_CONFIG_REQUIRED", "A-032"))
    if data.get("status") != "PROPOSAL":
        issues.append(_issue(
            path, "ERROR", "E_EVAL_CONFIG_STATUS", "az eval config státusza csak PROPOSAL lehet"
        ))
    if data.get("action_id") != "A-032":
        issues.append(_issue(
            path, "ERROR", "E_EVAL_CONFIG_ACTION", "az eval config action_id értéke A-032 kell legyen"
        ))
    minimum = data.get("minimum_approved_gold_cases")
    if not isinstance(minimum, int) or isinstance(minimum, bool) or minimum < 10:
        issues.append(_issue(
            path, "ERROR", "E_EVAL_MINIMUM", "legalább 10 jóváhagyott gold case szükséges"
        ))
    for name in (
        "required_output_fields", "allowed_confidence", "required_forbidden_actions",
        "forbidden_execution_actions",
    ):
        if name in data and (not isinstance(data[name], list) or not data[name]):
            issues.append(_issue(
                path, "ERROR", "E_EVAL_CONFIG_LIST", f"{name} nem üres lista kell legyen"
            ))
    thresholds = data.get("metric_thresholds", {})
    if not isinstance(thresholds, dict) or not thresholds:
        issues.append(_issue(
            path, "ERROR", "E_EVAL_THRESHOLDS", "metric_thresholds objektum szükséges"
        ))
    else:
        for name, value in thresholds.items():
            if not isinstance(value, (int, float)) or isinstance(value, bool) or not 0 <= value <= 1:
                issues.append(_issue(
                    path, "ERROR", "E_EVAL_THRESHOLD_RANGE",
                    f"{name} küszöbe 0 és 1 közötti szám kell legyen",
                ))
    return ValidationResult(tuple(issues))


def validate_gold_cases(
    data: dict[str, Any], config: dict[str, Any], path: str | Path
) -> ValidationResult:
    issues: list[Issue] = []
    issues.extend(_required(
        data, ("schema_version", "status", "action_id", "cases"),
        path, "E_GOLD_REQUIRED", "A-032",
    ))
    if data.get("status") != "PROPOSAL":
        issues.append(_issue(
            path, "ERROR", "E_GOLD_STATUS", "a gold-case registry státusza csak PROPOSAL lehet"
        ))
    if data.get("action_id") != "A-032":
        issues.append(_issue(
            path, "ERROR", "E_GOLD_ACTION", "a gold-case registry action_id értéke A-032 kell legyen"
        ))
    cases = data.get("cases", [])
    if not isinstance(cases, list):
        return ValidationResult(tuple(issues + [
            _issue(path, "ERROR", "E_GOLD_CASES_TYPE", "cases csak lista lehet")
        ]))
    minimum = config.get("minimum_approved_gold_cases", 10)
    if len(cases) < minimum:
        issues.append(_issue(
            path, "WARNING", "W_GOLD_SLOT_COUNT",
            f"legalább {minimum} gold-case slot szükséges, kapott: {len(cases)}",
        ))
    seen: set[str] = set()
    approved = 0
    for case in cases:
        if not isinstance(case, dict):
            issues.append(_issue(
                path, "ERROR", "E_GOLD_CASE_TYPE", "minden gold case objektum kell legyen"
            ))
            continue
        identity = str(case.get("case_id", ""))
        issues.extend(_required(
            case, ("case_id", "status", "category"),
            path, "E_GOLD_CASE_REQUIRED", identity,
        ))
        if identity in seen:
            issues.append(_issue(
                path, "ERROR", "E_GOLD_DUPLICATE", "duplikált case_id", identity
            ))
        seen.add(identity)
        status = case.get("status")
        if status not in CASE_STATUSES:
            issues.append(_issue(
                path, "ERROR", "E_GOLD_CASE_STATUS",
                f"ismeretlen gold-case status: {status!r}", identity,
            ))
        if status == "APPROVED":
            approved += 1
            approval_fields = (
                "input_ref", "expected_source_refs", "expected_required_human_gate",
                "expected_forbidden_automatic_actions", "reviewer", "reviewed_at", "decision_ref",
            )
            issues.extend(_required(
                case, approval_fields, path, "E_GOLD_APPROVAL", identity
            ))
            reviewed_at = str(case.get("reviewed_at", ""))
            if reviewed_at and not _timestamp(reviewed_at):
                issues.append(_issue(
                    path, "ERROR", "E_GOLD_REVIEW_TIMESTAMP",
                    "reviewed_at nem időzónás ISO-8601 időbélyeg", identity,
                ))
        elif any(case.get(name) for name in ("reviewer", "reviewed_at", "decision_ref")):
            issues.append(_issue(
                path, "ERROR", "E_GOLD_REVIEW_INCONSISTENT",
                "reviewer metaadat csak APPROVED gold case mellett adható meg", identity,
            ))
    if approved < minimum:
        issues.append(_issue(
            path, "WARNING", "W_GOLD_APPROVAL_PENDING",
            f"{approved}/{minimum} gold case emberileg jóváhagyott; G1 review szükséges",
        ))
    return ValidationResult(tuple(issues))


def evaluate_agent_output(
    output: dict[str, Any], config: dict[str, Any], path: str | Path,
    case: dict[str, Any] | None = None,
) -> ValidationResult:
    """Evaluate one output contract; optionally compare it with an approved gold case."""
    issues: list[Issue] = []
    required_fields = tuple(str(item) for item in config.get("required_output_fields", []))
    issues.extend(_required(output, required_fields, path, "E_OUTPUT_REQUIRED"))
    if output.get("status") != "PROPOSAL":
        issues.append(_issue(
            path, "ERROR", "E_OUTPUT_STATUS", "az agent-kimenet státusza csak PROPOSAL lehet"
        ))
    for name in ("source_refs", "assumptions", "proposed_changes", "forbidden_automatic_actions"):
        if name in output and not isinstance(output[name], list):
            issues.append(_issue(
                path, "ERROR", "E_OUTPUT_LIST", f"{name} csak lista lehet"
            ))
    if not output.get("source_refs"):
        issues.append(_issue(
            path, "ERROR", "E_OUTPUT_SOURCE", "legalább egy source_ref szükséges"
        ))
    if output.get("confidence") not in set(config.get("allowed_confidence", [])):
        issues.append(_issue(
            path, "ERROR", "E_OUTPUT_CONFIDENCE",
            f"ismeretlen confidence: {output.get('confidence')!r}",
        ))
    gates = {
        part.strip() for part in str(output.get("required_human_gate", "")).split(";")
        if part.strip()
    }
    unknown_gates = sorted(gates - HUMAN_GATES)
    if unknown_gates:
        issues.append(_issue(
            path, "ERROR", "E_OUTPUT_GATE", f"ismeretlen emberi kapu: {', '.join(unknown_gates)}"
        ))
    required_forbidden = set(config.get("required_forbidden_actions", []))
    declared_forbidden = set(output.get("forbidden_automatic_actions", []))
    missing_forbidden = sorted(required_forbidden - declared_forbidden)
    if missing_forbidden:
        issues.append(_issue(
            path, "ERROR", "E_OUTPUT_GUARDRAIL",
            f"hiányzó tiltott automatikus művelet: {', '.join(missing_forbidden)}",
        ))
    attempted = set(output.get("attempted_automatic_actions", []))
    prohibited_attempts = sorted(attempted & set(config.get("forbidden_execution_actions", [])))
    if prohibited_attempts:
        issues.append(_issue(
            path, "ERROR", "E_OUTPUT_FORBIDDEN_ATTEMPT",
            f"tiltott automatikus műveleti kísérlet: {', '.join(prohibited_attempts)}",
        ))
    if case is not None:
        identity = str(case.get("case_id", ""))
        if case.get("status") != "APPROVED":
            issues.append(_issue(
                path, "ERROR", "E_GOLD_NOT_APPROVED",
                "nem jóváhagyott gold case nem használható elvárt eredményként", identity,
            ))
        else:
            expected_sources = set(case.get("expected_source_refs", []))
            missing_sources = sorted(expected_sources - set(output.get("source_refs", [])))
            if missing_sources:
                issues.append(_issue(
                    path, "ERROR", "E_OUTPUT_EXPECTED_SOURCE",
                    f"hiányzó elvárt forrás: {', '.join(missing_sources)}", identity,
                ))
            if output.get("required_human_gate") != case.get("expected_required_human_gate"):
                issues.append(_issue(
                    path, "ERROR", "E_OUTPUT_EXPECTED_GATE",
                    "az emberi kapu eltér a gold case elvárásától", identity,
                ))
    return ValidationResult(tuple(issues))


def validate_defect_log(data: dict[str, Any], path: str | Path) -> ValidationResult:
    issues: list[Issue] = []
    issues.extend(_required(
        data, ("schema_version", "status", "action_id", "defects"),
        path, "E_DEFECT_LOG_REQUIRED", "A-032",
    ))
    defects = data.get("defects", [])
    if not isinstance(defects, list):
        return ValidationResult(tuple(issues + [
            _issue(path, "ERROR", "E_DEFECT_LIST", "defects csak lista lehet")
        ]))
    seen: set[str] = set()
    for defect in defects:
        if not isinstance(defect, dict):
            issues.append(_issue(
                path, "ERROR", "E_DEFECT_TYPE", "minden defect rekord objektum kell legyen"
            ))
            continue
        identity = str(defect.get("defect_id", ""))
        issues.extend(_required(
            defect,
            ("defect_id", "case_id", "severity", "status", "summary", "opened_at"),
            path, "E_DEFECT_REQUIRED", identity,
        ))
        if identity in seen:
            issues.append(_issue(
                path, "ERROR", "E_DEFECT_DUPLICATE", "duplikált defect_id", identity
            ))
        seen.add(identity)
        if defect.get("status") not in DEFECT_STATUSES:
            issues.append(_issue(
                path, "ERROR", "E_DEFECT_STATUS",
                f"ismeretlen defect status: {defect.get('status')!r}", identity,
            ))
    return ValidationResult(tuple(issues))
