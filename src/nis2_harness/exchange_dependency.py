"""Validation for the proposal-only A-025 Exchange dependency package."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


REQUIRED_SOURCE_POSITIONS = {
    ("SRC-003:p1,3,7", "strategy_input"),
    ("SRC-004", "unverified_internal"),
}
REQUIRED_DISCOVERY_SOURCES = {
    "MESSAGE_TRACKING_SAMPLE", "RECEIVE_CONNECTOR_EXPORT", "SEND_CONNECTOR_EXPORT",
    "RELAY_ALLOWLIST_EXPORT", "AUTHENTICATION_MODE_EXPORT",
    "APPLICATION_DEVICE_OWNER_CONFIRMATION", "NETWORK_DNS_DEPENDENCY_EXPORT",
}
REQUIRED_SCENARIOS = {
    "INTERNAL_DELIVERY", "EXTERNAL_DELIVERY", "INBOUND_DELIVERY",
    "AUTHENTICATED_CLIENT", "DEVICE_RELAY", "APPLICATION_RELAY", "FAILURE_AND_ROLLBACK",
}
REQUIRED_ROLLBACK = {
    "configuration_backup", "current_connector_export", "dns_and_certificate_baseline",
    "routing_restore_steps", "rollback_owner", "rollback_trigger",
    "rollback_time_objective", "post_rollback_validation",
}
DEPENDENCY_TYPES = {
    "APPLICATION", "DEVICE", "USER_CLIENT", "SYSTEM_SERVICE",
    "EXTERNAL_GATEWAY", "AUTOMATION_JOB",
}


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def validate_exchange_dependency_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Keep strategic assumptions unverified and block unapproved mail-system execution."""
    issues: list[Issue] = []
    for field in (
        "schema_version", "status", "action_id", "requirement_family", "source_positions",
        "safety", "discovery_plan", "dependency_records", "test_scenarios",
        "rollback_requirements", "migration_decision", "human_review",
    ):
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_REQUIRED", f"hiányzó kötelező mező: {field}", "A-025"))
    if data.get("action_id") != "A-025":
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_ACTION", "az action_id értéke A-025 kell legyen"))
    if data.get("requirement_family") != "17":
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_FAMILY", "az A-025 követelménycsaládja 17"))
    if data.get("status") not in {"PROPOSAL", "READY_FOR_G1", "HUMAN_REVIEWED"}:
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))
    positions = data.get("source_positions", [])
    position_set = {
        (str(item.get("source_ref", "")), str(item.get("source_confidence", "")))
        for item in positions if isinstance(item, dict)
    } if isinstance(positions, list) else set()
    if position_set != REQUIRED_SOURCE_POSITIONS or len(positions) != len(REQUIRED_SOURCE_POSITIONS):
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_SOURCE_POSITION", "az SRC-003 stratégiai és SRC-004 nem igazolt státuszát meg kell őrizni"))

    safety = data.get("safety", {})
    if not isinstance(safety, dict):
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_SAFETY_TYPE", "safety objektum szükséges"))
        safety = {}
    if set(safety.get("required_gates", [])) != {"G1_DOMAIN_REVIEW", "G3_PRODUCTION_CHANGE"}:
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_GATES", "G1 baseline-review és végrehajtás előtt G3 szükséges"))
    for field in (
        "production_query_allowed", "test_message_allowed", "configuration_change_allowed",
        "migration_allowed", "dns_change_allowed", "connector_change_allowed",
        "credential_collection_allowed", "delete_or_disable_allowed",
    ):
        if safety.get(field) is not False:
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_UNSAFE", f"proposal állapotban explicit false szükséges: {field}"))

    discovery = data.get("discovery_plan", {})
    if not isinstance(discovery, dict):
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_DISCOVERY_TYPE", "discovery_plan objektum szükséges"))
        discovery = {}
    sources = set(discovery.get("required_sources", [])) if isinstance(discovery.get("required_sources"), list) else set()
    if sources != REQUIRED_DISCOVERY_SOURCES:
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_DISCOVERY_COVERAGE", "a hét felderítési forrás pontos készlete szükséges"))
    if discovery.get("mode") != "READ_ONLY_AFTER_HUMAN_APPROVAL" or discovery.get("execution_status") != "NOT_EXECUTED":
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_DISCOVERY_STATE", "a felderítés csak jóváhagyás utáni read-only, kezdetben NOT_EXECUTED lehet"))
    if discovery.get("store_secrets") is not False or discovery.get("store_addresses_in_git") is not False:
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_DISCOVERY_DATA", "secret és e-mail-cím Gitben nem tárolható"))
    issues.append(_issue(path, "WARNING", "W_EXCHANGE_SCOPE_PENDING", "a pontos Exchange/SMTP scope, exportmódszer és adatminősítés emberi jóváhagyásra vár"))

    records = data.get("dependency_records", [])
    if not isinstance(records, list):
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_RECORD_TYPE", "dependency_records lista szükséges"))
        records = []
    if not records:
        issues.append(_issue(path, "WARNING", "W_EXCHANGE_INVENTORY_PENDING", "nincs emberileg ellenőrzött SMTP relay/client függőségi rekord"))
    seen: set[str] = set()
    reviewed = 0
    for item in records:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_RECORD", "minden függőségi rekord objektum kell legyen"))
            continue
        identity = str(item.get("dependency_id", ""))
        required = (
            "dependency_id", "status", "dependency_type", "protected_system_ref", "eir_refs",
            "business_owner", "technical_owner", "smtp_role", "authentication_mode",
            "tls_requirement", "source_endpoint_ref", "target_domain_ref", "volume_class",
            "criticality", "continuity_requirement", "evidence_refs", "reviewer", "reviewed_at",
        )
        if any(field not in item for field in required):
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_RECORD_REQUIRED", "hiányos dependency rekord", identity))
            continue
        if not identity or identity in seen:
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_DUPLICATE", "hiányzó vagy duplikált dependency_id", identity))
        seen.add(identity)
        if item.get("status") == "PENDING_HUMAN":
            if any(item.get(field) not in (None, "", [], {}) for field in required[2:]):
                issues.append(_issue(path, "ERROR", "E_EXCHANGE_FALSE_CLAIM", "PENDING_HUMAN rekord nem állíthat rendszer-, owner-, routing- vagy review-tényt", identity))
        elif item.get("status") == "HUMAN_REVIEWED":
            reviewed += 1
            if item.get("dependency_type") not in DEPENDENCY_TYPES:
                issues.append(_issue(path, "ERROR", "E_EXCHANGE_DEPENDENCY_TYPE", "ismeretlen dependency_type", identity))
            if any(item.get(field) in (None, "", [], {}) for field in required[3:]) or not _timestamp(str(item.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_EXCHANGE_REVIEW_EVIDENCE", "review-zott rekordhoz teljes scope, owner, protokoll-metaadat, evidencia és időzónás review szükséges", identity))
        else:
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_RECORD_STATUS", "a dependency status PENDING_HUMAN vagy HUMAN_REVIEWED lehet", identity))

    scenarios = data.get("test_scenarios", [])
    if not isinstance(scenarios, list):
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_SCENARIO_TYPE", "test_scenarios lista szükséges"))
        scenarios = []
    scenario_ids = {str(item.get("scenario_id", "")) for item in scenarios if isinstance(item, dict)}
    if scenario_ids != REQUIRED_SCENARIOS or len(scenarios) != len(REQUIRED_SCENARIOS):
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_SCENARIO_COVERAGE", "a hét tesztforgatókönyv pontos készlete szükséges"))
    executed = 0
    for item in scenarios:
        if not isinstance(item, dict) or any(field not in item for field in ("scenario_id", "status", "purpose", "owner_approval_ref", "g3_approval_ref", "result", "rollback_result", "evidence_refs", "reviewer", "reviewed_at")):
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_SCENARIO_REQUIRED", "hiányos tesztforgatókönyv"))
            continue
        identity = str(item.get("scenario_id", ""))
        if not item.get("purpose"):
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_SCENARIO_PURPOSE", "minden forgatókönyvhöz cél szükséges", identity))
        if item.get("status") == "NOT_EXECUTED":
            if any(item.get(field) for field in ("owner_approval_ref", "g3_approval_ref", "result", "rollback_result", "evidence_refs", "reviewer", "reviewed_at")):
                issues.append(_issue(path, "ERROR", "E_EXCHANGE_FALSE_TEST", "NOT_EXECUTED teszt nem tartalmazhat végrehajtási evidenciát", identity))
        elif item.get("status") == "HUMAN_ACCEPTED":
            executed += 1
            if any(not item.get(field) for field in ("owner_approval_ref", "g3_approval_ref", "result", "rollback_result", "evidence_refs", "reviewer", "reviewed_at")) or not _timestamp(str(item.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_EXCHANGE_TEST_EVIDENCE", "végrehajtott teszthez owner/G3, eredmény, rollback, evidencia és review szükséges", identity))
        else:
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_SCENARIO_STATUS", "a scenario status NOT_EXECUTED vagy HUMAN_ACCEPTED lehet", identity))
    if executed == 0:
        issues.append(_issue(path, "WARNING", "W_EXCHANGE_TEST_PENDING", "nincs végrehajtott és emberileg elfogadott SMTP/Exchange teszt"))

    rollback = data.get("rollback_requirements", [])
    rollback_set = set(rollback) if isinstance(rollback, list) else set()
    if rollback_set != REQUIRED_ROLLBACK:
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_ROLLBACK", "a nyolc rollback-követelmény pontos készlete szükséges"))

    decision = data.get("migration_decision", {})
    if not isinstance(decision, dict):
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_DECISION_TYPE", "migration_decision objektum szükséges"))
        decision = {}
    if decision.get("status") == "NOT_AUTHORIZED":
        if decision.get("target_model") != "TBD-HUMAN" or any(decision.get(field) for field in ("decision_ref", "approver", "approved_at")):
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_FALSE_DECISION", "nem engedélyezett migrációhoz nem tartozhat célmodell vagy approval"))
    elif decision.get("status") == "HUMAN_APPROVED_FOR_SEPARATE_CHANGE":
        if reviewed != len(records) or not records or executed != len(scenarios) or any(not decision.get(field) for field in ("target_model", "decision_ref", "approver", "approved_at")) or not _timestamp(str(decision.get("approved_at", ""))):
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_DECISION_EVIDENCE", "migrációs döntéshez teljes leltár, tesztek és időzónás emberi approval szükséges"))
    else:
        issues.append(_issue(path, "ERROR", "E_EXCHANGE_DECISION_STATUS", "ismeretlen migration_decision status"))

    approval = data.get("human_review", {})
    if data.get("status") == "HUMAN_REVIEWED":
        if not records or reviewed != len(records) or not isinstance(approval, dict) or any(not approval.get(field) for field in ("reviewer", "approved_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_APPROVAL", "HUMAN_REVIEWED baseline-hoz teljes dependency leltár és G1 review szükséges"))
        elif not _timestamp(str(approval.get("approved_at", ""))):
            issues.append(_issue(path, "ERROR", "E_EXCHANGE_APPROVAL_TIME", "a G1 review időpontjának időzónásnak kell lennie"))
    else:
        issues.append(_issue(path, "WARNING", "W_EXCHANGE_REVIEW_PENDING", "a scope, leltár és tesztterv G1 emberi review-ra vár"))
    return ValidationResult(tuple(issues))
