"""Preflight reconciliation proposals without mutating the action registry."""

from __future__ import annotations

from datetime import date, datetime
import hashlib
import json
from pathlib import Path
import re
from typing import Any
from urllib.parse import urlparse

from .deadline_reconciliation import ALLOWED_OUTCOMES
from .reconciliation_changeset import ALLOWED_DECISIONS, FORBIDDEN_AUTOMATIC_ACTIONS
from .registry import Action


ALLOWED_PROPOSED_STATUSES = {"NEW", "IN_PROGRESS"}
CHANGESET_FIELDS = {
    "schema_version",
    "status",
    "as_of",
    "source_refs",
    "formal_effect",
    "summary",
    "records",
    "required_human_gate",
    "forbidden_automatic_actions",
}
CHANGESET_RECORD_FIELDS = {
    "action_id",
    "registered_snapshot",
    "selected_draft_id",
    "selected_draft_sha256",
    "source_outcome",
    "review_decision",
    "reviewer",
    "reviewed_at",
    "decision_ref",
    "review_note",
    "required_gates",
    "proposed_update",
    "apply_allowed",
}
PROPOSED_UPDATE_FIELDS = {
    "status",
    "target_date",
    "evidence_uri",
    "evidence_sha256",
    "completion_allowed",
    "evidence_acceptance_allowed",
}
SHA256_PATTERN = re.compile(r"^[0-9a-f]{64}$")


def _protected_sharepoint_uri(value: str) -> bool:
    parsed = urlparse(value)
    return (
        parsed.scheme == "https"
        and parsed.hostname == "metalcom.sharepoint.com"
        and parsed.path.startswith("/sites/NIS2/")
    )


def _valid_timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value)
    except ValueError:
        return False
    return parsed.tzinfo is not None


def _action_fingerprint(action: Action) -> str:
    baseline = {
        "action_id": action.action_id,
        "status": action.status,
        "target_date": action.target_date,
        "human_owner": action.human_owner,
        "human_approver": action.human_approver,
        "required_gates": list(action.gates),
    }
    canonical = json.dumps(
        baseline,
        ensure_ascii=False,
        sort_keys=True,
        separators=(",", ":"),
    )
    return hashlib.sha256(canonical.encode("utf-8")).hexdigest()


def _validate_header(package: dict[str, Any]) -> list[dict[str, Any]]:
    if set(package) != CHANGESET_FIELDS:
        raise ValueError("A változásjavaslat felső szintű mezőkészlete eltér a sémától.")
    if package.get("schema_version") != "1.0":
        raise ValueError("A változásjavaslat schema_version értéke nem 1.0.")
    if package.get("status") != "PROPOSAL_PENDING_CONTROLLED_APPLICATION":
        raise ValueError("A változásjavaslat státusza nem engedélyezett.")
    if package.get("formal_effect") is not False:
        raise ValueError("A változásjavaslat formal_effect=false értéke kötelező.")
    if package.get("forbidden_automatic_actions") != FORBIDDEN_AUTOMATIC_ACTIONS:
        raise ValueError("A változásjavaslat automatikus műveleti korlátai eltérnek.")
    try:
        date.fromisoformat(str(package.get("as_of", "")))
    except ValueError as exc:
        raise ValueError("A változásjavaslat as_of mezője nem ISO-dátum.") from exc
    records = package.get("records")
    if not isinstance(records, list):
        raise ValueError("A változásjavaslat records mezője nem lista.")
    if package.get("required_human_gate") != (
        "CONTROLLED_REGISTRY_UPDATE_AND_EVIDENCE_REVIEW"
    ):
        raise ValueError("A változásjavaslat emberi kapuja eltér.")
    if not isinstance(package.get("source_refs"), list):
        raise ValueError("A változásjavaslat source_refs mezője nem lista.")
    decisions = [
        item.get("review_decision")
        for item in records
        if isinstance(item, dict)
    ]
    expected_summary = {
        "decision_count": len(records),
        "accepted_count": decisions.count("ACCEPT"),
        "pending_count": decisions.count("PENDING_HUMAN"),
        "returned_count": decisions.count("RETURN"),
        "rejected_count": decisions.count("REJECT"),
    }
    if package.get("summary") != expected_summary:
        raise ValueError("A változásjavaslat összesítése eltér a rekordoktól.")
    return records


def _validate_record(
    record: dict[str, Any],
    action: Action,
) -> None:
    action_id = action.action_id
    if set(record) != CHANGESET_RECORD_FIELDS:
        raise ValueError(f"A változásjavaslat rekordmezői eltérnek: {action_id}.")
    snapshot = record.get("registered_snapshot")
    if snapshot != {
        "status": action.status,
        "target_date": action.target_date,
        "owner": action.human_owner,
        "approver": action.human_approver,
    }:
        raise ValueError(
            f"Az akció nyilvántartása megváltozott a review óta: {action_id}."
        )
    if record.get("required_gates") != list(action.gates):
        raise ValueError(f"Az akció emberi kapui megváltoztak: {action_id}.")
    if record.get("apply_allowed") is not False:
        raise ValueError(f"Az apply_allowed=false kötelező: {action_id}.")
    if not SHA256_PATTERN.fullmatch(str(record.get("selected_draft_sha256", ""))):
        raise ValueError(f"Érvénytelen tervezethash: {action_id}.")
    decision = record.get("review_decision")
    if decision not in ALLOWED_DECISIONS:
        raise ValueError(f"Ismeretlen review-döntés: {action_id}.")
    update = record.get("proposed_update")
    if decision != "ACCEPT":
        if update is not None:
            raise ValueError(
                f"Nem elfogadott review nem tartalmazhat módosításjavaslatot: {action_id}."
            )
        return
    if not str(record.get("reviewer", "")).strip():
        raise ValueError(f"Hiányzó reviewer: {action_id}.")
    if not _valid_timestamp(str(record.get("reviewed_at", ""))):
        raise ValueError(f"Érvénytelen reviewer-időpont: {action_id}.")
    if not _protected_sharepoint_uri(str(record.get("decision_ref", ""))):
        raise ValueError(f"Érvénytelen védett döntési hivatkozás: {action_id}.")
    if not isinstance(update, dict) or set(update) != PROPOSED_UPDATE_FIELDS:
        raise ValueError(f"Hibás módosításjavaslat-séma: {action_id}.")
    outcome = str(record.get("source_outcome", ""))
    if outcome not in ALLOWED_OUTCOMES or outcome == "PENDING_HUMAN":
        raise ValueError(f"Érvénytelen forrásjavaslat: {action_id}.")
    expected_status = (
        "NEW"
        if outcome == "NOT_STARTED"
        else action.status
        if outcome == "RESCHEDULE_REQUESTED"
        else "IN_PROGRESS"
    )
    if update.get("status") != expected_status:
        raise ValueError(f"A javasolt státusz nem következik a forrásjavaslatból: {action_id}.")
    if update.get("status") not in ALLOWED_PROPOSED_STATUSES:
        raise ValueError(f"Tiltott javasolt státusz: {action_id}.")
    if update.get("completion_allowed") is not False:
        raise ValueError(f"Automatikus lezárás nem engedélyezett: {action_id}.")
    if update.get("evidence_acceptance_allowed") is not False:
        raise ValueError(f"Automatikus evidenciaelfogadás nem engedélyezett: {action_id}.")
    target_date = str(update.get("target_date", ""))
    if bool(target_date) != (outcome == "RESCHEDULE_REQUESTED"):
        raise ValueError(f"A javasolt céldátum nem illeszkedik a forrásjavaslathoz: {action_id}.")
    if target_date:
        try:
            date.fromisoformat(target_date)
        except ValueError as exc:
            raise ValueError(f"Érvénytelen javasolt céldátum: {action_id}.") from exc
    evidence_uri = str(update.get("evidence_uri", ""))
    evidence_sha256 = str(update.get("evidence_sha256", ""))
    if bool(evidence_uri) != (outcome == "COMPLETED_READY_FOR_REVIEW"):
        raise ValueError(f"Az evidenciahivatkozás nem illeszkedik a forrásjavaslathoz: {action_id}.")
    if bool(evidence_uri) != bool(evidence_sha256):
        raise ValueError(f"Az evidencia URI/hash pár hiányos: {action_id}.")
    if evidence_uri and (
        not _protected_sharepoint_uri(evidence_uri)
        or not SHA256_PATTERN.fullmatch(evidence_sha256)
    ):
        raise ValueError(f"Az evidencia URI/hash pár érvénytelen: {action_id}.")


def build_reconciliation_application_preflight(
    package: dict[str, Any],
    actions: list[Action],
) -> dict[str, Any]:
    """Create a manual application checklist after fail-closed stale checks."""
    records = _validate_header(package)
    actions_by_id = {action.action_id: action for action in actions}
    seen: set[str] = set()
    checklist: list[dict[str, Any]] = []
    for index, record in enumerate(records, start=1):
        if not isinstance(record, dict):
            raise ValueError(f"A változásjavaslat {index}. rekordja nem objektum.")
        action_id = str(record.get("action_id", ""))
        if action_id in seen:
            raise ValueError(f"Duplikált változásjavaslat-rekord: {action_id}.")
        seen.add(action_id)
        action = actions_by_id.get(action_id)
        if action is None:
            raise ValueError(f"Ismeretlen akció a változásjavaslatban: {action_id}.")
        _validate_record(record, action)
        if record["review_decision"] != "ACCEPT":
            continue
        update = record["proposed_update"]
        fields_to_change: list[dict[str, str]] = []
        if update["status"] != action.status:
            fields_to_change.append({
                "field": "status",
                "from": action.status,
                "to": update["status"],
            })
        if update["target_date"] and update["target_date"] != action.target_date:
            fields_to_change.append({
                "field": "target_date",
                "from": action.target_date,
                "to": update["target_date"],
            })
        checklist.append({
            "action_id": action_id,
            "source_row": action.row_number,
            "current_action_sha256": _action_fingerprint(action),
            "decision_ref": record["decision_ref"],
            "reviewer": record["reviewer"],
            "reviewed_at": record["reviewed_at"],
            "fields_to_change": fields_to_change,
            "registry_change_required": bool(fields_to_change),
            "evidence_review_required": bool(update["evidence_uri"]),
            "evidence_uri": update["evidence_uri"],
            "evidence_sha256": update["evidence_sha256"],
            "manual_application_only": True,
        })
    return {
        "schema_version": "1.0",
        "status": "PREFLIGHT_READY_FOR_MANUAL_APPLICATION",
        "as_of": package["as_of"],
        "formal_effect": False,
        "source_refs": [*package.get("source_refs", []), "data/actions.csv"],
        "summary": {
            "accepted_record_count": len(checklist),
            "registry_change_count": sum(
                item["registry_change_required"] for item in checklist
            ),
            "no_registry_change_count": sum(
                not item["registry_change_required"] for item in checklist
            ),
            "evidence_review_count": sum(
                item["evidence_review_required"] for item in checklist
            ),
        },
        "checklist": checklist,
        "required_human_gate": "MANUAL_REGISTRY_UPDATE_AND_POST_CHANGE_VALIDATION",
        "forbidden_automatic_actions": list(FORBIDDEN_AUTOMATIC_ACTIONS),
    }


def render_reconciliation_application_preflight(data: dict[str, Any]) -> str:
    """Render the non-executing checklist for a human registry maintainer."""
    summary = data["summary"]
    lines = [
        "# Egyeztetési változások kézi átvezetési preflightja",
        "",
        f"- Állapot dátuma: `{data['as_of']}`",
        f"- Elfogadott döntési rekord: **{summary['accepted_record_count']}**",
        f"- Registry-módosítást igényel: **{summary['registry_change_count']}**",
        f"- Registry-módosítást nem igényel: **{summary['no_registry_change_count']}**",
        f"- Külön evidencia-review szükséges: **{summary['evidence_review_count']}**",
        "- Formális hatás: **nincs**",
        "",
    ]
    for item in data["checklist"]:
        lines.extend([
            f"## {item['action_id']}",
            "",
            f"- `actions.csv` forrássor: {item['source_row']}",
            f"- Aktuális rekord hash: `{item['current_action_sha256']}`",
            f"- Döntési hivatkozás: `{item['decision_ref']}`",
        ])
        if item["fields_to_change"]:
            lines.extend([
                "",
                "| Mező | Jelenlegi | Javasolt |",
                "|---|---|---|",
            ])
            for change in item["fields_to_change"]:
                lines.append(
                    f"| {change['field']} | {change['from']} | {change['to']} |"
                )
        else:
            lines.append("- Nincs átvezetendő `status` vagy `target_date` változás.")
        if item["evidence_review_required"]:
            lines.extend([
                f"- Külön ellenőrzendő evidencia: `{item['evidence_uri']}`",
                f"- Evidencia SHA-256: `{item['evidence_sha256']}`",
            ])
        lines.append("")
    lines.extend([
        "## Kötelező kézi sorrend",
        "",
        "1. Ellenőrizd a védett döntési rekordot és szükség esetén az evidenciát.",
        "2. Ellenőrizd újra az akció pillanatképének SHA-256 értékét.",
        "3. Vezesd át kizárólag a felsorolt mezőket emberi művelettel.",
        "4. Futtasd a teljes harness-validációt és rögzítsd a változás review-nyomát.",
        "",
        "Ez a preflight nem módosít fájlt, nem fogad el evidenciát és nem zár le akciót.",
        "",
    ])
    return "\n".join(lines)


def write_reconciliation_application_preflight(
    data: dict[str, Any],
    json_path: Path,
    markdown_path: Path,
) -> None:
    """Write deterministic local preflight artifacts."""
    json_path.parent.mkdir(parents=True, exist_ok=True)
    markdown_path.parent.mkdir(parents=True, exist_ok=True)
    json_path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )
    markdown_path.write_text(
        render_reconciliation_application_preflight(data),
        encoding="utf-8",
        newline="\n",
    )
