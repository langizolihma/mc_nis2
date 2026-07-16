"""Validation rules for the proposal-only repeat-audit roadmap."""

from __future__ import annotations

from datetime import date
from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


APPROVED_INTERNAL_TARGET = date(2027, 9, 30)
AUTHORITY_LATEST_DATE = date(2027, 12, 31)
ROADMAP_STATUSES = {"PROPOSAL", "APPROVED"}
MILESTONE_STATUSES = {"PROPOSED", "APPROVED_BASELINE"}


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _parse_date(value: Any) -> date | None:
    try:
        return date.fromisoformat(str(value))
    except ValueError:
        return None


def validate_repeat_audit_roadmap(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Validate dates, required gates and the approved D-021 baseline."""
    issues: list[Issue] = []
    required = (
        "schema_version", "status", "action_id", "source_refs",
        "approved_internal_target", "authority_latest_date", "human_gates",
        "milestones", "mock_audit_scope", "human_approval",
    )
    for field in required:
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_REPEAT_REQUIRED", f"hiányzó kötelező mező: {field}", "A-030"))

    if data.get("action_id") != "A-030":
        issues.append(_issue(path, "ERROR", "E_REPEAT_ACTION", "az action_id értéke A-030 kell legyen"))
    if data.get("status") not in ROADMAP_STATUSES:
        issues.append(_issue(path, "ERROR", "E_REPEAT_STATUS", f"ismeretlen roadmap status: {data.get('status')!r}"))

    target = _parse_date(data.get("approved_internal_target"))
    latest = _parse_date(data.get("authority_latest_date"))
    if target != APPROVED_INTERNAL_TARGET:
        issues.append(_issue(path, "ERROR", "E_REPEAT_TARGET", "a jóváhagyott belső céldátum csak 2027-09-30 lehet (D-021)"))
    if latest != AUTHORITY_LATEST_DATE:
        issues.append(_issue(path, "ERROR", "E_REPEAT_LATEST", "a hatósági végső dátum csak 2027-12-31 lehet"))
    if target and latest and target > latest:
        issues.append(_issue(path, "ERROR", "E_REPEAT_DATE_ORDER", "a belső céldátum a hatósági végső dátum után van"))

    gates = set(data.get("human_gates", [])) if isinstance(data.get("human_gates"), list) else set()
    for gate in ("G4_EXTERNAL_SUBMISSION", "G5_PURCHASE"):
        if gate not in gates:
            issues.append(_issue(path, "ERROR", "E_REPEAT_GATE", f"hiányzó kötelező kapu: {gate}"))

    milestones = data.get("milestones", [])
    if not isinstance(milestones, list) or not milestones:
        issues.append(_issue(path, "ERROR", "E_REPEAT_MILESTONES", "nem üres milestones lista szükséges"))
        milestones = []
    seen: set[str] = set()
    parsed: list[tuple[dict[str, Any], date]] = []
    for item in milestones:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_REPEAT_MILESTONE_TYPE", "minden mérföldkő objektum kell legyen"))
            continue
        identity = str(item.get("milestone_id", ""))
        for field in ("milestone_id", "type", "date", "status", "required_output", "required_gate"):
            if item.get(field) in (None, ""):
                issues.append(_issue(path, "ERROR", "E_REPEAT_MILESTONE_REQUIRED", f"hiányzó mező: {field}", identity))
        if identity in seen:
            issues.append(_issue(path, "ERROR", "E_REPEAT_MILESTONE_DUPLICATE", "duplikált milestone_id", identity))
        seen.add(identity)
        item_date = _parse_date(item.get("date"))
        if item_date is None:
            issues.append(_issue(path, "ERROR", "E_REPEAT_MILESTONE_DATE", "érvénytelen ISO-dátum", identity))
            continue
        parsed.append((item, item_date))
        if target and item_date > target:
            issues.append(_issue(path, "ERROR", "E_REPEAT_AFTER_TARGET", "mérföldkő a belső céldátum után van", identity))
        if item.get("status") not in MILESTONE_STATUSES:
            issues.append(_issue(path, "ERROR", "E_REPEAT_MILESTONE_STATUS", "ismeretlen mérföldkő-státusz", identity))
        if item.get("status") == "APPROVED_BASELINE":
            if item_date != APPROVED_INTERNAL_TARGET or item.get("decision_ref") != "D-021":
                issues.append(_issue(path, "ERROR", "E_REPEAT_BASELINE", "csak a D-021 szerinti 2027-09-30 céldátum jóváhagyott baseline", identity))

    quarterly = [(item, value) for item, value in parsed if item.get("type") == "QUARTERLY_READINESS_GATE"]
    if len(quarterly) < 4:
        issues.append(_issue(path, "ERROR", "E_REPEAT_QUARTERLY", "legalább négy negyedéves readiness gate szükséges"))
    mocks = [(item, value) for item, value in parsed if item.get("type") == "MOCK_AUDIT"]
    buffers = [(item, value) for item, value in parsed if item.get("type") == "REMEDIATION_BUFFER_END"]
    procurement = [(item, value) for item, value in parsed if item.get("type") == "AUDITOR_PROCUREMENT_GATE"]
    if not mocks:
        issues.append(_issue(path, "ERROR", "E_REPEAT_MOCK", "legalább egy mock audit szükséges"))
    if not buffers:
        issues.append(_issue(path, "ERROR", "E_REPEAT_BUFFER", "javítási buffer végpont szükséges"))
    if not procurement:
        issues.append(_issue(path, "ERROR", "E_REPEAT_PROCUREMENT", "auditor-procurement döntési kapu szükséges"))
    if mocks and buffers and min(value for _, value in buffers) <= min(value for _, value in mocks):
        issues.append(_issue(path, "ERROR", "E_REPEAT_BUFFER_ORDER", "a javítási buffer vége a mock audit után kell legyen"))
    for item, _ in procurement:
        if item.get("required_gate") != "G5_PURCHASE":
            issues.append(_issue(path, "ERROR", "E_REPEAT_PROCUREMENT_GATE", "az auditor-procurement mérföldkő G5_PURCHASE kaput igényel", str(item.get("milestone_id", ""))))

    scope = data.get("mock_audit_scope", {})
    if not isinstance(scope, dict) or not scope.get("status"):
        issues.append(_issue(path, "ERROR", "E_REPEAT_SCOPE", "mock_audit_scope objektum és státusz szükséges"))
    elif scope.get("status") == "TBD_HUMAN":
        issues.append(_issue(path, "WARNING", "W_REPEAT_SCOPE_PENDING", "a mock audit pontos scope-ja G1/G4 emberi döntésre vár"))

    approval = data.get("human_approval", {})
    if data.get("status") == "APPROVED":
        if not isinstance(approval, dict) or any(not approval.get(field) for field in ("reviewer", "approved_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_REPEAT_APPROVAL", "APPROVED roadmaphoz teljes emberi approval rekord szükséges"))
    else:
        issues.append(_issue(path, "WARNING", "W_REPEAT_REVIEW_PENDING", "a köztes dátumok és a mock audit ütemezése G4 review-ra vár"))
    return ValidationResult(tuple(issues))
