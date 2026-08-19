"""Deterministic proposal builder for uncovered audit requirement groups."""

from __future__ import annotations

import csv
import re
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, Mapping, Sequence


COMPLIANT_RATING = "Megfelelt"
SCOPE_ORDER = {"Szervezet": 0, "Vezetéstámogató": 1, "Irodai": 2, "Termelés": 3}


@dataclass(frozen=True, slots=True)
class FamilyProfile:
    workstream: str
    instruction: str
    evidence_focus: str
    production_change: bool = False


FAMILY_PROFILES: Mapping[str, FamilyProfile] = {
    "1": FamilyProfile(
        "Irányítás és programmenedzsment",
        "alakítsa ki, hagyassa jóvá és vezesse be a szükséges irányítási, felelősségi, mérési és felülvizsgálati rendet",
        "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv",
    ),
    "2": FamilyProfile(
        "Hozzáférés-felügyelet",
        "határozza meg, vezesse be és EIR-enként ellenőrizze a hozzáférési szabályokat és kikényszerítő beállításokat",
        "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló",
        True,
    ),
    "3": FamilyProfile(
        "Tudatosság és képzés",
        "dolgozza ki, hajtsa végre és dokumentálja a célcsoporthoz és kockázathoz igazított képzési intézkedést",
        "jóváhagyott képzési terv és anyag, résztvevői nyilvántartás, tudásellenőrzés és felülvizsgálati rekord",
    ),
    "4": FamilyProfile(
        "Naplózás és elszámoltathatóság",
        "határozza meg és EIR-enként vezesse be a naplózási, védelmi, megőrzési és ellenőrzési követelményeket",
        "naplózási szabály, read-only konfigurációexport, mintanapló, megőrzési és hozzáférési ellenőrzés",
        True,
    ),
    "5": FamilyProfile(
        "Biztonsági értékelés és engedélyezés",
        "alakítsa ki és dokumentálja az értékelési, információcsere-, engedélyezési és folyamatos felügyeleti folyamatot",
        "jóváhagyott értékelési terv, vizsgálati jegyzőkönyv, engedélyezési döntés és nyomonkövetési rekord",
    ),
    "6": FamilyProfile(
        "Konfigurációkezelés",
        "határozza meg, vezesse be és EIR-enként igazolja a biztonságos konfigurációs és változáskezelési kontrollt",
        "jóváhagyott baseline, read-only konfigurációexport, változásjegy, teszt és rollback- vagy kivételrekord",
        True,
    ),
    "7": FamilyProfile(
        "Üzletmenet-folytonosság és helyreállítás",
        "dolgozza ki, gyakorolja és dokumentálja a folyamatos működéshez szükséges felkészülési és képzési kontrollt",
        "jóváhagyott folytonossági eljárás, képzési vagy gyakorlatjegyzőkönyv, eredmény és javítási napló",
        True,
    ),
    "8": FamilyProfile(
        "Azonosítás és hitelesítés",
        "határozza meg, vezesse be és EIR-enként tesztelje az azonosítási, hitelesítési és hitelesítőeszköz-kezelési kontrollt",
        "jóváhagyott IAM-szabály, read-only beállításexport, hitelesítési teszt, kivétel- és felülvizsgálati napló",
        True,
    ),
    "9": FamilyProfile(
        "Biztonsági események kezelése",
        "alakítsa ki, vezesse be és gyakorolja a biztonsági események követéséhez, jelentéséhez és támogatásához szükséges folyamatot",
        "jóváhagyott eljárás, eseményjegy, értesítési vagy eszkalációs nyom, gyakorlat és lessons-learned rekord",
        True,
    ),
    "10": FamilyProfile(
        "Karbantartás",
        "határozza meg és ellenőrizhetően vezesse be a szabályozott, távoli és személyi karbantartási követelményeket",
        "jóváhagyott karbantartási eljárás, munkajegy, hozzáférési napló, felügyeleti és lezárási ellenőrzés",
        True,
    ),
    "12": FamilyProfile(
        "Fizikai és környezeti védelem",
        "határozza meg, mérje és dokumentálja a környezeti védelmi szinteket, riasztásokat és felülvizsgálatot",
        "jóváhagyott környezeti követelmény, mérési vagy szenzorrekord, riasztási próba és felülvizsgálati jegyzőkönyv",
        True,
    ),
    "16": FamilyProfile(
        "Rendszer- és szolgáltatásbeszerzés",
        "építse be a biztonságtervezési és külső szolgáltatási követelményeket a beszerzési és életciklus-folyamatba",
        "jóváhagyott követelmény- és értékelési checklist, szerződéses vagy tervi kontroll, eltérés- és döntési napló",
    ),
    "17": FamilyProfile(
        "Rendszer- és kommunikációvédelem",
        "határozza meg, vezesse be és EIR-enként tesztelje a kommunikációs, kriptográfiai, névfeloldási és elkülönítési védelmet",
        "jóváhagyott műszaki baseline, read-only konfigurációexport, kulcs- vagy névfeloldási nyilvántartás, teszt és kivételnapló",
        True,
    ),
    "18": FamilyProfile(
        "Rendszer- és információsértetlenség",
        "határozza meg, vezesse be és EIR-enként ellenőrizze a kártevővédelem, monitorozás, riasztás és információmegőrzés kontrollját",
        "jóváhagyott védelmi és megőrzési szabály, read-only állapotexport, riasztási vagy észlelési teszt és review-napló",
        True,
    ),
    "19": FamilyProfile(
        "Ellátási lánc kockázatkezelése",
        "alakítsa ki és vezesse be a beszállítói, alvállalkozói, hitelességi, értesítési és selejtezési kontrollt",
        "jóváhagyott ellátásilánc-szabály, beszállítói vagy rendszerelem-ellenőrzés, szerződéses rekord és döntési napló",
    ),
}


def _rating(value: str) -> str:
    return value.replace("mértékû", "mértékű").strip()


def _severity(value: str) -> int:
    normalized = _rating(value)
    if normalized == "Kiemelt mértékű eltérés":
        return 3
    if normalized == "Kis mértékű eltérés":
        return 2
    if normalized == "Elhanyagolható mértékű eltérés":
        return 1
    if normalized == COMPLIANT_RATING:
        return 0
    raise ValueError(f"ismeretlen finding rating: {value!r}")


def _split(value: str) -> list[str]:
    return [item.strip() for item in value.split(";") if item.strip()]


def _numeric_id(value: str, prefix: str) -> int:
    match = re.fullmatch(re.escape(prefix) + r"(\d+)", value)
    return int(match.group(1)) if match else 0


def _control_key(value: str) -> tuple[int, ...]:
    return tuple(int(part) for part in value.split("."))


def _join_scopes(rows: Sequence[Mapping[str, str]]) -> str:
    scopes = {row["scope_eir"] for row in rows}
    return ";".join(sorted(scopes, key=lambda item: (SCOPE_ORDER.get(item, 99), item)))


def _page_ref(row: Mapping[str, str]) -> str:
    start = row["source_page_start"]
    end = row["source_page_end"]
    return start if not end or end == start else f"{start}–{end}"


def group_uncovered_controls(
    findings: Iterable[Mapping[str, str]],
) -> dict[str, list[Mapping[str, str]]]:
    """Return non-compliant control groups without any exact action link."""
    grouped: dict[str, list[Mapping[str, str]]] = defaultdict(list)
    for row in findings:
        if _severity(row["rating"]) > 0:
            grouped[row["control_ref"]].append(row)
    return {
        control: rows
        for control, rows in grouped.items()
        if not any(_split(row["direct_action_ids"]) for row in rows)
    }


def build_proposals(
    findings: Sequence[Mapping[str, str]],
    actions: Sequence[Mapping[str, str]],
    mappings: Sequence[Mapping[str, str]],
) -> tuple[list[dict[str, str]], dict[str, str], list[dict[str, str]]]:
    """Build deterministic actions, finding links, and exact mapping rows."""
    uncovered = group_uncovered_controls(findings)
    next_action = max((_numeric_id(row["action_id"], "A-") for row in actions), default=0) + 1
    next_mapping = max((_numeric_id(row["mapping_id"], "M-") for row in mappings), default=0) + 1
    action_fieldnames = list(actions[0]) if actions else []
    mapping_fieldnames = list(mappings[0]) if mappings else []
    proposals: list[dict[str, str]] = []
    finding_links: dict[str, str] = {}
    proposal_mappings: list[dict[str, str]] = []

    for offset, control in enumerate(sorted(uncovered, key=_control_key)):
        rows = uncovered[control]
        family = rows[0]["requirement_family"]
        profile = FAMILY_PROFILES.get(family)
        if profile is None:
            raise ValueError(f"nincs lefedettségpótló profil a(z) {family}. családhoz")
        action_id = f"A-{next_action + offset:03d}"
        mapping_id = f"M-{next_mapping + offset:04d}"
        severity = max(_severity(row["rating"]) for row in rows)
        priority, phase = {3: ("P0", "M1_0_30D"), 2: ("P1", "M2_31_90D"), 1: ("P2", "M3_3_6M")}[severity]
        title = rows[0]["control_title"].strip()
        scopes = _join_scopes(rows)
        finding_ids = [row["finding_id"] for row in rows]
        pages = list(dict.fromkeys(_page_ref(row) for row in rows))
        severity_label = {3: "kiemelt", 2: "kis mértékű", 1: "elhanyagolható"}[severity]
        gates = ["G1_DOMAIN_REVIEW", "G2_SECURITY_LEGAL"]
        if profile.production_change:
            gates.append("G3_PRODUCTION_CHANGE")

        action = {field: "" for field in action_fieldnames}
        action.update(
            {
                "action_id": action_id,
                "requirement_family": family,
                "control_ref": control,
                "scope_eir": scopes,
                "workstream": profile.workstream,
                "source_ref": "SRC-008",
                "source_type": "audit_gap",
                "source_page": ";".join(pages),
                "source_confidence": "machine_unvalidated",
                "finding_summary": (
                    f"A(z) {control} {title} követelménycsoportnál {len(rows)}, közvetlen "
                    f"intézkedéshez eddig nem rendelt auditeltérés található; a legmagasabb "
                    f"értékelés {severity_label}. Findingok: {';'.join(finding_ids)}."
                ),
                "task": (
                    f"A(z) {control} {title} követelménycsoport auditeltéréseinek kezelésére "
                    f"{profile.instruction}; rögzítse a hatókört, a kontrollgazdát, a végrehajtási "
                    "lépéseket, a kivételeket, az ellenőrzési módot és a felülvizsgálati ciklust."
                ),
                "deliverable": (
                    f"Jóváhagyott {control} {title} kontrollcsomag és EIR-enkénti végrehajtási jegyzőkönyv."
                ),
                "evidence_required": profile.evidence_focus + ", kontrollgazdai és G1 reviewer sign-off.",
                "priority": priority,
                "phase": phase,
                "status": "NEW",
                "human_owner": "Pásztor András",
                "human_approver": "Lángi Zoltán",
                "deadline_basis": "management_schedule",
                "target_offset_days": "",
                "target_date": "",
                "cost_band": "B0",
                "spend_timing": "NOW_B0",
                "purchase_trigger": "",
                "ai_eligibility": "partial",
                "ai_role": "remediation_planner",
                "human_gate": ";".join(gates),
                "dependencies": "A-004;A-005",
                "external_submission": "no",
                "notes": (
                    "Lefedettségpótló AI-javaslat; nem jóváhagyás és nem megvalósítási evidencia. "
                    "A konkrét céldátumot, tényleges kontrollgazdát, EIR-hatókört, technikai lépéseket "
                    "és evidencia-elfogadást G1/G2 review során kell véglegesíteni."
                ),
            }
        )
        proposals.append(action)

        for row in rows:
            finding_links[row["finding_id"]] = action_id

        mapping = {field: "" for field in mapping_fieldnames}
        mapping.update(
            {
                "mapping_id": mapping_id,
                "action_id": action_id,
                "requirement_family": family,
                "control_ref": control,
                "scope_eir": scopes,
                "mapping_basis": "EXACT_CONTROL",
                "matched_finding_ids": ";".join(finding_ids),
                "human_owner": "Pásztor András",
                "evidence_required": action["evidence_required"],
                "source_ref": "SRC-008:" + ";".join(pages),
                "source_confidence": "machine_unvalidated",
                "human_review_status": "PROPOSED",
                "reviewer": "",
                "reviewed_at": "",
                "notes": (
                    "Lefedettségpótló pontos kontrollkapcsolat; G1 review előtt javaslat, "
                    "nem igazol megvalósítást vagy kontrollműködést."
                ),
            }
        )
        proposal_mappings.append(mapping)

    return proposals, finding_links, proposal_mappings


def read_csv(path: Path) -> tuple[list[str], list[dict[str, str]]]:
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        if reader.fieldnames is None:
            raise ValueError(f"{path}: hiányzik a CSV fejléc")
        return list(reader.fieldnames), [dict(row) for row in reader]


def write_csv(path: Path, fieldnames: Sequence[str], rows: Iterable[Mapping[str, str]]) -> None:
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def build_review_markdown(
    actions: Sequence[Mapping[str, str]],
    findings: Sequence[Mapping[str, str]],
    mappings: Sequence[Mapping[str, str]],
) -> str:
    """Render the proposal-only coverage expansion review package."""
    generated = [
        row for row in actions if row.get("notes", "").startswith("Lefedettségpótló AI-javaslat")
    ]
    noncompliant = [row for row in findings if _severity(row["rating"]) > 0]
    direct_noncompliant = [row for row in noncompliant if _split(row["direct_action_ids"])]
    proposed_mappings = [row for row in mappings if row["human_review_status"] == "PROPOSED"]
    lines = [
        "# Lefedettségpótló intézkedések G1/G2 review-csomag – 2026-08-18",
        "",
        "> **PROPOSAL – emberi jóváhagyás nélkül nem tekinthető végleges cselekvési tervnek vagy megvalósítási evidenciának.**",
        "",
        "```json",
        "{",
        '  "status": "PROPOSAL",',
        '  "agent_role": "remediation_planner_and_control_mapper",',
        '  "source_refs": ["SRC-008:p19-381", "data/audit_findings.csv", "data/actions.csv", "data/control_action_mapping.csv"],',
        '  "assumptions": ["A pontos kontrollkapcsolat lefedettséget jelent, de nem igazol megvalósítást vagy kontrollműködést."],',
        '  "confidence": "medium",',
        '  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL",',
        '  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production"]',
        "}",
        "```",
        "",
        "## Eredmény",
        "",
        f"- Lefedettségpótló új akciójavaslat: **{len(generated)}**.",
        f"- Eltéréssel érintett egyedi követelménycsoport: **{len({row['control_ref'] for row in noncompliant})}**.",
        f"- Közvetlen akciókapcsolattal rendelkező eltérés: **{len(direct_noncompliant)}/{len(noncompliant)}**.",
        f"- Mapping-sor összesen: **{len(mappings)}**, ebből emberileg még `PROPOSED`: **{len(proposed_mappings)}**.",
        "- A korábbi 85 kontrollszintű és 189 finding-szintű közvetlen lefedettségi hiány gépileg megszűnt.",
        "- A findingok továbbra is gépi kivonatok; a mapping és az új akciók szakmai jóváhagyásra várnak.",
        "",
        "## Új akciójavaslatok",
        "",
        "| Akció | Kontroll | Család | Érintett scope | Prioritás | Határidő |",
        "|---|---|---:|---|---|---|",
    ]
    for action in sorted(generated, key=lambda row: _numeric_id(row["action_id"], "A-")):
        lines.append(
            f"| {action['action_id']} | {action['control_ref']} – "
            f"{action['deliverable'].removeprefix('Jóváhagyott ' + action['control_ref'] + ' ').split(' kontrollcsomag')[0]} "
            f"| {action['requirement_family']} | {action['scope_eir']} | {action['priority']} | "
            "TBD – emberi ütemezés |"
        )
    lines.extend(
        [
            "",
            "## Kötelező emberi review",
            "",
            "1. A finding-regiszter forrásoldalas G1 mintavétele és a releváns kivételek javítása.",
            "2. Mind a 85 új akció kontrollcéljának, EIR-hatókörének és feladatleírásának szakmai ellenőrzése.",
            "3. A tényleges kontrollgazda és közreműködők kijelölése; Pásztor András jelenleg programfelelősként szerepel.",
            "4. Minden új akcióhoz konkrét, végrehajtható céldátum jóváhagyása, lehetőleg a 2027-09-30-i belső repeat-audit előtt.",
            "5. Az evidenciaelvárások és a B0 kiindulás felülvizsgálata; költési igénynél külön G5 csomag szükséges.",
            "6. Lángi Zoltán G1/G2 owner sign-offja a 189 soros mappingre; technikai változtatás csak G3 után.",
            "",
            "## Jóváhagyási blokk",
            "",
            "- Szakmai reviewer: ____________________",
            "- Review dátuma és időzónája: ____________________",
            "- Elfogadott / módosítandó akciók: ____________________",
            "- Jóváhagyott felelős- és dátumlista hivatkozása: ____________________",
            "- Döntés: `APPROVED / NEEDS_CHANGES`",
            "- Döntési hivatkozás: ____________________",
            "",
        ]
    )
    return "\n".join(lines)
