"""Validation for the proposal-only physical-security walkthrough package."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


REQUIRED_CONTROLS = {"12.1", "12.2", "12.6", "12.17", "12.22", "12.31", "12.33", "12.40", "12.42"}
ASSESSMENT_STATUSES = {"NOT_ASSESSED", "CONFORMING", "GAP", "NOT_APPLICABLE"}
REQUIRED_PHOTO_RULES = {
    "protected_store_only", "metadata_only_in_git", "avoid_people_and_badges",
    "avoid_screens_secrets_and_access_codes", "owner_authorization_required",
}


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def validate_physical_security_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Ensure no site condition is asserted without a human observation and evidence."""
    issues: list[Issue] = []
    required = (
        "schema_version", "status", "action_id", "source_refs", "site_scope",
        "walkthrough", "control_checks", "gap_register", "quick_fixes",
        "photo_rules", "human_approval",
    )
    for field in required:
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_PHYSICAL_REQUIRED", f"hiányzó kötelező mező: {field}", "A-020"))
    if data.get("action_id") != "A-020":
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_ACTION", "az action_id értéke A-020 kell legyen"))
    if data.get("status") not in {"PROPOSAL", "READY_FOR_REVIEW", "APPROVED"}:
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))

    site_scope = data.get("site_scope", [])
    if not isinstance(site_scope, list):
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_SITE_TYPE", "site_scope lista szükséges"))
        site_scope = []
    if not site_scope:
        issues.append(_issue(path, "WARNING", "W_PHYSICAL_SITE_PENDING", "a telephelyek és védett területek emberi kijelölésre várnak"))

    walkthrough = data.get("walkthrough", {})
    if not isinstance(walkthrough, dict):
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_WALKTHROUGH_TYPE", "walkthrough objektum szükséges"))
        walkthrough = {}
    for field in ("status", "coordinator", "walkthrough_lead", "required_gate", "performed_at", "participants"):
        if field not in walkthrough:
            issues.append(_issue(path, "ERROR", "E_PHYSICAL_WALKTHROUGH_REQUIRED", f"hiányzó walkthrough mező: {field}"))
    if walkthrough.get("required_gate") != "G2_SECURITY_LEGAL":
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_GATE", "a bejárás adat- és fotókezelése G2 kaput igényel"))
    if walkthrough.get("status") == "NOT_PERFORMED":
        if walkthrough.get("performed_at") or walkthrough.get("participants"):
            issues.append(_issue(path, "ERROR", "E_PHYSICAL_FALSE_EXECUTION", "nem végrehajtott bejáráshoz nem tartozhat időpont vagy résztvevő"))
        issues.append(_issue(path, "WARNING", "W_PHYSICAL_WALKTHROUGH_PENDING", "a helyszíni bejárás még nem történt meg"))
    elif walkthrough.get("status") == "PERFORMED":
        if not _timestamp(str(walkthrough.get("performed_at", ""))) or not walkthrough.get("participants"):
            issues.append(_issue(path, "ERROR", "E_PHYSICAL_EXECUTION_EVIDENCE", "végrehajtott bejáráshoz időzónás időpont és résztvevőlista szükséges"))
    else:
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_WALKTHROUGH_STATUS", "a walkthrough status NOT_PERFORMED vagy PERFORMED lehet"))

    checks = data.get("control_checks", [])
    if not isinstance(checks, list):
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_CHECK_TYPE", "control_checks lista szükséges"))
        checks = []
    seen: set[str] = set()
    for item in checks:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_PHYSICAL_CHECK_RECORD", "minden kontroll rekord objektum kell legyen"))
            continue
        identity = str(item.get("control_ref", ""))
        for field in ("control_ref", "topic", "question", "status", "observation", "evidence_refs", "observed_by", "observed_at"):
            if field not in item:
                issues.append(_issue(path, "ERROR", "E_PHYSICAL_CHECK_REQUIRED", f"hiányzó kontrollmező: {field}", identity))
        if identity in seen:
            issues.append(_issue(path, "ERROR", "E_PHYSICAL_CHECK_DUPLICATE", "duplikált kontroll", identity))
        seen.add(identity)
        status = item.get("status")
        if status not in ASSESSMENT_STATUSES:
            issues.append(_issue(path, "ERROR", "E_PHYSICAL_ASSESSMENT_STATUS", "ismeretlen assessment status", identity))
        if status == "NOT_ASSESSED":
            if item.get("observation") or item.get("evidence_refs") or item.get("observed_by") or item.get("observed_at"):
                issues.append(_issue(path, "ERROR", "E_PHYSICAL_UNOBSERVED_FACT", "NOT_ASSESSED kontrollhoz nem rögzíthető megfigyelés vagy evidencia", identity))
        else:
            if not item.get("observation") or not item.get("evidence_refs") or not item.get("observed_by") or not _timestamp(str(item.get("observed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_PHYSICAL_OBSERVATION_EVIDENCE", "értékelt kontrollhoz megfigyelés, evidencia, megfigyelő és időzónás időpont szükséges", identity))
    if seen != REQUIRED_CONTROLS:
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_CONTROL_COVERAGE", f"hibás kontroll-lefedettség; hiányzik={sorted(REQUIRED_CONTROLS - seen)}, ismeretlen={sorted(seen - REQUIRED_CONTROLS)}"))

    gaps = data.get("gap_register", [])
    if not isinstance(gaps, list):
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_GAP_TYPE", "gap_register lista szükséges"))
        gaps = []
    for item in gaps:
        if not isinstance(item, dict) or any(not item.get(field) for field in ("gap_id", "control_ref", "description", "risk", "owner", "target_date", "evidence_refs", "review_status")):
            issues.append(_issue(path, "ERROR", "E_PHYSICAL_GAP_REQUIRED", "minden gaphez teljes, forráshivatkozott rekord szükséges"))
    quick_fixes = data.get("quick_fixes", [])
    if not isinstance(quick_fixes, list):
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_QUICK_FIX_TYPE", "quick_fixes lista szükséges"))

    photo_rules = set(data.get("photo_rules", [])) if isinstance(data.get("photo_rules"), list) else set()
    missing_rules = sorted(REQUIRED_PHOTO_RULES - photo_rules)
    if missing_rules:
        issues.append(_issue(path, "ERROR", "E_PHYSICAL_PHOTO_RULE", f"hiányzó fotókezelési szabály: {', '.join(missing_rules)}"))

    approval = data.get("human_approval", {})
    if data.get("status") == "APPROVED":
        if not isinstance(approval, dict) or any(not approval.get(field) for field in ("reviewer", "approver", "approved_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_PHYSICAL_APPROVAL", "APPROVED tervhez teljes emberi approval rekord szükséges"))
    else:
        issues.append(_issue(path, "WARNING", "W_PHYSICAL_REVIEW_PENDING", "a scope, checklist, fotókezelés és gap-ek G1/G2 review-ra várnak"))
    return ValidationResult(tuple(issues))
