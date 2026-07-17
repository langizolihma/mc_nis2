"""Validation for the proposal-only A-018 logging and monitoring package."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
import re
from typing import Any

from .validation import Issue, ValidationResult


REQUIRED_SOURCE_CATEGORIES = {
    "IDENTITY_ACCESS", "PRIVILEGED_ACTIVITY", "DIRECTORY_AUTHENTICATION",
    "ENDPOINT_SECURITY", "SERVER_OS", "NETWORK_SECURITY", "EMAIL_COLLABORATION",
    "BUSINESS_APPLICATIONS", "BACKUP_RESTORE", "VIRTUALIZATION_STORAGE",
}
REQUIRED_CONTENT_FIELDS = {
    "event_time_with_timezone", "source", "subject_or_actor", "event_type",
    "result", "correlation_or_record_id",
}
REQUIRED_RETENTION_CLASSES = {"SECURITY_CRITICAL", "OPERATIONAL", "DIAGNOSTIC"}
REQUIRED_ALERTS = {
    "LOG_SOURCE_SILENT", "COLLECTION_FAILURE", "STORAGE_THRESHOLD",
    "TIME_SYNC_FAILURE", "TAMPERING_OR_DELETION",
}
REQUIRED_REVIEW_FREQUENCIES = {"DAILY", "WEEKLY"}
REQUIRED_EVIDENCE = {
    "sample_log", "alert_test", "review_ticket", "retention_proof",
    "exception_log", "protected_uri", "sha256", "human_review",
}
REQUIRED_GATES = {"G1_DOMAIN_REVIEW", "G2_SECURITY_LEGAL", "G3_PRODUCTION_CHANGE"}
SHA256_PATTERN = re.compile(r"^[0-9a-fA-F]{64}$")


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def validate_logging_monitoring_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Ensure the log baseline cannot claim collection, alerting or review without evidence."""
    issues: list[Issue] = []
    for field in (
        "schema_version", "status", "action_id", "source_refs", "control_refs",
        "safety", "log_sources", "retention_classes", "alert_definitions",
        "review_schedule", "review_runs", "required_evidence", "human_approval",
    ):
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_LOG_REQUIRED", f"hiányzó kötelező mező: {field}", "A-018"))
    if data.get("action_id") != "A-018":
        issues.append(_issue(path, "ERROR", "E_LOG_ACTION", "az action_id értéke A-018 kell legyen"))
    if data.get("status") not in {"PROPOSAL", "READY_FOR_G1", "HUMAN_REVIEWED"}:
        issues.append(_issue(path, "ERROR", "E_LOG_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))
    expected_controls = {"4.2", "4.3", "4.5", "4.7", "4.13", "5.15"}
    controls = set(data.get("control_refs", [])) if isinstance(data.get("control_refs"), list) else set()
    if controls != expected_controls:
        issues.append(_issue(path, "ERROR", "E_LOG_CONTROL_COVERAGE", "az A-018 hat auditkontrolljának pontos lefedése szükséges"))

    safety = data.get("safety", {})
    if not isinstance(safety, dict):
        issues.append(_issue(path, "ERROR", "E_LOG_SAFETY_TYPE", "safety objektum szükséges"))
        safety = {}
    if safety.get("required_gates") is None or set(safety.get("required_gates", [])) != REQUIRED_GATES:
        issues.append(_issue(path, "ERROR", "E_LOG_GATES", "G1 szükséges a baseline-hoz, G2/G3 a valós logkapcsolathoz és konfigurációhoz"))
    if safety.get("read_only_required") is not True:
        issues.append(_issue(path, "ERROR", "E_LOG_READ_ONLY", "a loggyűjtési forráskapcsolatnak read-only-nak kell lennie"))
    for field in ("automated_response_allowed", "production_change_allowed", "external_transmission_allowed", "raw_logs_in_git_allowed"):
        if safety.get(field) is not False:
            issues.append(_issue(path, "ERROR", "E_LOG_UNSAFE", f"tiltott vagy nem explicit false beállítás: {field}"))

    sources = data.get("log_sources", [])
    if not isinstance(sources, list):
        issues.append(_issue(path, "ERROR", "E_LOG_SOURCE_TYPE", "log_sources lista szükséges"))
        sources = []
    seen_sources: set[str] = set()
    source_pending = False
    for item in sources:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_LOG_SOURCE_RECORD", "minden logforrás-rekord objektum kell legyen"))
            continue
        category = str(item.get("category", ""))
        for field in (
            "category", "status", "source_system_ref", "source_owner", "applicable_eirs",
            "required_events", "required_content_fields", "approved_read_only_method",
            "retention_class", "evidence_refs", "reviewer", "reviewed_at",
        ):
            if field not in item:
                issues.append(_issue(path, "ERROR", "E_LOG_SOURCE_REQUIRED", f"hiányzó logforrásmező: {field}", category))
        if category in seen_sources:
            issues.append(_issue(path, "ERROR", "E_LOG_SOURCE_DUPLICATE", "duplikált logforrás-kategória", category))
        seen_sources.add(category)
        content_fields = set(item.get("required_content_fields", [])) if isinstance(item.get("required_content_fields"), list) else set()
        if not REQUIRED_CONTENT_FIELDS.issubset(content_fields):
            issues.append(_issue(path, "ERROR", "E_LOG_CONTENT_FIELDS", "hiányos minimum naplótartalom", category))
        if not isinstance(item.get("required_events"), list) or not item.get("required_events"):
            issues.append(_issue(path, "ERROR", "E_LOG_EVENTS", "legalább egy elvárt eseménytípus szükséges", category))
        if item.get("retention_class") not in REQUIRED_RETENTION_CLASSES:
            issues.append(_issue(path, "ERROR", "E_LOG_SOURCE_RETENTION", "ismeretlen retention osztály a logforráson", category))
        status = item.get("status")
        if status == "PENDING_HUMAN":
            source_pending = True
            if item.get("source_system_ref") != "TBD-HUMAN" or item.get("source_owner") != "TBD-HUMAN":
                issues.append(_issue(path, "ERROR", "E_LOG_PENDING_SOURCE", "PENDING_HUMAN forrás rendszere és gazdája csak TBD-HUMAN lehet", category))
            if item.get("applicable_eirs") or item.get("approved_read_only_method") or item.get("evidence_refs") or item.get("reviewer") or item.get("reviewed_at"):
                issues.append(_issue(path, "ERROR", "E_LOG_FALSE_SOURCE_REVIEW", "nem jóváhagyott forráshoz nem rögzíthető scope, módszer, evidencia vagy review", category))
        elif status == "HUMAN_REVIEWED":
            if any(item.get(field) in (None, "", "TBD-HUMAN") for field in ("source_system_ref", "source_owner", "approved_read_only_method")):
                issues.append(_issue(path, "ERROR", "E_LOG_REVIEWED_SOURCE", "review-zott forráshoz rendszer, gazda és read-only módszer szükséges", category))
            if not item.get("applicable_eirs") or not item.get("evidence_refs") or not item.get("reviewer") or not _timestamp(str(item.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_LOG_SOURCE_EVIDENCE", "review-zott forráshoz EIR-scope, evidencia, reviewer és időzónás időpont szükséges", category))
        else:
            issues.append(_issue(path, "ERROR", "E_LOG_SOURCE_STATUS", "a forrás status PENDING_HUMAN vagy HUMAN_REVIEWED lehet", category))
    if seen_sources != REQUIRED_SOURCE_CATEGORIES:
        issues.append(_issue(path, "ERROR", "E_LOG_SOURCE_COVERAGE", f"hibás forráskategória-lefedettség; hiányzik={sorted(REQUIRED_SOURCE_CATEGORIES - seen_sources)}, ismeretlen={sorted(seen_sources - REQUIRED_SOURCE_CATEGORIES)}"))
    if source_pending:
        issues.append(_issue(path, "WARNING", "W_LOG_SOURCE_PENDING", "a konkrét forrásrendszer, gazda, EIR-scope és read-only módszer emberi kijelölésre vár"))

    retentions = data.get("retention_classes", [])
    if not isinstance(retentions, list):
        issues.append(_issue(path, "ERROR", "E_LOG_RETENTION_TYPE", "retention_classes lista szükséges"))
        retentions = []
    seen_retention: set[str] = set()
    retention_pending = False
    for item in retentions:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_LOG_RETENTION_RECORD", "minden retention rekord objektum kell legyen"))
            continue
        identity = str(item.get("retention_class", ""))
        for field in ("retention_class", "status", "retention_days", "capacity_estimate", "legal_basis_ref", "evidence_refs", "reviewer", "reviewed_at"):
            if field not in item:
                issues.append(_issue(path, "ERROR", "E_LOG_RETENTION_REQUIRED", f"hiányzó retention mező: {field}", identity))
        if identity in seen_retention:
            issues.append(_issue(path, "ERROR", "E_LOG_RETENTION_DUPLICATE", "duplikált retention osztály", identity))
        seen_retention.add(identity)
        if item.get("status") == "PENDING_HUMAN":
            retention_pending = True
            if item.get("retention_days") != "TBD-HUMAN" or item.get("capacity_estimate") != "TBD-HUMAN" or item.get("legal_basis_ref") != "TBD-HUMAN":
                issues.append(_issue(path, "ERROR", "E_LOG_PENDING_RETENTION", "jóváhagyásig a retention, kapacitás és jogalap TBD-HUMAN", identity))
            if item.get("evidence_refs") or item.get("reviewer") or item.get("reviewed_at"):
                issues.append(_issue(path, "ERROR", "E_LOG_FALSE_RETENTION_REVIEW", "pending retention nem tartalmazhat evidenciát vagy review-t", identity))
        elif item.get("status") == "HUMAN_REVIEWED":
            days = item.get("retention_days")
            if not isinstance(days, int) or isinstance(days, bool) or days <= 0:
                issues.append(_issue(path, "ERROR", "E_LOG_RETENTION_DAYS", "jóváhagyott retention_days pozitív egész kell legyen", identity))
            if any(item.get(field) in (None, "", "TBD-HUMAN") for field in ("capacity_estimate", "legal_basis_ref")) or not item.get("evidence_refs") or not item.get("reviewer") or not _timestamp(str(item.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_LOG_RETENTION_EVIDENCE", "review-zott retentionhöz kapacitás, jogalap, evidencia és reviewer szükséges", identity))
        else:
            issues.append(_issue(path, "ERROR", "E_LOG_RETENTION_STATUS", "a retention status PENDING_HUMAN vagy HUMAN_REVIEWED lehet", identity))
    if seen_retention != REQUIRED_RETENTION_CLASSES:
        issues.append(_issue(path, "ERROR", "E_LOG_RETENTION_COVERAGE", "három kötelező retention osztály szükséges"))
    if retention_pending:
        issues.append(_issue(path, "WARNING", "W_LOG_RETENTION_PENDING", "a retention, jogalap és tárkapacitás emberi döntésre vár"))

    alerts = data.get("alert_definitions", [])
    if not isinstance(alerts, list):
        issues.append(_issue(path, "ERROR", "E_LOG_ALERT_TYPE", "alert_definitions lista szükséges"))
        alerts = []
    seen_alerts: set[str] = set()
    alerts_pending = False
    for item in alerts:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_LOG_ALERT_RECORD", "minden alert objektum kell legyen"))
            continue
        identity = str(item.get("alert_id", ""))
        for field in ("alert_id", "status", "detection_rule", "notification_target", "test_method", "tested_at", "evidence_refs", "reviewer"):
            if field not in item:
                issues.append(_issue(path, "ERROR", "E_LOG_ALERT_REQUIRED", f"hiányzó alert mező: {field}", identity))
        if identity in seen_alerts:
            issues.append(_issue(path, "ERROR", "E_LOG_ALERT_DUPLICATE", "duplikált alert", identity))
        seen_alerts.add(identity)
        if item.get("status") == "NOT_TESTED":
            alerts_pending = True
            if any(item.get(field) for field in ("detection_rule", "notification_target", "test_method", "tested_at", "evidence_refs", "reviewer")):
                issues.append(_issue(path, "ERROR", "E_LOG_FALSE_ALERT_TEST", "nem tesztelt alert nem tartalmazhat beállítást vagy tesztevidenciát", identity))
        elif item.get("status") == "HUMAN_TESTED":
            if any(not item.get(field) for field in ("detection_rule", "notification_target", "test_method", "tested_at", "evidence_refs", "reviewer")) or not _timestamp(str(item.get("tested_at", ""))):
                issues.append(_issue(path, "ERROR", "E_LOG_ALERT_EVIDENCE", "tesztelt alerthez szabály, címzett, módszer, időpont, evidencia és reviewer szükséges", identity))
        else:
            issues.append(_issue(path, "ERROR", "E_LOG_ALERT_STATUS", "az alert status NOT_TESTED vagy HUMAN_TESTED lehet", identity))
    if seen_alerts != REQUIRED_ALERTS:
        issues.append(_issue(path, "ERROR", "E_LOG_ALERT_COVERAGE", "öt kötelező naplózási hibariasztás szükséges"))
    if alerts_pending:
        issues.append(_issue(path, "WARNING", "W_LOG_ALERT_PENDING", "az öt hibariasztás szabálya, címzettje és emberi tesztje hiányzik"))

    schedule = data.get("review_schedule", [])
    if not isinstance(schedule, list):
        issues.append(_issue(path, "ERROR", "E_LOG_SCHEDULE_TYPE", "review_schedule lista szükséges"))
        schedule = []
    seen_frequency: set[str] = set()
    for item in schedule:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_LOG_SCHEDULE_RECORD", "minden review schedule objektum kell legyen"))
            continue
        frequency = str(item.get("frequency", ""))
        for field in ("frequency", "status", "checklist", "review_owner", "escalation_target", "evidence_template"):
            if field not in item or item[field] in (None, ""):
                issues.append(_issue(path, "ERROR", "E_LOG_SCHEDULE_REQUIRED", f"hiányzó schedule mező: {field}", frequency))
        seen_frequency.add(frequency)
        if not isinstance(item.get("checklist"), list) or not item.get("checklist"):
            issues.append(_issue(path, "ERROR", "E_LOG_CHECKLIST", "nem üres review checklist szükséges", frequency))
        if item.get("status") == "PENDING_HUMAN":
            if item.get("review_owner") != "TBD-HUMAN" or item.get("escalation_target") != "TBD-HUMAN":
                issues.append(_issue(path, "ERROR", "E_LOG_PENDING_SCHEDULE", "jóváhagyásig a reviewer és escalation target TBD-HUMAN", frequency))
        elif item.get("status") != "HUMAN_REVIEWED":
            issues.append(_issue(path, "ERROR", "E_LOG_SCHEDULE_STATUS", "a schedule status PENDING_HUMAN vagy HUMAN_REVIEWED lehet", frequency))
    if seen_frequency != REQUIRED_REVIEW_FREQUENCIES:
        issues.append(_issue(path, "ERROR", "E_LOG_SCHEDULE_COVERAGE", "DAILY és WEEKLY review szükséges"))

    runs = data.get("review_runs", [])
    if not isinstance(runs, list):
        issues.append(_issue(path, "ERROR", "E_LOG_RUN_TYPE", "review_runs lista szükséges"))
        runs = []
    if not runs:
        issues.append(_issue(path, "WARNING", "W_LOG_REVIEW_PENDING", "nincs végrehajtott napi/heti review, ticket, exception vagy emberi elfogadás"))
    for item in runs:
        if not isinstance(item, dict) or any(not item.get(field) for field in ("run_id", "frequency", "performed_at", "reviewer", "result", "protected_uri", "sha256", "human_review_status")):
            issues.append(_issue(path, "ERROR", "E_LOG_RUN_REQUIRED", "minden review runhoz teljes evidencia-metaadat szükséges"))
        elif item.get("frequency") not in REQUIRED_REVIEW_FREQUENCIES or not _timestamp(str(item.get("performed_at", ""))):
            issues.append(_issue(path, "ERROR", "E_LOG_RUN_VALUE", "hibás review frequency vagy nem időzónás időpont"))
        elif not SHA256_PATTERN.fullmatch(str(item.get("sha256", ""))):
            issues.append(_issue(path, "ERROR", "E_LOG_RUN_HASH", "a review run sha256 pontosan 64 hexadecimális karakter"))
        elif item.get("human_review_status") not in {"PENDING", "ACCEPTED", "REJECTED"}:
            issues.append(_issue(path, "ERROR", "E_LOG_RUN_REVIEW_STATUS", "ismeretlen human_review_status"))

    evidence = set(data.get("required_evidence", [])) if isinstance(data.get("required_evidence"), list) else set()
    if evidence != REQUIRED_EVIDENCE:
        issues.append(_issue(path, "ERROR", "E_LOG_EVIDENCE_SET", "hiányos vagy ismeretlen kötelező evidencia-készlet"))
    approval = data.get("human_approval", {})
    if data.get("status") == "HUMAN_REVIEWED":
        if source_pending or retention_pending or alerts_pending or not runs or any(item.get("human_review_status") != "ACCEPTED" for item in runs if isinstance(item, dict)) or not isinstance(approval, dict) or any(not approval.get(field) for field in ("reviewer", "approved_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_LOG_APPROVAL", "HUMAN_REVIEWED állapothoz teljes baseline, teszt, review-run és emberi approval szükséges"))
        elif not _timestamp(str(approval.get("approved_at", ""))):
            issues.append(_issue(path, "ERROR", "E_LOG_APPROVAL_TIME", "az approval időpontjának időzónásnak kell lennie"))
    return ValidationResult(tuple(issues))
