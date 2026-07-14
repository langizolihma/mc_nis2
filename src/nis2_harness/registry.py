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


def default_project_dates_path(actions_path: str | Path) -> Path:
    """Return the project_dates.json next to an action registry."""
    return Path(actions_path).resolve().parent / "project_dates.json"

