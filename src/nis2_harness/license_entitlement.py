"""Validation for the proposal-only A-029 license and support audit package."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


REQUIRED_CATEGORIES = {
    "WINDOWS_SERVER", "RDS", "M365", "DEFENDER", "VIRTUALIZATION", "RELEVANT_APPLICATIONS",
}
ENTITLEMENT_POSITIONS = {"UNKNOWN_PENDING_EVIDENCE", "ADEQUATE", "SHORTFALL", "SURPLUS", "NOT_APPLICABLE"}
SUPPORT_STATUSES = {"UNKNOWN_PENDING_EVIDENCE", "SUPPORTED", "EXTENDED_SUPPORT", "END_OF_SUPPORT", "NOT_APPLICABLE"}
PAID_BANDS = {"B1", "B2", "B3"}
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


def validate_license_entitlement_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Ensure unknown entitlements stay unknown and paid proposals remain behind G5."""
    issues: list[Issue] = []
    for field in (
        "schema_version", "status", "action_id", "source_refs", "records",
        "cost_gate_policy", "cost_decisions", "human_review",
    ):
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_LICENSE_REQUIRED", f"hiányzó kötelező mező: {field}", "A-029"))
    if data.get("action_id") != "A-029":
        issues.append(_issue(path, "ERROR", "E_LICENSE_ACTION", "az action_id értéke A-029 kell legyen"))
    if data.get("status") not in {"PROPOSAL", "READY_FOR_REVIEW", "HUMAN_REVIEWED"}:
        issues.append(_issue(path, "ERROR", "E_LICENSE_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))

    records = data.get("records", [])
    if not isinstance(records, list):
        issues.append(_issue(path, "ERROR", "E_LICENSE_RECORD_TYPE", "records lista szükséges"))
        records = []
    seen: set[str] = set()
    pending = False
    for record in records:
        if not isinstance(record, dict):
            issues.append(_issue(path, "ERROR", "E_LICENSE_RECORD", "minden licencrekord objektum kell legyen"))
            continue
        category = str(record.get("category", ""))
        for field in (
            "category", "scope_status", "publisher", "product_or_service", "deployment_scope",
            "usage_metric", "entitlement_position", "support_status", "support_lifecycle_ref",
            "evidence_refs", "reviewed_by", "reviewed_at",
        ):
            if field not in record:
                issues.append(_issue(path, "ERROR", "E_LICENSE_RECORD_REQUIRED", f"hiányzó rekordmező: {field}", category))
        if category in seen:
            issues.append(_issue(path, "ERROR", "E_LICENSE_DUPLICATE", "duplikált licenckategória", category))
        seen.add(category)
        entitlement = record.get("entitlement_position")
        support = record.get("support_status")
        if entitlement not in ENTITLEMENT_POSITIONS:
            issues.append(_issue(path, "ERROR", "E_LICENSE_ENTITLEMENT_STATUS", "ismeretlen entitlement_position", category))
        if support not in SUPPORT_STATUSES:
            issues.append(_issue(path, "ERROR", "E_LICENSE_SUPPORT_STATUS", "ismeretlen support_status", category))
        scope_status = record.get("scope_status")
        if scope_status == "PENDING_HUMAN":
            pending = True
            if entitlement != "UNKNOWN_PENDING_EVIDENCE" or support != "UNKNOWN_PENDING_EVIDENCE":
                issues.append(_issue(path, "ERROR", "E_LICENSE_UNSUPPORTED_CLAIM", "bizonyítékra váró rekord nem állíthat entitlement- vagy support-tényt", category))
            if record.get("evidence_refs") or record.get("reviewed_by") or record.get("reviewed_at"):
                issues.append(_issue(path, "ERROR", "E_LICENSE_FALSE_REVIEW", "PENDING_HUMAN rekord nem tartalmazhat evidenciát vagy review-t", category))
        elif scope_status == "HUMAN_REVIEWED":
            required_values = ("publisher", "product_or_service", "deployment_scope", "usage_metric", "support_lifecycle_ref")
            if any(record.get(field) in (None, "", "TBD-HUMAN") for field in required_values):
                issues.append(_issue(path, "ERROR", "E_LICENSE_REVIEWED_INPUT", "review-zott rekord minden scope- és lifecycle-mezője kitöltendő", category))
            if entitlement == "UNKNOWN_PENDING_EVIDENCE" or support == "UNKNOWN_PENDING_EVIDENCE":
                issues.append(_issue(path, "ERROR", "E_LICENSE_REVIEWED_UNKNOWN", "review-zott rekord nem maradhat ismeretlen", category))
            if not record.get("evidence_refs") or not record.get("reviewed_by") or not _timestamp(str(record.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_LICENSE_REVIEW_EVIDENCE", "review-zott rekordhoz evidencia, reviewer és időzónás időpont szükséges", category))
        else:
            issues.append(_issue(path, "ERROR", "E_LICENSE_SCOPE_STATUS", "a scope_status PENDING_HUMAN vagy HUMAN_REVIEWED lehet", category))
    if seen != REQUIRED_CATEGORIES:
        issues.append(_issue(path, "ERROR", "E_LICENSE_COVERAGE", f"hibás kategórialefedettség; hiányzik={sorted(REQUIRED_CATEGORIES - seen)}, ismeretlen={sorted(seen - REQUIRED_CATEGORIES)}"))
    if pending:
        issues.append(_issue(path, "WARNING", "W_LICENSE_INPUT_PENDING", "a szerződés-, telepítés-, használat-, entitlement- és lifecycle-adatok emberi összegyűjtésre várnak"))

    policy = data.get("cost_gate_policy", {})
    if not isinstance(policy, dict):
        issues.append(_issue(path, "ERROR", "E_LICENSE_POLICY_TYPE", "cost_gate_policy objektum szükséges"))
        policy = {}
    for field in REQUIRED_COST_INPUTS:
        if policy.get(f"{field}_required") is not True:
            issues.append(_issue(path, "ERROR", "E_LICENSE_COST_POLICY", f"kötelező költségvédelmi szabály hiányzik: {field}"))
    if policy.get("required_gate") != "G5_PURCHASE":
        issues.append(_issue(path, "ERROR", "E_LICENSE_G5", "minden fizetős javaslat G5_PURCHASE kaput igényel"))
    if policy.get("purchase_execution_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_LICENSE_PURCHASE_FORBIDDEN", "a csomag nem engedélyezhet vásárlás-végrehajtást"))

    decisions = data.get("cost_decisions", [])
    if not isinstance(decisions, list):
        issues.append(_issue(path, "ERROR", "E_LICENSE_DECISION_TYPE", "cost_decisions lista szükséges"))
        decisions = []
    for decision in decisions:
        if not isinstance(decision, dict):
            issues.append(_issue(path, "ERROR", "E_LICENSE_DECISION_RECORD", "minden cost decision objektum kell legyen"))
            continue
        identity = str(decision.get("decision_id", ""))
        for field in ("decision_id", "category", "cost_band", "status", *sorted(REQUIRED_COST_INPUTS), "required_gate", "evidence_refs", "human_decision"):
            if field not in decision:
                issues.append(_issue(path, "ERROR", "E_LICENSE_DECISION_REQUIRED", f"hiányzó döntési mező: {field}", identity))
        band = decision.get("cost_band")
        if band not in {"B0", "B1", "B2", "B3"}:
            issues.append(_issue(path, "ERROR", "E_LICENSE_COST_BAND", "ismeretlen cost_band", identity))
        if decision.get("category") not in REQUIRED_CATEGORIES:
            issues.append(_issue(path, "ERROR", "E_LICENSE_DECISION_CATEGORY", "ismeretlen licenckategória", identity))
        if band in PAID_BANDS:
            if any(not decision.get(field) for field in REQUIRED_COST_INPUTS):
                issues.append(_issue(path, "ERROR", "E_LICENSE_COST_INPUTS", "fizetős javaslathoz mind a hét költségvédelmi input szükséges", identity))
            if decision.get("required_gate") != "G5_PURCHASE":
                issues.append(_issue(path, "ERROR", "E_LICENSE_DECISION_G5", "fizetős javaslat G5_PURCHASE kaput igényel", identity))
            if decision.get("status") not in {"BLOCKED_BY_COST_GATE", "HUMAN_APPROVED_G5", "HUMAN_REJECTED"}:
                issues.append(_issue(path, "ERROR", "E_LICENSE_PAID_STATUS", "fizetős javaslat csak költségkapus emberi státuszú lehet", identity))
            human = decision.get("human_decision", {})
            if decision.get("status") in {"HUMAN_APPROVED_G5", "HUMAN_REJECTED"}:
                if not isinstance(human, dict) or any(not human.get(field) for field in ("decider", "decided_at", "decision_ref")):
                    issues.append(_issue(path, "ERROR", "E_LICENSE_HUMAN_DECISION", "G5 döntéshez döntéshozó, időpont és hivatkozás szükséges", identity))
                elif not _timestamp(str(human.get("decided_at", ""))):
                    issues.append(_issue(path, "ERROR", "E_LICENSE_DECISION_TIME", "a G5 döntési időpontnak időzónásnak kell lennie", identity))
            elif isinstance(human, dict) and any(human.values()):
                issues.append(_issue(path, "ERROR", "E_LICENSE_FALSE_G5", "blokkolt javaslat nem tartalmazhat G5 döntést", identity))

    review = data.get("human_review", {})
    if data.get("status") == "HUMAN_REVIEWED":
        if pending or not isinstance(review, dict) or any(not review.get(field) for field in ("reviewer", "reviewed_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_LICENSE_PACKAGE_REVIEW", "HUMAN_REVIEWED csomaghoz teljes rekordok és emberi review szükséges"))
        elif not _timestamp(str(review.get("reviewed_at", ""))):
            issues.append(_issue(path, "ERROR", "E_LICENSE_PACKAGE_REVIEW_TIME", "a csomag-review időpontjának időzónásnak kell lennie"))
    else:
        issues.append(_issue(path, "WARNING", "W_LICENSE_REVIEW_PENDING", "a licenc- és supportmátrix G1/G5 emberi review-ra vár"))
    if not decisions:
        issues.append(_issue(path, "WARNING", "W_LICENSE_DECISION_PENDING", "a tényfelmérés után B0/no-action vagy költségkapus döntési rekord szükséges"))
    return ValidationResult(tuple(issues))
