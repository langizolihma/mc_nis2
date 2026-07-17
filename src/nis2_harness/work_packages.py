"""Validation for proposal-only remediation work-package registries."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


ALLOWED_STATUSES = {"PROPOSAL", "READY_FOR_HUMAN_REVIEW", "HUMAN_REVIEWED"}
FORBIDDEN_AUTOMATIC_ACTIONS = {
    "change_production", "purchase", "submit_external", "close_action", "accept_evidence"
}
COST_INPUTS = {
    "existing_entitlement", "existing_capacity", "b0_alternative", "pilot",
    "acceptance_criterion", "purchase_trigger", "deferral_risk",
}


def _issue(path: str | Path, severity: str, code: str, message: str, action_id: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=action_id)


def validate_work_packages(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Validate a deterministic registry without treating proposals as evidence."""
    issues: list[Issue] = []
    for field in ("schema_version", "registry_id", "status", "packages", "human_review"):
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_WP_REQUIRED", f"hiányzó kötelező mező: {field}"))
    if data.get("status") not in ALLOWED_STATUSES:
        issues.append(_issue(path, "ERROR", "E_WP_STATUS", "ismeretlen registry status"))

    packages = data.get("packages", [])
    if not isinstance(packages, list) or not packages:
        issues.append(_issue(path, "ERROR", "E_WP_PACKAGES", "legalább egy work package szükséges"))
        packages = []
    seen: set[str] = set()
    reviewed = 0
    for package in packages:
        if not isinstance(package, dict):
            issues.append(_issue(path, "ERROR", "E_WP_RECORD", "minden work package objektum kell legyen"))
            continue
        action_id = str(package.get("action_id", ""))
        required = (
            "action_id", "title", "source_refs", "source_confidence", "required_gates",
            "preconditions", "planned_steps", "deliverables", "evidence_required",
            "safety", "cost_gate", "review",
        )
        if any(field not in package for field in required):
            issues.append(_issue(path, "ERROR", "E_WP_RECORD_REQUIRED", "hiányos work package", action_id))
            continue
        if not action_id.startswith("A-") or len(action_id) != 5:
            issues.append(_issue(path, "ERROR", "E_WP_ACTION", "hibás action_id", action_id))
        if action_id in seen:
            issues.append(_issue(path, "ERROR", "E_WP_DUPLICATE", "duplikált action_id", action_id))
        seen.add(action_id)
        for field in ("title", "source_refs", "source_confidence", "required_gates", "preconditions", "planned_steps", "deliverables", "evidence_required"):
            if not package.get(field):
                issues.append(_issue(path, "ERROR", "E_WP_CONTENT", f"üres csomagmező: {field}", action_id))
        safety = package.get("safety", {})
        if not isinstance(safety, dict):
            issues.append(_issue(path, "ERROR", "E_WP_SAFETY", "safety objektum szükséges", action_id))
        else:
            forbidden = set(safety.get("forbidden_automatic_actions", []))
            if forbidden != FORBIDDEN_AUTOMATIC_ACTIONS:
                issues.append(_issue(path, "ERROR", "E_WP_FORBIDDEN", "az öt automatikus művelet tiltása kötelező", action_id))
            if safety.get("execution_allowed") is not False:
                issues.append(_issue(path, "ERROR", "E_WP_EXECUTION", "proposal csomagban execution_allowed=false kötelező", action_id))
        cost = package.get("cost_gate", {})
        if not isinstance(cost, dict) or set(cost.get("required_inputs", [])) != COST_INPUTS:
            issues.append(_issue(path, "ERROR", "E_WP_COST", "a hét költségvédelmi input kötelező", action_id))
        elif cost.get("paid_option_status") != "BLOCKED_BY_COST_GATE" or cost.get("purchase_allowed") is not False:
            issues.append(_issue(path, "ERROR", "E_WP_COST_STATUS", "fizetős opció csak G5 után engedhető", action_id))
        review = package.get("review", {})
        if not isinstance(review, dict) or review.get("status") not in {"PENDING_HUMAN", "HUMAN_REVIEWED"}:
            issues.append(_issue(path, "ERROR", "E_WP_REVIEW", "hibás review státusz", action_id))
        elif review.get("status") == "PENDING_HUMAN":
            if any(review.get(field) for field in ("reviewer", "reviewed_at", "decision_ref", "evidence_refs")):
                issues.append(_issue(path, "ERROR", "E_WP_FALSE_REVIEW", "pending review nem tartalmazhat elfogadási evidenciát", action_id))
        else:
            reviewed += 1
            if any(not review.get(field) for field in ("reviewer", "reviewed_at", "decision_ref", "evidence_refs")):
                issues.append(_issue(path, "ERROR", "E_WP_REVIEW_EVIDENCE", "emberi review-hoz teljes döntési nyom szükséges", action_id))
    if reviewed != len(packages):
        issues.append(_issue(path, "WARNING", "W_WP_HUMAN_INPUT_PENDING", f"{len(packages) - reviewed} csomag emberi inputra és review-ra vár"))
    if data.get("status") == "HUMAN_REVIEWED" and reviewed != len(packages):
        issues.append(_issue(path, "ERROR", "E_WP_REGISTRY_REVIEW", "HUMAN_REVIEWED registryhez minden csomag review-ja szükséges"))
    return ValidationResult(tuple(issues))
