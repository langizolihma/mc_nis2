"""Deterministic status and action-plan rendering."""

from __future__ import annotations

from collections import Counter
from typing import Any, Iterable

from .deadlines import action_plan_deadline, parse_iso_date
from .registry import Action
from .validation import ValidationResult


def _counter_lines(title: str, values: Iterable[str]) -> list[str]:
    counts = Counter(values)
    lines = [f"{title}:"]
    lines.extend(f"  {key}: {counts[key]}" for key in sorted(counts))
    return lines


def render_status(
    actions: list[Action], result: ValidationResult, project_dates: dict[str, Any]
) -> str:
    """Render a stable plain-text status overview."""
    lines = ["NIS2 HARNESS STATUS", f"Összes akció: {len(actions)}"]
    lines.extend(_counter_lines("Prioritások", (action.priority for action in actions)))
    lines.extend(_counter_lines("Státuszok", (action.status for action in actions)))
    lines.extend(_counter_lines("Forrásbizalom", (action.source_confidence for action in actions)))
    lines.extend(_counter_lines("Human gate-ek", (gate for action in actions for gate in action.gates)))
    lines.append(f"TBD-HUMAN felelős: {sum(a.human_owner == 'TBD-HUMAN' for a in actions)}")
    lines.append(f"TBD-HUMAN jóváhagyó: {sum(a.human_approver == 'TBD-HUMAN' for a in actions)}")
    receipt = project_dates.get("receipt_date", "HIÁNYZIK")
    lines.append(f"Kézhezvétel: {receipt}")
    if receipt != "HIÁNYZIK":
        try:
            lines.append(f"Számított cselekvésiterv-határidő: {action_plan_deadline(parse_iso_date(receipt)).isoformat()}")
        except ValueError:
            lines.append("Számított cselekvésiterv-határidő: NEM SZÁMÍTHATÓ")
    lines.append(f"Hard error: {len(result.errors)}")
    lines.append(f"Warning: {len(result.warnings)}")
    blockers: list[str] = []
    if result.errors:
        blockers.append(f"{len(result.errors)} hard validation error")
    if any(a.human_owner == "TBD-HUMAN" or a.human_approver == "TBD-HUMAN" for a in actions):
        blockers.append("emberi felelősök/jóváhagyók kijelölése")
    if any(a.source_confidence == "conflict" for a in actions):
        blockers.append("kanonikus auditforrás verziókonfliktusa")
    if str(project_dates.get("receipt_evidence_reference", "")).startswith("TBD"):
        blockers.append("kézbesítési evidencia hivatkozása")
    if str(project_dates.get("deadline_review_status", "")).startswith("PENDING"):
        blockers.append("G2/G4 határidő-felülvizsgálat")
    lines.append("Legfontosabb blokkolók:")
    lines.extend(f"  - {item}" for item in blockers) if blockers else lines.append("  - nincs")
    return "\n".join(lines) + "\n"


def _cell(value: str) -> str:
    return value.replace("|", "\\|").replace("\r", " ").replace("\n", " ").strip()


def _deadline(action: Action) -> str:
    return action.target_date or (
        f"{action.deadline_basis} + {action.target_offset_days} nap"
        if action.target_offset_days else action.deadline_basis
    )


def _action_table(actions: list[Action]) -> list[str]:
    lines = [
        "| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |",
        "|---|---|---|---|---|---|---|---|---|---|---|---|",
    ]
    for action in actions:
        source = action.source_ref
        if action.source_page:
            source += f"; oldal: {action.source_page}"
        values = (
            action.action_id, action.task, action.human_owner, action.human_approver, _deadline(action),
            action.priority, action.deliverable, action.evidence_required,
            source, action.source_confidence, action.status, action.human_gate,
        )
        lines.append("| " + " | ".join(_cell(value) for value in values) + " |")
    return lines


def render_action_plan(actions: list[Action], project_dates: dict[str, Any]) -> str:
    """Render the 19-family draft action plan in deterministic order."""
    receipt = str(project_dates.get("receipt_date", "TBD-HUMAN"))
    generation_date = str(project_dates.get("recorded_on", "n/a"))
    lines = [
        "# TERVEZET – EMBERI JÓVÁHAGYÁS NÉLKÜL NEM NYÚJTHATÓ BE",
        "",
        "- status: `PROPOSAL`",
        "- agent_role: `report_writer`",
        "- source_refs: `data/actions.csv`, `data/project_dates.json`",
        "- assumptions: `[]`",
        "- confidence: `medium`",
        "- required_human_gate: `G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL;G4_EXTERNAL_SUBMISSION`",
        "- forbidden_automatic_actions: `close_action;submit_external;change_production`",
        f"- generation_record_date: `{generation_date}`",
        "- generator: `nis2_harness/0.1.0`",
        "",
        f"Kanonikus kézhezvételi dátum: **{receipt}**. A kézbesítési evidencia és a G2/G4 review státusza a projektadat-rekord szerint még emberi ellenőrzést igényel.",
        "",
    ]
    for family in range(1, 20):
        selected = sorted(
            (action for action in actions if str(family) in action.requirement_families),
            key=lambda action: (action.priority, action.target_date or "9999-99-99", action.action_id),
        )
        lines.extend((f"## {family}. követelménycsalád", ""))
        if selected:
            lines.extend(_action_table(selected))
        else:
            lines.append("_Nincs regisztrált akció; emberi lefedettségvizsgálat szükséges._")
        lines.append("")
    unverified = sorted(
        (a for a in actions if a.source_confidence == "unverified_internal"),
        key=lambda action: action.action_id,
    )
    proposed = sorted(
        (a for a in actions if a.deadline_basis == "fixed_proposed" or "javasolt dátum" in a.notes.lower()),
        key=lambda action: action.action_id,
    )
    lines.extend(("## Függelék A – Nem ellenőrzött belső források", ""))
    lines.extend(_action_table(unverified) if unverified else ["_Nincs ilyen tétel._"])
    lines.extend(("", "## Függelék B – PROPOSED döntésre támaszkodó tételek", ""))
    lines.extend(_action_table(proposed) if proposed else ["_Nincs ilyen tétel._"])
    lines.append("")
    return "\n".join(lines)
