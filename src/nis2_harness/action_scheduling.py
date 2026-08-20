"""Deterministic action scheduling against the approved repeat-audit target."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path
import csv
import re
from typing import Iterable


REPEAT_AUDIT_TARGET = date(2027, 9, 30)
CALENDAR_COMPLETION_CAP = REPEAT_AUDIT_TARGET - timedelta(days=60)
OPERATIONAL_COMPLETION_CAP = date(2027, 7, 30)
DECISION_REF = "DECISIONS.md:D-035"


@dataclass(frozen=True)
class Wave:
    wave_id: str
    target_date: date
    label: str


WAVES = (
    Wave("W0", date(2026, 8, 31), "hatósági előfeltétel és azonnali irányítás"),
    Wave("W1", date(2026, 9, 11), "cselekvési terv véglegesítési előfeltétel"),
    Wave("W2", date(2026, 9, 24), "hatósági cselekvési terv benyújtása"),
    Wave("W3", date(2026, 10, 30), "gyors, B0 dokumentációs és szervezési feladat"),
    Wave("W4", date(2026, 12, 15), "egyszerű kontrollbevezetés és gyors javítás"),
    Wave("W5", date(2027, 2, 26), "közepes összetettségű működési feladat"),
    Wave("W6", date(2027, 4, 30), "összetett előkészítés vagy P0 műszaki feladat"),
    Wave("W7", date(2027, 6, 30), "összetett technikai megvalósítás és teszt"),
    Wave("W8", OPERATIONAL_COMPLETION_CAP, "beszerzési kapus vagy végső transzformációs feladat"),
)

STATUTORY_CHAIN = {
    "A-001": "W0",
    "A-004": "W0",
    "A-005": "W0",
    "A-036": "W0",
    "A-006": "W1",
    "A-007": "W2",
}

EARLY_GOVERNANCE = {
    "A-001",
    "A-003",
    "A-008",
    "A-009",
    "A-010",
    "A-012",
    "A-030",
    "A-035",
}

# A-010 establishes the resource, budget and purchase-decision process. It is
# a B0 governance prerequisite, not an actual purchase or paid implementation.
NON_PURCHASE_GOVERNANCE = {"A-010"}

SIMPLE_TERMS = (
    "szabályzat",
    "eljárás",
    "nyilvántart",
    "leltár",
    "képzés",
    "tudatosság",
    "kijelöl",
    "szerepkör",
    "review",
    "felülvizsgál",
    "naptár",
    "módszertan",
    "tervezet",
    "jegyzőkönyv",
)

COMPLEX_TERMS = (
    "kriptográf",
    "hitelesít",
    "hozzáférés",
    "hálózat",
    "sérülékenység",
    "malware",
    "kártevő",
    "backup",
    "restore",
    "migráció",
    "konfiguráció",
    "virtualizáció",
    "exchange",
    "ad/dhcp",
    "rds",
    "naplózás",
    "monitoroz",
    "incidens",
    "folyamatos auditfelkészültségi ügynök",
)


def read_csv(path: Path) -> tuple[list[str], list[dict[str, str]]]:
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        if reader.fieldnames is None:
            raise ValueError(f"Hiányzó CSV-fejléc: {path}")
        return list(reader.fieldnames), [dict(row) for row in reader]


def write_csv(path: Path, fieldnames: list[str], rows: Iterable[dict[str, str]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def _combined_text(action: dict[str, str]) -> str:
    return " ".join(
        action.get(field, "")
        for field in (
            "workstream",
            "finding_summary",
            "task",
            "deliverable",
            "evidence_required",
            "notes",
        )
    ).lower()


def has_procurement_gate(action: dict[str, str]) -> bool:
    if action.get("action_id") in NON_PURCHASE_GOVERNANCE:
        return False
    return bool(
        action.get("purchase_trigger", "").strip()
        or action.get("cost_band", "B0").strip() != "B0"
        or "G5_PURCHASE" in action.get("human_gate", "")
    )


def complexity_band(action: dict[str, str]) -> str:
    if has_procurement_gate(action):
        return "PROCUREMENT_GATED"
    text = _combined_text(action)
    if "G3_PRODUCTION_CHANGE" in action.get("human_gate", "") or any(
        term in text for term in COMPLEX_TERMS
    ):
        return "COMPLEX"
    if action.get("ai_eligibility") == "yes" and any(term in text for term in SIMPLE_TERMS):
        return "SIMPLE"
    if any(term in text for term in SIMPLE_TERMS) and not action.get("dependencies", "").strip():
        return "SIMPLE"
    return "MODERATE"


def _base_wave(action: dict[str, str], band: str) -> str:
    action_id = action["action_id"]
    if action_id in STATUTORY_CHAIN:
        return STATUTORY_CHAIN[action_id]
    if action_id in EARLY_GOVERNANCE:
        return "W3"
    priority = action.get("priority", "P3")
    if band == "SIMPLE":
        return "W3" if priority == "P0" else "W4"
    if band == "MODERATE":
        return "W5" if priority in {"P0", "P1"} else "W6"
    if band == "COMPLEX":
        return "W6" if priority == "P0" else "W7"
    return "W8"


def _dependencies(action: dict[str, str]) -> list[str]:
    return [item.strip() for item in action.get("dependencies", "").split(";") if item.strip()]


def _next_wave(wave_id: str) -> str:
    index = next(index for index, wave in enumerate(WAVES) if wave.wave_id == wave_id)
    return WAVES[min(index + 1, len(WAVES) - 1)].wave_id


def _clean_prior_schedule_notes(value: str) -> str:
    marker_index = value.find("D-035 ütemezés:")
    if marker_index >= 0:
        value = value[:marker_index].rstrip()
    value = re.sub(
        r"Javasolt G1 review: 2026-09-11; javasolt teljesítés: \d{4}-\d{2}-\d{2}\. ",
        "Javasolt G1 review: 2026-09-11. ",
        value,
    )
    return value.replace(
        "A dátumok, szerepek, EIR-hatókör és technikai lépések nem jóváhagyottak; "
        "a kanonikus target_date ezért üres marad. ",
        "A szerepek, EIR-hatókör és technikai lépések G1/G3 review-ra várnak. ",
    )


def build_schedule(actions: list[dict[str, str]]) -> tuple[list[dict[str, str]], list[dict[str, str]]]:
    by_id = {action["action_id"]: dict(action) for action in actions}
    wave_by_id: dict[str, str] = {}
    band_by_id: dict[str, str] = {}

    for action_id, action in by_id.items():
        band = complexity_band(action)
        band_by_id[action_id] = band
        wave_by_id[action_id] = _base_wave(action, band)

    # Move dependants to a later wave when necessary. Fixed statutory-chain
    # dates are authoritative and their prerequisites are explicitly assigned.
    for _ in range(len(actions)):
        changed = False
        for action_id in sorted(by_id):
            if action_id in STATUTORY_CHAIN or by_id[action_id].get("status") == "DONE":
                continue
            own_wave = wave_by_id[action_id]
            for dependency in _dependencies(by_id[action_id]):
                if dependency not in wave_by_id:
                    continue
                dependency_wave = wave_by_id[dependency]
                own_index = next(i for i, wave in enumerate(WAVES) if wave.wave_id == own_wave)
                dep_index = next(i for i, wave in enumerate(WAVES) if wave.wave_id == dependency_wave)
                if own_index <= dep_index:
                    own_wave = _next_wave(dependency_wave)
                    wave_by_id[action_id] = own_wave
                    changed = True
        if not changed:
            break

    wave_map = {wave.wave_id: wave for wave in WAVES}
    updated: list[dict[str, str]] = []
    schedule: list[dict[str, str]] = []
    for action_id in sorted(by_id):
        action = by_id[action_id]
        old_date = action.get("target_date", "")
        if action.get("status") == "DONE" and old_date:
            target = date.fromisoformat(old_date)
            wave_id = "HISTORICAL"
            reason = "Lezárt tétel történeti céldátuma változatlan."
        else:
            wave_id = wave_by_id[action_id]
            target = wave_map[wave_id].target_date
            reason = wave_map[wave_id].label
        if target > CALENDAR_COMPLETION_CAP:
            raise ValueError(f"A céldátum túllépi a 60 napos korlátot: {action_id} {target}")

        action["deadline_basis"] = "D-035_repeat_audit_minus_60_complexity_schedule"
        action["target_offset_days"] = ""
        action["target_date"] = target.isoformat()
        marker = " D-035 ütemezés:"
        base_notes = _clean_prior_schedule_notes(action.get("notes", ""))
        note = (
            f"{marker} {wave_id}; {band_by_id[action_id]}; céldátum {target.isoformat()}; "
            "a 2027-09-30-i repeat-audit előtti 60 napos korlát és az egyszerűtől az összetett felé haladó sorrend alapján."
        )
        action["notes"] = f"{base_notes}{note}".strip()
        updated.append(action)
        schedule.append(
            {
                "action_id": action_id,
                "status": action.get("status", ""),
                "priority": action.get("priority", ""),
                "complexity_band": band_by_id[action_id],
                "procurement_gate": "yes" if has_procurement_gate(action) else "no",
                "dependency_ids": ";".join(_dependencies(action)),
                "previous_target_date": old_date,
                "calculated_target_date": target.isoformat(),
                "wave_id": wave_id,
                "sequencing_reason": reason,
                "calendar_completion_cap": CALENDAR_COMPLETION_CAP.isoformat(),
                "operational_completion_cap": OPERATIONAL_COMPLETION_CAP.isoformat(),
                "schedule_status": "MANAGEMENT_BASELINE_D035_PENDING_FINAL_G4",
                "decision_ref": DECISION_REF,
            }
        )
    return updated, schedule


def update_execution_details(
    details: list[dict[str, str]], schedule: list[dict[str, str]]
) -> list[dict[str, str]]:
    by_id = {row["action_id"]: row for row in schedule}
    updated: list[dict[str, str]] = []
    for source in details:
        row = dict(source)
        scheduled = by_id.get(row["action_id"])
        if scheduled:
            row["proposed_completion_date"] = scheduled["calculated_target_date"]
            row["schedule_status"] = scheduled["schedule_status"]
            marker = " D-035 ütemezés:"
            base_notes = _clean_prior_schedule_notes(row.get("notes", ""))
            row["notes"] = (
                f"{base_notes}{marker} {scheduled['wave_id']}; "
                f"{scheduled['complexity_band']}; {scheduled['calculated_target_date']}."
            ).strip()
        updated.append(row)
    return updated


def render_schedule_report(schedule: list[dict[str, str]]) -> str:
    counts: dict[str, int] = {}
    for row in schedule:
        counts[row["wave_id"]] = counts.get(row["wave_id"], 0) + 1
    lines = [
        "# NIS2 akciók határidő-ütemezése – D-035",
        "",
        "> **Menedzsment baseline.** A dátumok a feladatok belső céldátumai; nem igazolnak megvalósítást vagy evidenciaelfogadást.",
        "",
        "## Számítási alap",
        "",
        f"- Jóváhagyott belső repeat-audit cél: **{REPEAT_AUDIT_TARGET.isoformat()}**.",
        f"- 60 naptári nappal korábbi véghatár: **{CALENDAR_COMPLETION_CAP.isoformat()}**.",
        f"- Operatív utolsó munkanap: **{OPERATIONAL_COMPLETION_CAP.isoformat()}**.",
        "- Sorrend: hatósági előfeltételek; egyszerű B0 feladatok; közepes működési feladatok; összetett technikai feladatok; G5/beszerzési kapus feladatok.",
        "- Az akcióstátuszok, evidenciaelfogadások és G1–G5 kapuk nem változtak.",
        "",
        "## Hullámok",
        "",
        "| Hullám | Céldátum | Feladat | Jelentés |",
        "|---|---|---:|---|",
    ]
    for wave in WAVES:
        lines.append(
            f"| {wave.wave_id} | {wave.target_date.isoformat()} | {counts.get(wave.wave_id, 0)} | {wave.label} |"
        )
    if counts.get("HISTORICAL"):
        lines.append(f"| HISTORICAL | változatlan | {counts['HISTORICAL']} | lezárt tétel |")
    lines.extend(
        [
            "",
            "## Tételes ütemezés",
            "",
            "| Akció | Komplexitás | Beszerzési kapu | Hullám | Céldátum | Függőség |",
            "|---|---|---|---|---|---|",
        ]
    )
    for row in schedule:
        lines.append(
            f"| {row['action_id']} | {row['complexity_band']} | {row['procurement_gate']} | "
            f"{row['wave_id']} | {row['calculated_target_date']} | {row['dependency_ids'] or '–'} |"
        )
    return "\n".join(lines) + "\n"
