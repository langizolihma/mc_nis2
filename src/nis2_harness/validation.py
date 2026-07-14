"""Domain validation rules for the NIS2 action registry."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable

from .deadlines import action_plan_deadline, parse_iso_date
from .registry import Action


PRIORITIES = {"P0", "P1", "P2", "P3"}
STATUSES = {
    "NEW", "PLANNED", "IN_PROGRESS", "BLOCKED", "READY_FOR_REVIEW",
    "DONE", "DEFERRED", "CANCELLED",
}
SOURCE_CONFIDENCES = {
    "authority", "audited", "strategy_input", "unverified_internal", "derived",
    "conditional", "conflict", "machine_unvalidated",
}
AI_ELIGIBILITIES = {"yes", "partial", "no"}
HUMAN_GATES = {
    "G1_DOMAIN_REVIEW", "G2_SECURITY_LEGAL", "G3_PRODUCTION_CHANGE",
    "G4_EXTERNAL_SUBMISSION", "G5_PURCHASE",
}
COST_BANDS = {"B0", "B1", "B2", "B3"}
YES_NO = {"yes", "no"}

REQUIRED_FIELDS = (
    "action_id", "requirement_family", "scope_eir", "workstream", "source_ref",
    "source_type", "source_confidence", "finding_summary", "task", "deliverable",
    "evidence_required", "priority", "phase", "status", "human_owner",
    "human_approver", "deadline_basis", "cost_band", "spend_timing",
    "ai_eligibility", "ai_role", "human_gate", "external_submission",
)


@dataclass(frozen=True, slots=True)
class Issue:
    severity: str
    code: str
    message: str
    path: str
    row_number: int = 0
    action_id: str = ""

    def format(self) -> str:
        location = self.path
        if self.row_number:
            location += f":{self.row_number}"
        identity = f" [{self.action_id}]" if self.action_id else ""
        return f"{self.severity} {self.code} {location}{identity}: {self.message}"


@dataclass(frozen=True, slots=True)
class ValidationResult:
    issues: tuple[Issue, ...]

    @property
    def errors(self) -> tuple[Issue, ...]:
        return tuple(issue for issue in self.issues if issue.severity == "ERROR")

    @property
    def warnings(self) -> tuple[Issue, ...]:
        return tuple(issue for issue in self.issues if issue.severity == "WARNING")


def _issue(action: Action, severity: str, code: str, message: str) -> Issue:
    return Issue(severity, code, message, action.source_path, action.row_number, action.action_id)


def _enum_issue(action: Action, field: str, allowed: set[str]) -> Issue | None:
    value = getattr(action, field)
    if value and value not in allowed:
        return _issue(
            action, "ERROR", "E_ENUM",
            f"ismeretlen {field}={value!r}; engedélyezett: {', '.join(sorted(allowed))}",
        )
    return None


def validate_actions(actions: Iterable[Action]) -> ValidationResult:
    """Validate records without changing them."""
    records = list(actions)
    issues: list[Issue] = []
    seen: dict[str, Action] = {}
    for action in records:
        for field in REQUIRED_FIELDS:
            if not getattr(action, field):
                issues.append(_issue(
                    action, "ERROR", "E_REQUIRED",
                    f"hiányzó kötelező mező: {field}; töltse ki a forrásregiszterben",
                ))
        if action.action_id:
            if action.action_id in seen:
                first = seen[action.action_id]
                issues.append(_issue(
                    action, "ERROR", "E_DUPLICATE_ID",
                    f"duplikált action_id; első előfordulás: {first.source_path}:{first.row_number}",
                ))
            else:
                seen[action.action_id] = action

        for field, allowed in (
            ("priority", PRIORITIES), ("status", STATUSES),
            ("source_confidence", SOURCE_CONFIDENCES),
            ("ai_eligibility", AI_ELIGIBILITIES), ("cost_band", COST_BANDS),
            ("external_submission", YES_NO),
        ):
            enum_issue = _enum_issue(action, field, allowed)
            if enum_issue:
                issues.append(enum_issue)
        if action.production_change:
            enum_issue = _enum_issue(action, "production_change", YES_NO)
            if enum_issue:
                issues.append(enum_issue)
        unknown_gates = sorted(set(action.gates) - HUMAN_GATES)
        if unknown_gates:
            issues.append(_issue(
                action, "ERROR", "E_GATE_ENUM",
                f"ismeretlen human_gate: {', '.join(unknown_gates)}",
            ))

        if action.priority == "P0" and (not action.deliverable or not action.evidence_required):
            issues.append(_issue(
                action, "ERROR", "E_P0_EVIDENCE",
                "P0 akciónál a deliverable és evidence_required kötelező",
            ))
        if action.external_submission == "yes" and "G4_EXTERNAL_SUBMISSION" not in action.gates:
            issues.append(_issue(action, "ERROR", "E_G4", "külső benyújtáshoz G4 szükséges"))
        if (action.purchase_trigger or (action.cost_band and action.cost_band != "B0")) and (
            "G5_PURCHASE" not in action.gates
        ):
            issues.append(_issue(action, "ERROR", "E_G5", "költési triggerhez G5 szükséges"))
        if action.production_change == "yes" and "G3_PRODUCTION_CHANGE" not in action.gates:
            issues.append(_issue(action, "ERROR", "E_G3", "éles változtatáshoz G3 szükséges"))
        if action.source_confidence == "unverified_internal" and action.status in {
            "DONE", "READY_FOR_EXTERNAL_SUBMISSION"
        }:
            issues.append(_issue(
                action, "ERROR", "E_UNVERIFIED_CLOSURE",
                "unverified_internal forrású tétel nem zárható le automatikusan",
            ))

        if action.target_date:
            try:
                parse_iso_date(action.target_date, field_name="target_date")
            except ValueError as exc:
                issues.append(_issue(action, "ERROR", "E_DATE", str(exc)))
        if action.target_offset_days:
            try:
                int(action.target_offset_days)
            except ValueError:
                issues.append(_issue(
                    action, "ERROR", "E_OFFSET",
                    f"target_offset_days nem egész szám: {action.target_offset_days!r}",
                ))

        if action.human_owner == "TBD-HUMAN":
            issues.append(_issue(action, "WARNING", "W_OWNER_TBD", "az emberi felelős nincs kijelölve"))
        if action.human_approver == "TBD-HUMAN":
            issues.append(_issue(action, "WARNING", "W_APPROVER_TBD", "az emberi jóváhagyó nincs kijelölve"))
        if action.deadline_basis == "fixed_proposed" or "javasolt dátum" in action.notes.lower():
            issues.append(_issue(action, "WARNING", "W_PROPOSED", "az akció PROPOSED döntésre támaszkodik"))
        if action.source_confidence == "conflict":
            issues.append(_issue(action, "WARNING", "W_SOURCE_CONFLICT", "forrásverzió-konfliktus emberi döntést igényel"))
        if action.deadline_basis == "receipt_date_plus_days" and not action.target_date:
            issues.append(_issue(action, "WARNING", "W_TARGET_EMPTY", "a receipt-alapú target_date üres"))

    return ValidationResult(tuple(issues))


def validate_project_dates(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Validate the canonical date record without inventing missing values."""
    source = str(path)
    issues: list[Issue] = []
    receipt = data.get("receipt_date")
    if not receipt:
        issues.append(Issue("WARNING", "W_RECEIPT_MISSING", "hiányzó receipt_date; nem képzünk helyettesítő dátumot", source))
        return ValidationResult(tuple(issues))
    try:
        received = parse_iso_date(receipt, field_name="receipt_date")
    except ValueError as exc:
        issues.append(Issue("ERROR", "E_RECEIPT_DATE", str(exc), source))
        return ValidationResult(tuple(issues))
    declared = data.get("action_plan_deadline")
    if declared:
        try:
            declared_date = parse_iso_date(declared, field_name="action_plan_deadline")
            expected = action_plan_deadline(received)
            if declared_date != expected:
                issues.append(Issue(
                    "ERROR", "E_DEADLINE_MISMATCH",
                    f"a rögzített határidő {declared_date}, a számított érték {expected}", source,
                ))
        except ValueError as exc:
            issues.append(Issue("ERROR", "E_DEADLINE_DATE", str(exc), source))
    evidence_reference = str(data.get("receipt_evidence_reference", ""))
    if (
        not evidence_reference
        or evidence_reference.startswith("TBD")
        or evidence_reference.startswith("NOT_AVAILABLE")
    ):
        issues.append(Issue(
            "WARNING",
            "W_RECEIPT_EVIDENCE",
            "elsődleges kézbesítési bizonyíték nem áll rendelkezésre; az emberi dátumelfogadás nem helyettesíti az evidenciát",
            source,
        ))
    if str(data.get("deadline_review_status", "")).startswith("PENDING"):
        issues.append(Issue("WARNING", "W_DEADLINE_REVIEW", "a G2/G4 határidő-felülvizsgálat függőben van", source))
    return ValidationResult(tuple(issues))


def combine_results(*results: ValidationResult) -> ValidationResult:
    """Combine validation results while retaining deterministic order."""
    return ValidationResult(tuple(issue for result in results for issue in result.issues))
