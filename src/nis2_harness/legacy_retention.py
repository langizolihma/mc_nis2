"""Validation for the proposal-only A-026 legacy retention package."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


REQUIRED_FAMILIES = {"7", "13", "18"}
REQUIRED_EXPORT_OUTPUTS = {
    "data_dictionary", "record_count", "date_range", "format_and_encoding",
    "integrity_hash", "exception_log", "protected_uri", "human_review",
}
REQUIRED_TEST_EVIDENCE = {
    "approved_test_scope", "isolated_target", "source_backup_or_export",
    "restore_or_import_log", "readability_checks", "sample_owner_validation",
    "integrity_comparison", "elapsed_time", "cleanup_record", "protected_uri",
    "sha256", "human_review",
}
ALLOWED_SENSITIVITY = {"PUBLIC", "INTERNAL", "CONFIDENTIAL", "RESTRICTED"}
ALLOWED_DECISIONS = {"RETAIN", "ARCHIVE_READ_ONLY", "MIGRATE", "DISPOSE_AFTER_HOLD_CHECK"}


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def validate_legacy_retention_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Keep legacy claims unverified and require legal, owner and change gates."""
    issues: list[Issue] = []
    for field in (
        "schema_version", "status", "action_id", "requirement_families", "source_position",
        "safety", "legal_retention_decision", "data_inventory", "export_plan",
        "restore_read_test", "migration_decision", "human_review",
    ):
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_LEGACY_REQUIRED", f"hiányzó kötelező mező: {field}", "A-026"))
    if data.get("action_id") != "A-026":
        issues.append(_issue(path, "ERROR", "E_LEGACY_ACTION", "az action_id értéke A-026 kell legyen"))
    families = set(data.get("requirement_families", [])) if isinstance(data.get("requirement_families"), list) else set()
    if families != REQUIRED_FAMILIES:
        issues.append(_issue(path, "ERROR", "E_LEGACY_FAMILY", "a 7, 13 és 18 követelménycsalád pontos lefedése szükséges"))
    if data.get("status") not in {"PROPOSAL", "READY_FOR_G2", "HUMAN_REVIEWED"}:
        issues.append(_issue(path, "ERROR", "E_LEGACY_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))
    source = data.get("source_position", {})
    if not isinstance(source, dict) or source.get("source_ref") != "SRC-004" or source.get("source_confidence") != "unverified_internal":
        issues.append(_issue(path, "ERROR", "E_LEGACY_SOURCE", "az SRC-004 állításait unverified_internal minősítéssel kell megőrizni"))

    safety = data.get("safety", {})
    if not isinstance(safety, dict):
        issues.append(_issue(path, "ERROR", "E_LEGACY_SAFETY_TYPE", "safety objektum szükséges"))
        safety = {}
    if set(safety.get("required_gates", [])) != {"G2_SECURITY_LEGAL", "G3_PRODUCTION_CHANGE"}:
        issues.append(_issue(path, "ERROR", "E_LEGACY_GATES", "G2 jogi/biztonsági és végrehajtás előtt G3 kapu szükséges"))
    for field in (
        "production_query_allowed", "export_allowed", "restore_allowed", "migration_allowed",
        "delete_or_dispose_allowed", "application_shutdown_allowed", "automatic_legal_decision_allowed",
    ):
        if safety.get(field) is not False:
            issues.append(_issue(path, "ERROR", "E_LEGACY_UNSAFE", f"proposal állapotban explicit false szükséges: {field}"))

    legal = data.get("legal_retention_decision", {})
    if not isinstance(legal, dict):
        issues.append(_issue(path, "ERROR", "E_LEGACY_LEGAL_TYPE", "legal_retention_decision objektum szükséges"))
        legal = {}
    if legal.get("status") == "PENDING_LEGAL":
        if any(legal.get(field) for field in ("legal_basis_refs", "retention_rules", "legal_holds", "disposal_constraints", "reviewer", "reviewed_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_LEGACY_FALSE_LEGAL", "PENDING_LEGAL állapot nem tartalmazhat kitalált jogalapot vagy review-t"))
        issues.append(_issue(path, "WARNING", "W_LEGACY_LEGAL_PENDING", "a jogalapok, megőrzési idők, legal hold és selejtezési korlátok G2 döntésre várnak"))
    elif legal.get("status") == "HUMAN_APPROVED":
        if any(not legal.get(field) for field in ("legal_basis_refs", "retention_rules", "legal_holds", "disposal_constraints", "reviewer", "reviewed_at", "decision_ref")) or not _timestamp(str(legal.get("reviewed_at", ""))):
            issues.append(_issue(path, "ERROR", "E_LEGACY_LEGAL_EVIDENCE", "jóváhagyott retention döntéshez teljes jogi evidencia és időzónás review szükséges"))
    else:
        issues.append(_issue(path, "ERROR", "E_LEGACY_LEGAL_STATUS", "a retention status PENDING_LEGAL vagy HUMAN_APPROVED lehet"))

    inventory = data.get("data_inventory", [])
    if not isinstance(inventory, list):
        issues.append(_issue(path, "ERROR", "E_LEGACY_INVENTORY_TYPE", "data_inventory lista szükséges"))
        inventory = []
    if not inventory:
        issues.append(_issue(path, "WARNING", "W_LEGACY_INVENTORY_PENDING", "nincs emberileg ellenőrzött adat-, alkalmazás- és owner-leltár"))
    seen: set[str] = set()
    reviewed = 0
    for item in inventory:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_LEGACY_RECORD", "minden adatrekord objektum kell legyen"))
            continue
        identity = str(item.get("data_set_id", ""))
        required = (
            "data_set_id", "status", "protected_application_ref", "data_category", "eir_refs",
            "business_owner", "data_owner", "sensitivity", "legal_basis_ref", "retention_rule_ref",
            "legal_hold_status", "source_location_ref", "volume_class", "export_format",
            "completeness_method", "proposed_disposition", "evidence_refs", "reviewer", "reviewed_at",
        )
        if any(field not in item for field in required):
            issues.append(_issue(path, "ERROR", "E_LEGACY_RECORD_REQUIRED", "hiányos adatleltári rekord", identity))
            continue
        if not identity or identity in seen:
            issues.append(_issue(path, "ERROR", "E_LEGACY_DUPLICATE", "hiányzó vagy duplikált data_set_id", identity))
        seen.add(identity)
        if item.get("status") == "PENDING_HUMAN":
            if any(item.get(field) not in (None, "", [], {}) for field in required[2:]):
                issues.append(_issue(path, "ERROR", "E_LEGACY_FALSE_CLAIM", "PENDING_HUMAN rekord nem állíthat adat-, jogi-, export- vagy review-tényt", identity))
        elif item.get("status") == "HUMAN_REVIEWED":
            reviewed += 1
            if any(item.get(field) in (None, "", [], {}) for field in required[2:]) or not _timestamp(str(item.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_LEGACY_REVIEW_EVIDENCE", "review-zott adatrekordhoz teljes scope, owner, retention, export és evidencia szükséges", identity))
            if item.get("sensitivity") not in ALLOWED_SENSITIVITY or item.get("proposed_disposition") not in ALLOWED_DECISIONS:
                issues.append(_issue(path, "ERROR", "E_LEGACY_REVIEW_VALUE", "ismeretlen sensitivity vagy proposed_disposition", identity))
        else:
            issues.append(_issue(path, "ERROR", "E_LEGACY_RECORD_STATUS", "az adatrekord status PENDING_HUMAN vagy HUMAN_REVIEWED lehet", identity))

    export = data.get("export_plan", {})
    if not isinstance(export, dict):
        issues.append(_issue(path, "ERROR", "E_LEGACY_EXPORT_TYPE", "export_plan objektum szükséges"))
        export = {}
    outputs = set(export.get("required_outputs", [])) if isinstance(export.get("required_outputs"), list) else set()
    if outputs != REQUIRED_EXPORT_OUTPUTS:
        issues.append(_issue(path, "ERROR", "E_LEGACY_EXPORT_OUTPUTS", "a nyolc exportbizonyíték pontos készlete szükséges"))
    if export.get("mode") != "READ_ONLY_AFTER_G2_G3" or export.get("execution_status") != "NOT_EXECUTED" or export.get("store_raw_export_in_git") is not False:
        issues.append(_issue(path, "ERROR", "E_LEGACY_EXPORT_STATE", "az export csak G2/G3 utáni read-only, kezdetben NOT_EXECUTED és Gitből kizárt lehet"))

    test = data.get("restore_read_test", {})
    if not isinstance(test, dict):
        issues.append(_issue(path, "ERROR", "E_LEGACY_TEST_TYPE", "restore_read_test objektum szükséges"))
        test = {}
    evidence = set(test.get("required_evidence", [])) if isinstance(test.get("required_evidence"), list) else set()
    if evidence != REQUIRED_TEST_EVIDENCE:
        issues.append(_issue(path, "ERROR", "E_LEGACY_TEST_EVIDENCE_SET", "a tizenkét restore/read tesztbizonyíték pontos készlete szükséges"))
    if test.get("status") == "NOT_EXECUTED":
        if any(test.get(field) for field in ("data_set_id", "isolated_target_ref", "owner_approval_ref", "g3_approval_ref", "result", "evidence_refs", "reviewer", "reviewed_at")):
            issues.append(_issue(path, "ERROR", "E_LEGACY_FALSE_TEST", "NOT_EXECUTED teszt nem tartalmazhat végrehajtási állítást"))
        issues.append(_issue(path, "WARNING", "W_LEGACY_TEST_PENDING", "nincs izolált export/restore/read teszt és owner által elfogadott eredmény"))
    elif test.get("status") == "HUMAN_ACCEPTED":
        if test.get("data_set_id") not in seen or any(not test.get(field) for field in ("isolated_target_ref", "owner_approval_ref", "g3_approval_ref", "result", "evidence_refs", "reviewer", "reviewed_at")) or not _timestamp(str(test.get("reviewed_at", ""))):
            issues.append(_issue(path, "ERROR", "E_LEGACY_TEST_EVIDENCE", "végrehajtott teszthez ismert adat, izolált cél, owner/G3, eredmény, evidencia és review szükséges"))
    else:
        issues.append(_issue(path, "ERROR", "E_LEGACY_TEST_STATUS", "a restore/read teszt status NOT_EXECUTED vagy HUMAN_ACCEPTED lehet"))

    decision = data.get("migration_decision", {})
    if not isinstance(decision, dict):
        issues.append(_issue(path, "ERROR", "E_LEGACY_DECISION_TYPE", "migration_decision objektum szükséges"))
        decision = {}
    if decision.get("status") == "NOT_AUTHORIZED":
        if decision.get("target_state") != "TBD-HUMAN" or any(decision.get(field) for field in ("decision_ref", "approver", "approved_at")):
            issues.append(_issue(path, "ERROR", "E_LEGACY_FALSE_DECISION", "nem engedélyezett migrációhoz nem tartozhat célállapot vagy approval"))
    elif decision.get("status") == "HUMAN_APPROVED_FOR_SEPARATE_CHANGE":
        if legal.get("status") != "HUMAN_APPROVED" or not inventory or reviewed != len(inventory) or test.get("status") != "HUMAN_ACCEPTED" or any(not decision.get(field) for field in ("target_state", "decision_ref", "approver", "approved_at")) or not _timestamp(str(decision.get("approved_at", ""))):
            issues.append(_issue(path, "ERROR", "E_LEGACY_DECISION_EVIDENCE", "migrációs döntéshez jogi approval, teljes leltár, elfogadott teszt és emberi döntés szükséges"))
    else:
        issues.append(_issue(path, "ERROR", "E_LEGACY_DECISION_STATUS", "ismeretlen migration_decision status"))

    approval = data.get("human_review", {})
    if data.get("status") == "HUMAN_REVIEWED":
        if legal.get("status") != "HUMAN_APPROVED" or not inventory or reviewed != len(inventory) or not isinstance(approval, dict) or any(not approval.get(field) for field in ("reviewer", "approved_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_LEGACY_APPROVAL", "HUMAN_REVIEWED baseline-hoz jogi döntés, teljes leltár és G2 review szükséges"))
        elif not _timestamp(str(approval.get("approved_at", ""))):
            issues.append(_issue(path, "ERROR", "E_LEGACY_APPROVAL_TIME", "a G2 review időpontjának időzónásnak kell lennie"))
    else:
        issues.append(_issue(path, "WARNING", "W_LEGACY_REVIEW_PENDING", "a retention-, adat-, export-, teszt- és döntési csomag G2 emberi review-ra vár"))
    return ValidationResult(tuple(issues))
