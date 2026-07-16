"""Validation for the proposal-only quarterly reporting calendar and workflow."""

from __future__ import annotations

from calendar import monthrange
from datetime import date
from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


PLAN_STATUSES = {"PROPOSAL", "APPROVED"}
ANCHOR_STATUSES = {"PLANNING_DEADLINE_NOT_ACTUAL_SUBMISSION", "ACTUAL_SUBMISSION_VERIFIED"}
REQUIRED_SECTIONS = {
    "vezetői_összefoglaló", "időszak_és_scope", "akcióstátusz",
    "evidencia_és_kontroll", "kockázat_és_eltérés", "következő_negyedév",
    "forrásjegyzék", "emberi_jóváhagyás",
}


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _parse_date(value: Any) -> date | None:
    try:
        return date.fromisoformat(str(value))
    except ValueError:
        return None


def _add_months(value: date, months: int) -> date:
    month_index = value.month - 1 + months
    year = value.year + month_index // 12
    month = month_index % 12 + 1
    return date(year, month, min(value.day, monthrange(year, month)[1]))


def validate_quarterly_reporting_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Keep the reporting workflow traceable and behind G1/G2/G4 gates."""
    issues: list[Issue] = []
    required = (
        "schema_version", "status", "action_id", "source_refs", "submission_anchor",
        "schedule_rule", "human_gates", "reports", "dry_run", "template_sections",
        "human_approval",
    )
    for field in required:
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_QUARTERLY_REQUIRED", f"hiányzó kötelező mező: {field}", "A-008"))
    if data.get("action_id") != "A-008":
        issues.append(_issue(path, "ERROR", "E_QUARTERLY_ACTION", "az action_id értéke A-008 kell legyen"))
    if data.get("status") not in PLAN_STATUSES:
        issues.append(_issue(path, "ERROR", "E_QUARTERLY_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))

    anchor = data.get("submission_anchor", {})
    if not isinstance(anchor, dict):
        issues.append(_issue(path, "ERROR", "E_QUARTERLY_ANCHOR_TYPE", "submission_anchor objektum szükséges"))
        anchor = {}
    anchor_date = _parse_date(anchor.get("date"))
    anchor_status = anchor.get("status")
    if anchor_date is None:
        issues.append(_issue(path, "ERROR", "E_QUARTERLY_ANCHOR_DATE", "érvénytelen submission anchor dátum"))
    if anchor_status not in ANCHOR_STATUSES:
        issues.append(_issue(path, "ERROR", "E_QUARTERLY_ANCHOR_STATUS", "ismeretlen submission anchor státusz"))
    if anchor_status == "ACTUAL_SUBMISSION_VERIFIED":
        for field in ("evidence_ref", "reviewer", "verified_at"):
            if not anchor.get(field):
                issues.append(_issue(path, "ERROR", "E_QUARTERLY_ANCHOR_EVIDENCE", f"tényleges benyújtáshoz hiányzik: {field}"))
    else:
        issues.append(_issue(path, "WARNING", "W_QUARTERLY_ACTUAL_SUBMISSION_PENDING", "a tényleges benyújtási dátum és evidencia még nem áll rendelkezésre; a naptár újraszámítandó"))

    if data.get("schedule_rule") != "EVERY_3_MONTHS_FROM_SUBMISSION_ANCHOR":
        issues.append(_issue(path, "ERROR", "E_QUARTERLY_RULE", "a támogatott szabály: EVERY_3_MONTHS_FROM_SUBMISSION_ANCHOR"))
    gates = set(data.get("human_gates", [])) if isinstance(data.get("human_gates"), list) else set()
    for gate in ("G1_DOMAIN_REVIEW", "G2_SECURITY_LEGAL", "G4_EXTERNAL_SUBMISSION"):
        if gate not in gates:
            issues.append(_issue(path, "ERROR", "E_QUARTERLY_GATE", f"hiányzó kötelező kapu: {gate}"))

    reports = data.get("reports", [])
    if not isinstance(reports, list) or len(reports) < 4:
        issues.append(_issue(path, "ERROR", "E_QUARTERLY_REPORT_COUNT", "legalább négy negyedéves riportterv szükséges"))
        reports = [] if not isinstance(reports, list) else reports
    seen: set[str] = set()
    for index, report in enumerate(reports, start=1):
        if not isinstance(report, dict):
            issues.append(_issue(path, "ERROR", "E_QUARTERLY_REPORT_TYPE", "minden report objektum kell legyen"))
            continue
        identity = str(report.get("report_id", ""))
        for field in ("report_id", "status", "due_date", "data_cutoff", "draft_ready", "owner_review", "required_gate"):
            if report.get(field) in (None, ""):
                issues.append(_issue(path, "ERROR", "E_QUARTERLY_REPORT_REQUIRED", f"hiányzó mező: {field}", identity))
        if identity in seen:
            issues.append(_issue(path, "ERROR", "E_QUARTERLY_REPORT_DUPLICATE", "duplikált report_id", identity))
        seen.add(identity)
        due = _parse_date(report.get("due_date"))
        cutoff = _parse_date(report.get("data_cutoff"))
        draft = _parse_date(report.get("draft_ready"))
        review = _parse_date(report.get("owner_review"))
        if None in (due, cutoff, draft, review):
            issues.append(_issue(path, "ERROR", "E_QUARTERLY_REPORT_DATE", "érvénytelen riportdátum", identity))
            continue
        if not (cutoff <= draft <= review < due):
            issues.append(_issue(path, "ERROR", "E_QUARTERLY_WORKFLOW_ORDER", "a sorrend data_cutoff <= draft_ready <= owner_review < due_date kell legyen", identity))
        if anchor_date and due != _add_months(anchor_date, index * 3):
            issues.append(_issue(path, "ERROR", "E_QUARTERLY_DUE", "a due_date nem háromhavi lépés az anchor dátumtól", identity))
        if report.get("status") != "PROPOSED" and data.get("status") != "APPROVED":
            issues.append(_issue(path, "ERROR", "E_QUARTERLY_REPORT_STATUS", "nem jóváhagyott tervben a riport státusza csak PROPOSED lehet", identity))
        if report.get("required_gate") != "G4_EXTERNAL_SUBMISSION":
            issues.append(_issue(path, "ERROR", "E_QUARTERLY_EXTERNAL_GATE", "minden külső riport G4 kaput igényel", identity))

    dry_run = data.get("dry_run", {})
    if not isinstance(dry_run, dict) or any(not dry_run.get(field) for field in ("date", "status", "required_output", "required_gate")):
        issues.append(_issue(path, "ERROR", "E_QUARTERLY_DRY_RUN", "teljes dry_run rekord szükséges"))
    elif dry_run.get("required_gate") != "G1_DOMAIN_REVIEW":
        issues.append(_issue(path, "ERROR", "E_QUARTERLY_DRY_RUN_GATE", "a dry run G1 review-t igényel"))

    sections = set(data.get("template_sections", [])) if isinstance(data.get("template_sections"), list) else set()
    missing_sections = sorted(REQUIRED_SECTIONS - sections)
    if missing_sections:
        issues.append(_issue(path, "ERROR", "E_QUARTERLY_TEMPLATE", f"hiányzó sablonszakasz: {', '.join(missing_sections)}"))

    approval = data.get("human_approval", {})
    if data.get("status") == "APPROVED":
        if not isinstance(approval, dict) or any(not approval.get(field) for field in ("legal_or_ibf_reviewer", "approver", "approved_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_QUARTERLY_APPROVAL", "APPROVED tervhez teljes G2/G4 emberi approval rekord szükséges"))
    else:
        issues.append(_issue(path, "WARNING", "W_QUARTERLY_REVIEW_PENDING", "az ütemezési logika, sablon és workflow G2/G4 jóváhagyásra vár"))
    return ValidationResult(tuple(issues))
