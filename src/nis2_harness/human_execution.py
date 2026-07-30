"""Build one deterministic execution package for all deferred human tasks."""

from __future__ import annotations

from datetime import date
import hashlib
import json
from pathlib import Path
import re
from typing import Any


ACTION_ID_PATTERN = re.compile(r"\bA-\d{3}\b")
WAVES = (
    ("W1", "Irányítás, határidők és döntési alapok"),
    ("W2", "EIR-, forrás-, leltár- és evidenciatár-baseline"),
    ("W3", "Read-only műszaki adatgyűjtés és értékelés"),
    ("W4", "Szervezeti és szabályozási kontrollok"),
    ("W5", "Kontrollált tesztek, portál és agent pilot"),
    ("W6", "Külső cselekvési terv"),
    ("W7", "Negyedéves jelentés és megismételt audit"),
)
ACTION_WAVE = {
    **{item: "W1" for item in ("A-001", "A-002", "A-035", "A-036")},
    **{item: "W2" for item in ("A-005", "A-011", "A-034")},
    **{
        item: "W3"
        for item in (
            "A-018", "A-022", "A-024", "A-025", "A-026",
            "A-027", "A-028", "A-029", "A-033",
        )
    },
    **{
        item: "W4"
        for item in (
            "A-009", "A-010", "A-013", "A-014", "A-015", "A-016",
            "A-037", "A-038", "A-039", "A-040", "A-041",
        )
    },
    **{item: "W5" for item in ("A-017", "A-020", "A-032", "A-042")},
    **{item: "W6" for item in ("A-006", "A-007")},
    **{item: "W7" for item in ("A-008", "A-030")},
}
SPECIAL_WAVE = {
    "DEF-003": "W1",
    "DEF-004": "W1",
    "DEF-015": "W5",
    "DEF-020": "W5",
    "DEF-034": "W2",
    "DEF-035": "W2",
    "DEF-037": "W1",
}
COMPLETION_REQUIREMENTS = [
    "actual_artifact_or_decision_created",
    "protected_nis2_sharepoint_uri_recorded",
    "sha256_recorded",
    "named_reviewer_recorded",
    "timezone_aware_review_time_recorded",
    "decision_reference_recorded",
]
FORBIDDEN_AUTOMATIC_ACTIONS = [
    "mark_deferred_done",
    "accept_evidence",
    "close_action",
    "change_production",
    "submit_external",
    "purchase",
]
TERMINAL_STATUSES = {"CLOSED_ACCEPTED"}


def _wave_for(record: dict[str, str]) -> str:
    task_id = record["id"]
    if task_id in SPECIAL_WAVE:
        return SPECIAL_WAVE[task_id]
    action_ids = ACTION_ID_PATTERN.findall(record["related"])
    candidates = sorted(
        {ACTION_WAVE[action_id] for action_id in action_ids if action_id in ACTION_WAVE}
    )
    return candidates[0] if candidates else "W1"


def _validate_records(records: list[dict[str, str]]) -> None:
    expected_fields = {
        "id", "related", "process_state", "required",
        "gate", "owner", "approver", "status",
    }
    seen: set[str] = set()
    for index, record in enumerate(records, start=1):
        if set(record) != expected_fields:
            raise ValueError(f"A(z) {index}. emberi feladat mezőkészlete eltér.")
        task_id = record["id"]
        if not re.fullmatch(r"DEF-\d{3}", task_id):
            raise ValueError(f"Érvénytelen emberifeladat-azonosító: {task_id}.")
        if task_id in seen:
            raise ValueError(f"Duplikált emberifeladat-azonosító: {task_id}.")
        seen.add(task_id)
        for field in ("required", "gate", "owner", "approver", "status"):
            if not record[field].strip():
                raise ValueError(f"Hiányzó {field} mező: {task_id}.")


def build_human_execution_package(
    records: list[dict[str, str]],
    source_path: Path,
    as_of: date,
) -> dict[str, Any]:
    """Group every deferred task without changing its human-controlled status."""
    _validate_records(records)
    source_sha256 = hashlib.sha256(source_path.read_bytes()).hexdigest()
    actionable_records = [
        record for record in records
        if record["status"] not in TERMINAL_STATUSES
    ]
    tasks_by_wave: dict[str, list[dict[str, Any]]] = {
        wave_id: [] for wave_id, _ in WAVES
    }
    for record in actionable_records:
        wave_id = _wave_for(record)
        tasks_by_wave[wave_id].append({
            "task_id": record["id"],
            "status": record["status"],
            "related": record["related"],
            "current_process_state": record["process_state"],
            "required_result": record["required"],
            "must_be_completed_before": record["gate"],
            "owner": record["owner"],
            "approver": record["approver"],
            "completion_requirements": list(COMPLETION_REQUIREMENTS),
            "automatic_completion_allowed": False,
        })
    waves = [
        {
            "wave_id": wave_id,
            "title": title,
            "task_count": len(tasks_by_wave[wave_id]),
            "tasks": sorted(
                tasks_by_wave[wave_id],
                key=lambda item: item["task_id"],
            ),
        }
        for wave_id, title in WAVES
    ]
    owner_counts: dict[str, int] = {}
    for record in actionable_records:
        owner_counts[record["owner"]] = owner_counts.get(record["owner"], 0) + 1
    return {
        "schema_version": "1.0",
        "status": "HUMAN_EXECUTION_REQUIRED",
        "as_of": as_of.isoformat(),
        "source_ref": str(source_path),
        "source_sha256": source_sha256,
        "formal_effect": False,
        "summary": {
            "task_count": len(actionable_records),
            "open_deferred_count": sum(
                record["status"] == "OPEN_DEFERRED"
                for record in actionable_records
            ),
            "accepted_risk_count": sum(
                record["status"] == "NOT_AVAILABLE_ACCEPTED_RISK"
                for record in actionable_records
            ),
            "closed_accepted_count": sum(
                record["status"] == "CLOSED_ACCEPTED" for record in records
            ),
            "wave_count": len(waves),
            "owner_task_counts": dict(sorted(owner_counts.items())),
        },
        "start_here": [
            task["task_id"]
            for wave in waves
            for task in wave["tasks"]
            if wave["wave_id"] == "W1"
        ],
        "waves": waves,
        "completion_rule": (
            "A feladat csak tényleges dokumentum vagy döntés, védett URI, "
            "SHA-256 és név szerinti emberi review után zárható."
        ),
        "forbidden_automatic_actions": list(FORBIDDEN_AUTOMATIC_ACTIONS),
    }


def render_human_execution_package(data: dict[str, Any]) -> str:
    """Render a plain-language, ordered human work package."""
    summary = data["summary"]
    lines = [
        "# Egységes emberi végrehajtási csomag",
        "",
        f"- Állapot dátuma: `{data['as_of']}`",
        f"- Összes emberi tétel: **{summary['task_count']}**",
        f"- Nyitott pótlandó tétel: **{summary['open_deferred_count']}**",
        f"- Elfogadott, de továbbra is nyilvántartott kockázat: **{summary['accepted_risk_count']}**",
        f"- Lezárt és elfogadott tétel: **{summary['closed_accepted_count']}**",
        "- Automatikus lezárás: **tiltott**",
        "",
        "A hullámokat sorrendben kell feldolgozni. Egy tétel lezárásához tényleges "
        "dokumentum vagy döntés, védett SharePoint-hivatkozás, SHA-256 hash, "
        "reviewer, időzónás review-idő és döntési hivatkozás szükséges.",
        "",
    ]
    for wave in data["waves"]:
        lines.extend([
            f"## {wave['wave_id']} – {wave['title']}",
            "",
            f"Tételek száma: **{wave['task_count']}**",
            "",
        ])
        for task in wave["tasks"]:
            lines.extend([
                f"### {task['task_id']} – {task['status']}",
                "",
                f"- Felelős: {task['owner']}",
                f"- Jóváhagyó: {task['approver']}",
                f"- Kapcsolódó elem: {task['related']}",
                f"- Elkészítendő: {task['required_result']}",
                f"- Legkésőbbi kapu: {task['must_be_completed_before']}",
                "",
                "Lezárási ellenőrzőlista:",
                "",
                "- [ ] A tényleges dokumentum vagy döntés elkészült.",
                "- [ ] A védett NIS2 SharePoint URI rögzítve.",
                "- [ ] Az SHA-256 hash rögzítve.",
                "- [ ] A reviewer és az időzónás review-idő rögzítve.",
                "- [ ] A döntési hivatkozás rögzítve.",
                "",
            ])
    lines.extend([
        "## Korlát",
        "",
        "Ez a csomag munkasorrend. Egyetlen tételt sem jelöl teljesítettnek, "
        "evidenciát nem fogad el, éles rendszert nem módosít és külső "
        "benyújtást nem végez.",
        "",
    ])
    return "\n".join(lines)


def write_human_execution_package(
    data: dict[str, Any],
    json_path: Path,
    markdown_path: Path,
) -> None:
    """Write deterministic JSON and Markdown human work packages."""
    json_path.parent.mkdir(parents=True, exist_ok=True)
    markdown_path.parent.mkdir(parents=True, exist_ok=True)
    json_path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )
    markdown_path.write_text(
        render_human_execution_package(data),
        encoding="utf-8",
        newline="\n",
    )
