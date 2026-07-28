"""Domain and local-state helpers for the proposal-only NIS2 portal MVP."""

from __future__ import annotations

import csv
from datetime import date, datetime, timezone
import hashlib
import json
from pathlib import Path
import re
import threading
from typing import Any, Callable

from .portal_auth import auth_readiness_summary, validate_portal_auth_policy
from .sharepoint_readiness import readiness_summary, validate_sharepoint_graph_readiness
from .sharepoint_snapshot import load_sharepoint_projection


DEFERRED_ROW = re.compile(r"^\|\s*(DEF-\d+)\s*\|")
ALLOWED_DRAFT_DECISIONS = {"COMMENT", "REQUEST_REVIEW", "RETURN_FOR_REWORK"}


def _clean_markdown(value: str) -> str:
    return value.strip().strip("`").replace("`", "")


def load_actions(path: Path) -> list[dict[str, str]]:
    """Load the canonical UTF-8 action registry without mutation."""
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return [{key: (value or "").strip() for key, value in row.items()} for row in csv.DictReader(handle)]


def load_deferred(path: Path) -> list[dict[str, str]]:
    """Load only well-formed DEF table rows from the human evidence log."""
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


def load_control_catalog_projection(path: Path) -> list[dict[str, str]]:
    """Load the non-sensitive proposal-only fields displayed in the portal."""
    allowed = {
        "control_ref", "requirement_family", "control_title",
        "basic_applicability", "significant_applicability",
        "high_applicability", "explanation", "implementation_steps",
        "iso_27001_ref", "nist_sp_800_53_rev5_ref", "source_ref",
        "source_confidence", "human_review_status",
    }
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return [
            {key: (value or "").strip() for key, value in row.items() if key in allowed}
            for row in csv.DictReader(handle)
        ]


def build_snapshot(
    actions: list[dict[str, str]],
    deferred: list[dict[str, str]],
    dates: dict[str, Any],
    as_of: date,
    control_catalog: list[dict[str, str]] | None = None,
) -> dict[str, Any]:
    """Build the safe, non-sensitive portal projection."""
    catalog_records = control_catalog or []
    catalog_by_ref = {item["control_ref"]: item for item in catalog_records}
    deadline = date.fromisoformat(str(dates["action_plan_deadline"]))
    gate_counts = {f"G{i}": 0 for i in range(1, 6)}
    status_counts: dict[str, int] = {}
    priority_counts: dict[str, int] = {}
    for action in actions:
        for gate in action["human_gate"].split(";"):
            gate = gate.strip()
            if gate.startswith("G") and gate[:2] in gate_counts:
                gate_counts[gate[:2]] += 1
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
        "control_refs": [
            value.strip() for value in item.get("control_ref", "").split(";")
            if value.strip()
        ],
        "control_details": [
            catalog_by_ref[value.strip()]
            for value in item.get("control_ref", "").split(";")
            if value.strip() in catalog_by_ref
        ],
    } for item in actions]
    approval_queue = [{
        "action_id": item["id"], "title": item["title"], "priority": item["priority"],
        "owner": item["owner"], "approver": item["approver"], "gates": item["gates"],
        "target_date": item["target_date"], "status": "EMBERI DÖNTÉSRE VÁR",
    } for item in safe_actions if item["gates"] and item["status"] != "DONE"]
    approval_queue.sort(key=lambda item: ({"P0": 0, "P1": 1, "P2": 2}.get(item["priority"], 9), item["target_date"], item["action_id"]))
    ai_proposals = [{
        "action_id": item["id"], "title": item["title"], "proposal": item["task"],
        "agent_role": item["ai_role"], "source_ref": item["source_ref"],
        "confidence": item["source_confidence"], "required_gate": "; ".join(item["gates"]) or "G1_DOMAIN_REVIEW",
        "status": "PROPOSAL",
    } for item in safe_actions if item["ai_eligibility"] in {"yes", "partial"}][:8]
    return {
        "meta": {
            "product": "metALCOM NIS2 Audit Control Center", "mode": "LOCAL_MVP",
            "as_of": as_of.isoformat(), "source": "local repository metadata",
            "auth_status": "NOT_CONFIGURED", "write_scope": "DRAFT_REVIEW_NOTES_ONLY",
            "disclaimer": "A felület helyi MVP. A review-tervezet nem jóváhagyás, nem evidencia, nem módosít akcióstátuszt és a portál nem hajt végre jóváhagyást.",
        },
        "summary": {
            "total_actions": len(actions), "p0_actions": priority_counts.get("P0", 0),
            "in_progress": status_counts.get("IN_PROGRESS", 0), "new_actions": status_counts.get("NEW", 0),
            "open_human_tasks": sum(item["status"] == "OPEN_DEFERRED" for item in deferred),
            "accepted_risks": sum(item["status"] == "NOT_AVAILABLE_ACCEPTED_RISK" for item in deferred),
            "action_plan_deadline": deadline.isoformat(), "days_to_deadline": max((deadline - as_of).days, 0),
            "repeat_audit_target": "2027-09-30", "gate_counts": gate_counts,
            "priority_counts": priority_counts, "status_counts": status_counts,
            "catalog_controls": len(catalog_records),
            "catalog_review_status": (
                "PROPOSED_G1_PENDING" if catalog_records else "NOT_AVAILABLE"
            ),
        },
        "actions": safe_actions, "approval_queue": approval_queue,
        "deferred_tasks": deferred, "ai_proposals": ai_proposals,
        "gate_legend": [
            {"id": "G1", "name": "Szakmai review", "description": "Kontrollgazda vagy IBF szakmai ellenőrzése."},
            {"id": "G2", "name": "Biztonság és jog", "description": "Adatkezelési, jogi vagy érzékeny információs döntés."},
            {"id": "G3", "name": "Éles változtatás", "description": "Rendszergazda és változáskezelés jóváhagyása."},
            {"id": "G4", "name": "Külső benyújtás", "description": "Jogi és vezetői aláírás külső továbbítás előtt."},
            {"id": "G5", "name": "Költési döntés", "description": "Költségkeret-gazdai vagy vezetői jóváhagyás."},
        ],
    }


def validate_review_draft(payload: Any, known_actions: dict[str, dict[str, str]]) -> list[str]:
    """Validate an unauthenticated note that has no formal approval effect."""
    if not isinstance(payload, dict):
        return ["A kérés JSON objektum kell legyen."]
    errors: list[str] = []
    action_id = str(payload.get("action_id", "")).strip()
    actor = str(payload.get("actor_display", "")).strip()
    note = str(payload.get("note", "")).strip()
    decision = str(payload.get("decision", "")).strip()
    gate = str(payload.get("gate", "")).strip()
    if action_id not in known_actions:
        errors.append("Ismeretlen action_id.")
    if decision not in ALLOWED_DRAFT_DECISIONS:
        errors.append("A review-tervezet döntéstípusa nem engedélyezett.")
    if not 2 <= len(actor) <= 80 or any(char in actor for char in "\r\n"):
        errors.append("A megjelenített név 2–80 karakteres, egysoros érték legyen.")
    if not 3 <= len(note) <= 2000:
        errors.append("A megjegyzés 3–2000 karakteres legyen.")
    if action_id in known_actions:
        allowed_gates = set(known_actions[action_id].get("human_gate", "").split(";"))
        if gate not in allowed_gates:
            errors.append("A kapu nem tartozik az akcióhoz.")
    return errors


class ReviewDraftStore:
    """Append-only JSONL store for non-authoritative local review notes."""

    def __init__(self, path: Path, clock: Callable[[], datetime] | None = None) -> None:
        self.path = path
        self.clock = clock or (lambda: datetime.now(timezone.utc))
        self._lock = threading.Lock()

    def load(self) -> list[dict[str, Any]]:
        if not self.path.exists():
            return []
        records: list[dict[str, Any]] = []
        for line in self.path.read_text(encoding="utf-8").splitlines():
            if not line.strip():
                continue
            try:
                item = json.loads(line)
            except json.JSONDecodeError:
                continue
            if isinstance(item, dict) and item.get("status") == "DRAFT_REVIEW_NOTE":
                records.append(item)
        return records

    def append(self, payload: dict[str, Any]) -> dict[str, Any]:
        created_at = self.clock().isoformat()
        canonical = json.dumps(payload, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
        digest = hashlib.sha256(f"{created_at}|{canonical}".encode("utf-8")).hexdigest()
        record = {
            "draft_id": f"DR-{digest[:12]}", "status": "DRAFT_REVIEW_NOTE",
            "formal_effect": False, "actor_claim_unverified": True,
            "created_at": created_at, "action_id": payload["action_id"],
            "gate": payload["gate"], "decision": payload["decision"],
            "actor_display": payload["actor_display"].strip(), "note": payload["note"].strip(),
            "audit_sha256": digest,
        }
        self.path.parent.mkdir(parents=True, exist_ok=True)
        with self._lock:
            with self.path.open("a", encoding="utf-8", newline="\n") as handle:
                handle.write(json.dumps(record, ensure_ascii=False, sort_keys=True) + "\n")
        return record


def build_live_snapshot(root: Path, store: ReviewDraftStore, as_of: date) -> dict[str, Any]:
    """Read current repository metadata and merge safe local runtime state."""
    actions = load_actions(root / "data" / "actions.csv")
    deferred = load_deferred(root / "DEFERRED_EVIDENCE_LOG.md")
    dates = json.loads((root / "data" / "project_dates.json").read_text(encoding="utf-8"))
    catalog_path = root / "data" / "control_catalog.csv"
    try:
        control_catalog = load_control_catalog_projection(catalog_path)
    except OSError:
        control_catalog = []
    snapshot = build_snapshot(actions, deferred, dates, as_of, control_catalog)
    review_path = root / "data" / "control_catalog_review.json"
    try:
        review = json.loads(review_path.read_text(encoding="utf-8"))
        review_checks = review.get("review_checks", [])
        eir_classifications = review.get("eir_classifications", [])
        legal_precheck = review.get("official_legal_precheck", {})
        snapshot["catalog_review"] = {
            "status": str(review.get("status", "UNKNOWN")),
            "source_ref": str(review.get("source_ref", "")),
            "deferred_task_id": str(review.get("deferred_task_id", "")),
            "required_gate": str(review.get("required_gate", "")),
            "protected_folder_uri": str(review.get("protected_folder_uri", "")),
            "review_form_uri": str(review.get("review_form_uri", "")),
            "pending_checks": sum(
                item.get("status") == "PENDING"
                for item in review_checks if isinstance(item, dict)
            ),
            "pending_eir_classifications": sum(
                item.get("security_class") == "TBD-HUMAN"
                for item in eir_classifications if isinstance(item, dict)
            ),
            "legal_precheck_status": str(
                legal_precheck.get("status", "NOT_AVAILABLE")
            ),
            "official_control_count": int(
                legal_precheck.get("official_control_count", 0)
            ),
            "identifier_match_count": int(
                legal_precheck.get("identifier_match_count", 0)
            ),
            "title_match_count": int(
                legal_precheck.get("title_match_count", 0)
            ),
            "applicability_match_count": int(
                legal_precheck.get("applicability_match_count", 0)
            ),
            "text_review_required_count": int(
                legal_precheck.get("high_similarity_requirement_count", 0)
            ) + int(legal_precheck.get("text_difference_requirement_count", 0)),
            "amended_controls": list(
                legal_precheck.get("amended_controls", [])
            ),
            "formal_effect": False,
        }
        snapshot["summary"]["catalog_review_status"] = snapshot["catalog_review"]["status"]
        snapshot["summary"]["catalog_pending_checks"] = snapshot["catalog_review"]["pending_checks"]
        snapshot["summary"]["catalog_pending_eir_classifications"] = (
            snapshot["catalog_review"]["pending_eir_classifications"]
        )
    except (OSError, ValueError, json.JSONDecodeError):
        snapshot["catalog_review"] = {
            "status": "ERROR_FAIL_CLOSED",
            "source_ref": "SRC-009",
            "deferred_task_id": "DEF-036",
            "required_gate": "G1_DOMAIN_REVIEW",
            "protected_folder_uri": "",
            "review_form_uri": "",
            "pending_checks": 0,
            "pending_eir_classifications": 0,
            "legal_precheck_status": "ERROR_FAIL_CLOSED",
            "official_control_count": 0,
            "identifier_match_count": 0,
            "title_match_count": 0,
            "applicability_match_count": 0,
            "text_review_required_count": 0,
            "amended_controls": [],
            "formal_effect": False,
        }
        snapshot["summary"]["catalog_review_status"] = "ERROR_FAIL_CLOSED"
    snapshot["review_drafts"] = store.load()
    try:
        sharepoint_tasks, integration = load_sharepoint_projection(root, deferred)
    except (OSError, ValueError, json.JSONDecodeError):
        sharepoint_tasks = []
        integration = {
            "status": "ERROR_FAIL_CLOSED",
            "network_allowed": False,
            "write_back_allowed": False,
            "formal_effect": False,
        }
    snapshot["sharepoint_tasks"] = sharepoint_tasks
    snapshot["sharepoint_integration"] = integration
    linked_tasks = sum(bool(item.get("evidence_url")) for item in sharepoint_tasks)
    snapshot["summary"]["linked_human_tasks"] = linked_tasks
    snapshot["summary"]["unlinked_human_tasks"] = len(sharepoint_tasks) - linked_tasks
    readiness_path = root / "config" / "sharepoint_graph_readiness.json"
    try:
        readiness_data = json.loads(readiness_path.read_text(encoding="utf-8"))
        readiness_result = validate_sharepoint_graph_readiness(readiness_data, readiness_path)
        snapshot["sharepoint_live_readiness"] = readiness_summary(
            readiness_data, readiness_result
        )
    except (OSError, ValueError, json.JSONDecodeError):
        snapshot["sharepoint_live_readiness"] = {
            "status": "ERROR_FAIL_CLOSED",
            "pending_gates": [],
            "hard_errors": 1,
            "warnings": 0,
            "network_allowed": False,
            "token_acquisition_allowed": False,
            "write_back_allowed": False,
            "formal_effect": False,
        }
    auth_path = root / "config" / "portal_auth_policy.json"
    try:
        auth_data = json.loads(auth_path.read_text(encoding="utf-8"))
        auth_result = validate_portal_auth_policy(auth_data, auth_path)
        snapshot["portal_auth_readiness"] = auth_readiness_summary(
            auth_data, auth_result
        )
    except (OSError, ValueError, json.JSONDecodeError):
        snapshot["portal_auth_readiness"] = {
            "status": "ERROR_FAIL_CLOSED",
            "pending_gates": [],
            "hard_errors": 1,
            "warnings": 0,
            "authentication_enabled": False,
            "network_allowed": False,
            "formal_effect": False,
        }
    h002_path = root / "generated" / "h002_agent_pilot_output.json"
    legacy_path = root / "generated" / "continuous_assurance_pilot_output.json"
    pilot_path = h002_path if h002_path.exists() else legacy_path
    if pilot_path.exists():
        pilot = json.loads(pilot_path.read_text(encoding="utf-8"))
        snapshot["agent_pilot"] = {
            "status": pilot.get("run_status", pilot.get("status", "UNKNOWN")),
            "pilot_id": pilot.get("job_id", pilot.get("pilot_id", "")),
            "proposals": pilot.get("proposals", []), "metrics": pilot.get("metrics", {}),
            "formal_effect": pilot.get("formal_effect", False),
        }
    else:
        snapshot["agent_pilot"] = {"status": "NOT_AVAILABLE", "pilot_id": "", "proposals": [], "metrics": {}}
    return snapshot
