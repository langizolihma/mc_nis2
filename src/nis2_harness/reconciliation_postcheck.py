"""Verify a manual reconciliation registry update without accepting evidence."""

from __future__ import annotations

from datetime import date
import json
from pathlib import Path
import re
from typing import Any

from .reconciliation_changeset import FORBIDDEN_AUTOMATIC_ACTIONS
from .reconciliation_preflight import action_fingerprint
from .registry import Action


SHA256_PATTERN = re.compile(r"^[0-9a-f]{64}$")
PREFLIGHT_FIELDS = {
    "schema_version",
    "status",
    "as_of",
    "formal_effect",
    "source_refs",
    "summary",
    "checklist",
    "required_human_gate",
    "forbidden_automatic_actions",
}
CHECKLIST_FIELDS = {
    "action_id",
    "source_row",
    "current_action_sha256",
    "expected_post_action_sha256",
    "decision_ref",
    "reviewer",
    "reviewed_at",
    "fields_to_change",
    "registry_change_required",
    "evidence_review_required",
    "evidence_uri",
    "evidence_sha256",
    "manual_application_only",
}


def _validate_preflight(preflight: dict[str, Any]) -> list[dict[str, Any]]:
    if set(preflight) != PREFLIGHT_FIELDS:
        raise ValueError("A preflight felső szintű mezőkészlete eltér a sémától.")
    if preflight.get("schema_version") != "1.0":
        raise ValueError("A preflight schema_version értéke nem 1.0.")
    if preflight.get("status") != "PREFLIGHT_READY_FOR_MANUAL_APPLICATION":
        raise ValueError("A preflight státusza nem engedélyezett.")
    if preflight.get("formal_effect") is not False:
        raise ValueError("A preflight formal_effect=false értéke kötelező.")
    if preflight.get("required_human_gate") != (
        "MANUAL_REGISTRY_UPDATE_AND_POST_CHANGE_VALIDATION"
    ):
        raise ValueError("A preflight emberi kapuja eltér.")
    if preflight.get("forbidden_automatic_actions") != FORBIDDEN_AUTOMATIC_ACTIONS:
        raise ValueError("A preflight automatikus műveleti korlátai eltérnek.")
    try:
        date.fromisoformat(str(preflight.get("as_of", "")))
    except ValueError as exc:
        raise ValueError("A preflight as_of mezője nem ISO-dátum.") from exc
    checklist = preflight.get("checklist")
    if not isinstance(checklist, list):
        raise ValueError("A preflight checklist mezője nem lista.")
    expected_summary = {
        "accepted_record_count": len(checklist),
        "registry_change_count": sum(
            isinstance(item, dict) and item.get("registry_change_required") is True
            for item in checklist
        ),
        "no_registry_change_count": sum(
            isinstance(item, dict) and item.get("registry_change_required") is False
            for item in checklist
        ),
        "evidence_review_count": sum(
            isinstance(item, dict) and item.get("evidence_review_required") is True
            for item in checklist
        ),
    }
    if preflight.get("summary") != expected_summary:
        raise ValueError("A preflight összesítése eltér a checklisttől.")
    return checklist


def verify_reconciliation_application(
    preflight: dict[str, Any],
    actions: list[Action],
) -> dict[str, Any]:
    """Compare the current registry with pre- and post-change fingerprints."""
    checklist = _validate_preflight(preflight)
    actions_by_id = {action.action_id: action for action in actions}
    seen: set[str] = set()
    records: list[dict[str, Any]] = []
    for index, item in enumerate(checklist, start=1):
        if not isinstance(item, dict) or set(item) != CHECKLIST_FIELDS:
            raise ValueError(f"A preflight {index}. checklist-rekordja eltér a sémától.")
        action_id = str(item.get("action_id", ""))
        if action_id in seen:
            raise ValueError(f"Duplikált preflight-akció: {action_id}.")
        seen.add(action_id)
        action = actions_by_id.get(action_id)
        if action is None:
            raise ValueError(f"Az akció hiányzik az aktuális registryből: {action_id}.")
        before = str(item.get("current_action_sha256", ""))
        expected = str(item.get("expected_post_action_sha256", ""))
        if not SHA256_PATTERN.fullmatch(before) or not SHA256_PATTERN.fullmatch(expected):
            raise ValueError(f"Érvénytelen pre/post akcióhash: {action_id}.")
        if item.get("manual_application_only") is not True:
            raise ValueError(f"A manual_application_only=true kötelező: {action_id}.")
        changes = item.get("fields_to_change")
        if not isinstance(changes, list):
            raise ValueError(f"A fields_to_change mező nem lista: {action_id}.")
        allowed_fields = {"status", "target_date"}
        if any(
            not isinstance(change, dict)
            or set(change) != {"field", "from", "to"}
            or change.get("field") not in allowed_fields
            or change.get("to") == "DONE"
            for change in changes
        ):
            raise ValueError(f"Tiltott vagy hibás mezőmódosítás: {action_id}.")
        if bool(changes) != (item.get("registry_change_required") is True):
            raise ValueError(f"A registry_change_required jelző eltér: {action_id}.")
        current = action_fingerprint(action)
        if not changes:
            if current != before or current != expected:
                raise ValueError(f"Nem várt registry-eltérés történt: {action_id}.")
            application_status = "NO_REGISTRY_CHANGE_REQUIRED"
        elif current == expected:
            application_status = "MANUAL_REGISTRY_CHANGE_VERIFIED"
        elif current == before:
            application_status = "PENDING_MANUAL_REGISTRY_CHANGE"
        else:
            raise ValueError(
                f"A registry sem a preflight előtti, sem a várt utáni állapottal nem egyezik: {action_id}."
            )
        records.append({
            "action_id": action_id,
            "application_status": application_status,
            "current_action_sha256": current,
            "expected_post_action_sha256": expected,
            "decision_ref": item["decision_ref"],
            "evidence_review_status": (
                "PENDING_SEPARATE_HUMAN_REVIEW"
                if item["evidence_review_required"]
                else "NOT_REQUIRED_BY_THIS_CHANGE"
            ),
            "formal_effect": False,
        })
    pending = sum(
        item["application_status"] == "PENDING_MANUAL_REGISTRY_CHANGE"
        for item in records
    )
    return {
        "schema_version": "1.0",
        "status": (
            "PENDING_MANUAL_APPLICATION"
            if pending
            else "REGISTRY_APPLICATION_VERIFIED_EVIDENCE_UNCHANGED"
        ),
        "as_of": preflight["as_of"],
        "formal_effect": False,
        "summary": {
            "record_count": len(records),
            "verified_change_count": sum(
                item["application_status"] == "MANUAL_REGISTRY_CHANGE_VERIFIED"
                for item in records
            ),
            "pending_change_count": pending,
            "no_change_required_count": sum(
                item["application_status"] == "NO_REGISTRY_CHANGE_REQUIRED"
                for item in records
            ),
            "pending_evidence_review_count": sum(
                item["evidence_review_status"] == "PENDING_SEPARATE_HUMAN_REVIEW"
                for item in records
            ),
        },
        "records": records,
        "required_human_gate": "POST_CHANGE_REVIEW_AND_EVIDENCE_REVIEW",
        "forbidden_automatic_actions": list(FORBIDDEN_AUTOMATIC_ACTIONS),
    }


def render_reconciliation_application_verification(data: dict[str, Any]) -> str:
    """Render an audit-friendly result without claiming evidence acceptance."""
    summary = data["summary"]
    lines = [
        "# Egyeztetési registry-átvezetés utóellenőrzése",
        "",
        f"- Állapot: `{data['status']}`",
        f"- Ellenőrzött rekord: **{summary['record_count']}**",
        f"- Igazolt kézi módosítás: **{summary['verified_change_count']}**",
        f"- Még átvezetendő: **{summary['pending_change_count']}**",
        f"- Registry-változást nem igényelt: **{summary['no_change_required_count']}**",
        f"- Külön evidencia-review-ra vár: **{summary['pending_evidence_review_count']}**",
        "- Formális hatás: **nincs**",
        "",
        "| Akció | Registry-ellenőrzés | Evidencia-review |",
        "|---|---|---|",
    ]
    for item in data["records"]:
        lines.append(
            f"| {item['action_id']} | {item['application_status']} | "
            f"{item['evidence_review_status']} |"
        )
    lines.extend([
        "",
        "Az ellenőrzés kizárólag a registry kézi átvezetését vizsgálja. "
        "Evidenciát nem fogad el és akciót nem zár le.",
        "",
    ])
    return "\n".join(lines)


def write_reconciliation_application_verification(
    data: dict[str, Any],
    json_path: Path,
    markdown_path: Path,
) -> None:
    """Write deterministic local verification outputs."""
    json_path.parent.mkdir(parents=True, exist_ok=True)
    markdown_path.parent.mkdir(parents=True, exist_ok=True)
    json_path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )
    markdown_path.write_text(
        render_reconciliation_application_verification(data),
        encoding="utf-8",
        newline="\n",
    )
