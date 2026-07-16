"""Domain validation rules for the NIS2 action registry."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
import re
from typing import Any, Iterable

from .deadlines import action_plan_deadline, parse_iso_date
from .registry import Action, ControlActionMapping, EvidenceRecord, FindingRecord


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
EVIDENCE_STATUSES = {"DRAFT", "SUBMITTED", "NEEDS_CHANGES", "ACCEPTED", "SUPERSEDED"}
SHA256_PATTERN = re.compile(r"^[0-9a-fA-F]{64}$")
FINDING_RATINGS = {
    "Megfelelt", "Elhanyagolható mértékű eltérés", "Kis mértékű eltérés",
    "Kiemelt mértékű eltérés",
}
FINDING_MAPPING_STATUSES = {"DIRECT", "FAMILY_ONLY", "UNMAPPED"}
MAPPING_BASES = {"EXACT_CONTROL", "FAMILY_CONTEXT"}
HUMAN_REVIEW_STATUSES = {"PROPOSED", "APPROVED", "REJECTED"}
INVENTORY_STATUSES = {"PROPOSAL", "REVIEWED", "APPROVED"}
INVENTORY_RECORD_STATUSES = {"PROPOSED", "VERIFIED", "RETIRED"}
AUDIT_SCOPES = {"AUDITED", "NOT_AUDITED"}
READ_ONLY_MODES = {"EXPORT", "REPORT", "API_READ_ONLY", "MANUAL_OWNER_ATTESTATION"}

REQUIRED_FIELDS = (
    "action_id", "requirement_family", "scope_eir", "workstream", "source_ref",
    "source_type", "source_confidence", "finding_summary", "task", "deliverable",
    "evidence_required", "priority", "phase", "status", "human_owner",
    "human_approver", "deadline_basis", "cost_band", "spend_timing",
    "ai_eligibility", "ai_role", "human_gate", "external_submission",
)

EVIDENCE_REQUIRED_FIELDS = (
    "evidence_id", "action_id", "requirement_family", "eir", "title",
    "evidence_type", "source_ref", "source_confidence", "created_at",
    "created_by", "review_status", "retention_class", "confidentiality",
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


def _evidence_issue(
    record: EvidenceRecord, severity: str, code: str, message: str
) -> Issue:
    return Issue(
        severity, code, message, record.source_path, record.row_number, record.evidence_id
    )


def _valid_timestamp(value: str) -> bool:
    """Return true for ISO-8601 timestamps carrying an explicit UTC offset."""
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def _missing_or_tbd(value: str) -> bool:
    return not value or value.upper().startswith("TBD")


def validate_evidence(
    evidence: Iterable[EvidenceRecord], valid_action_ids: set[str] | None = None
) -> ValidationResult:
    """Validate evidence metadata and enforce human acceptance prerequisites."""
    records = list(evidence)
    issues: list[Issue] = []
    if not records:
        return ValidationResult((Issue(
            "WARNING", "W_EVIDENCE_EMPTY",
            "az evidenciaregiszter még nem tartalmaz rekordot", "evidence_register",
        ),))

    seen: dict[str, EvidenceRecord] = {}
    for record in records:
        for field in EVIDENCE_REQUIRED_FIELDS:
            if not getattr(record, field):
                issues.append(_evidence_issue(
                    record, "ERROR", "E_EVIDENCE_REQUIRED",
                    f"hiányzó kötelező evidencia-metaadat: {field}",
                ))
        if record.evidence_id:
            if record.evidence_id in seen:
                first = seen[record.evidence_id]
                issues.append(_evidence_issue(
                    record, "ERROR", "E_EVIDENCE_DUPLICATE",
                    f"duplikált evidence_id; első előfordulás: "
                    f"{first.source_path}:{first.row_number}",
                ))
            else:
                seen[record.evidence_id] = record

        if record.review_status and record.review_status not in EVIDENCE_STATUSES:
            issues.append(_evidence_issue(
                record, "ERROR", "E_EVIDENCE_STATUS",
                f"ismeretlen review_status={record.review_status!r}; engedélyezett: "
                f"{', '.join(sorted(EVIDENCE_STATUSES))}",
            ))
        if record.source_confidence and record.source_confidence not in SOURCE_CONFIDENCES:
            issues.append(_evidence_issue(
                record, "ERROR", "E_EVIDENCE_CONFIDENCE",
                f"ismeretlen source_confidence={record.source_confidence!r}",
            ))
        if valid_action_ids is not None and record.action_id not in valid_action_ids:
            issues.append(_evidence_issue(
                record, "ERROR", "E_EVIDENCE_ACTION_REF",
                f"ismeretlen action_id hivatkozás: {record.action_id!r}",
            ))
        for field in ("created_at", "submitted_at", "reviewed_at"):
            value = getattr(record, field)
            if value and not _valid_timestamp(value):
                issues.append(_evidence_issue(
                    record, "ERROR", "E_EVIDENCE_TIMESTAMP",
                    f"{field} nem időzónás ISO-8601 időbélyeg: {value!r}",
                ))
        if record.sha256 and not SHA256_PATTERN.fullmatch(record.sha256):
            issues.append(_evidence_issue(
                record, "ERROR", "E_EVIDENCE_HASH",
                "a sha256 mezőnek 64 hexadecimális karaktert kell tartalmaznia",
            ))

        if record.review_status in {"SUBMITTED", "ACCEPTED", "SUPERSEDED"}:
            for field in ("internal_uri", "sha256", "submitted_at"):
                if _missing_or_tbd(getattr(record, field)):
                    issues.append(_evidence_issue(
                        record, "ERROR", "E_EVIDENCE_SUBMISSION",
                        f"{record.review_status} státuszhoz valós {field} szükséges",
                    ))
        if record.review_status in {"ACCEPTED", "SUPERSEDED"}:
            for field in (
                "created_by", "retention_class", "confidentiality",
                "reviewed_at", "reviewed_by", "review_decision_ref",
            ):
                if _missing_or_tbd(getattr(record, field)):
                    issues.append(_evidence_issue(
                        record, "ERROR", "E_EVIDENCE_ACCEPTANCE",
                        f"{record.review_status} státuszhoz emberi {field} szükséges",
                    ))
            if record.source_confidence in {"unverified_internal", "machine_unvalidated", "conflict"}:
                issues.append(_evidence_issue(
                    record, "ERROR", "E_EVIDENCE_UNVERIFIED_ACCEPTANCE",
                    "nem ellenőrzött vagy konfliktusos forrás nem jelölhető ACCEPTED/SUPERSEDED "
                    "státuszúra forrásminősítés és emberi review nélkül",
                ))
            if record.created_by and record.created_by == record.reviewed_by:
                issues.append(_evidence_issue(
                    record, "WARNING", "W_EVIDENCE_SELF_REVIEW",
                    "a készítő és a reviewer azonos; dokumentálja a szerepelválasztási kivételt",
                ))
        if record.review_status == "NEEDS_CHANGES":
            for field in ("reviewed_at", "reviewed_by", "rejection_reason"):
                if _missing_or_tbd(getattr(record, field)):
                    issues.append(_evidence_issue(
                        record, "ERROR", "E_EVIDENCE_REJECTION",
                        f"NEEDS_CHANGES státuszhoz {field} szükséges",
                    ))
        if record.review_status == "SUPERSEDED" and _missing_or_tbd(record.superseded_by):
            issues.append(_evidence_issue(
                record, "ERROR", "E_EVIDENCE_SUPERSEDED",
                "SUPERSEDED státuszhoz superseded_by szükséges",
            ))
        if record.review_status == "DRAFT" and (
            _missing_or_tbd(record.internal_uri) or not record.sha256
        ):
            issues.append(_evidence_issue(
                record, "WARNING", "W_EVIDENCE_DRAFT_INCOMPLETE",
                "a DRAFT rekord még nem rendelkezik végleges védett URI-val és hash-sel",
            ))

    return ValidationResult(tuple(issues))


def _record_issue(
    record: FindingRecord | ControlActionMapping,
    severity: str,
    code: str,
    message: str,
) -> Issue:
    identity = getattr(record, "finding_id", "") or getattr(record, "mapping_id", "")
    return Issue(severity, code, message, record.source_path, record.row_number, identity)


def _split_refs(value: str) -> tuple[str, ...]:
    return tuple(part.strip() for part in value.split(";") if part.strip())


def validate_findings(
    findings: Iterable[FindingRecord], valid_action_ids: set[str] | None = None
) -> ValidationResult:
    """Validate the extracted finding register without promoting machine output."""
    records = list(findings)
    issues: list[Issue] = []
    seen_ids: set[str] = set()
    seen_sections: set[str] = set()
    required = (
        "finding_id", "section_ref", "scope_eir", "requirement_family",
        "control_ref", "control_title", "rating", "assessment_method",
        "finding_summary", "source_ref", "source_page_start", "source_page_end",
        "source_confidence", "human_validated", "mapping_status",
    )
    for record in records:
        for field in required:
            if not getattr(record, field):
                issues.append(_record_issue(
                    record, "ERROR", "E_FINDING_REQUIRED", f"hiányzó finding mező: {field}"
                ))
        for value, seen, label in (
            (record.finding_id, seen_ids, "finding_id"),
            (record.section_ref, seen_sections, "section_ref"),
        ):
            if value in seen:
                issues.append(_record_issue(
                    record, "ERROR", "E_FINDING_DUPLICATE", f"duplikált {label}: {value}"
                ))
            seen.add(value)
        if record.rating and record.rating not in FINDING_RATINGS:
            issues.append(_record_issue(
                record, "ERROR", "E_FINDING_RATING", f"ismeretlen értékelés: {record.rating!r}"
            ))
        if record.source_confidence not in SOURCE_CONFIDENCES:
            issues.append(_record_issue(
                record, "ERROR", "E_FINDING_CONFIDENCE",
                f"ismeretlen source_confidence: {record.source_confidence!r}",
            ))
        if record.human_validated not in YES_NO:
            issues.append(_record_issue(
                record, "ERROR", "E_FINDING_REVIEW_FLAG", "human_validated csak yes/no lehet"
            ))
        if record.mapping_status not in FINDING_MAPPING_STATUSES:
            issues.append(_record_issue(
                record, "ERROR", "E_FINDING_MAPPING_STATUS",
                f"ismeretlen mapping_status: {record.mapping_status!r}",
            ))
        try:
            page_start = int(record.source_page_start)
            page_end = int(record.source_page_end)
            if page_start > page_end:
                raise ValueError
        except ValueError:
            issues.append(_record_issue(
                record, "ERROR", "E_FINDING_PAGE_RANGE", "érvénytelen forrásoldal-tartomány"
            ))
        if record.human_validated == "yes":
            if _missing_or_tbd(record.reviewer) or not record.reviewed_at:
                issues.append(_record_issue(
                    record, "ERROR", "E_FINDING_HUMAN_REVIEW",
                    "human_validated=yes értékhez reviewer és reviewed_at szükséges",
                ))
            elif not _valid_timestamp(record.reviewed_at):
                issues.append(_record_issue(
                    record, "ERROR", "E_FINDING_REVIEW_TIMESTAMP",
                    "reviewed_at nem időzónás ISO-8601 időbélyeg",
                ))
            if record.source_confidence == "machine_unvalidated":
                issues.append(_record_issue(
                    record, "ERROR", "E_FINDING_UNVALIDATED_PROMOTION",
                    "emberileg validált rekord nem maradhat machine_unvalidated minősítésű",
                ))
        elif record.reviewer or record.reviewed_at:
            issues.append(_record_issue(
                record, "ERROR", "E_FINDING_REVIEW_INCONSISTENT",
                "reviewer/reviewed_at csak human_validated=yes mellett adható meg",
            ))
        action_refs = _split_refs(record.direct_action_ids) + _split_refs(record.family_action_ids)
        if valid_action_ids is not None:
            unknown = sorted(set(action_refs) - valid_action_ids)
            if unknown:
                issues.append(_record_issue(
                    record, "ERROR", "E_FINDING_ACTION_REF",
                    f"ismeretlen action_id hivatkozás: {', '.join(unknown)}",
                ))
        expected = "DIRECT" if record.direct_action_ids else (
            "FAMILY_ONLY" if record.family_action_ids else "UNMAPPED"
        )
        if record.mapping_status != expected:
            issues.append(_record_issue(
                record, "ERROR", "E_FINDING_MAPPING_INCONSISTENT",
                f"a mapping_status várható értéke: {expected}",
            ))
    if records and len(records) != 328:
        issues.append(Issue(
            "WARNING", "W_FINDING_COUNT", f"a kanonikus auditból 328 rekord várható, kapott: {len(records)}",
            records[0].source_path,
        ))
    if any(record.human_validated == "no" for record in records):
        issues.append(Issue(
            "WARNING", "W_FINDING_HUMAN_REVIEW_PENDING",
            "a finding-regiszter gépi rekordokat tartalmaz; G1 emberi review szükséges",
            records[0].source_path if records else "finding_register",
        ))
    return ValidationResult(tuple(issues))


def validate_control_action_mapping(
    mappings: Iterable[ControlActionMapping],
    valid_action_ids: set[str],
    valid_finding_ids: set[str],
) -> ValidationResult:
    """Validate proposed mapping references and human approval metadata."""
    records = list(mappings)
    issues: list[Issue] = []
    seen: set[str] = set()
    required = (
        "mapping_id", "action_id", "requirement_family", "scope_eir",
        "mapping_basis", "human_owner", "evidence_required", "source_ref",
        "source_confidence", "human_review_status",
    )
    for record in records:
        for field in required:
            if not getattr(record, field):
                issues.append(_record_issue(
                    record, "ERROR", "E_MAPPING_REQUIRED", f"hiányzó mapping mező: {field}"
                ))
        if record.mapping_id in seen:
            issues.append(_record_issue(
                record, "ERROR", "E_MAPPING_DUPLICATE", "duplikált mapping_id"
            ))
        seen.add(record.mapping_id)
        if record.action_id not in valid_action_ids:
            issues.append(_record_issue(
                record, "ERROR", "E_MAPPING_ACTION_REF",
                f"ismeretlen action_id: {record.action_id!r}",
            ))
        unknown_findings = sorted(set(_split_refs(record.matched_finding_ids)) - valid_finding_ids)
        if unknown_findings:
            issues.append(_record_issue(
                record, "ERROR", "E_MAPPING_FINDING_REF",
                f"ismeretlen finding hivatkozás: {', '.join(unknown_findings)}",
            ))
        if record.mapping_basis not in MAPPING_BASES:
            issues.append(_record_issue(
                record, "ERROR", "E_MAPPING_BASIS",
                f"ismeretlen mapping_basis: {record.mapping_basis!r}",
            ))
        if record.mapping_basis == "EXACT_CONTROL" and not record.control_ref:
            issues.append(_record_issue(
                record, "ERROR", "E_MAPPING_CONTROL", "EXACT_CONTROL kapcsolathoz control_ref kell"
            ))
        if record.human_review_status not in HUMAN_REVIEW_STATUSES:
            issues.append(_record_issue(
                record, "ERROR", "E_MAPPING_REVIEW_STATUS",
                f"ismeretlen human_review_status: {record.human_review_status!r}",
            ))
        if record.human_review_status == "APPROVED":
            if _missing_or_tbd(record.reviewer) or not record.reviewed_at:
                issues.append(_record_issue(
                    record, "ERROR", "E_MAPPING_HUMAN_REVIEW",
                    "APPROVED mappinghez reviewer és reviewed_at szükséges",
                ))
            elif not _valid_timestamp(record.reviewed_at):
                issues.append(_record_issue(
                    record, "ERROR", "E_MAPPING_REVIEW_TIMESTAMP",
                    "reviewed_at nem időzónás ISO-8601 időbélyeg",
                ))
    if records and any(record.human_review_status == "PROPOSED" for record in records):
        issues.append(Issue(
            "WARNING", "W_MAPPING_REVIEW_PENDING",
            "a control-action-evidence mapping még PROPOSED; G1 owner sign-off szükséges",
            records[0].source_path,
        ))
    return ValidationResult(tuple(issues))


def _json_issue(
    path: str | Path, severity: str, code: str, message: str, identity: str = ""
) -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _required_dict_fields(
    value: dict[str, Any], fields: tuple[str, ...], path: str | Path,
    identity: str, code: str,
) -> list[Issue]:
    return [
        _json_issue(path, "ERROR", code, f"hiányzó kötelező mező: {field}", identity)
        for field in fields if field not in value or value[field] in (None, "")
    ]


def validate_inventory_register(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Validate the proposal-only EIR, asset, data, location and dependency register."""
    issues: list[Issue] = []
    required_top = (
        "schema_version", "status", "action_id", "source_refs", "human_review",
        "eir_records", "assets", "data_sets", "locations", "dependencies",
    )
    issues.extend(_required_dict_fields(data, required_top, path, "A-011", "E_INVENTORY_REQUIRED"))
    status = data.get("status")
    if status and status not in INVENTORY_STATUSES:
        issues.append(_json_issue(
            path, "ERROR", "E_INVENTORY_STATUS", f"ismeretlen inventory status: {status!r}"
        ))
    if data.get("action_id") != "A-011":
        issues.append(_json_issue(
            path, "ERROR", "E_INVENTORY_ACTION", "az inventory action_id értéke A-011 kell legyen"
        ))

    review = data.get("human_review", {})
    if not isinstance(review, dict):
        issues.append(_json_issue(
            path, "ERROR", "E_INVENTORY_REVIEW", "human_review objektum szükséges"
        ))
        review = {}
    review_status = review.get("status")
    if review_status not in {"PENDING", "APPROVED", "REJECTED"}:
        issues.append(_json_issue(
            path, "ERROR", "E_INVENTORY_REVIEW_STATUS",
            f"ismeretlen human_review.status: {review_status!r}",
        ))
    if status == "APPROVED" or review_status == "APPROVED":
        for field in ("reviewer", "reviewed_at", "decision_ref"):
            if _missing_or_tbd(str(review.get(field, ""))):
                issues.append(_json_issue(
                    path, "ERROR", "E_INVENTORY_APPROVAL",
                    f"APPROVED inventoryhoz valós human_review.{field} szükséges",
                ))
        reviewed_at = str(review.get("reviewed_at", ""))
        if reviewed_at and not _valid_timestamp(reviewed_at):
            issues.append(_json_issue(
                path, "ERROR", "E_INVENTORY_REVIEW_TIMESTAMP",
                "human_review.reviewed_at nem időzónás ISO-8601 időbélyeg",
            ))
    elif review_status == "PENDING":
        issues.append(_json_issue(
            path, "WARNING", "W_INVENTORY_REVIEW_PENDING",
            "az inventory még PROPOSAL; G1 emberi review szükséges",
        ))

    collection_names = ("eir_records", "assets", "data_sets", "locations", "dependencies")
    for name in collection_names:
        if name in data and not isinstance(data[name], list):
            issues.append(_json_issue(
                path, "ERROR", "E_INVENTORY_COLLECTION", f"{name} csak lista lehet"
            ))

    eir_records = data.get("eir_records", []) if isinstance(data.get("eir_records"), list) else []
    seen_eir_ids: set[str] = set()
    seen_eir_names: set[str] = set()
    for record in eir_records:
        if not isinstance(record, dict):
            issues.append(_json_issue(
                path, "ERROR", "E_INVENTORY_EIR_TYPE", "minden EIR rekord objektum kell legyen"
            ))
            continue
        identity = str(record.get("eir_id", ""))
        issues.extend(_required_dict_fields(
            record,
            ("eir_id", "name", "audit_scope", "owner", "source_ref",
             "source_confidence", "record_status"),
            path, identity, "E_INVENTORY_EIR_REQUIRED",
        ))
        if identity in seen_eir_ids:
            issues.append(_json_issue(
                path, "ERROR", "E_INVENTORY_EIR_DUPLICATE", "duplikált eir_id", identity
            ))
        seen_eir_ids.add(identity)
        name = str(record.get("name", ""))
        if name in seen_eir_names:
            issues.append(_json_issue(
                path, "ERROR", "E_INVENTORY_EIR_DUPLICATE", "duplikált EIR név", identity
            ))
        seen_eir_names.add(name)
        if record.get("audit_scope") not in AUDIT_SCOPES:
            issues.append(_json_issue(
                path, "ERROR", "E_INVENTORY_AUDIT_SCOPE",
                f"ismeretlen audit_scope: {record.get('audit_scope')!r}", identity,
            ))
        if record.get("source_confidence") not in SOURCE_CONFIDENCES:
            issues.append(_json_issue(
                path, "ERROR", "E_INVENTORY_CONFIDENCE",
                f"ismeretlen source_confidence: {record.get('source_confidence')!r}", identity,
            ))
        if record.get("record_status") not in INVENTORY_RECORD_STATUSES:
            issues.append(_json_issue(
                path, "ERROR", "E_INVENTORY_RECORD_STATUS",
                f"ismeretlen record_status: {record.get('record_status')!r}", identity,
            ))
    if eir_records and len(eir_records) != 5:
        issues.append(_json_issue(
            path, "WARNING", "W_INVENTORY_EIR_COUNT",
            f"az SRC-008 alapján 5 EIR várható, kapott: {len(eir_records)}",
        ))
    pending_owners = sum(
        _missing_or_tbd(str(record.get("owner", "")))
        for record in eir_records if isinstance(record, dict)
    )
    if pending_owners:
        issues.append(_json_issue(
            path, "WARNING", "W_INVENTORY_OWNER_PENDING",
            f"{pending_owners} EIR tulajdonosa még nincs emberileg igazolva",
        ))

    assets = data.get("assets", []) if isinstance(data.get("assets"), list) else []
    data_sets = data.get("data_sets", []) if isinstance(data.get("data_sets"), list) else []
    locations = data.get("locations", []) if isinstance(data.get("locations"), list) else []
    dependencies = data.get("dependencies", []) if isinstance(data.get("dependencies"), list) else []
    for name, records in (
        ("assets", assets), ("data_sets", data_sets),
        ("locations", locations), ("dependencies", dependencies),
    ):
        if not records:
            issues.append(_json_issue(
                path, "WARNING", "W_INVENTORY_COLLECTION_EMPTY",
                f"a(z) {name} lista üres; jóváhagyott read-only export szükséges",
            ))

    record_specs = (
        ("ASSET", assets, "asset_id", (
            "asset_id", "eir_id", "name", "asset_type", "owner", "location_id",
            "source_ref", "source_confidence", "record_status",
        )),
        ("DATA", data_sets, "data_id", (
            "data_id", "eir_id", "name", "classification", "owner",
            "source_ref", "source_confidence", "record_status",
        )),
        ("LOCATION", locations, "location_id", (
            "location_id", "name", "owner", "source_ref", "source_confidence",
            "record_status",
        )),
    )
    validated_ids: dict[str, set[str]] = {}
    for record_type, records, id_field, required in record_specs:
        seen_ids: set[str] = set()
        validated_ids[record_type] = seen_ids
        for record in records:
            if not isinstance(record, dict):
                issues.append(_json_issue(
                    path, "ERROR", "E_INVENTORY_RECORD_TYPE",
                    f"minden {record_type} rekord objektum kell legyen",
                ))
                continue
            identity = str(record.get(id_field, ""))
            issues.extend(_required_dict_fields(
                record, required, path, identity, "E_INVENTORY_RECORD_REQUIRED"
            ))
            if identity in seen_ids:
                issues.append(_json_issue(
                    path, "ERROR", "E_INVENTORY_RECORD_DUPLICATE",
                    f"duplikált {id_field}", identity,
                ))
            seen_ids.add(identity)
            if "eir_id" in record and record.get("eir_id") not in seen_eir_ids:
                issues.append(_json_issue(
                    path, "ERROR", "E_INVENTORY_EIR_REF",
                    f"ismeretlen eir_id: {record.get('eir_id')!r}", identity,
                ))
            if record.get("source_confidence") not in SOURCE_CONFIDENCES:
                issues.append(_json_issue(
                    path, "ERROR", "E_INVENTORY_CONFIDENCE",
                    f"ismeretlen source_confidence: {record.get('source_confidence')!r}", identity,
                ))
            if record.get("record_status") not in INVENTORY_RECORD_STATUSES:
                issues.append(_json_issue(
                    path, "ERROR", "E_INVENTORY_RECORD_STATUS",
                    f"ismeretlen record_status: {record.get('record_status')!r}", identity,
                ))

    id_sets = {
        "EIR": seen_eir_ids,
        **validated_ids,
    }
    seen_dependency_ids: set[str] = set()
    for record in dependencies:
        if not isinstance(record, dict):
            issues.append(_json_issue(
                path, "ERROR", "E_INVENTORY_DEPENDENCY_TYPE",
                "minden dependency rekord objektum kell legyen",
            ))
            continue
        identity = str(record.get("dependency_id", ""))
        issues.extend(_required_dict_fields(
            record,
            ("dependency_id", "from_type", "from_id", "to_type", "to_id",
             "dependency_type", "owner", "source_ref", "source_confidence", "record_status"),
            path, identity, "E_INVENTORY_DEPENDENCY_REQUIRED",
        ))
        if identity in seen_dependency_ids:
            issues.append(_json_issue(
                path, "ERROR", "E_INVENTORY_DEPENDENCY_DUPLICATE",
                "duplikált dependency_id", identity,
            ))
        seen_dependency_ids.add(identity)
        for side in ("from", "to"):
            record_type = str(record.get(f"{side}_type", ""))
            record_id = str(record.get(f"{side}_id", ""))
            if record_type not in id_sets or record_id not in id_sets.get(record_type, set()):
                issues.append(_json_issue(
                    path, "ERROR", "E_INVENTORY_DEPENDENCY_REF",
                    f"ismeretlen {side} hivatkozás: {record_type}:{record_id}", identity,
                ))
    return ValidationResult(tuple(issues))


def validate_inventory_export_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Ensure collection proposals are read-only and remain behind human approval."""
    issues: list[Issue] = []
    issues.extend(_required_dict_fields(
        data, ("schema_version", "status", "action_id", "sources"),
        path, "A-011", "E_EXPORT_PLAN_REQUIRED",
    ))
    if data.get("status") != "PROPOSAL":
        issues.append(_json_issue(
            path, "ERROR", "E_EXPORT_PLAN_STATUS", "az exportterv státusza csak PROPOSAL lehet"
        ))
    if data.get("action_id") != "A-011":
        issues.append(_json_issue(
            path, "ERROR", "E_EXPORT_PLAN_ACTION", "az exportterv action_id értéke A-011 kell legyen"
        ))
    sources = data.get("sources", [])
    if not isinstance(sources, list) or not sources:
        issues.append(_json_issue(
            path, "ERROR", "E_EXPORT_PLAN_SOURCES", "legalább egy source terv szükséges"
        ))
        return ValidationResult(tuple(issues))
    seen: set[str] = set()
    pending_systems = 0
    pending_approvals = 0
    for source in sources:
        if not isinstance(source, dict):
            issues.append(_json_issue(
                path, "ERROR", "E_EXPORT_SOURCE_TYPE", "minden source terv objektum kell legyen"
            ))
            continue
        identity = str(source.get("source_id", ""))
        issues.extend(_required_dict_fields(
            source,
            ("source_id", "category", "source_system", "source_owner", "scope_eir",
             "acquisition_mode", "required_fields", "approval_status",
             "output_classification", "evidence_output"),
            path, identity, "E_EXPORT_SOURCE_REQUIRED",
        ))
        if identity in seen:
            issues.append(_json_issue(
                path, "ERROR", "E_EXPORT_SOURCE_DUPLICATE", "duplikált source_id", identity
            ))
        seen.add(identity)
        if source.get("acquisition_mode") not in READ_ONLY_MODES:
            issues.append(_json_issue(
                path, "ERROR", "E_EXPORT_NOT_READ_ONLY",
                f"nem engedélyezett acquisition_mode: {source.get('acquisition_mode')!r}", identity,
            ))
        if source.get("approval_status") not in {"PENDING", "APPROVED", "REJECTED"}:
            issues.append(_json_issue(
                path, "ERROR", "E_EXPORT_APPROVAL_STATUS",
                f"ismeretlen approval_status: {source.get('approval_status')!r}", identity,
            ))
        if source.get("approval_status") == "APPROVED" and (
            _missing_or_tbd(str(source.get("approved_by", "")))
            or not source.get("approved_at")
        ):
            issues.append(_json_issue(
                path, "ERROR", "E_EXPORT_APPROVAL",
                "APPROVED source tervhez approved_by és approved_at szükséges", identity,
            ))
        approved_at = str(source.get("approved_at", ""))
        if source.get("approval_status") == "APPROVED" and approved_at and not _valid_timestamp(approved_at):
            issues.append(_json_issue(
                path, "ERROR", "E_EXPORT_APPROVAL_TIMESTAMP",
                "approved_at nem időzónás ISO-8601 időbélyeg", identity,
            ))
        pending_systems += _missing_or_tbd(str(source.get("source_system", "")))
        pending_approvals += source.get("approval_status") == "PENDING"
    if pending_systems:
        issues.append(_json_issue(
            path, "WARNING", "W_EXPORT_SYSTEM_PENDING",
            f"{pending_systems} forrásrendszer pontos neve még TBD-HUMAN",
        ))
    if pending_approvals:
        issues.append(_json_issue(
            path, "WARNING", "W_EXPORT_APPROVAL_PENDING",
            f"{pending_approvals} read-only export emberi jóváhagyása függőben van",
        ))
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
