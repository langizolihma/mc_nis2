"""Proposal-only reconciliation of overdue NIS2 action targets."""

from __future__ import annotations

from datetime import date, datetime
import json
from pathlib import Path
import re
from typing import Any
from urllib.parse import urlparse

from .execution_brief import build_execution_items
from .registry import Action
from .validation import Issue, ValidationResult


ALLOWED_OUTCOMES = (
    "PENDING_HUMAN",
    "NOT_STARTED",
    "IN_PROGRESS",
    "COMPLETED_EVIDENCE_PENDING",
    "COMPLETED_READY_FOR_REVIEW",
    "RESCHEDULE_REQUESTED",
)
SHA256_PATTERN = re.compile(r"^[0-9a-f]{64}$")


def build_deadline_reconciliation(
    actions: list[Action], as_of: date
) -> dict[str, Any]:
    """Build a deterministic empty human-reconciliation register."""
    overdue = [
        item for item in build_execution_items(actions, as_of)
        if item["deadline_bucket"] == "OVERDUE"
    ]
    records = [{
        "action_id": item["action_id"],
        "registered_status": item["status"],
        "registered_target_date": item["target_date"],
        "days_overdue": abs(int(item["days_to_target"])),
        "owner": item["owner"],
        "approver": item["approver"],
        "required_gates": item["gates"],
        "outcome": "PENDING_HUMAN",
        "actual_progress_summary": "",
        "proposed_new_target_date": "",
        "evidence_uri": "",
        "evidence_sha256": "",
        "reviewer": "",
        "reviewed_at": "",
        "decision_ref": "",
    } for item in overdue]
    return {
        "schema_version": "1.0",
        "status": "PROPOSAL_PENDING_HUMAN_RECONCILIATION",
        "as_of": as_of.isoformat(),
        "source_refs": ["data/actions.csv", "data/project_dates.json"],
        "formal_effect": False,
        "allowed_outcomes": list(ALLOWED_OUTCOMES),
        "record_count": len(records),
        "records": records,
        "forbidden_automatic_actions": [
            "change_action_status",
            "change_target_date",
            "accept_evidence",
            "close_action",
            "submit_external",
            "change_production",
            "purchase",
        ],
    }


def _issue(severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, "data/deadline_reconciliation.json", action_id=identity)


def _valid_timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value)
    except ValueError:
        return False
    return parsed.tzinfo is not None


def _valid_protected_uri(value: str) -> bool:
    parsed = urlparse(value)
    return (
        parsed.scheme == "https"
        and parsed.hostname == "metalcom.sharepoint.com"
        and parsed.path.startswith("/sites/NIS2/")
    )


def validate_deadline_reconciliation(
    data: dict[str, Any], actions: list[Action]
) -> ValidationResult:
    """Reject silent status/date changes and incomplete human decisions."""
    issues: list[Issue] = []
    try:
        as_of = date.fromisoformat(str(data.get("as_of", "")))
    except ValueError:
        return ValidationResult((_issue(
            "ERROR", "E_DEADLINE_RECON_DATE", "érvényes as_of dátum szükséges"
        ),))
    expected = build_deadline_reconciliation(actions, as_of)
    if data.get("schema_version") != "1.0":
        issues.append(_issue("ERROR", "E_DEADLINE_RECON_SCHEMA", "schema_version 1.0 szükséges"))
    if data.get("status") != "PROPOSAL_PENDING_HUMAN_RECONCILIATION":
        issues.append(_issue("ERROR", "E_DEADLINE_RECON_STATUS", "a csomag csak proposal státuszú lehet"))
    if data.get("formal_effect") is not False:
        issues.append(_issue("ERROR", "E_DEADLINE_RECON_EFFECT", "formal_effect=false kötelező"))
    if data.get("allowed_outcomes") != list(ALLOWED_OUTCOMES):
        issues.append(_issue("ERROR", "E_DEADLINE_RECON_OUTCOMES", "az engedélyezett outcome-készlet eltér"))
    forbidden = set(data.get("forbidden_automatic_actions", []))
    if forbidden != set(expected["forbidden_automatic_actions"]):
        issues.append(_issue("ERROR", "E_DEADLINE_RECON_GUARDRAIL", "a tiltott automatikus műveletek készlete eltér"))

    records = data.get("records", [])
    if not isinstance(records, list):
        return ValidationResult(tuple(issues + [
            _issue("ERROR", "E_DEADLINE_RECON_RECORDS", "a records mező lista legyen")
        ]))
    if data.get("record_count") != len(records):
        issues.append(_issue("ERROR", "E_DEADLINE_RECON_COUNT", "record_count eltér a rekordok számától"))
    expected_by_id = {
        record["action_id"]: record for record in expected["records"]
    }
    seen: set[str] = set()
    for record in records:
        if not isinstance(record, dict):
            issues.append(_issue("ERROR", "E_DEADLINE_RECON_RECORD", "minden rekord objektum legyen"))
            continue
        action_id = str(record.get("action_id", ""))
        if action_id in seen:
            issues.append(_issue("ERROR", "E_DEADLINE_RECON_DUPLICATE", "duplikált action_id", action_id))
        seen.add(action_id)
        baseline = expected_by_id.get(action_id)
        if baseline is None:
            issues.append(_issue("ERROR", "E_DEADLINE_RECON_SCOPE", "nem lejárt vagy ismeretlen akció", action_id))
            continue
        for field in (
            "registered_status", "registered_target_date", "days_overdue",
            "owner", "approver", "required_gates",
        ):
            if record.get(field) != baseline[field]:
                issues.append(_issue(
                    "ERROR", "E_DEADLINE_RECON_SNAPSHOT",
                    f"a snapshot mező nem egyezik az actions.csv értékével: {field}",
                    action_id,
                ))
        outcome = record.get("outcome")
        if outcome not in ALLOWED_OUTCOMES:
            issues.append(_issue("ERROR", "E_DEADLINE_RECON_OUTCOME", "ismeretlen outcome", action_id))
            continue
        decision_fields = (
            "actual_progress_summary", "reviewer", "reviewed_at", "decision_ref",
        )
        if outcome == "PENDING_HUMAN":
            if any(str(record.get(field, "")).strip() for field in (
                *decision_fields, "proposed_new_target_date",
                "evidence_uri", "evidence_sha256",
            )):
                issues.append(_issue(
                    "ERROR", "E_DEADLINE_RECON_PENDING_DATA",
                    "PENDING_HUMAN rekord nem tartalmazhat látszólagos döntési adatot",
                    action_id,
                ))
            continue
        for field in decision_fields:
            if not str(record.get(field, "")).strip():
                issues.append(_issue(
                    "ERROR", "E_DEADLINE_RECON_DECISION",
                    f"emberi döntéshez kötelező mező: {field}", action_id,
                ))
        reviewed_at = str(record.get("reviewed_at", ""))
        if reviewed_at and not _valid_timestamp(reviewed_at):
            issues.append(_issue(
                "ERROR", "E_DEADLINE_RECON_TIME",
                "reviewed_at időzónás ISO-8601 időbélyeg legyen", action_id,
            ))
        if outcome == "RESCHEDULE_REQUESTED":
            try:
                proposed = date.fromisoformat(str(record.get("proposed_new_target_date", "")))
                if proposed <= as_of:
                    raise ValueError
            except ValueError:
                issues.append(_issue(
                    "ERROR", "E_DEADLINE_RECON_NEW_DATE",
                    "az új céldátum az as_of dátumnál későbbi ISO-dátum legyen",
                    action_id,
                ))
        if outcome == "COMPLETED_READY_FOR_REVIEW":
            uri = str(record.get("evidence_uri", ""))
            digest = str(record.get("evidence_sha256", ""))
            if not _valid_protected_uri(uri):
                issues.append(_issue(
                    "ERROR", "E_DEADLINE_RECON_EVIDENCE_URI",
                    "jóváhagyott NIS2 SharePoint evidencia-URI szükséges", action_id,
                ))
            if not SHA256_PATTERN.fullmatch(digest):
                issues.append(_issue(
                    "ERROR", "E_DEADLINE_RECON_EVIDENCE_HASH",
                    "érvényes kisbetűs SHA-256 szükséges", action_id,
                ))
    if seen != set(expected_by_id):
        issues.append(_issue(
            "ERROR", "E_DEADLINE_RECON_SET",
            "a rekordkészlet nem egyezik az as_of napon lejárt akciókkal",
        ))
    pending = sum(
        isinstance(record, dict) and record.get("outcome") == "PENDING_HUMAN"
        for record in records
    )
    if pending:
        issues.append(_issue(
            "WARNING", "W_DEADLINE_RECON_PENDING",
            f"{pending} lejárt akció emberi státusz-egyeztetésre vár",
        ))
    return ValidationResult(tuple(issues))


def render_deadline_reconciliation_form(data: dict[str, Any]) -> str:
    """Render a compact human-fillable form from the proposal register."""
    lines = [
        "# Lejárt NIS2-akciók státusz-egyeztetési lapja",
        "",
        f"- Állapot dátuma: `{data['as_of']}`",
        "- Státusz: `PROPOSAL_PENDING_HUMAN_RECONCILIATION`",
        "- A lap kitöltése önmagában nem módosítja az akciók státuszát vagy céldátumát.",
        "",
        "## Kitöltési lehetőségek",
        "",
        "- `NOT_STARTED` – a munka nem kezdődött el.",
        "- `IN_PROGRESS` – a munka folyamatban van.",
        "- `COMPLETED_EVIDENCE_PENDING` – elkészült, de a bizonyíték vagy reviewer hiányzik.",
        "- `COMPLETED_READY_FOR_REVIEW` – elkészült, védett evidencia és hash rendelkezésre áll.",
        "- `RESCHEDULE_REQUESTED` – új céldátum emberi jóváhagyása szükséges.",
        "",
    ]
    for record in data["records"]:
        lines.extend((
            f"## {record['action_id']} – {record['days_overdue']} napja lejárt",
            "",
            f"- Nyilvántartott státusz: `{record['registered_status']}`",
            f"- Nyilvántartott céldátum: `{record['registered_target_date']}`",
            f"- Felelős: {record['owner']}",
            f"- Jóváhagyó: {record['approver']}",
            f"- Kapu: `{'; '.join(record['required_gates'])}`",
            "",
            "Válasszon egyet:",
            "",
            "- [ ] `NOT_STARTED`",
            "- [ ] `IN_PROGRESS`",
            "- [ ] `COMPLETED_EVIDENCE_PENDING`",
            "- [ ] `COMPLETED_READY_FOR_REVIEW`",
            "- [ ] `RESCHEDULE_REQUESTED`",
            "",
            "| Mező | Kitöltendő érték |",
            "|---|---|",
            "| Tényleges állapot röviden |  |",
            "| Javasolt új céldátum, ha szükséges |  |",
            "| Védett evidencia URI-ja |  |",
            "| Evidencia SHA-256 |  |",
            "| Reviewer |  |",
            "| Időzónás review-idő |  |",
            "| Döntési hivatkozás |  |",
            "",
        ))
    lines.extend((
        "## Kötelező korlát",
        "",
        "Az egyeztetés eredményét külön, ellenőrzött változtatással lehet átvezetni az `actions.csv` fájlba. Az AI nem zárhat le akciót, nem fogadhat el evidenciát és nem írhat át céldátumot emberi döntési rekord nélkül.",
        "",
    ))
    return "\n".join(lines)


def write_reconciliation_outputs(
    data: dict[str, Any], json_path: Path, markdown_path: Path
) -> None:
    """Write deterministic proposal outputs."""
    json_path.parent.mkdir(parents=True, exist_ok=True)
    markdown_path.parent.mkdir(parents=True, exist_ok=True)
    json_path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    markdown_path.write_text(
        render_deadline_reconciliation_form(data), encoding="utf-8", newline="\n"
    )
