"""Validation for the proposal-only A-019 maintenance and change workflow."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
import re
from typing import Any

from .validation import Issue, ValidationResult


REQUIRED_CONTROLS = {"6.1", "6.2", "10.1", "18.2"}
REQUIRED_WORKSTREAMS = {"CONFIGURATION_BASELINE", "PATCH_MANAGEMENT", "MAINTENANCE", "CHANGE_MANAGEMENT"}
REQUIRED_STAGES = [
    "REQUEST", "RISK_AND_IMPACT", "OWNER_APPROVAL", "G3_APPROVAL",
    "BACKUP_AND_ROLLBACK_PROOF", "SCHEDULED_WINDOW", "IMPLEMENTATION",
    "POST_VALIDATION", "EVIDENCE_REVIEW", "CLOSURE",
]
REQUIRED_EVIDENCE = {
    "baseline_export", "patch_report", "change_ticket", "exception_record",
    "pre_change_backup", "rollback_plan", "rollback_test_or_proof",
    "pre_post_validation", "approval_record", "protected_uri", "sha256", "human_review",
}
REQUIRED_EXCEPTION_FIELDS = {
    "exception_id", "scope_ref", "reason", "risk", "compensating_controls",
    "owner", "approver", "expires_at", "review_status",
}
SHA256_PATTERN = re.compile(r"^[0-9a-fA-F]{64}$")


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def validate_maintenance_change_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Reject unapproved execution, missing rollback proof and silent exceptions."""
    issues: list[Issue] = []
    for field in (
        "schema_version", "status", "action_id", "source_refs", "control_refs",
        "safety", "workflow_stages", "workstreams", "calendar_entries",
        "change_records", "exception_policy", "required_evidence", "human_approval",
    ):
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_MAINT_REQUIRED", f"hiányzó kötelező mező: {field}", "A-019"))
    if data.get("action_id") != "A-019":
        issues.append(_issue(path, "ERROR", "E_MAINT_ACTION", "az action_id értéke A-019 kell legyen"))
    if data.get("status") not in {"PROPOSAL", "READY_FOR_G1", "HUMAN_REVIEWED"}:
        issues.append(_issue(path, "ERROR", "E_MAINT_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))
    controls = set(data.get("control_refs", [])) if isinstance(data.get("control_refs"), list) else set()
    if controls != REQUIRED_CONTROLS:
        issues.append(_issue(path, "ERROR", "E_MAINT_CONTROL_COVERAGE", "az A-019 négy kontrolljának pontos lefedése szükséges"))

    safety = data.get("safety", {})
    if not isinstance(safety, dict):
        issues.append(_issue(path, "ERROR", "E_MAINT_SAFETY_TYPE", "safety objektum szükséges"))
        safety = {}
    if set(safety.get("required_gates", [])) != {"G1_DOMAIN_REVIEW", "G3_PRODUCTION_CHANGE"}:
        issues.append(_issue(path, "ERROR", "E_MAINT_GATES", "G1 baseline-review és G3 éles változtatási kapu szükséges"))
    for field in ("execution_allowed", "automatic_approval_allowed", "automatic_patch_deployment_allowed", "remote_maintenance_allowed", "delete_or_overwrite_allowed"):
        if safety.get(field) is not False:
            issues.append(_issue(path, "ERROR", "E_MAINT_UNSAFE", f"tervezési állapotban explicit false szükséges: {field}"))

    if data.get("workflow_stages") != REQUIRED_STAGES:
        issues.append(_issue(path, "ERROR", "E_MAINT_STAGE_ORDER", "a tíz workflow-lépés pontos sorrendje kötelező"))

    workstreams = data.get("workstreams", [])
    if not isinstance(workstreams, list):
        issues.append(_issue(path, "ERROR", "E_MAINT_WORKSTREAM_TYPE", "workstreams lista szükséges"))
        workstreams = []
    seen: set[str] = set()
    pending_scope = False
    for item in workstreams:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_MAINT_WORKSTREAM_RECORD", "minden workstream objektum kell legyen"))
            continue
        identity = str(item.get("workstream_id", ""))
        for field in ("workstream_id", "status", "owner", "scope_refs", "cadence_or_trigger", "required_outputs", "evidence_refs", "reviewer", "reviewed_at"):
            if field not in item:
                issues.append(_issue(path, "ERROR", "E_MAINT_WORKSTREAM_REQUIRED", f"hiányzó workstream mező: {field}", identity))
        if identity in seen:
            issues.append(_issue(path, "ERROR", "E_MAINT_WORKSTREAM_DUPLICATE", "duplikált workstream", identity))
        seen.add(identity)
        if not isinstance(item.get("required_outputs"), list) or not item.get("required_outputs"):
            issues.append(_issue(path, "ERROR", "E_MAINT_OUTPUTS", "nem üres required_outputs lista szükséges", identity))
        if item.get("status") == "PENDING_HUMAN":
            pending_scope = True
            if item.get("owner") != "TBD-HUMAN" or item.get("cadence_or_trigger") != "TBD-HUMAN":
                issues.append(_issue(path, "ERROR", "E_MAINT_PENDING_SCOPE", "jóváhagyásig owner és cadence_or_trigger TBD-HUMAN", identity))
            if item.get("scope_refs") or item.get("evidence_refs") or item.get("reviewer") or item.get("reviewed_at"):
                issues.append(_issue(path, "ERROR", "E_MAINT_FALSE_WORKSTREAM_REVIEW", "pending workstream nem tartalmazhat scope-ot, evidenciát vagy review-t", identity))
        elif item.get("status") == "HUMAN_REVIEWED":
            if item.get("owner") in (None, "", "TBD-HUMAN") or item.get("cadence_or_trigger") in (None, "", "TBD-HUMAN") or not item.get("scope_refs") or not item.get("evidence_refs") or not item.get("reviewer") or not _timestamp(str(item.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_MAINT_WORKSTREAM_EVIDENCE", "review-zott workstreamhez owner, scope, cadence, evidencia és review szükséges", identity))
        else:
            issues.append(_issue(path, "ERROR", "E_MAINT_WORKSTREAM_STATUS", "a workstream status PENDING_HUMAN vagy HUMAN_REVIEWED lehet", identity))
    if seen != REQUIRED_WORKSTREAMS:
        issues.append(_issue(path, "ERROR", "E_MAINT_WORKSTREAM_COVERAGE", f"hibás workstream-lefedettség; hiányzik={sorted(REQUIRED_WORKSTREAMS - seen)}, ismeretlen={sorted(seen - REQUIRED_WORKSTREAMS)}"))
    if pending_scope:
        issues.append(_issue(path, "WARNING", "W_MAINT_SCOPE_PENDING", "a négy workstream gazdája, scope-ja és ütemezése emberi kijelölésre vár"))

    calendar = data.get("calendar_entries", [])
    if not isinstance(calendar, list):
        issues.append(_issue(path, "ERROR", "E_MAINT_CALENDAR_TYPE", "calendar_entries lista szükséges"))
        calendar = []
    if not calendar:
        issues.append(_issue(path, "WARNING", "W_MAINT_CALENDAR_PENDING", "nincs jóváhagyott baseline-, patch-, karbantartási- vagy változásnaptár"))
    for item in calendar:
        if not isinstance(item, dict) or any(not item.get(field) for field in ("calendar_id", "workstream_id", "scope_ref", "window_start", "window_end", "owner", "status", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_MAINT_CALENDAR_REQUIRED", "minden naptárbejegyzéshez teljes emberi rekord szükséges"))
            continue
        if item.get("workstream_id") not in REQUIRED_WORKSTREAMS or not _timestamp(str(item.get("window_start", ""))) or not _timestamp(str(item.get("window_end", ""))):
            issues.append(_issue(path, "ERROR", "E_MAINT_CALENDAR_VALUE", "hibás workstream vagy nem időzónás naptárablak"))
        elif datetime.fromisoformat(str(item["window_end"]).replace("Z", "+00:00")) <= datetime.fromisoformat(str(item["window_start"]).replace("Z", "+00:00")):
            issues.append(_issue(path, "ERROR", "E_MAINT_CALENDAR_ORDER", "a window_end későbbi kell legyen a window_start értéknél"))
        if item.get("status") not in {"HUMAN_APPROVED", "CANCELLED"}:
            issues.append(_issue(path, "ERROR", "E_MAINT_CALENDAR_STATUS", "a naptárbejegyzés HUMAN_APPROVED vagy CANCELLED lehet"))

    changes = data.get("change_records", [])
    if not isinstance(changes, list):
        issues.append(_issue(path, "ERROR", "E_MAINT_CHANGE_TYPE", "change_records lista szükséges"))
        changes = []
    if not changes:
        issues.append(_issue(path, "WARNING", "W_MAINT_EXECUTION_PENDING", "nincs végrehajtott és bizonyított baseline-, patch-, maintenance- vagy change rekord"))
    for item in changes:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_MAINT_CHANGE_RECORD", "minden change rekord objektum kell legyen"))
            continue
        identity = str(item.get("change_id", ""))
        required = (
            "change_id", "workstream_id", "scope_ref", "status", "risk_and_impact",
            "owner_approval_ref", "g3_approval_ref", "backup_proof_ref", "rollback_plan_ref",
            "scheduled_window_ref", "pre_validation_ref", "post_validation_ref", "evidence_uri",
            "sha256", "reviewer", "reviewed_at",
        )
        if any(field not in item for field in required):
            issues.append(_issue(path, "ERROR", "E_MAINT_CHANGE_REQUIRED", "hiányos change rekord", identity))
            continue
        if item.get("workstream_id") not in REQUIRED_WORKSTREAMS:
            issues.append(_issue(path, "ERROR", "E_MAINT_CHANGE_WORKSTREAM", "a change rekord workstreamje nem ismert", identity))
        status = item.get("status")
        if status == "PROPOSED":
            if any(item.get(field) for field in required[5:]):
                issues.append(_issue(path, "ERROR", "E_MAINT_FALSE_EXECUTION", "PROPOSED change nem tartalmazhat jóváhagyást vagy végrehajtási evidenciát", identity))
        elif status in {"EXECUTED_PENDING_REVIEW", "HUMAN_ACCEPTED", "ROLLED_BACK", "FAILED"}:
            if any(not item.get(field) for field in required[4:]) or not SHA256_PATTERN.fullmatch(str(item.get("sha256", ""))) or not _timestamp(str(item.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_MAINT_EXECUTION_EVIDENCE", "végrehajtott változáshoz teljes G3-, backup-, rollback-, pre/post-, hash- és review-evidencia szükséges", identity))
        else:
            issues.append(_issue(path, "ERROR", "E_MAINT_CHANGE_STATUS", "ismeretlen change status", identity))

    exception = data.get("exception_policy", {})
    if not isinstance(exception, dict):
        issues.append(_issue(path, "ERROR", "E_MAINT_EXCEPTION_TYPE", "exception_policy objektum szükséges"))
        exception = {}
    fields = set(exception.get("required_fields", [])) if isinstance(exception.get("required_fields"), list) else set()
    if fields != REQUIRED_EXCEPTION_FIELDS:
        issues.append(_issue(path, "ERROR", "E_MAINT_EXCEPTION_FIELDS", "hiányos vagy ismeretlen exception mezőkészlet"))
    if exception.get("automatic_approval_allowed") is not False or exception.get("open_ended_exception_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_MAINT_EXCEPTION_UNSAFE", "automatikus vagy lejárat nélküli kivétel nem engedélyezett"))

    evidence = set(data.get("required_evidence", [])) if isinstance(data.get("required_evidence"), list) else set()
    if evidence != REQUIRED_EVIDENCE:
        issues.append(_issue(path, "ERROR", "E_MAINT_EVIDENCE_SET", "hiányos vagy ismeretlen kötelező evidencia-készlet"))
    approval = data.get("human_approval", {})
    if data.get("status") == "HUMAN_REVIEWED":
        accepted_change = any(item.get("status") == "HUMAN_ACCEPTED" for item in changes if isinstance(item, dict))
        if pending_scope or not calendar or not accepted_change or not isinstance(approval, dict) or any(not approval.get(field) for field in ("reviewer", "approved_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_MAINT_APPROVAL", "HUMAN_REVIEWED állapothoz teljes scope, naptár, végrehajtási minta és approval szükséges"))
        elif not _timestamp(str(approval.get("approved_at", ""))):
            issues.append(_issue(path, "ERROR", "E_MAINT_APPROVAL_TIME", "az approval időpontjának időzónásnak kell lennie"))
    else:
        issues.append(_issue(path, "WARNING", "W_MAINT_REVIEW_PENDING", "a workflow és az első végrehajtási minta G1/G3 emberi review-ra vár"))
    return ValidationResult(tuple(issues))
