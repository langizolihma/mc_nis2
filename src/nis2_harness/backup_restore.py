"""Validation for the proposal-only backup and restore-test package."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


REQUIRED_EIRS = {"EIR-001", "EIR-002", "EIR-003", "EIR-004", "EIR-005"}
REQUIRED_EVIDENCE = {
    "backup_job_log", "restore_job_log", "restored_object", "integrity_check",
    "elapsed_time", "rpo_rto_comparison", "cleanup_record", "human_review",
}


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _positive_or_tbd(value: Any) -> bool:
    return value == "TBD-HUMAN" or (isinstance(value, int) and not isinstance(value, bool) and value > 0)


def validate_backup_restore_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Ensure restore execution remains blocked until scope and G3 approval exist."""
    issues: list[Issue] = []
    required = (
        "schema_version", "status", "action_id", "source_refs", "eir_backup_matrix",
        "restore_test", "required_evidence", "human_approval",
    )
    for field in required:
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_BACKUP_REQUIRED", f"hiányzó kötelező mező: {field}", "A-017"))
    if data.get("action_id") != "A-017":
        issues.append(_issue(path, "ERROR", "E_BACKUP_ACTION", "az action_id értéke A-017 kell legyen"))
    if data.get("status") not in {"PROPOSAL", "APPROVED_FOR_G3"}:
        issues.append(_issue(path, "ERROR", "E_BACKUP_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))

    matrix = data.get("eir_backup_matrix", [])
    if not isinstance(matrix, list):
        issues.append(_issue(path, "ERROR", "E_BACKUP_MATRIX_TYPE", "eir_backup_matrix lista szükséges"))
        matrix = []
    seen: set[str] = set()
    pending_inputs = False
    for item in matrix:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_BACKUP_RECORD_TYPE", "minden EIR rekord objektum kell legyen"))
            continue
        identity = str(item.get("eir_id", ""))
        for field in ("eir_id", "eir_name", "business_owner", "system_scope", "rpo_hours", "rto_hours", "backup_method", "retention", "offsite_or_separate_copy", "review_status"):
            if field not in item or item[field] in (None, ""):
                issues.append(_issue(path, "ERROR", "E_BACKUP_RECORD_REQUIRED", f"hiányzó mező: {field}", identity))
        if identity in seen:
            issues.append(_issue(path, "ERROR", "E_BACKUP_EIR_DUPLICATE", "duplikált EIR", identity))
        seen.add(identity)
        if not _positive_or_tbd(item.get("rpo_hours")) or not _positive_or_tbd(item.get("rto_hours")):
            issues.append(_issue(path, "ERROR", "E_BACKUP_RPO_RTO", "az RPO/RTO pozitív egész óra vagy TBD-HUMAN lehet", identity))
        if any(item.get(field) == "TBD-HUMAN" for field in ("business_owner", "rpo_hours", "rto_hours", "backup_method", "retention", "offsite_or_separate_copy")):
            pending_inputs = True
        if not isinstance(item.get("system_scope"), list) or not item.get("system_scope"):
            pending_inputs = True
    missing_eirs = sorted(REQUIRED_EIRS - seen)
    unknown_eirs = sorted(seen - REQUIRED_EIRS)
    if missing_eirs or unknown_eirs:
        issues.append(_issue(path, "ERROR", "E_BACKUP_EIR_COVERAGE", f"hibás EIR-lefedettség; hiányzik={missing_eirs}, ismeretlen={unknown_eirs}"))
    if pending_inputs:
        issues.append(_issue(path, "WARNING", "W_BACKUP_INPUT_PENDING", "az EIR-ownerek, rendszer-scope, RPO/RTO, mentési mód, retention vagy elkülönített másolat emberi kitöltésre vár"))

    restore = data.get("restore_test", {})
    if not isinstance(restore, dict):
        issues.append(_issue(path, "ERROR", "E_RESTORE_TYPE", "restore_test objektum szükséges"))
        restore = {}
    for field in ("execution_status", "sample_eir", "sample_system", "target_environment", "restore_mode", "required_gate", "rollback_plan", "stop_conditions", "production_change_allowed", "overwrite_existing", "delete_allowed"):
        if field not in restore or restore[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_RESTORE_REQUIRED", f"hiányzó restore mező: {field}"))
    if restore.get("required_gate") != "G3_PRODUCTION_CHANGE":
        issues.append(_issue(path, "ERROR", "E_RESTORE_G3", "a restore teszt G3_PRODUCTION_CHANGE kaput igényel"))
    for field in ("production_change_allowed", "overwrite_existing", "delete_allowed"):
        if restore.get(field) is not False:
            issues.append(_issue(path, "ERROR", "E_RESTORE_DESTRUCTIVE", f"tervezési állapotban {field}=false kötelező"))
    if restore.get("execution_status") == "BLOCKED_PENDING_G3":
        issues.append(_issue(path, "WARNING", "W_RESTORE_G3_PENDING", "restore végrehajtás G3 jóváhagyásig blokkolt"))
    elif data.get("status") != "APPROVED_FOR_G3":
        issues.append(_issue(path, "ERROR", "E_RESTORE_EXECUTION_STATUS", "G3 approval nélküli terv nem lehet végrehajtásra kész"))
    if any(restore.get(field) == "TBD-HUMAN" for field in ("sample_eir", "sample_system", "target_environment")):
        issues.append(_issue(path, "WARNING", "W_RESTORE_SCOPE_PENDING", "a restore minta és izolált célkörnyezet emberi kijelölésre vár"))
    if not isinstance(restore.get("stop_conditions"), list) or not restore.get("stop_conditions"):
        issues.append(_issue(path, "ERROR", "E_RESTORE_STOP", "nem üres stop_conditions lista szükséges"))

    evidence = set(data.get("required_evidence", [])) if isinstance(data.get("required_evidence"), list) else set()
    missing_evidence = sorted(REQUIRED_EVIDENCE - evidence)
    if missing_evidence:
        issues.append(_issue(path, "ERROR", "E_RESTORE_EVIDENCE", f"hiányzó evidenciaelem: {', '.join(missing_evidence)}"))

    approval = data.get("human_approval", {})
    if data.get("status") == "APPROVED_FOR_G3":
        if not isinstance(approval, dict) or any(not approval.get(field) for field in ("business_owner", "system_owner", "change_approver", "approved_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_RESTORE_APPROVAL", "APPROVED_FOR_G3 állapothoz teljes emberi approval rekord szükséges"))
    return ValidationResult(tuple(issues))
