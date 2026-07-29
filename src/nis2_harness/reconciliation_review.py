"""Build a proposal-only human review package from portal reconciliation drafts."""

from __future__ import annotations

from datetime import date, datetime
import hashlib
import json
from pathlib import Path
from typing import Any

from .deadline_reconciliation import validate_deadline_reconciliation
from .portal import validate_reconciliation_draft
from .registry import Action


DRAFT_PAYLOAD_FIELDS = (
    "action_id",
    "actor_display",
    "outcome",
    "actual_progress_summary",
    "proposed_new_target_date",
    "evidence_uri",
    "evidence_sha256",
)
DRAFT_RECORD_FIELDS = set(DRAFT_PAYLOAD_FIELDS) | {
    "draft_id",
    "status",
    "formal_effect",
    "actor_claim_unverified",
    "created_at",
    "audit_sha256",
}


def _clean_payload(record: dict[str, Any]) -> dict[str, str]:
    return {
        field: str(record.get(field, "")).strip()
        for field in DRAFT_PAYLOAD_FIELDS
    }


def _expected_digest(created_at: str, payload: dict[str, str]) -> str:
    canonical = json.dumps(
        payload,
        ensure_ascii=False,
        sort_keys=True,
        separators=(",", ":"),
    )
    return hashlib.sha256(
        f"{created_at}|{canonical}".encode("utf-8")
    ).hexdigest()


def load_reconciliation_drafts(
    path: Path,
    known_records: dict[str, dict[str, Any]],
    as_of: date,
) -> list[dict[str, Any]]:
    """Load the append-only draft log and reject any malformed or tampered row."""
    if not path.exists():
        return []
    drafts: list[dict[str, Any]] = []
    for line_number, line in enumerate(
        path.read_text(encoding="utf-8").splitlines(),
        start=1,
    ):
        if not line.strip():
            continue
        try:
            record = json.loads(line)
        except json.JSONDecodeError as exc:
            raise ValueError(
                f"Érvénytelen JSON a tervezetnapló {line_number}. sorában."
            ) from exc
        if not isinstance(record, dict):
            raise ValueError(
                f"A tervezetnapló {line_number}. sora nem objektum."
            )
        payload = _clean_payload(record)
        validation_errors = validate_reconciliation_draft(
            payload,
            known_records,
            as_of,
        )
        if set(record) != DRAFT_RECORD_FIELDS:
            validation_errors.append(
                "A rekord mezőkészlete eltér az engedélyezett sémától."
            )
        created_at = str(record.get("created_at", ""))
        try:
            parsed_time = datetime.fromisoformat(created_at)
            if parsed_time.tzinfo is None:
                raise ValueError
        except ValueError:
            validation_errors.append(
                "A created_at időzónás ISO-8601 időbélyeg legyen."
            )
        digest = _expected_digest(created_at, payload)
        if record.get("status") != "DRAFT_RECONCILIATION_NOTE":
            validation_errors.append("A rekord státusza nem tervezet.")
        if record.get("formal_effect") is not False:
            validation_errors.append("A formal_effect=false kötelező.")
        if record.get("actor_claim_unverified") is not True:
            validation_errors.append(
                "A rögzítő személyazonossága csak hitelesítetlen állítás lehet."
            )
        if record.get("audit_sha256") != digest:
            validation_errors.append("Az audit_sha256 nem egyezik a rekorddal.")
        if record.get("draft_id") != f"RDR-{digest[:12]}":
            validation_errors.append("A draft_id nem egyezik a rekord hash-ével.")
        if validation_errors:
            joined = " ".join(validation_errors)
            raise ValueError(
                f"Hibás tervezetnapló-rekord a(z) {line_number}. sorban: {joined}"
            )
        drafts.append({
            "draft_id": record["draft_id"],
            "created_at": created_at,
            "audit_sha256": digest,
            "formal_effect": False,
            "actor_claim_unverified": True,
            **payload,
        })
    return sorted(
        drafts,
        key=lambda item: (
            item["action_id"],
            datetime.fromisoformat(item["created_at"]),
            item["draft_id"],
        ),
    )


def _draft_signature(draft: dict[str, Any]) -> tuple[str, str, str, str]:
    return (
        str(draft["outcome"]),
        str(draft["proposed_new_target_date"]),
        str(draft["evidence_uri"]),
        str(draft["evidence_sha256"]),
    )


def build_reconciliation_review_package(
    register: dict[str, Any],
    actions: list[Action],
    drafts: list[dict[str, Any]],
) -> dict[str, Any]:
    """Aggregate latest proposals and surface conflicts without choosing a decision."""
    validation = validate_deadline_reconciliation(register, actions)
    if validation.errors:
        messages = "; ".join(issue.message for issue in validation.errors)
        raise ValueError(f"Érvénytelen határidő-egyeztetési nyilvántartás: {messages}")
    records = register["records"]
    known_ids = {str(item["action_id"]) for item in records}
    unknown_ids = sorted(
        {str(item.get("action_id", "")) for item in drafts} - known_ids
    )
    if unknown_ids:
        raise ValueError(
            "A tervezetnapló ismeretlen akciót tartalmaz: "
            + ", ".join(unknown_ids)
        )
    drafts_by_action: dict[str, list[dict[str, Any]]] = {}
    for draft in drafts:
        drafts_by_action.setdefault(str(draft["action_id"]), []).append(draft)
    review_records: list[dict[str, Any]] = []
    for baseline in records:
        action_id = str(baseline["action_id"])
        action_drafts = sorted(
            drafts_by_action.get(action_id, []),
            key=lambda item: (
                datetime.fromisoformat(str(item["created_at"])),
                str(item["draft_id"]),
            ),
        )
        conflict = len(
            {_draft_signature(item) for item in action_drafts}
        ) > 1
        latest = action_drafts[-1] if action_drafts else None
        review_records.append({
            "action_id": action_id,
            "registered_status": baseline["registered_status"],
            "registered_target_date": baseline["registered_target_date"],
            "owner": baseline["owner"],
            "approver": baseline["approver"],
            "required_gates": list(baseline["required_gates"]),
            "draft_count": len(action_drafts),
            "conflict": conflict,
            "human_review_status": (
                "CONFLICT_REQUIRES_REVIEW"
                if conflict
                else "PENDING_HUMAN_REVIEW"
                if latest
                else "PENDING_INPUT"
            ),
            "latest_draft": latest,
            "draft_refs": [item["draft_id"] for item in action_drafts],
        })
    return {
        "schema_version": "1.0",
        "status": "PROPOSAL_PENDING_HUMAN_REVIEW",
        "as_of": register["as_of"],
        "source_refs": [
            "data/actions.csv",
            "data/deadline_reconciliation.json",
            "portal_runtime/deadline_reconciliation_drafts.jsonl",
        ],
        "formal_effect": False,
        "summary": {
            "action_count": len(review_records),
            "actions_with_draft": sum(
                item["draft_count"] > 0 for item in review_records
            ),
            "actions_without_draft": sum(
                item["draft_count"] == 0 for item in review_records
            ),
            "conflict_count": sum(
                item["conflict"] for item in review_records
            ),
            "draft_count": len(drafts),
        },
        "records": review_records,
        "required_human_gate": "ACTION_SPECIFIC_G1_G5_REVIEW",
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


def render_reconciliation_review_package(package: dict[str, Any]) -> str:
    """Render the proposal package as a compact human review document."""
    summary = package["summary"]
    lines = [
        "# Lejárt akciók státuszjavaslatainak emberi review-csomagja",
        "",
        f"- Állapot dátuma: `{package['as_of']}`",
        f"- Beérkezett tervezetek: **{summary['draft_count']}**",
        f"- Javaslattal rendelkező akciók: **{summary['actions_with_draft']}**",
        f"- Még adatot igénylő akciók: **{summary['actions_without_draft']}**",
        f"- Ellentmondásos akciók: **{summary['conflict_count']}**",
        "- Formális hatás: **nincs**",
        "",
        "## Összesítés",
        "",
        "| Akció | Nyilvántartott állapot | Legfrissebb javaslat | Tervezetek | Konfliktus | Emberi kapu |",
        "|---|---|---|---:|---|---|",
    ]
    for item in package["records"]:
        latest = item["latest_draft"]
        proposed = latest["outcome"] if latest else "NINCS ADAT"
        lines.append(
            f"| {item['action_id']} | {item['registered_status']} | {proposed} | "
            f"{item['draft_count']} | {'IGEN' if item['conflict'] else 'nem'} | "
            f"{'; '.join(item['required_gates'])} |"
        )
    for item in package["records"]:
        latest = item["latest_draft"]
        if latest is None:
            continue
        lines.extend([
            "",
            f"## {item['action_id']} – {item['human_review_status']}",
            "",
            f"- Legfrissebb javaslat: `{latest['outcome']}`",
            f"- Rögzítői állítás: {latest['actor_display']} *(nem hitelesített)*",
            f"- Rögzítés ideje: `{latest['created_at']}`",
            f"- Tervezethivatkozás: `{latest['draft_id']}`",
            f"- Audit hash: `{latest['audit_sha256']}`",
            f"- Állapotleírás: {latest['actual_progress_summary']}",
        ])
        if latest["proposed_new_target_date"]:
            lines.append(
                f"- Javasolt új céldátum: `{latest['proposed_new_target_date']}`"
            )
        if latest["evidence_uri"]:
            lines.extend([
                f"- Evidencia URI: `{latest['evidence_uri']}`",
                f"- Evidencia SHA-256: `{latest['evidence_sha256']}`",
            ])
        if item["conflict"]:
            lines.append(
                "- **Eltérő tervezetek vannak; automatikus kiválasztás tilos.**"
            )
        lines.extend([
            "",
            "| Emberi döntési mező | Kitöltendő érték |",
            "|---|---|",
            "| Döntés: elfogad / visszaküld / elutasít |  |",
            "| Reviewer |  |",
            "| Időzónás review-idő |  |",
            "| Döntési hivatkozás |  |",
        ])
    lines.extend([
        "",
        "## Kötelező korlát",
        "",
        "Ez a csomag csak előterjesztés. A reviewer kitöltése sem módosítja "
        "automatikusan az `actions.csv` fájlt; az elfogadott döntés külön, "
        "ellenőrzött átvezetést igényel.",
        "",
    ])
    return "\n".join(lines)


def write_reconciliation_review_outputs(
    package: dict[str, Any],
    json_path: Path,
    markdown_path: Path,
) -> None:
    """Write deterministic JSON and Markdown proposal outputs."""
    json_path.parent.mkdir(parents=True, exist_ok=True)
    markdown_path.parent.mkdir(parents=True, exist_ok=True)
    json_path.write_text(
        json.dumps(package, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )
    markdown_path.write_text(
        render_reconciliation_review_package(package),
        encoding="utf-8",
        newline="\n",
    )
