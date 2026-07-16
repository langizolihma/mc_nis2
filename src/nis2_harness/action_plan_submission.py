"""Submission-readiness checks for the proposal-only NIS2 action plan."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from .registry import Action
from .validation import Issue, ValidationResult


REQUIRED_FAMILIES = {str(value) for value in range(1, 20)}
REQUIRED_DEPENDENCIES = {"A-002", "A-004", "A-005", "A-036"}


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def validate_action_plan_submission(
    actions: list[Action], project_dates: dict[str, Any], path: str | Path,
) -> ValidationResult:
    """Validate mandatory content and expose unresolved human submission gates."""
    issues: list[Issue] = []
    by_id = {action.action_id: action for action in actions}
    covered = {family for action in actions for family in action.requirement_families}
    for family in sorted(REQUIRED_FAMILIES - covered, key=int):
        issues.append(_issue(path, "ERROR", "E_SUBMISSION_FAMILY", f"nincs akció a(z) {family}. követelménycsaládhoz"))

    for action in actions:
        identity = action.action_id
        required_values = {
            "task": action.task,
            "human_owner": action.human_owner,
            "human_approver": action.human_approver,
            "deliverable": action.deliverable,
            "evidence_required": action.evidence_required,
            "source_ref": action.source_ref,
        }
        for field, value in required_values.items():
            if not value:
                issues.append(_issue(path, "ERROR", "E_SUBMISSION_CONTENT", f"hiányzó külső tervmező: {field}", identity))
        if action.human_owner == "TBD-HUMAN" or action.human_approver == "TBD-HUMAN":
            issues.append(_issue(path, "ERROR", "E_SUBMISSION_PERSON", "név szerinti felelős és jóváhagyó szükséges", identity))
        if not action.target_date:
            issues.append(_issue(path, "WARNING", "W_SUBMISSION_RELATIVE_DATE", "nincs fix végrehajtási dátum; G1/G4 review során dátummá alakítandó", identity))

    action_a006 = by_id.get("A-006")
    if action_a006 is None:
        issues.append(_issue(path, "ERROR", "E_SUBMISSION_A006", "az A-006 akció hiányzik"))
    elif "G4_EXTERNAL_SUBMISSION" not in action_a006.gates:
        issues.append(_issue(path, "ERROR", "E_SUBMISSION_G4", "az A-006 nem rendelkezik G4 kapuval", "A-006"))

    if project_dates.get("action_plan_deadline") != "2026-09-24":
        issues.append(_issue(path, "ERROR", "E_SUBMISSION_DEADLINE", "a kanonikus benyújtási határidő 2026-09-24 kell legyen"))

    for dependency_id in sorted(REQUIRED_DEPENDENCIES):
        action = by_id.get(dependency_id)
        if action is None:
            issues.append(_issue(path, "ERROR", "E_SUBMISSION_DEPENDENCY", "hiányzó kötelező függőség", dependency_id))
        elif action.status != "DONE":
            issues.append(_issue(path, "WARNING", "W_SUBMISSION_DEPENDENCY_PENDING", f"a benyújtási függőség még {action.status}", dependency_id))

    unverified = sorted(action.action_id for action in actions if action.source_confidence == "unverified_internal")
    if unverified:
        issues.append(_issue(
            path, "WARNING", "W_SUBMISSION_UNVERIFIED_SOURCE",
            "nem auditált belső forrásra támaszkodó tételek külön emberi validációt igényelnek: " + ", ".join(unverified),
        ))
    issues.append(_issue(
        path, "WARNING", "W_SUBMISSION_G4_PENDING",
        "a tervezet szakmai, jogi/IBF és vezetői review-ja, aláírása és G4 jóváhagyása még hiányzik",
        "A-006",
    ))
    return ValidationResult(tuple(issues))
