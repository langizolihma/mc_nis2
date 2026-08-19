"""Dependency-free specification builder for human decision documents."""

from __future__ import annotations

import json
from pathlib import Path
import re
from typing import Any


TITLES = {
    "DEF-008": "EIR- és exportforrás-kijelölés",
    "DEF-009": "Leltárfeltöltési és adatminőségi review",
    "DEF-010": "Agent QA és gold-case elfogadás",
    "DEF-011": "AI-használati szabályzat G2 jóváhagyása",
    "DEF-012": "Repeat-audit ütemterv G4/G5 döntése",
    "DEF-013": "Negyedéves riportütemezés jóváhagyása",
    "DEF-014": "Cselekvési terv G1/G2/G4 jóváhagyása",
    "DEF-015": "Belső portál architektúra G2/G3 döntése",
    "DEF-016": "Backup- és restore-teszt engedélyezése",
    "DEF-017": "Fizikai bejárás és adatkezelési jóváhagyás",
    "DEF-018": "Infrastruktúra health snapshot gyűjtési engedély",
    "DEF-019": "Licenc- és entitlement-review",
    "DEF-020": "Portál funkcionális scope és pilotdöntés",
    "DEF-021": "Naplózási és monitoring-baseline jóváhagyása",
    "DEF-022": "Karbantartási és változáskezelési baseline",
    "DEF-023": "Beszállítói kockázati baseline jóváhagyása",
    "DEF-024": "Exchange-függőségi gyűjtés és teszt engedély",
    "DEF-025": "Legacy megőrzési és restore-döntés",
    "DEF-026": "RDS-szeparációs assessment döntése",
    "DEF-027": "Technikai munkacsomagok kapudöntése",
    "DEF-028": "Működési kontrollcsomagok kapudöntése",
    "DEF-029": "Irányítási evidencialánc jóváhagyása",
    "DEF-030": "Szabályozási baseline-ok jóváhagyása",
    "DEF-031": "Folyamatos auditfelkészültségi agent pilot",
    "DEF-032": "Hitelesített portál- és Graph-pilot döntése",
    "DEF-033": "H-002 agent és Graph read pilot döntése",
    "DEF-034": "Átvett dokumentumok szakmai besorolása",
    "DEF-035": "SharePoint evidenciatár kontrollreview-ja",
    "DEF-036": "Kontrollkatalógus G1 és EIR-besorolási döntés",
    "DEF-037": "Lejárt akciók státusz- és határidő-egyeztetése",
    "DEF-038": "Többfelhasználós portálpilot indítási döntése",
    "DEF-039": "Lefedettségpótló akciók szakmai és határidő-jóváhagyása",
}


def _slug(title: str) -> str:
    replacements = str.maketrans(
        "áéíóöőúüűÁÉÍÓÖŐÚÜŰ", "aeiooouuuAEIOOOUUU"
    )
    value = title.translate(replacements).lower()
    return re.sub(r"[^a-z0-9]+", "_", value).strip("_")[:70]


def _requirement_checks(text: str) -> list[str]:
    parts = [part.strip(" .") for part in text.split(";") if part.strip()]
    checks = parts[:10]
    if len(parts) > 10:
        checks.append(
            "A további részletes követelmények a feladatrekord szerint "
            "ellenőrizve"
        )
    checks.extend(
        [
            "A tényleges döntés vagy elkészült dokumentum csatolva",
            "A védett NIS2 SharePoint-hivatkozás és SHA-256 rögzítve",
            "A név szerinti reviewer és az időzónás review-idő rögzítve",
        ]
    )
    return checks


def load_open_tasks(package_path: Path) -> list[dict[str, Any]]:
    data = json.loads(package_path.read_text(encoding="utf-8"))
    tasks: list[dict[str, Any]] = []
    for wave in data["waves"]:
        for task in wave["tasks"]:
            if task["status"] != "OPEN_DEFERRED":
                continue
            tasks.append({**task, "wave": wave["wave_id"]})
    tasks.sort(key=lambda item: str(item["task_id"]))
    return tasks


def build_specs(
    tasks: list[dict[str, Any]],
    curated_documents: list[dict[str, object]],
) -> list[dict[str, object]]:
    curated = {
        str(item["task_id"]): dict(item) for item in curated_documents
    }
    specs: list[dict[str, object]] = []
    for task in tasks:
        task_id = str(task["task_id"])
        if task_id in curated:
            spec = curated[task_id]
            spec.update(
                {
                    "wave": task["wave"],
                    "current_process_state": task["current_process_state"],
                    "must_be_completed_before": task[
                        "must_be_completed_before"
                    ],
                }
            )
        else:
            title = TITLES[task_id]
            spec = {
                "task_id": task_id,
                "filename": f"{task_id}_{_slug(title)}.docx",
                "title": title,
                "purpose": (
                    "A feladathoz szükséges emberi vizsgálat, kapudöntés, "
                    "mellékletek és jóváhagyási nyom egységes rögzítése. "
                    f"Elkészítendő eredmény: {task['required_result']}"
                ),
                "owner": task["owner"],
                "reviewer": task["approver"],
                "source_refs": task["related"],
                "wave": task["wave"],
                "current_process_state": task["current_process_state"],
                "must_be_completed_before": task[
                    "must_be_completed_before"
                ],
                "steps": [
                    "Tekintse át a hivatkozott forrásokat és a jelenlegi "
                    "folyamatállapotot.",
                    "Végezze el vagy igazolja a lapon felsorolt tényleges "
                    "szakmai, jogi, biztonsági vagy műszaki ellenőrzéseket.",
                    "Csatolja a szükséges dokumentumokat, teszteredményeket "
                    "és döntési mellékleteket; rögzítse a védett URI-kat és "
                    "SHA-256 értékeket.",
                    "Jelölje a döntést, írja le a feltételeket vagy hiányokat, "
                    "majd a jogosult reviewer írja alá a lapot.",
                    "A végleges, aláírt példányt töltse fel a védett NIS2 "
                    "SharePoint-evidenciatárba.",
                ],
                "checks": _requirement_checks(
                    str(task["required_result"])
                ),
            }
        specs.append(spec)
    return specs
