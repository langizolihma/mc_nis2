"""Turn coverage-only action proposals into reviewable execution packages."""

from __future__ import annotations

import csv
import re
from collections import Counter
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from typing import Iterable, Mapping, Sequence


NEW_ACTION_MIN = 43
NEW_ACTION_MAX = 127
DETAIL_FIELDS = (
    "action_id",
    "requirement_family",
    "control_ref",
    "control_title",
    "scope_eir",
    "proposed_control_owner",
    "proposed_contributors",
    "program_responsible",
    "approver",
    "proposed_g1_review_date",
    "proposed_completion_date",
    "schedule_status",
    "implementation_steps",
    "acceptance_criteria",
    "evidence_required",
    "existing_evidence_candidates",
    "catalog_parameters",
    "source_refs",
    "source_confidence",
    "human_review_status",
    "reviewer",
    "reviewed_at",
    "decision_ref",
    "notes",
)


@dataclass(frozen=True, slots=True)
class RoleProposal:
    owner: str
    contributors: str


DEFAULT_ROLES: Mapping[str, RoleProposal] = {
    "1": RoleProposal("Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt", "Kóczán Mónika; Dr. Berta Brigitta szükség szerint"),
    "2": RoleProposal("TBD – belső metALCOM technikai kontrollgazda", "Kollár Csaba – technikai végrehajtó; Lángi Zoltán – IBF review"),
    "3": RoleProposal("Koncz Erika – HR-kontrollgazda", "Lángi Zoltán – IBF review"),
    "4": RoleProposal("TBD – belső metALCOM naplózási kontrollgazda", "Kollár Csaba – technikai végrehajtó; Lángi Zoltán – IBF review"),
    "5": RoleProposal("Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt", "Kóczán Mónika; Dr. Berta Brigitta szükség szerint"),
    "6": RoleProposal("TBD – belső metALCOM konfigurációkezelési kontrollgazda", "Kollár Csaba – technikai végrehajtó; Lángi Zoltán – IBF review"),
    "7": RoleProposal("Kóczán Mónika – folytonossági kontrollgazda-jelölt", "Kollár Csaba – technikai végrehajtó; Lángi Zoltán – IBF review"),
    "8": RoleProposal("TBD – belső metALCOM IAM-kontrollgazda", "Kollár Csaba – technikai végrehajtó; Lángi Zoltán – IBF review"),
    "9": RoleProposal("TBD – belső metALCOM incidenskezelési kontrollgazda", "Kollár Csaba – technikai végrehajtó; Lángi Zoltán; Dr. Berta Brigitta szükség szerint"),
    "10": RoleProposal("TBD – belső metALCOM karbantartási kontrollgazda", "Kollár Csaba – technikai végrehajtó; Lángi Zoltán – IBF review"),
    "12": RoleProposal("Német Péter – fizikai védelmi kontrollgazda", "Lángi Zoltán – IBF review; Kollár Csaba szükség szerint"),
    "16": RoleProposal("TBD – belső beszerzési/szerződésgazda", "Dr. Berta Brigitta – jogi review; Lángi Zoltán – IBF review; Kollár Csaba szükség szerint"),
    "17": RoleProposal("TBD – belső metALCOM infrastruktúra-kontrollgazda", "Kollár Csaba – technikai végrehajtó; Lángi Zoltán – IBF review"),
    "18": RoleProposal("TBD – belső metALCOM rendszerintegritási kontrollgazda", "Kollár Csaba – technikai végrehajtó; Lángi Zoltán – IBF review"),
    "19": RoleProposal("TBD – belső ellátásilánc-/beszerzési kontrollgazda", "Dr. Berta Brigitta – jogi review; Lángi Zoltán – IBF review; Kollár Csaba szükség szerint"),
}


ROLE_OVERRIDES: Mapping[str, RoleProposal] = {
    "1.14": RoleProposal("Koncz Erika – HR-kontrollgazda", "Lángi Zoltán – IBF review"),
    "1.17": RoleProposal("Koncz Erika – HR-kontrollgazda", "Lángi Zoltán – IBF review"),
    "1.21": DEFAULT_ROLES["19"],
    "5.7": RoleProposal("Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt", "Dr. Berta Brigitta – jogi review; Kóczán Mónika"),
    "19.24": RoleProposal("TBD – belső ellátásilánc-/beszerzési kontrollgazda", "Koncz Erika – képzési közreműködő; Dr. Berta Brigitta; Lángi Zoltán"),
}


IMPLEMENTATION_OVERRIDES: Mapping[str, str] = {
    "2.75": (
        "1. Határozza meg az EIR-ek belépési felületén megjelenítendő, jogilag és információbiztonságilag jóváhagyott rendszerhasználati figyelmeztetés tartalmát.\n"
        "2. Állítsa be a jóváhagyott figyelmeztetés megjelenítését minden alkalmazandó interaktív belépési ponton, még a hitelesítés vagy a hozzáférés engedélyezése előtt.\n"
        "3. Ellenőrizze mintavétellel a Vezetéstámogató, Irodai és Termelés EIR érintett belépési felületeit, és rögzítse a nem alkalmazható vagy technikailag eltérő eseteket.\n"
        "4. Dokumentálja a szövegváltozatot, a konfigurációt, a képernyőképes vagy konfigurációexport-alapú próbaeredményt és a felülvizsgálati ciklust."
    ),
    "5.4": (
        "1. Az SRC-010 hatályos követelménye és a hatósági/auditori feltételek alapján rögzítse az audit hatókörét, az érintett EIR-eket és az auditütemezést.\n"
        "2. Ellenőrizze és dokumentálja az auditor jogosultságát, függetlenségét, szerződéses kereteit és a szükséges információátadást.\n"
        "3. Tartsa nyilván az auditmegállapításokat, a javító intézkedéseket, a felelősöket, a céldátumokat és az utánkövetést.\n"
        "4. Őrizze meg a jóváhagyott auditjelentést, a javítási evidenciákat és a lezáró vezetői döntést védett tárban."
    ),
}


def _number(action_id: str) -> int:
    match = re.fullmatch(r"A-(\d+)", action_id)
    return int(match.group(1)) if match else -1


def is_maturation_action(row: Mapping[str, str]) -> bool:
    number = _number(row.get("action_id", ""))
    return NEW_ACTION_MIN <= number <= NEW_ACTION_MAX


def _steps(text: str) -> list[str]:
    normalized = text.replace("\r\n", "\n").strip()
    if not normalized:
        return []
    parts = re.split(r"(?:^|\n)\s*\d+\.\s*", normalized)
    return [re.sub(r"\s+", " ", part).strip() for part in parts if part.strip()]


def _first_sentence(text: str, limit: int = 330) -> str:
    sentence = re.split(r"(?<=[.!?])\s+", text.strip(), maxsplit=1)[0]
    if len(sentence) <= limit:
        return sentence
    shortened = sentence[:limit].rsplit(" ", 1)[0]
    return shortened.rstrip(" ,;:") + "…"


def concise_task(control_ref: str, title: str, implementation_steps: str) -> str:
    steps = _steps(implementation_steps)
    if not steps:
        raise ValueError(f"{control_ref}: nincs végrehajtási lépés")
    indexes = list(dict.fromkeys((0, 1 if len(steps) > 1 else 0, len(steps) - 1)))
    selected = [_first_sentence(steps[index]) for index in indexes]
    rendered = " ".join(f"{index + 1}) {step}" for index, step in enumerate(selected))
    return (
        f"{control_ref} – {title}: {rendered} "
        "Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; "
        "az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt."
    )


def acceptance_criteria(control_ref: str, step_count: int, technical: bool) -> str:
    test_clause = (
        "legalább egy jóváhagyott, nem destruktív konfiguráció- vagy működési próba megfelelt"
        if technical
        else "legalább egy dokumentált működési minta vagy folyamatpróba megfelelt"
    )
    return (
        f"1. A {control_ref} alkalmazhatósága és EIR-hatóköre jóváhagyott. "
        f"2. A {step_count} végrehajtási pont mindegyike IMPLEMENTED vagy indokolt NOT_APPLICABLE státuszú. "
        f"3. A kontrollgazda és a végrehajtó kijelölt; {test_clause}. "
        "4. Minden kivételhez kockázat, felelős és jóváhagyott céldátum tartozik. "
        "5. A végleges dokumentumok és próbaeredmények védett URI-ja, SHA-256 értéke és emberi review-rekordja rögzített."
    )


def proposed_completion_date(priority: str) -> str:
    return {"P0": "2027-01-31", "P1": "2027-04-30", "P2": "2027-06-30"}[priority]


def local_evidence_candidates(control_ref: str, paths: Iterable[Path]) -> str:
    marker = re.compile(rf"(?:^|_){re.escape(control_ref)}_", re.IGNORECASE)
    matched = sorted(
        path.as_posix()
        for path in paths
        if marker.search(path.name)
    )
    return ";".join(f"LOCAL_CANDIDATE:{path}" for path in matched[:8])


def build_maturation(
    actions: Sequence[Mapping[str, str]],
    catalog: Sequence[Mapping[str, str]],
    *,
    as_of: date,
    candidate_paths: Iterable[Path] = (),
) -> tuple[list[dict[str, str]], list[dict[str, str]]]:
    catalog_by_control = {row["control_ref"]: row for row in catalog}
    updated_actions = [dict(row) for row in actions]
    details: list[dict[str, str]] = []
    for action in updated_actions:
        if not is_maturation_action(action):
            continue
        control_ref = action["control_ref"]
        catalog_row = catalog_by_control.get(control_ref)
        if catalog_row is None:
            raise ValueError(f"{action['action_id']}: a kontroll hiányzik a katalógusból: {control_ref}")
        raw_steps = IMPLEMENTATION_OVERRIDES.get(control_ref, catalog_row["implementation_steps"].strip())
        parsed_steps = _steps(raw_steps)
        if not parsed_steps:
            raise ValueError(f"{action['action_id']}: nincs használható végrehajtási útmutató")
        role = ROLE_OVERRIDES.get(control_ref, DEFAULT_ROLES[action["requirement_family"]])
        technical = "G3_PRODUCTION_CHANGE" in action["human_gate"]
        criteria = acceptance_criteria(control_ref, len(parsed_steps), technical)
        catalog_note = (
            "Az 5.4 kontroll részletesítése az SRC-010 hatályos baseline alapján készült; "
            "az SRC-009 elavult jogszabályi hivatkozása nem került át."
            if control_ref == "5.4"
            else "Az SRC-009 megvalósítási útmutatója javaslati forrás; G1 review előtt nem kötelező vagy igazolt megoldás."
        )
        action["task"] = concise_task(control_ref, catalog_row["control_title"], raw_steps)
        action["deliverable"] = (
            f"{control_ref} – {catalog_row['control_title']} végrehajtási csomag: jóváhagyott EIR-scope, "
            f"{len(parsed_steps)} pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény."
        )
        # Rebuild the augmented value from its stable baseline so repeated
        # --apply runs do not duplicate the generated evidence requirements.
        base_evidence = action["evidence_required"].split(" Továbbá:", 1)[0].strip()
        action["evidence_required"] = (
            f"{base_evidence} Továbbá: {len(parsed_steps)} pontos végrehajtási checklist; "
            "scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; "
            "védett URI, SHA-256 és reviewer-döntés."
        )
        action["notes"] = (
            f"Lefedettségpótló AI-javaslat – részletesítve {as_of.isoformat()}. "
            f"Javasolt kontrollgazda: {role.owner}. Közreműködők: {role.contributors}. "
            f"Javasolt G1 review: 2026-09-11; javasolt teljesítés: {proposed_completion_date(action['priority'])}. "
            "A dátumok, szerepek, EIR-hatókör és technikai lépések nem jóváhagyottak; a kanonikus target_date ezért üres marad. "
            f"Részletes rekord: data/action_execution_details.csv. {catalog_note}"
        )
        detail = {field: "" for field in DETAIL_FIELDS}
        detail.update(
            {
                "action_id": action["action_id"],
                "requirement_family": action["requirement_family"],
                "control_ref": control_ref,
                "control_title": catalog_row["control_title"],
                "scope_eir": action["scope_eir"],
                "proposed_control_owner": role.owner,
                "proposed_contributors": role.contributors,
                "program_responsible": action["human_owner"],
                "approver": action["human_approver"],
                "proposed_g1_review_date": "2026-09-11",
                "proposed_completion_date": proposed_completion_date(action["priority"]),
                "schedule_status": "PROPOSED_PENDING_G2_G4",
                "implementation_steps": raw_steps,
                "acceptance_criteria": criteria,
                "evidence_required": action["evidence_required"],
                "existing_evidence_candidates": local_evidence_candidates(control_ref, candidate_paths),
                "catalog_parameters": catalog_row["parameters"],
                "source_refs": f"SRC-008:{action['source_page']};SRC-009:{catalog_row['source_sheet']}:{catalog_row['source_row_start']}-{catalog_row['source_row_end']};SRC-010:{control_ref}",
                "source_confidence": "machine_unvalidated",
                "human_review_status": "PROPOSED",
                "notes": catalog_note,
            }
        )
        details.append(detail)
    if len(details) != NEW_ACTION_MAX - NEW_ACTION_MIN + 1:
        raise ValueError(f"85 helyett {len(details)} érlelési rekord készült")
    return updated_actions, details


def read_csv(path: Path) -> tuple[list[str], list[dict[str, str]]]:
    with path.open(encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        if reader.fieldnames is None:
            raise ValueError(f"{path}: hiányzik a fejléc")
        return list(reader.fieldnames), [dict(row) for row in reader]


def write_csv(path: Path, fieldnames: Sequence[str], rows: Iterable[Mapping[str, str]]) -> None:
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def render_review_markdown(details: Sequence[Mapping[str, str]]) -> str:
    family_counts = Counter(row["requirement_family"] for row in details)
    schedule_counts = Counter(row["proposed_completion_date"] for row in details)
    tbd_owner_count = sum(row["proposed_control_owner"].startswith("TBD") for row in details)
    candidate_count = sum(bool(row["existing_evidence_candidates"]) for row in details)
    lines = [
        "# A-043–A-127 végrehajtási és G1/G2/G3 review-csomag – 2026-08-19",
        "",
        "> **PROPOSAL.** A részletesítés nem jóváhagyás, nem igazol megvalósítást, és nem módosítja a kanonikus céldátumokat.",
        "",
        "```json",
        "{",
        '  "status": "PROPOSAL",',
        '  "agent_role": "remediation_planner",',
        '  "source_refs": ["SRC-008", "SRC-009", "SRC-010", "data/action_execution_details.csv"],',
        '  "assumptions": ["Az SRC-009 végrehajtási lépései G1 review előtti támpontok."],',
        '  "confidence": "medium",',
        '  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL;G3_PRODUCTION_CHANGE;G4_APPROVAL",',
        '  "forbidden_automatic_actions": ["approve_action", "accept_evidence", "close_action", "submit_external", "change_production"]',
        "}",
        "```",
        "",
        "## Elkészült gépi előkészítés",
        "",
        f"- Részletesített intézkedés: **{len(details)}**.",
        "- Kontrollspecifikus, számozott végrehajtási checklist: **85/85**.",
        "- Mérhető lezárási feltétel és evidenciaelvárás: **85/85**.",
        "- Javasolt kontrollgazda és közreműködők: **85/85**.",
        f"- Belső kontrollgazda még név szerint kijelölendő: **{tbd_owner_count}**.",
        f"- Helyi evidenciajelölttel rendelkező kontroll: **{candidate_count}**; ezek még nem elfogadott evidenciák.",
        "- Kanonikus target_date automatikus módosítása: **0**.",
        "",
        "## Javasolt ütemezési hullámok",
        "",
        "| Javasolt teljesítés | Tételek | Értelmezés |",
        "|---|---:|---|",
    ]
    for target, count in sorted(schedule_counts.items()):
        interpretation = {
            "2027-01-31": "P0 – kiemelt eltérések első végrehajtási hulláma",
            "2027-04-30": "P1 – kis mértékű eltérések második hulláma",
            "2027-06-30": "P2 – elhanyagolható eltérések harmadik hulláma",
        }.get(target, "emberi jóváhagyásra váró javaslat")
        lines.append(f"| {target} | {count} | {interpretation} |")
    lines.extend(
        [
            "",
            "A javasolt G1 tartalmi review dátuma minden új tételnél **2026-09-11**. A dátumok csak döntés-előkészítő értékek; G2/G4 elfogadásig az `actions.csv` kanonikus `target_date` mezője üres marad.",
            "",
            "## Követelménycsaládok",
            "",
            "| Család | Tételek | Elsődleges review-út |",
            "|---:|---:|---|",
        ]
    )
    review_routes = {
        "1": "IBF + projektvezető; jogi review szükség szerint",
        "2": "belső technikai kontrollgazda + Kollár Csaba + IBF",
        "3": "Koncz Erika + IBF",
        "4": "belső naplózási kontrollgazda + Kollár Csaba + IBF",
        "5": "IBF + projektvezető/jogi reviewer",
        "6": "belső konfigurációgazda + Kollár Csaba + IBF",
        "7": "Kóczán Mónika + Kollár Csaba + IBF",
        "8": "belső IAM-gazda + Kollár Csaba + IBF",
        "9": "belső incidenskontroll-gazda + Kollár Csaba + IBF/jog",
        "10": "belső karbantartási gazda + Kollár Csaba + IBF",
        "12": "Német Péter + IBF",
        "16": "beszerzési/szerződésgazda + jog + IBF",
        "17": "belső infrastruktúra-gazda + Kollár Csaba + IBF",
        "18": "belső rendszerintegritási gazda + Kollár Csaba + IBF",
        "19": "ellátásilánc-/beszerzési gazda + jog + IBF",
    }
    for family, count in sorted(family_counts.items(), key=lambda item: int(item[0])):
        lines.append(f"| {family} | {count} | {review_routes[family]} |")
    lines.extend(
        [
            "",
            "## Tételes jóváhagyási munkalap",
            "",
            "| Akció | Kontroll | Javasolt kontrollgazda | G1 | Javasolt teljesítés | Evidenciajelölt | Döntés |",
            "|---|---|---|---|---|---|---|",
        ]
    )
    for row in details:
        evidence = "van – review szükséges" if row["existing_evidence_candidates"] else "nincs közvetlenül azonosítva"
        owner = row["proposed_control_owner"].replace("|", "/")
        lines.append(
            f"| {row['action_id']} | {row['control_ref']} – {row['control_title']} | {owner} | "
            f"{row['proposed_g1_review_date']} | {row['proposed_completion_date']} | {evidence} | APPROVED / NEEDS_CHANGES |"
        )
    lines.extend(
        [
            "",
            "## Jóváhagyási blokk",
            "",
            "- G1 szakmai reviewer(ek): ____________________",
            "- G1 döntés és dátum: ____________________",
            "- Jóváhagyott kontrollgazda-/közreműködő-lista: ____________________",
            "- G2 jogi/IBF dátumjóváhagyás: ____________________",
            "- G3 technikai review-döntés az érintett 52 tételre: ____________________",
            "- G4 vezetői jóváhagyás: ____________________",
            "- Aláírt döntési rekord védett URI-ja és SHA-256 értéke: ____________________",
            "",
        ]
    )
    return "\n".join(lines)
