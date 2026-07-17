"""Build a dependency-free, presentation-only portal data snapshot."""

from __future__ import annotations

import argparse
import csv
from datetime import date
import json
from pathlib import Path
import re
from typing import Any


ROOT = Path(__file__).parents[1]
DEFAULT_ACTIONS = ROOT / "data" / "actions.csv"
DEFAULT_DATES = ROOT / "data" / "project_dates.json"
DEFAULT_DEFERRED = ROOT / "DEFERRED_EVIDENCE_LOG.md"
DEFAULT_OUTPUT = ROOT / "portal_demo" / "data" / "demo_data.js"
DEFERRED_ROW = re.compile(r"^\|\s*(DEF-\d+)\s*\|")


def _clean_markdown(value: str) -> str:
    return value.strip().strip("`").replace("`", "")


def load_actions(path: Path) -> list[dict[str, str]]:
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return [{key: (value or "").strip() for key, value in row.items()} for row in csv.DictReader(handle)]


def load_deferred(path: Path) -> list[dict[str, str]]:
    records: list[dict[str, str]] = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if not DEFERRED_ROW.match(line):
            continue
        cells = [_clean_markdown(cell) for cell in line.strip().strip("|").split("|")]
        if len(cells) != 8:
            continue
        records.append({
            "id": cells[0], "related": cells[1], "process_state": cells[2],
            "required": cells[3], "gate": cells[4], "owner": cells[5],
            "approver": cells[6], "status": cells[7],
        })
    return records


def build_snapshot(actions: list[dict[str, str]], deferred: list[dict[str, str]], dates: dict[str, Any], as_of: date) -> dict[str, Any]:
    deadline = date.fromisoformat(str(dates["action_plan_deadline"]))
    gate_counts = {f"G{i}": 0 for i in range(1, 6)}
    for action in actions:
        for gate in action["human_gate"].split(";"):
            gate = gate.strip()
            if gate.startswith("G") and gate[:2] in gate_counts:
                gate_counts[gate[:2]] += 1

    status_counts: dict[str, int] = {}
    priority_counts: dict[str, int] = {}
    for action in actions:
        status_counts[action["status"]] = status_counts.get(action["status"], 0) + 1
        priority_counts[action["priority"]] = priority_counts.get(action["priority"], 0) + 1

    safe_actions = [{
        "id": item["action_id"], "title": item["workstream"], "task": item["task"],
        "deliverable": item["deliverable"], "evidence": item["evidence_required"],
        "priority": item["priority"], "phase": item["phase"], "status": item["status"],
        "owner": item["human_owner"], "approver": item["human_approver"],
        "target_date": item["target_date"] or "Emberi ütemezés szükséges",
        "source_ref": item["source_ref"], "source_confidence": item["source_confidence"],
        "gates": [gate for gate in item["human_gate"].split(";") if gate],
        "ai_role": item["ai_role"], "ai_eligibility": item["ai_eligibility"],
        "cost_band": item["cost_band"], "external_submission": item["external_submission"],
    } for item in actions]

    approval_queue = [
        {
            "action_id": item["id"], "title": item["title"], "priority": item["priority"],
            "owner": item["owner"], "approver": item["approver"], "gates": item["gates"],
            "target_date": item["target_date"], "status": "EMBERI DÖNTÉSRE VÁR",
        }
        for item in safe_actions if item["gates"] and item["status"] != "DONE"
    ]
    approval_queue.sort(key=lambda item: ({"P0": 0, "P1": 1, "P2": 2}.get(item["priority"], 9), item["target_date"], item["action_id"]))

    ai_proposals = [
        {
            "action_id": item["id"], "title": item["title"], "proposal": item["task"],
            "agent_role": item["ai_role"], "source_ref": item["source_ref"],
            "confidence": item["source_confidence"], "required_gate": "; ".join(item["gates"]) or "G1_DOMAIN_REVIEW",
            "status": "PROPOSAL",
        }
        for item in safe_actions if item["ai_eligibility"] in {"yes", "partial"}
    ][:8]

    return {
        "meta": {
            "product": "metALCOM NIS2 Audit Control Center", "mode": "PRESENTATION_PROTOTYPE",
            "as_of": as_of.isoformat(), "source": "local repository metadata",
            "disclaimer": "A felület demonstráció. Nem módosít nyilvántartást, nem fogad el evidenciát és nem hajt végre jóváhagyást.",
        },
        "summary": {
            "total_actions": len(actions), "p0_actions": priority_counts.get("P0", 0),
            "in_progress": status_counts.get("IN_PROGRESS", 0), "new_actions": status_counts.get("NEW", 0),
            "open_human_tasks": sum(item["status"] == "OPEN_DEFERRED" for item in deferred),
            "accepted_risks": sum(item["status"] == "NOT_AVAILABLE_ACCEPTED_RISK" for item in deferred),
            "action_plan_deadline": deadline.isoformat(), "days_to_deadline": max((deadline - as_of).days, 0),
            "repeat_audit_target": "2027-09-30", "gate_counts": gate_counts,
            "priority_counts": priority_counts, "status_counts": status_counts,
        },
        "actions": safe_actions,
        "approval_queue": approval_queue,
        "deferred_tasks": deferred,
        "ai_proposals": ai_proposals,
        "gate_legend": [
            {"id": "G1", "name": "Szakmai review", "description": "Kontrollgazda vagy IBF szakmai ellenőrzése."},
            {"id": "G2", "name": "Biztonság és jog", "description": "Adatkezelési, jogi vagy érzékeny információs döntés."},
            {"id": "G3", "name": "Éles változtatás", "description": "Rendszergazda és változáskezelés jóváhagyása."},
            {"id": "G4", "name": "Külső benyújtás", "description": "Jogi és vezetői aláírás külső továbbítás előtt."},
            {"id": "G5", "name": "Költési döntés", "description": "Költségkeret-gazdai vagy vezetői jóváhagyás."},
        ],
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Build the local NIS2 presentation portal snapshot")
    parser.add_argument("--actions", type=Path, default=DEFAULT_ACTIONS)
    parser.add_argument("--project-dates", type=Path, default=DEFAULT_DATES)
    parser.add_argument("--deferred", type=Path, default=DEFAULT_DEFERRED)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--as-of", type=date.fromisoformat, required=True)
    args = parser.parse_args()
    snapshot = build_snapshot(
        load_actions(args.actions), load_deferred(args.deferred),
        json.loads(args.project_dates.read_text(encoding="utf-8")), args.as_of,
    )
    args.output.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(snapshot, ensure_ascii=False, indent=2, sort_keys=True)
    args.output.write_text(f"window.NIS2_DEMO_DATA = {payload};\n", encoding="utf-8", newline="\n")
    print(f"Portal snapshot: {len(snapshot['actions'])} action, {len(snapshot['deferred_tasks'])} human task -> {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
