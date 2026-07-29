"""Validate human review claims and build a proposal-only action changeset."""

from __future__ import annotations

from datetime import datetime
import json
from pathlib import Path
import re
from typing import Any
from urllib.parse import urlparse


ALLOWED_DECISIONS = ("PENDING_HUMAN", "ACCEPT", "RETURN", "REJECT")
SHA256_PATTERN = re.compile(r"^[0-9a-f]{64}$")
FORBIDDEN_AUTOMATIC_ACTIONS = [
    "apply_changeset",
    "change_action_status",
    "change_target_date",
    "accept_evidence",
    "close_action",
    "submit_external",
    "change_production",
    "purchase",
]
DECISION_TOP_LEVEL_FIELDS = {
    "schema_version",
    "status",
    "review_package_as_of",
    "formal_effect",
    "records",
    "allowed_decisions",
    "forbidden_automatic_actions",
}
DECISION_RECORD_FIELDS = {
    "action_id",
    "selected_draft_id",
    "selected_draft_sha256",
    "decision",
    "reviewer",
    "reviewed_at",
    "decision_ref",
    "review_note",
}


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


def _review_records(review_package: dict[str, Any]) -> list[dict[str, Any]]:
    if review_package.get("schema_version") != "1.0":
        raise ValueError("A review-csomag schema_version értéke nem 1.0.")
    if review_package.get("status") != "PROPOSAL_PENDING_HUMAN_REVIEW":
        raise ValueError("A review-csomag nem emberi review-ra váró proposal.")
    if review_package.get("formal_effect") is not False:
        raise ValueError("A review-csomag formal_effect=false értéke kötelező.")
    records = review_package.get("records")
    if not isinstance(records, list):
        raise ValueError("A review-csomag records mezője nem lista.")
    action_ids = [
        str(item.get("action_id", ""))
        for item in records
        if isinstance(item, dict)
    ]
    if len(action_ids) != len(records) or len(set(action_ids)) != len(action_ids):
        raise ValueError("A review-csomag hibás vagy duplikált akcióazonosítót tartalmaz.")
    return records


def build_reconciliation_decision_template(
    review_package: dict[str, Any],
) -> dict[str, Any]:
    """Build a deterministic local template without claiming a formal decision."""
    records = _review_records(review_package)
    return {
        "schema_version": "1.0",
        "status": "REVIEW_DECISION_CLAIMS_PENDING_HUMAN",
        "review_package_as_of": review_package["as_of"],
        "formal_effect": False,
        "records": [
            {
                "action_id": item["action_id"],
                "selected_draft_id": (
                    item["latest_draft"]["draft_id"]
                    if item.get("latest_draft")
                    else ""
                ),
                "selected_draft_sha256": (
                    item["latest_draft"]["audit_sha256"]
                    if item.get("latest_draft")
                    else ""
                ),
                "decision": "PENDING_HUMAN",
                "reviewer": "",
                "reviewed_at": "",
                "decision_ref": "",
                "review_note": "",
            }
            for item in records
            if item.get("latest_draft")
        ],
        "allowed_decisions": list(ALLOWED_DECISIONS),
        "forbidden_automatic_actions": list(FORBIDDEN_AUTOMATIC_ACTIONS),
    }


def _validate_decisions_header(
    decisions: dict[str, Any],
    review_package: dict[str, Any],
) -> list[dict[str, Any]]:
    if set(decisions) != DECISION_TOP_LEVEL_FIELDS:
        raise ValueError("A döntési fájl felső szintű mezőkészlete eltér a sémától.")
    if decisions.get("schema_version") != "1.0":
        raise ValueError("A döntési fájl schema_version értéke nem 1.0.")
    if decisions.get("status") != "REVIEW_DECISION_CLAIMS_PENDING_HUMAN":
        raise ValueError("A döntési fájl státusza nem engedélyezett.")
    if decisions.get("review_package_as_of") != review_package.get("as_of"):
        raise ValueError("A döntési fájl más review-csomag állapotdátumára hivatkozik.")
    if decisions.get("formal_effect") is not False:
        raise ValueError("A döntési fájl formal_effect=false értéke kötelező.")
    if decisions.get("allowed_decisions") != list(ALLOWED_DECISIONS):
        raise ValueError("A döntési értékkészlet eltér az engedélyezettől.")
    if decisions.get("forbidden_automatic_actions") != FORBIDDEN_AUTOMATIC_ACTIONS:
        raise ValueError("A döntési fájl automatikus műveleti korlátai eltérnek.")
    records = decisions.get("records")
    if not isinstance(records, list):
        raise ValueError("A döntési fájl records mezője nem lista.")
    return records


def _proposed_update(
    latest: dict[str, Any],
    review: dict[str, Any],
) -> dict[str, Any]:
    outcome = str(latest["outcome"])
    status = (
        "NEW"
        if outcome == "NOT_STARTED"
        else str(review["registered_status"])
        if outcome == "RESCHEDULE_REQUESTED"
        else "IN_PROGRESS"
    )
    return {
        "status": status,
        "target_date": (
            latest["proposed_new_target_date"]
            if outcome == "RESCHEDULE_REQUESTED"
            else ""
        ),
        "evidence_uri": (
            latest["evidence_uri"]
            if outcome == "COMPLETED_READY_FOR_REVIEW"
            else ""
        ),
        "evidence_sha256": (
            latest["evidence_sha256"]
            if outcome == "COMPLETED_READY_FOR_REVIEW"
            else ""
        ),
        "completion_allowed": False,
        "evidence_acceptance_allowed": False,
    }


def build_reconciliation_change_proposal(
    review_package: dict[str, Any],
    decisions: dict[str, Any],
) -> dict[str, Any]:
    """Validate review claims and translate accepted drafts into a safe proposal."""
    review_records = _review_records(review_package)
    decision_records = _validate_decisions_header(decisions, review_package)
    review_by_id = {str(item["action_id"]): item for item in review_records}
    seen: set[str] = set()
    output_records: list[dict[str, Any]] = []
    for index, decision in enumerate(decision_records, start=1):
        if not isinstance(decision, dict):
            raise ValueError(f"A döntési fájl {index}. rekordja nem objektum.")
        if set(decision) != DECISION_RECORD_FIELDS:
            raise ValueError(
                f"A döntési fájl {index}. rekordjának mezőkészlete eltér a sémától."
            )
        action_id = str(decision.get("action_id", ""))
        if action_id in seen:
            raise ValueError(f"Duplikált döntési rekord: {action_id}.")
        seen.add(action_id)
        review = review_by_id.get(action_id)
        if review is None or review.get("latest_draft") is None:
            raise ValueError(f"Nincs review-tervezet a döntési rekordhoz: {action_id}.")
        latest = review["latest_draft"]
        if decision.get("selected_draft_id") != latest["draft_id"]:
            raise ValueError(f"A kiválasztott tervezet nem a legfrissebb: {action_id}.")
        if decision.get("selected_draft_sha256") != latest["audit_sha256"]:
            raise ValueError(f"A kiválasztott tervezet hash-e eltér: {action_id}.")
        if not SHA256_PATTERN.fullmatch(str(decision["selected_draft_sha256"])):
            raise ValueError(f"Érvénytelen tervezethash: {action_id}.")
        review_decision = str(decision.get("decision", ""))
        if review_decision not in ALLOWED_DECISIONS:
            raise ValueError(f"Ismeretlen review-döntés: {action_id}.")
        if review_decision == "PENDING_HUMAN":
            if any(
                str(decision.get(field, "")).strip()
                for field in ("reviewer", "reviewed_at", "decision_ref", "review_note")
            ):
                raise ValueError(
                    f"A függő döntés nem tartalmazhat review-adatot: {action_id}."
                )
        else:
            for field in ("reviewer", "reviewed_at", "decision_ref"):
                if not str(decision.get(field, "")).strip():
                    raise ValueError(f"Hiányzó kötelező review-mező ({field}): {action_id}.")
            if not _valid_timestamp(str(decision["reviewed_at"])):
                raise ValueError(f"A review-idő nem időzónás ISO-8601 érték: {action_id}.")
            if not _protected_sharepoint_uri(str(decision["decision_ref"])):
                raise ValueError(f"A döntési hivatkozás nem védett NIS2 SharePoint URI: {action_id}.")
            if review_decision in {"RETURN", "REJECT"} and not str(
                decision.get("review_note", "")
            ).strip():
                raise ValueError(f"Visszaküldéshez vagy elutasításhoz indoklás kell: {action_id}.")
        if review_decision == "ACCEPT" and review.get("conflict") is True:
            raise ValueError(
                f"Ellentmondásos tervezet nem fogadható el új egységes tervezet nélkül: {action_id}."
            )
        output_records.append({
            "action_id": action_id,
            "registered_snapshot": {
                "status": review["registered_status"],
                "target_date": review["registered_target_date"],
                "owner": review["owner"],
                "approver": review["approver"],
            },
            "selected_draft_id": latest["draft_id"],
            "selected_draft_sha256": latest["audit_sha256"],
            "source_outcome": latest["outcome"],
            "review_decision": review_decision,
            "reviewer": str(decision.get("reviewer", "")).strip(),
            "reviewed_at": str(decision.get("reviewed_at", "")).strip(),
            "decision_ref": str(decision.get("decision_ref", "")).strip(),
            "review_note": str(decision.get("review_note", "")).strip(),
            "required_gates": list(review["required_gates"]),
            "proposed_update": (
                _proposed_update(latest, review)
                if review_decision == "ACCEPT"
                else None
            ),
            "apply_allowed": False,
        })
    return {
        "schema_version": "1.0",
        "status": "PROPOSAL_PENDING_CONTROLLED_APPLICATION",
        "as_of": review_package["as_of"],
        "source_refs": list(review_package.get("source_refs", [])),
        "formal_effect": False,
        "summary": {
            "decision_count": len(output_records),
            "accepted_count": sum(
                item["review_decision"] == "ACCEPT" for item in output_records
            ),
            "pending_count": sum(
                item["review_decision"] == "PENDING_HUMAN"
                for item in output_records
            ),
            "returned_count": sum(
                item["review_decision"] == "RETURN" for item in output_records
            ),
            "rejected_count": sum(
                item["review_decision"] == "REJECT" for item in output_records
            ),
        },
        "records": sorted(output_records, key=lambda item: item["action_id"]),
        "required_human_gate": "CONTROLLED_REGISTRY_UPDATE_AND_EVIDENCE_REVIEW",
        "forbidden_automatic_actions": list(FORBIDDEN_AUTOMATIC_ACTIONS),
    }


def render_reconciliation_change_proposal(package: dict[str, Any]) -> str:
    """Render the proposed changes without presenting them as applied facts."""
    summary = package["summary"]
    lines = [
        "# Egyeztetési döntések változásjavaslata",
        "",
        f"- Állapot dátuma: `{package['as_of']}`",
        f"- Döntési rekordok: **{summary['decision_count']}**",
        f"- Elfogadásra jelölt: **{summary['accepted_count']}**",
        f"- Függő: **{summary['pending_count']}**",
        f"- Visszaküldött: **{summary['returned_count']}**",
        f"- Elutasított: **{summary['rejected_count']}**",
        "- Formális hatás: **nincs**",
        "",
        "| Akció | Review-döntés | Forrásjavaslat | Javasolt státusz | Javasolt céldátum |",
        "|---|---|---|---|---|",
    ]
    for item in package["records"]:
        update = item["proposed_update"] or {}
        lines.append(
            f"| {item['action_id']} | {item['review_decision']} | "
            f"{item['source_outcome']} | {update.get('status', '')} | "
            f"{update.get('target_date', '')} |"
        )
    lines.extend([
        "",
        "## Kötelező korlát",
        "",
        "A csomag nem alkalmaz változtatást. `DONE` státuszt nem javasol, evidenciát "
        "nem fogad el, és a nyilvántartás átvezetése külön emberi ellenőrzést igényel.",
        "",
    ])
    return "\n".join(lines)


def write_json(data: dict[str, Any], path: Path) -> None:
    """Write a deterministic JSON file."""
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )


def write_change_proposal(
    package: dict[str, Any],
    json_path: Path,
    markdown_path: Path,
) -> None:
    """Write deterministic JSON and Markdown proposal outputs."""
    write_json(package, json_path)
    markdown_path.parent.mkdir(parents=True, exist_ok=True)
    markdown_path.write_text(
        render_reconciliation_change_proposal(package),
        encoding="utf-8",
        newline="\n",
    )
