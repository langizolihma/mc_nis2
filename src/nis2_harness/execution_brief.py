"""Deterministic daily execution brief for human NIS2 work."""

from __future__ import annotations

from collections import Counter
from datetime import date
from typing import Any

from .registry import Action


TERMINAL_STATUSES = {"DONE", "CANCELLED"}
BUCKET_ORDER = {
    "OVERDUE": 0,
    "DUE_7_DAYS": 1,
    "DUE_30_DAYS": 2,
    "DATE_REQUIRED": 3,
    "LATER": 4,
    "TERMINAL": 5,
}
PRIORITY_ORDER = {"P0": 0, "P1": 1, "P2": 2, "P3": 3}


def deadline_bucket(
    target_date: str, as_of: date, status: str = ""
) -> tuple[str, int | None]:
    """Classify one explicit action target without inventing a missing date."""
    if status in TERMINAL_STATUSES:
        return "TERMINAL", None
    if not target_date:
        return "DATE_REQUIRED", None
    target = date.fromisoformat(target_date)
    days = (target - as_of).days
    if days < 0:
        return "OVERDUE", days
    if days <= 7:
        return "DUE_7_DAYS", days
    if days <= 30:
        return "DUE_30_DAYS", days
    return "LATER", days


def build_execution_items(actions: list[Action], as_of: date) -> list[dict[str, Any]]:
    """Project actions into a stable, non-authoritative human work queue."""
    status_by_id = {action.action_id: action.status for action in actions}
    items: list[dict[str, Any]] = []
    for action in actions:
        bucket, days = deadline_bucket(action.target_date, as_of, action.status)
        dependencies = [
            value.strip() for value in action.dependencies.split(";") if value.strip()
        ]
        pending_dependencies = [
            value for value in dependencies if status_by_id.get(value) != "DONE"
        ]
        items.append({
            "action_id": action.action_id,
            "workstream": action.workstream,
            "task": action.task,
            "deliverable": action.deliverable,
            "evidence_required": action.evidence_required,
            "priority": action.priority,
            "status": action.status,
            "owner": action.human_owner,
            "approver": action.human_approver,
            "target_date": action.target_date,
            "deadline_bucket": bucket,
            "days_to_target": days,
            "gates": list(action.gates),
            "pending_dependencies": pending_dependencies,
            "source_ref": action.source_ref,
        })
    return sorted(
        items,
        key=lambda item: (
            BUCKET_ORDER[item["deadline_bucket"]],
            PRIORITY_ORDER.get(item["priority"], 9),
            item["target_date"] or "9999-99-99",
            item["action_id"],
        ),
    )


def _cell(value: object) -> str:
    return str(value).replace("|", "\\|").replace("\r", " ").replace("\n", " ")


def _deadline_label(item: dict[str, Any]) -> str:
    if item["deadline_bucket"] == "DATE_REQUIRED":
        return "Emberi ütemezés szükséges"
    days = item["days_to_target"]
    if days is None:
        return item["target_date"] or "–"
    if days < 0:
        return f"{item['target_date']} ({abs(days)} napja lejárt)"
    if days == 0:
        return f"{item['target_date']} (ma)"
    return f"{item['target_date']} ({days} nap)"


def _table(items: list[dict[str, Any]]) -> list[str]:
    lines = [
        "| ID | Prioritás | Feladat | Felelős | Határidő | Következő eredmény | Elvárt bizonyíték | Kapu | Függőség |",
        "|---|---|---|---|---|---|---|---|---|",
    ]
    for item in items:
        values = (
            item["action_id"],
            item["priority"],
            item["task"],
            item["owner"],
            _deadline_label(item),
            item["deliverable"],
            item["evidence_required"],
            "; ".join(item["gates"]) or "–",
            "; ".join(item["pending_dependencies"]) or "nincs",
        )
        lines.append("| " + " | ".join(_cell(value) for value in values) + " |")
    return lines


def render_daily_execution_brief(actions: list[Action], as_of: date) -> str:
    """Render a proposal-only daily brief without changing action status."""
    items = build_execution_items(actions, as_of)
    active = [item for item in items if item["deadline_bucket"] != "TERMINAL"]
    counts = Counter(item["deadline_bucket"] for item in active)
    focus = [
        item for item in active
        if item["deadline_bucket"] in {"OVERDUE", "DUE_7_DAYS", "DUE_30_DAYS"}
    ]
    lines = [
        "# NIS2 napi végrehajtási összefoglaló",
        "",
        f"- Állapot dátuma: `{as_of.isoformat()}`",
        "- Státusz: `PROPOSAL`",
        "- Forrás: `data/actions.csv`",
        "- Emberi kapu: az egyes feladatoknál jelölt `G1`–`G5`",
        "- Automatikusan tiltott: feladatlezárás, evidenciaelfogadás, éles változtatás, külső benyújtás és vásárlás",
        "",
        "## Rövid vezetői kép",
        "",
        f"- Aktív akció: **{len(active)}**",
        f"- Lejárt céldátumú: **{counts['OVERDUE']}**",
        f"- 7 napon belül esedékes: **{counts['DUE_7_DAYS']}**",
        f"- 8–30 napon belül esedékes: **{counts['DUE_30_DAYS']}**",
        f"- Konkrét dátumot igényel: **{counts['DATE_REQUIRED']}**",
        "",
        "A lejárt jelölés a nyilvántartott céldátumhoz viszonyított figyelmeztetés. Nem bizonyítja, hogy a feladat nem történt meg; a státusz csak elfogadott evidencia és emberi reviewer után módosítható.",
        "",
        "## Azonnali és 30 napon belüli emberi fókusz",
        "",
    ]
    lines.extend(_table(focus) if focus else ["_Nincs ilyen tétel._"])
    lines.extend((
        "",
        "## Konkrét dátumot igénylő akciók",
        "",
    ))
    undated = [item for item in active if item["deadline_bucket"] == "DATE_REQUIRED"]
    lines.extend(_table(undated) if undated else ["_Nincs ilyen tétel._"])
    lines.extend((
        "",
        "## Későbbi, már dátumozott akciók",
        "",
    ))
    later = [item for item in active if item["deadline_bucket"] == "LATER"]
    lines.extend(_table(later) if later else ["_Nincs ilyen tétel._"])
    lines.extend((
        "",
        "## Használati szabály",
        "",
        "A dokumentum munkasorrend, nem teljesítési igazolás. Minden tényleges eredményhez védett tárhivatkozás, SHA-256, reviewer, időzónás időpont és döntési hivatkozás szükséges.",
        "",
    ))
    return "\n".join(lines)
