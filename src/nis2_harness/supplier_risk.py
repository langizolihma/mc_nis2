"""Validation for the proposal-only A-021 supplier risk package."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


REQUIRED_CONTROLS = {"19.1", "19.4"}
REQUIRED_FINDINGS = {"F-0072", "F-0074"}
REQUIRED_DIMENSIONS = {
    "SERVICE_CRITICALITY", "EIR_DEPENDENCY", "DATA_ACCESS",
    "PRIVILEGED_ACCESS", "REPLACEABILITY", "SUBCONTRACTOR_DEPENDENCY",
}
REQUIRED_CONTRACT_CONTROLS = {
    "SECURITY_RESPONSIBILITY", "INCIDENT_NOTIFICATION", "ACCESS_AND_LEAST_PRIVILEGE",
    "SUBCONTRACTOR_FLOW_DOWN", "CONFIDENTIALITY_AND_DATA_HANDLING",
    "VULNERABILITY_AND_PATCH", "BUSINESS_CONTINUITY", "AUDIT_AND_EVIDENCE_RIGHT",
    "TERMINATION_RETURN_OR_DELETE", "MATERIAL_CHANGE_NOTIFICATION",
}
ASSESSMENT_STATUSES = {"PRESENT", "PARTIAL", "MISSING", "NOT_APPLICABLE"}
CRITICALITIES = {"LOW", "MEDIUM", "HIGH", "CRITICAL"}
TREATMENTS = {"MITIGATE", "ACCEPT", "AVOID", "TRANSFER"}


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def _expected_criticality(score: int) -> str:
    if score <= 4:
        return "LOW"
    if score <= 9:
        return "MEDIUM"
    if score <= 13:
        return "HIGH"
    return "CRITICAL"


def validate_supplier_risk_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Reject invented supplier facts, incomplete assessments and automatic decisions."""
    issues: list[Issue] = []
    for field in (
        "schema_version", "status", "action_id", "source_refs", "control_refs",
        "finding_refs", "safety", "criticality_model", "contract_control_catalog",
        "suppliers", "review_calendar", "risk_decisions", "human_review",
    ):
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_REQUIRED", f"hiányzó kötelező mező: {field}", "A-021"))
    if data.get("action_id") != "A-021":
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_ACTION", "az action_id értéke A-021 kell legyen"))
    if data.get("status") not in {"PROPOSAL", "READY_FOR_G1", "HUMAN_REVIEWED"}:
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))
    controls = set(data.get("control_refs", [])) if isinstance(data.get("control_refs"), list) else set()
    if controls != REQUIRED_CONTROLS:
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_CONTROL_COVERAGE", "az A-021 19.1 és 19.4 kontrolljának pontos lefedése szükséges"))
    findings = set(data.get("finding_refs", [])) if isinstance(data.get("finding_refs"), list) else set()
    if findings != REQUIRED_FINDINGS:
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_FINDING_COVERAGE", "az F-0072 és F-0074 finding pontos hivatkozása szükséges"))

    safety = data.get("safety", {})
    if not isinstance(safety, dict):
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_SAFETY_TYPE", "safety objektum szükséges"))
        safety = {}
    if set(safety.get("required_gates", [])) != {"G1_DOMAIN_REVIEW"}:
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_GATES", "az A-021 baseline-hoz G1 domain review szükséges"))
    for field in (
        "supplier_contact_allowed", "contract_upload_allowed", "contract_amendment_allowed",
        "automatic_risk_acceptance_allowed", "external_sharing_allowed", "purchase_allowed",
    ):
        if safety.get(field) is not False:
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_UNSAFE", f"proposal állapotban explicit false szükséges: {field}"))

    model = data.get("criticality_model", {})
    if not isinstance(model, dict):
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_MODEL_TYPE", "criticality_model objektum szükséges"))
        model = {}
    dimensions = set(model.get("dimensions", [])) if isinstance(model.get("dimensions"), list) else set()
    if dimensions != REQUIRED_DIMENSIONS:
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_DIMENSIONS", "a hat kritikalitási dimenzió pontos készlete szükséges"))
    if model.get("score_min") != 0 or model.get("score_max_per_dimension") != 3:
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_SCORE_MODEL", "dimenziónként 0–3 pont szükséges"))
    if model.get("automatic_classification_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_AUTO_CLASSIFICATION", "automatikus beszállítói minősítés nem engedélyezett"))

    catalog = data.get("contract_control_catalog", [])
    if not isinstance(catalog, list):
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_CATALOG_TYPE", "contract_control_catalog lista szükséges"))
        catalog = []
    catalog_ids = {str(item.get("control_id", "")) for item in catalog if isinstance(item, dict)}
    if catalog_ids != REQUIRED_CONTRACT_CONTROLS or len(catalog) != len(REQUIRED_CONTRACT_CONTROLS):
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_CATALOG_COVERAGE", "a tíz szerződéses kontroll pontos készlete szükséges"))
    for item in catalog:
        if not isinstance(item, dict) or any(not item.get(field) for field in ("control_id", "question", "expected_evidence")):
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_CATALOG_RECORD", "minden kontrollhoz kérdés és elvárt evidencia szükséges"))

    suppliers = data.get("suppliers", [])
    if not isinstance(suppliers, list):
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_RECORD_TYPE", "suppliers lista szükséges"))
        suppliers = []
    if not suppliers:
        issues.append(_issue(path, "WARNING", "W_SUPPLIER_INVENTORY_PENDING", "a beszállítói és szerződéses leltár emberi adatgyűjtésre vár"))
        issues.append(_issue(path, "WARNING", "W_SUPPLIER_ASSESSMENT_PENDING", "nincs emberileg review-zott kritikalitás vagy szerződéses kontroll-gap"))
    seen: set[str] = set()
    reviewed_suppliers = 0
    for supplier in suppliers:
        if not isinstance(supplier, dict):
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_RECORD", "minden beszállítói rekord objektum kell legyen"))
            continue
        identity = str(supplier.get("supplier_id", ""))
        required = (
            "supplier_id", "status", "protected_supplier_ref", "service_scope", "eir_refs",
            "business_owner", "contract_owner", "dimension_scores", "criticality_score",
            "criticality", "contract_ref", "control_assessments", "questionnaire_ref",
            "risk_decision_ref", "next_review_at", "evidence_refs", "reviewer", "reviewed_at",
        )
        if any(field not in supplier for field in required):
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_RECORD_REQUIRED", "hiányos beszállítói rekord", identity))
            continue
        if not identity or identity in seen:
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_DUPLICATE", "hiányzó vagy duplikált supplier_id", identity))
        seen.add(identity)
        if supplier.get("status") == "PENDING_HUMAN":
            claimed = (
                "protected_supplier_ref", "service_scope", "eir_refs", "business_owner", "contract_owner",
                "dimension_scores", "criticality_score", "criticality", "contract_ref",
                "control_assessments", "questionnaire_ref", "risk_decision_ref", "next_review_at",
                "evidence_refs", "reviewer", "reviewed_at",
            )
            if any(supplier.get(field) not in (None, "", [], {}) for field in claimed):
                issues.append(_issue(path, "ERROR", "E_SUPPLIER_FALSE_CLAIM", "PENDING_HUMAN rekord nem állíthat scope-, kritikalitás-, szerződés- vagy review-tényt", identity))
        elif supplier.get("status") == "HUMAN_REVIEWED":
            reviewed_suppliers += 1
            required_values = (
                "protected_supplier_ref", "service_scope", "eir_refs", "business_owner", "contract_owner",
                "dimension_scores", "criticality_score", "criticality", "contract_ref",
                "control_assessments", "questionnaire_ref", "next_review_at", "evidence_refs", "reviewer", "reviewed_at",
            )
            if any(supplier.get(field) in (None, "", [], {}) for field in required_values):
                issues.append(_issue(path, "ERROR", "E_SUPPLIER_REVIEW_INPUT", "review-zott beszállítóhoz teljes scope, owner, szerződés, értékelés és evidencia szükséges", identity))
                continue
            scores = supplier.get("dimension_scores", {})
            if not isinstance(scores, dict) or set(scores) != REQUIRED_DIMENSIONS or any(not isinstance(value, int) or isinstance(value, bool) or value < 0 or value > 3 for value in scores.values()):
                issues.append(_issue(path, "ERROR", "E_SUPPLIER_SCORE", "minden kritikalitási dimenzióhoz 0–3 egész pont szükséges", identity))
            else:
                total = sum(scores.values())
                if supplier.get("criticality_score") != total or supplier.get("criticality") != _expected_criticality(total):
                    issues.append(_issue(path, "ERROR", "E_SUPPLIER_CRITICALITY", "a pontösszeg vagy a kritikalitási sáv hibás", identity))
            assessments = supplier.get("control_assessments", [])
            assessment_ids = {str(item.get("control_id", "")) for item in assessments if isinstance(item, dict)} if isinstance(assessments, list) else set()
            if assessment_ids != REQUIRED_CONTRACT_CONTROLS or len(assessments) != len(REQUIRED_CONTRACT_CONTROLS):
                issues.append(_issue(path, "ERROR", "E_SUPPLIER_ASSESSMENT_COVERAGE", "minden szerződéses kontrollt egyszer értékelni kell", identity))
            elif any(item.get("status") not in ASSESSMENT_STATUSES or not item.get("evidence_or_gap") for item in assessments):
                issues.append(_issue(path, "ERROR", "E_SUPPLIER_ASSESSMENT", "minden kontrollhoz érvényes státusz és evidencia vagy gap szükséges", identity))
            if supplier.get("criticality") not in CRITICALITIES or not _timestamp(str(supplier.get("next_review_at", ""))) or not _timestamp(str(supplier.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_SUPPLIER_REVIEW_TIME", "érvényes kritikalitás és időzónás review-időpontok szükségesek", identity))
        else:
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_RECORD_STATUS", "a supplier status PENDING_HUMAN vagy HUMAN_REVIEWED lehet", identity))

    calendar = data.get("review_calendar", [])
    if not isinstance(calendar, list):
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_CALENDAR_TYPE", "review_calendar lista szükséges"))
        calendar = []
    if not calendar:
        issues.append(_issue(path, "WARNING", "W_SUPPLIER_CALENDAR_PENDING", "nincs jóváhagyott beszállítói felülvizsgálati naptár"))
    for item in calendar:
        if not isinstance(item, dict) or any(not item.get(field) for field in ("review_id", "supplier_id", "due_at", "owner", "status", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_CALENDAR_REQUIRED", "minden naptárbejegyzéshez teljes emberi rekord szükséges"))
            continue
        if item.get("supplier_id") not in seen or not _timestamp(str(item.get("due_at", ""))) or item.get("status") not in {"HUMAN_APPROVED", "COMPLETED", "CANCELLED"}:
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_CALENDAR_VALUE", "ismeretlen beszállító, hibás időpont vagy státusz a naptárban"))

    decisions = data.get("risk_decisions", [])
    if not isinstance(decisions, list):
        issues.append(_issue(path, "ERROR", "E_SUPPLIER_DECISION_TYPE", "risk_decisions lista szükséges"))
        decisions = []
    for item in decisions:
        if not isinstance(item, dict) or any(not item.get(field) for field in ("decision_id", "supplier_id", "risk", "treatment", "owner", "approver", "decided_at", "review_due_at", "evidence_ref")):
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_DECISION_REQUIRED", "minden kockázati döntéshez teljes emberi rekord szükséges"))
            continue
        if item.get("supplier_id") not in seen or item.get("treatment") not in TREATMENTS or not _timestamp(str(item.get("decided_at", ""))) or not _timestamp(str(item.get("review_due_at", ""))):
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_DECISION_VALUE", "hibás beszállító, treatment vagy időpont a kockázati döntésben"))

    approval = data.get("human_review", {})
    if data.get("status") == "HUMAN_REVIEWED":
        if not suppliers or reviewed_suppliers != len(suppliers) or not calendar or not isinstance(approval, dict) or any(not approval.get(field) for field in ("reviewer", "approved_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_APPROVAL", "HUMAN_REVIEWED állapothoz teljes beszállítói értékelés, naptár és G1 review szükséges"))
        elif not _timestamp(str(approval.get("approved_at", ""))):
            issues.append(_issue(path, "ERROR", "E_SUPPLIER_APPROVAL_TIME", "a G1 review időpontjának időzónásnak kell lennie"))
    else:
        issues.append(_issue(path, "WARNING", "W_SUPPLIER_REVIEW_PENDING", "a módszertan és a tényleges beszállítói rekordok G1 emberi review-ra várnak"))
    return ValidationResult(tuple(issues))
