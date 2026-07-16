"""CSV and project-date loading without mutating source files."""

from __future__ import annotations

import csv
import json
from dataclasses import dataclass, fields
from pathlib import Path
from typing import Any


@dataclass(frozen=True, slots=True)
class Action:
    action_id: str = ""
    requirement_family: str = ""
    control_ref: str = ""
    scope_eir: str = ""
    workstream: str = ""
    source_ref: str = ""
    source_type: str = ""
    source_page: str = ""
    source_confidence: str = ""
    finding_summary: str = ""
    task: str = ""
    deliverable: str = ""
    evidence_required: str = ""
    priority: str = ""
    phase: str = ""
    status: str = ""
    human_owner: str = ""
    human_approver: str = ""
    deadline_basis: str = ""
    target_offset_days: str = ""
    target_date: str = ""
    cost_band: str = ""
    spend_timing: str = ""
    purchase_trigger: str = ""
    ai_eligibility: str = ""
    ai_role: str = ""
    human_gate: str = ""
    dependencies: str = ""
    external_submission: str = ""
    notes: str = ""
    production_change: str = ""
    row_number: int = 0
    source_path: str = ""

    @property
    def gates(self) -> tuple[str, ...]:
        return tuple(part.strip() for part in self.human_gate.split(";") if part.strip())

    @property
    def requirement_families(self) -> tuple[str, ...]:
        return tuple(part.strip() for part in self.requirement_family.split(";") if part.strip())


@dataclass(frozen=True, slots=True)
class EvidenceRecord:
    """Metadata-only reference to an artifact stored in the protected evidence store."""

    evidence_id: str = ""
    action_id: str = ""
    requirement_family: str = ""
    control_ref: str = ""
    eir: str = ""
    title: str = ""
    evidence_type: str = ""
    source_ref: str = ""
    source_page: str = ""
    source_confidence: str = ""
    assumption: str = ""
    internal_uri: str = ""
    sha256: str = ""
    created_at: str = ""
    created_by: str = ""
    submitted_at: str = ""
    reviewed_at: str = ""
    reviewed_by: str = ""
    review_status: str = ""
    review_decision_ref: str = ""
    rejection_reason: str = ""
    retention_class: str = ""
    confidentiality: str = ""
    superseded_by: str = ""
    notes: str = ""
    row_number: int = 0
    source_path: str = ""


@dataclass(frozen=True, slots=True)
class FindingRecord:
    """One machine-extracted or human-reviewed audit finding group."""

    finding_id: str = ""
    section_ref: str = ""
    scope_eir: str = ""
    requirement_family: str = ""
    control_ref: str = ""
    control_title: str = ""
    rating: str = ""
    assessment_method: str = ""
    finding_summary: str = ""
    source_ref: str = ""
    source_page_start: str = ""
    source_page_end: str = ""
    source_confidence: str = ""
    human_validated: str = ""
    reviewer: str = ""
    reviewed_at: str = ""
    direct_action_ids: str = ""
    family_action_ids: str = ""
    mapping_status: str = ""
    notes: str = ""
    row_number: int = 0
    source_path: str = ""


@dataclass(frozen=True, slots=True)
class ControlActionMapping:
    """Proposed link between audit controls and remediation actions."""

    mapping_id: str = ""
    action_id: str = ""
    requirement_family: str = ""
    control_ref: str = ""
    scope_eir: str = ""
    mapping_basis: str = ""
    matched_finding_ids: str = ""
    human_owner: str = ""
    evidence_required: str = ""
    source_ref: str = ""
    source_confidence: str = ""
    human_review_status: str = ""
    reviewer: str = ""
    reviewed_at: str = ""
    notes: str = ""
    row_number: int = 0
    source_path: str = ""


class RegistryLoadError(ValueError):
    """Raised when a structured source cannot be read safely."""


def load_actions(path: str | Path) -> list[Action]:
    """Load an UTF-8 CSV registry and preserve source row information."""
    source = Path(path)
    try:
        with source.open("r", encoding="utf-8-sig", newline="") as handle:
            reader = csv.DictReader(handle)
            if reader.fieldnames is None:
                raise RegistryLoadError(f"{source}: hiányzik a CSV fejléc")
            allowed = {field.name for field in fields(Action)}
            actions: list[Action] = []
            for row_number, row in enumerate(reader, start=2):
                if None in row:
                    raise RegistryLoadError(
                        f"{source}:{row_number}: a sor több értéket tartalmaz, mint a fejléc"
                    )
                values = {
                    key: (value or "").strip()
                    for key, value in row.items()
                    if key in allowed
                }
                actions.append(
                    Action(**values, row_number=row_number, source_path=str(source))
                )
            return actions
    except UnicodeDecodeError as exc:
        raise RegistryLoadError(f"{source}: nem érvényes UTF-8 fájl") from exc
    except OSError as exc:
        raise RegistryLoadError(f"{source}: nem olvasható: {exc}") from exc


def load_evidence(path: str | Path) -> list[EvidenceRecord]:
    """Load an UTF-8 evidence metadata CSV without reading protected artifacts."""
    source = Path(path)
    try:
        with source.open("r", encoding="utf-8-sig", newline="") as handle:
            reader = csv.DictReader(handle)
            if reader.fieldnames is None:
                raise RegistryLoadError(f"{source}: hiányzik az evidencia CSV fejléc")
            allowed = {field.name for field in fields(EvidenceRecord)}
            schema_fields = allowed - {"row_number", "source_path"}
            missing_headers = sorted(schema_fields - set(reader.fieldnames))
            if missing_headers:
                raise RegistryLoadError(
                    f"{source}: hiányzó evidenciaoszlopok: {', '.join(missing_headers)}"
                )
            records: list[EvidenceRecord] = []
            for row_number, row in enumerate(reader, start=2):
                if None in row:
                    raise RegistryLoadError(
                        f"{source}:{row_number}: a sor több értéket tartalmaz, mint a fejléc"
                    )
                values = {
                    key: (value or "").strip()
                    for key, value in row.items()
                    if key in allowed
                }
                records.append(
                    EvidenceRecord(**values, row_number=row_number, source_path=str(source))
                )
            return records
    except UnicodeDecodeError as exc:
        raise RegistryLoadError(f"{source}: nem érvényes UTF-8 evidenciafájl") from exc
    except OSError as exc:
        raise RegistryLoadError(f"{source}: nem olvasható: {exc}") from exc


def _load_typed_csv(path: str | Path, record_type: type[Any], label: str) -> list[Any]:
    """Load a strict UTF-8 CSV into a dataclass while preserving row locations."""
    source = Path(path)
    try:
        with source.open("r", encoding="utf-8-sig", newline="") as handle:
            reader = csv.DictReader(handle)
            if reader.fieldnames is None:
                raise RegistryLoadError(f"{source}: hiányzik a(z) {label} CSV fejléc")
            allowed = {field.name for field in fields(record_type)}
            schema_fields = allowed - {"row_number", "source_path"}
            missing_headers = sorted(schema_fields - set(reader.fieldnames))
            unknown_headers = sorted(set(reader.fieldnames) - schema_fields)
            if missing_headers or unknown_headers:
                details = []
                if missing_headers:
                    details.append(f"hiányzó oszlopok: {', '.join(missing_headers)}")
                if unknown_headers:
                    details.append(f"ismeretlen oszlopok: {', '.join(unknown_headers)}")
                raise RegistryLoadError(f"{source}: hibás {label} séma; {'; '.join(details)}")
            records: list[Any] = []
            for row_number, row in enumerate(reader, start=2):
                if None in row:
                    raise RegistryLoadError(
                        f"{source}:{row_number}: a sor több értéket tartalmaz, mint a fejléc"
                    )
                values = {key: (value or "").strip() for key, value in row.items()}
                records.append(
                    record_type(**values, row_number=row_number, source_path=str(source))
                )
            return records
    except UnicodeDecodeError as exc:
        raise RegistryLoadError(f"{source}: nem érvényes UTF-8 {label} fájl") from exc
    except OSError as exc:
        raise RegistryLoadError(f"{source}: nem olvasható: {exc}") from exc


def load_findings(path: str | Path) -> list[FindingRecord]:
    return _load_typed_csv(path, FindingRecord, "finding")


def load_control_action_mapping(path: str | Path) -> list[ControlActionMapping]:
    return _load_typed_csv(path, ControlActionMapping, "mapping")


def load_project_dates(path: str | Path) -> dict[str, Any]:
    """Load the canonical project-date record as UTF-8 JSON."""
    source = Path(path)
    try:
        with source.open("r", encoding="utf-8-sig") as handle:
            value = json.load(handle)
    except (OSError, UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise RegistryLoadError(f"{source}: hibás projekt-dátum rekord: {exc}") from exc
    if not isinstance(value, dict):
        raise RegistryLoadError(f"{source}: a projekt-dátum rekordnak objektumnak kell lennie")
    return value


def load_json_object(path: str | Path, label: str) -> dict[str, Any]:
    """Load a generic UTF-8 JSON object without mutating the source."""
    source = Path(path)
    try:
        with source.open("r", encoding="utf-8-sig") as handle:
            value = json.load(handle)
    except (OSError, UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise RegistryLoadError(f"{source}: hibás {label} JSON: {exc}") from exc
    if not isinstance(value, dict):
        raise RegistryLoadError(f"{source}: a(z) {label} gyökérelemnek objektumnak kell lennie")
    return value


def default_project_dates_path(actions_path: str | Path) -> Path:
    """Return the project_dates.json next to an action registry."""
    return Path(actions_path).resolve().parent / "project_dates.json"
