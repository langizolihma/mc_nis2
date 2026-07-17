"""Validation for the proposal-only A-027 RDS separation decision package."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


REQUIRED_FAMILIES = {"2", "17"}
REQUIRED_DOMAINS = {
    "USER_CAL_ENTITLEMENT", "WORKLOAD_AND_DEPENDENCY", "BANKING_ACCOUNTING_KEY_SCOPE",
    "PERFORMANCE_AND_CAPACITY", "SECURITY_AND_SEPARATION_RISK",
    "BACKUP_CONTINUITY_AND_ROLLBACK",
}
REQUIRED_TESTS = {
    "AUTHENTICATION_AND_PROFILE", "APPLICATION_FUNCTION", "KEY_OR_DEVICE_ACCESS",
    "PERFORMANCE_BASELINE", "FAILURE_AND_ROLLBACK",
}
REQUIRED_COST_INPUTS = {
    "existing_entitlement", "existing_capacity", "b0_alternative", "pilot",
    "acceptance_criterion", "purchase_trigger", "deferral_risk",
}


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def validate_rds_separation_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Preserve separation until evidence and human gates support another decision."""
    issues: list[Issue] = []
    for field in (
        "schema_version", "status", "action_id", "requirement_families", "source_position",
        "safety", "assessment_domains", "test_scenarios", "cost_gate",
        "consolidation_decision", "human_review",
    ):
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_RDS_REQUIRED", f"hiányzó kötelező mező: {field}", "A-027"))
    if data.get("action_id") != "A-027":
        issues.append(_issue(path, "ERROR", "E_RDS_ACTION", "az action_id értéke A-027 kell legyen"))
    families = set(data.get("requirement_families", [])) if isinstance(data.get("requirement_families"), list) else set()
    if families != REQUIRED_FAMILIES:
        issues.append(_issue(path, "ERROR", "E_RDS_FAMILY", "a 2 és 17 követelménycsalád pontos lefedése szükséges"))
    if data.get("status") not in {"PROPOSAL", "READY_FOR_G1", "HUMAN_REVIEWED"}:
        issues.append(_issue(path, "ERROR", "E_RDS_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))
    source = data.get("source_position", {})
    if not isinstance(source, dict) or source.get("source_ref") != "SRC-004" or source.get("source_confidence") != "unverified_internal":
        issues.append(_issue(path, "ERROR", "E_RDS_SOURCE", "az SRC-004 állításait unverified_internal minősítéssel kell megőrizni"))

    safety = data.get("safety", {})
    if not isinstance(safety, dict):
        issues.append(_issue(path, "ERROR", "E_RDS_SAFETY_TYPE", "safety objektum szükséges"))
        safety = {}
    if set(safety.get("required_gates", [])) != {"G1_DOMAIN_REVIEW", "G3_PRODUCTION_CHANGE", "G5_PURCHASE"}:
        issues.append(_issue(path, "ERROR", "E_RDS_GATES", "G1 baseline, G3 változtatás és fizetős döntéshez G5 kapu szükséges"))
    for field in (
        "production_query_allowed", "session_or_user_move_allowed", "key_or_secret_access_allowed",
        "configuration_change_allowed", "consolidation_allowed", "purchase_allowed",
        "delete_or_disable_allowed",
    ):
        if safety.get(field) is not False:
            issues.append(_issue(path, "ERROR", "E_RDS_UNSAFE", f"proposal állapotban explicit false szükséges: {field}"))

    domains = data.get("assessment_domains", [])
    if not isinstance(domains, list):
        issues.append(_issue(path, "ERROR", "E_RDS_DOMAIN_TYPE", "assessment_domains lista szükséges"))
        domains = []
    seen: set[str] = set()
    reviewed = 0
    for item in domains:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_RDS_DOMAIN_RECORD", "minden assessment domain objektum kell legyen"))
            continue
        identity = str(item.get("domain_id", ""))
        required = ("domain_id", "status", "owner", "scope_refs", "method", "evidence_refs", "finding", "reviewer", "reviewed_at")
        if any(field not in item for field in required):
            issues.append(_issue(path, "ERROR", "E_RDS_DOMAIN_REQUIRED", "hiányos assessment domain", identity))
            continue
        if identity in seen:
            issues.append(_issue(path, "ERROR", "E_RDS_DOMAIN_DUPLICATE", "duplikált domain", identity))
        seen.add(identity)
        if item.get("status") == "PENDING_HUMAN":
            if item.get("owner") != "TBD-HUMAN" or any(item.get(field) for field in ("scope_refs", "method", "evidence_refs", "finding", "reviewer", "reviewed_at")):
                issues.append(_issue(path, "ERROR", "E_RDS_FALSE_DOMAIN", "PENDING_HUMAN domain csak TBD-HUMAN ownert tartalmazhat", identity))
        elif item.get("status") == "HUMAN_REVIEWED":
            reviewed += 1
            if item.get("owner") in (None, "", "TBD-HUMAN") or any(not item.get(field) for field in ("scope_refs", "method", "evidence_refs", "finding", "reviewer", "reviewed_at")) or not _timestamp(str(item.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_RDS_DOMAIN_EVIDENCE", "review-zott domainhez owner, scope, módszer, evidencia, finding és időzónás review szükséges", identity))
        else:
            issues.append(_issue(path, "ERROR", "E_RDS_DOMAIN_STATUS", "a domain status PENDING_HUMAN vagy HUMAN_REVIEWED lehet", identity))
    if seen != REQUIRED_DOMAINS:
        issues.append(_issue(path, "ERROR", "E_RDS_DOMAIN_COVERAGE", "a hat assessment domain pontos készlete szükséges"))
    if reviewed != len(domains):
        issues.append(_issue(path, "WARNING", "W_RDS_INPUT_PENDING", "a workload-, CAL-, kulcs-, teljesítmény-, kockázat- és continuity inputok emberi felmérésre várnak"))

    scenarios = data.get("test_scenarios", [])
    if not isinstance(scenarios, list):
        issues.append(_issue(path, "ERROR", "E_RDS_TEST_TYPE", "test_scenarios lista szükséges"))
        scenarios = []
    scenario_ids = {str(item.get("scenario_id", "")) for item in scenarios if isinstance(item, dict)}
    if scenario_ids != REQUIRED_TESTS or len(scenarios) != len(REQUIRED_TESTS):
        issues.append(_issue(path, "ERROR", "E_RDS_TEST_COVERAGE", "az öt tesztforgatókönyv pontos készlete szükséges"))
    accepted_tests = 0
    for item in scenarios:
        if not isinstance(item, dict) or any(field not in item for field in ("scenario_id", "status", "purpose", "owner_approval_ref", "g3_approval_ref", "result", "rollback_result", "evidence_refs", "reviewer", "reviewed_at")):
            issues.append(_issue(path, "ERROR", "E_RDS_TEST_REQUIRED", "hiányos tesztforgatókönyv"))
            continue
        identity = str(item.get("scenario_id", ""))
        if not item.get("purpose"):
            issues.append(_issue(path, "ERROR", "E_RDS_TEST_PURPOSE", "minden teszthez cél szükséges", identity))
        if item.get("status") == "NOT_EXECUTED":
            if any(item.get(field) for field in ("owner_approval_ref", "g3_approval_ref", "result", "rollback_result", "evidence_refs", "reviewer", "reviewed_at")):
                issues.append(_issue(path, "ERROR", "E_RDS_FALSE_TEST", "NOT_EXECUTED teszt nem tartalmazhat végrehajtási evidenciát", identity))
        elif item.get("status") == "HUMAN_ACCEPTED":
            accepted_tests += 1
            if any(not item.get(field) for field in ("owner_approval_ref", "g3_approval_ref", "result", "rollback_result", "evidence_refs", "reviewer", "reviewed_at")) or not _timestamp(str(item.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_RDS_TEST_EVIDENCE", "végrehajtott teszthez owner/G3, eredmény, rollback, evidencia és review szükséges", identity))
        else:
            issues.append(_issue(path, "ERROR", "E_RDS_TEST_STATUS", "a teszt status NOT_EXECUTED vagy HUMAN_ACCEPTED lehet", identity))
    if accepted_tests == 0:
        issues.append(_issue(path, "WARNING", "W_RDS_TEST_PENDING", "nincs végrehajtott, G3-mal jóváhagyott és emberileg elfogadott teszt"))

    cost = data.get("cost_gate", {})
    if not isinstance(cost, dict):
        issues.append(_issue(path, "ERROR", "E_RDS_COST_TYPE", "cost_gate objektum szükséges"))
        cost = {}
    inputs = set(cost.get("required_inputs", [])) if isinstance(cost.get("required_inputs"), list) else set()
    if inputs != REQUIRED_COST_INPUTS or cost.get("paid_option_status") != "BLOCKED_BY_COST_GATE" or cost.get("purchase_execution_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_RDS_COST_GATE", "a hét költséginput, BLOCKED_BY_COST_GATE és purchase tiltás kötelező"))

    decision = data.get("consolidation_decision", {})
    if not isinstance(decision, dict):
        issues.append(_issue(path, "ERROR", "E_RDS_DECISION_TYPE", "consolidation_decision objektum szükséges"))
        decision = {}
    if decision.get("status") == "KEEP_SEPARATED_PENDING_EVIDENCE":
        if decision.get("target_state") != "CURRENT_SEPARATION" or any(decision.get(field) for field in ("decision_ref", "approver", "approved_at")):
            issues.append(_issue(path, "ERROR", "E_RDS_FALSE_DECISION", "pending állapotban a jelenlegi szeparáció marad, approval nem állítható"))
        issues.append(_issue(path, "WARNING", "W_RDS_DECISION_PENDING", "a jelenlegi szeparáció fenntartandó; konszolidációs döntéshez teljes evidencia és emberi kapu szükséges"))
    elif decision.get("status") in {"HUMAN_APPROVED_KEEP_SEPARATED", "HUMAN_APPROVED_FOR_SEPARATE_CHANGE"}:
        if reviewed != len(domains) or accepted_tests != len(scenarios) or any(not decision.get(field) for field in ("target_state", "decision_ref", "approver", "approved_at", "license_review_ref", "risk_acceptance_ref")) or not _timestamp(str(decision.get("approved_at", ""))):
            issues.append(_issue(path, "ERROR", "E_RDS_DECISION_EVIDENCE", "döntéshez teljes felmérés, teszt, licenc-, kockázati és időzónás emberi approval szükséges"))
    else:
        issues.append(_issue(path, "ERROR", "E_RDS_DECISION_STATUS", "ismeretlen consolidation_decision status"))

    approval = data.get("human_review", {})
    if data.get("status") == "HUMAN_REVIEWED":
        if reviewed != len(domains) or not isinstance(approval, dict) or any(not approval.get(field) for field in ("reviewer", "approved_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_RDS_APPROVAL", "HUMAN_REVIEWED baseline-hoz teljes assessment és G1 review szükséges"))
        elif not _timestamp(str(approval.get("approved_at", ""))):
            issues.append(_issue(path, "ERROR", "E_RDS_APPROVAL_TIME", "a G1 review időpontjának időzónásnak kell lennie"))
    else:
        issues.append(_issue(path, "WARNING", "W_RDS_REVIEW_PENDING", "az assessment, teszt- és döntési csomag G1 emberi review-ra vár"))
    return ValidationResult(tuple(issues))
