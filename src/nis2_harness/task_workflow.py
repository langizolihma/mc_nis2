"""Safe, append-only human-task workflow pilot for the local portal."""

from __future__ import annotations

from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import re
import threading
from typing import Any, Callable
from urllib.parse import urlparse


PILOT_STATUSES = {
    "TODO",
    "IN_PROGRESS",
    "READY_FOR_REVIEW",
    "REWORK_REQUIRED",
}
TRANSITIONS = {
    "START_WORK": {
        "from": {"TODO", "REWORK_REQUIRED"},
        "to": "IN_PROGRESS",
    },
    "SAVE_PROGRESS": {
        "from": {"IN_PROGRESS"},
        "to": "IN_PROGRESS",
    },
    "SUBMIT_FOR_REVIEW": {
        "from": {"IN_PROGRESS"},
        "to": "READY_FOR_REVIEW",
    },
    "RETURN_FOR_REWORK": {
        "from": {"READY_FOR_REVIEW"},
        "to": "REWORK_REQUIRED",
    },
}
SHA256_PATTERN = re.compile(r"^[0-9a-f]{64}$")
MATERIAL_PATH_PATTERN = re.compile(
    r"^portal_materials/[A-Za-z0-9._-]+\.docx$"
)
ATTACHMENT_EXTENSIONS = {
    ".docx",
    ".xlsx",
    ".pdf",
    ".jpg",
    ".jpeg",
    ".png",
}
MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024


def _protected_sharepoint_uri(value: str) -> bool:
    parsed = urlparse(value)
    return (
        parsed.scheme == "https"
        and parsed.hostname == "metalcom.sharepoint.com"
        and parsed.path.startswith("/sites/NIS2/")
    )


def load_pilot_config(path: Path) -> dict[str, Any]:
    """Load and validate the checked-in five-task pilot definition."""
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data.get("tasks")
    if (
        data.get("formal_effect") is not False
        or data.get("status") != "LOCAL_PILOT_READY"
        or not isinstance(tasks, list)
        or not 3 <= len(tasks) <= 5
    ):
        raise ValueError("Az emberifeladat-pilot konfigurációja nem biztonságos.")
    seen: set[str] = set()
    for task in tasks:
        if not isinstance(task, dict):
            raise ValueError("A pilot feladatai objektumok legyenek.")
        task_id = str(task.get("task_id", ""))
        if not re.fullmatch(r"DEF-\d{3}", task_id) or task_id in seen:
            raise ValueError(f"Érvénytelen vagy duplikált pilotfeladat: {task_id}.")
        seen.add(task_id)
        checklist = task.get("checklist")
        materials = task.get("materials")
        if (
            not str(task.get("plain_language_goal", "")).strip()
            or not isinstance(checklist, list)
            or not checklist
            or not all(str(item).strip() for item in checklist)
            or not isinstance(materials, list)
            or not materials
        ):
            raise ValueError(f"Hiányos pilotfeladat: {task_id}.")
        for material in materials:
            if (
                not isinstance(material, dict)
                or not str(material.get("material_id", "")).strip()
                or not str(material.get("label", "")).strip()
                or not MATERIAL_PATH_PATTERN.fullmatch(
                    str(material.get("path", ""))
                )
                or Path(str(material.get("path", ""))).name
                != str(material.get("filename", ""))
            ):
                raise ValueError(
                    f"Érvénytelen nyomtatható anyag: {task_id}."
                )
    return data


def _safe_attachment_name(filename: str) -> str:
    """Return a portable display/storage name without accepting paths."""
    if (
        not filename
        or filename != Path(filename).name
        or any(char in filename for char in "\r\n\0")
    ):
        raise ValueError("A csatolmány fájlneve érvénytelen.")
    clean = re.sub(r"[^A-Za-z0-9._ -]", "_", filename).strip(" .")
    if not clean or len(clean) > 180:
        raise ValueError("A csatolmány fájlneve érvénytelen.")
    if Path(clean).suffix.lower() not in ATTACHMENT_EXTENSIONS:
        raise ValueError(
            "Csak PDF, DOCX, XLSX, JPG, JPEG vagy PNG csatolható."
        )
    return clean


class TaskAttachmentStore:
    """Store local, non-formal staged attachments outside Git."""

    def __init__(
        self,
        directory: Path,
        clock: Callable[[], datetime] | None = None,
    ) -> None:
        self.directory = directory
        self.clock = clock or (lambda: datetime.now(timezone.utc))
        self.manifest_path = directory / "attachment_manifest.jsonl"
        self._lock = threading.Lock()

    def load(self) -> list[dict[str, Any]]:
        if not self.manifest_path.exists():
            return []
        records: list[dict[str, Any]] = []
        for line in self.manifest_path.read_text(
            encoding="utf-8"
        ).splitlines():
            if not line.strip():
                continue
            try:
                item = json.loads(line)
            except json.JSONDecodeError:
                continue
            if (
                isinstance(item, dict)
                and item.get("status") == "LOCAL_STAGED_NOT_EVIDENCE"
                and item.get("formal_effect") is False
                and SHA256_PATTERN.fullmatch(str(item.get("sha256", "")))
            ):
                records.append(item)
        return records

    def append(
        self,
        task_id: str,
        filename: str,
        content_type: str,
        content: bytes,
        pilot_task_ids: set[str],
    ) -> dict[str, Any]:
        if task_id not in pilot_task_ids:
            raise ValueError("A feladat nem része az emberifeladat-pilotnak.")
        safe_name = _safe_attachment_name(filename)
        if not content or len(content) > MAX_ATTACHMENT_BYTES:
            raise ValueError(
                "A csatolmány nem lehet üres és legfeljebb 10 MB lehet."
            )
        digest = hashlib.sha256(content).hexdigest()
        created_at = self.clock().isoformat()
        attachment_id = (
            f"ATT-{task_id}-{digest[:12]}-"
            f"{hashlib.sha256(created_at.encode('utf-8')).hexdigest()[:8]}"
        )
        task_dir = self.directory / task_id
        task_dir.mkdir(parents=True, exist_ok=True)
        stored_name = f"{attachment_id}__{safe_name}"
        target = task_dir / stored_name
        record = {
            "attachment_id": attachment_id,
            "task_id": task_id,
            "filename": safe_name,
            "stored_relative_path": f"{task_id}/{stored_name}",
            "download_url": (
                f"/api/task-attachments/{task_id}/{attachment_id}"
            ),
            "content_type": content_type[:120],
            "size_bytes": len(content),
            "sha256": digest,
            "created_at": created_at,
            "status": "LOCAL_STAGED_NOT_EVIDENCE",
            "formal_effect": False,
            "sharepoint_upload_required": True,
        }
        with self._lock:
            try:
                with target.open("xb") as handle:
                    handle.write(content)
            except FileExistsError as error:
                raise ValueError(
                    "Ez a csatolmány ebben a munkamenetben már rögzítve van."
                ) from error
            self.directory.mkdir(parents=True, exist_ok=True)
            with self.manifest_path.open(
                "a", encoding="utf-8", newline="\n"
            ) as handle:
                handle.write(
                    json.dumps(record, ensure_ascii=False, sort_keys=True)
                    + "\n"
                )
        return record


def current_pilot_states(
    task_ids: set[str],
    events: list[dict[str, Any]],
) -> dict[str, str]:
    """Project the latest non-formal pilot state from append-only events."""
    states = {task_id: "TODO" for task_id in task_ids}
    for event in events:
        task_id = str(event.get("task_id", ""))
        proposed_state = str(event.get("proposed_state", ""))
        if (
            task_id in states
            and proposed_state in PILOT_STATUSES
            and event.get("formal_effect") is False
        ):
            states[task_id] = proposed_state
    return states


def validate_work_event(
    payload: Any,
    pilot_task_ids: set[str],
    current_states: dict[str, str],
) -> list[str]:
    """Validate a workflow event that cannot change a canonical task."""
    if not isinstance(payload, dict):
        return ["A kérés JSON objektum kell legyen."]
    allowed_fields = {
        "task_id",
        "actor_display",
        "transition",
        "note",
        "evidence_uri",
        "evidence_sha256",
    }
    errors: list[str] = []
    if set(payload) - allowed_fields:
        errors.append("A kérés nem engedélyezett mezőt tartalmaz.")
    task_id = str(payload.get("task_id", "")).strip()
    actor = str(payload.get("actor_display", "")).strip()
    transition = str(payload.get("transition", "")).strip()
    note = str(payload.get("note", "")).strip()
    evidence_uri = str(payload.get("evidence_uri", "")).strip()
    evidence_sha256 = str(payload.get("evidence_sha256", "")).strip()
    if task_id not in pilot_task_ids:
        errors.append("A feladat nem része az emberifeladat-pilotnak.")
    if not 2 <= len(actor) <= 80 or any(char in actor for char in "\r\n"):
        errors.append("A rögzítő neve 2–80 karakteres, egysoros érték legyen.")
    if not 3 <= len(note) <= 2000:
        errors.append("A munkajegyzet 3–2000 karakteres legyen.")
    rule = TRANSITIONS.get(transition)
    if rule is None:
        errors.append("A munkafolyamat-lépés nem engedélyezett.")
    elif task_id in pilot_task_ids:
        current = current_states.get(task_id, "TODO")
        if current not in rule["from"]:
            errors.append(
                f"A(z) {transition} lépés {current} állapotból nem indítható."
            )
    evidence_present = bool(evidence_uri or evidence_sha256)
    if transition == "SUBMIT_FOR_REVIEW" and not evidence_present:
        errors.append(
            "Review-ra előterjesztéshez védett SharePoint URI és SHA-256 szükséges."
        )
    if evidence_present:
        if not _protected_sharepoint_uri(evidence_uri):
            errors.append(
                "Az evidencia URI a jóváhagyott NIS2 SharePoint-webhelyre mutasson."
            )
        if not SHA256_PATTERN.fullmatch(evidence_sha256):
            errors.append(
                "Az evidencia hash 64 karakteres, kisbetűs SHA-256 legyen."
            )
    return errors


class TaskWorkflowDraftStore:
    """Append-only, hash-chained store for non-formal pilot work events."""

    def __init__(
        self,
        path: Path,
        clock: Callable[[], datetime] | None = None,
    ) -> None:
        self.path = path
        self.clock = clock or (lambda: datetime.now(timezone.utc))
        self._lock = threading.Lock()

    def load(self) -> list[dict[str, Any]]:
        if not self.path.exists():
            return []
        records: list[dict[str, Any]] = []
        previous_hash = ""
        for line in self.path.read_text(encoding="utf-8").splitlines():
            if not line.strip():
                continue
            try:
                item = json.loads(line)
            except json.JSONDecodeError:
                continue
            if (
                isinstance(item, dict)
                and item.get("status") == "DRAFT_WORK_EVENT"
                and item.get("formal_effect") is False
                and item.get("previous_event_sha256", "") == previous_hash
                and item.get("audit_sha256") == self._digest_for_record(item)
            ):
                records.append(item)
                previous_hash = str(item.get("audit_sha256", ""))
            else:
                break
        return records

    @staticmethod
    def _digest_for_record(item: dict[str, Any]) -> str:
        payload = {
            "task_id": str(item.get("task_id", "")),
            "actor_display": str(item.get("actor_display", "")),
            "transition": str(item.get("transition", "")),
            "note": str(item.get("note", "")),
            "evidence_uri": str(item.get("evidence_uri", "")),
            "evidence_sha256": str(item.get("evidence_sha256", "")),
        }
        canonical = json.dumps(
            payload,
            ensure_ascii=False,
            sort_keys=True,
            separators=(",", ":"),
        )
        return hashlib.sha256(
            (
                f"{item.get('previous_event_sha256', '')}|"
                f"{item.get('created_at', '')}|"
                f"{item.get('previous_state', '')}|{canonical}"
            ).encode("utf-8")
        ).hexdigest()

    def append(
        self,
        payload: dict[str, Any],
        current_state: str,
    ) -> dict[str, Any]:
        rule = TRANSITIONS[str(payload["transition"]).strip()]
        created_at = self.clock().isoformat()
        clean_payload = {
            "task_id": str(payload["task_id"]).strip(),
            "actor_display": str(payload["actor_display"]).strip(),
            "transition": str(payload["transition"]).strip(),
            "note": str(payload["note"]).strip(),
            "evidence_uri": str(payload.get("evidence_uri", "")).strip(),
            "evidence_sha256": str(
                payload.get("evidence_sha256", "")
            ).strip(),
        }
        self.path.parent.mkdir(parents=True, exist_ok=True)
        with self._lock:
            existing = self.load()
            latest_for_task = next(
                (
                    item
                    for item in reversed(existing)
                    if item.get("task_id") == clean_payload["task_id"]
                ),
                None,
            )
            actual_state = (
                str(latest_for_task["proposed_state"])
                if latest_for_task is not None
                else "TODO"
            )
            if actual_state != current_state:
                raise ValueError(
                    "A pilotfeladat állapota időközben megváltozott; "
                    "frissítés és újrapróbálás szükséges."
                )
            previous_hash = (
                str(existing[-1]["audit_sha256"]) if existing else ""
            )
            record = {
                "status": "DRAFT_WORK_EVENT",
                "formal_effect": False,
                "actor_claim_unverified": True,
                "created_at": created_at,
                "previous_state": current_state,
                "proposed_state": rule["to"],
                "previous_event_sha256": previous_hash,
                **clean_payload,
            }
            digest = self._digest_for_record(record)
            record["event_id"] = f"WFE-{digest[:12]}"
            record["audit_sha256"] = digest
            with self.path.open("a", encoding="utf-8", newline="\n") as handle:
                handle.write(
                    json.dumps(record, ensure_ascii=False, sort_keys=True)
                    + "\n"
                )
        return record


def build_pilot_projection(
    config: dict[str, Any],
    human_package: dict[str, Any],
    sharepoint_tasks: list[dict[str, Any]],
    events: list[dict[str, Any]],
    attachments: list[dict[str, Any]] | None = None,
) -> dict[str, Any]:
    """Join pilot guidance to current human tasks and safe document links."""
    human_tasks = {
        str(task.get("task_id", "")): task
        for wave in human_package.get("waves", [])
        if isinstance(wave, dict)
        for task in wave.get("tasks", [])
        if isinstance(task, dict)
    }
    links = {
        str(task.get("id", "")): {
            "evidence_url": str(task.get("evidence_url", "")),
            "evidence_label": str(task.get("evidence_label", "")),
        }
        for task in sharepoint_tasks
        if isinstance(task, dict)
    }
    task_ids = {str(item["task_id"]) for item in config["tasks"]}
    if not task_ids.issubset(human_tasks):
        raise ValueError("A pilot ismeretlen emberi feladatra hivatkozik.")
    states = current_pilot_states(task_ids, events)
    latest = {
        task_id: next(
            (
                item
                for item in reversed(events)
                if item.get("task_id") == task_id
            ),
            None,
        )
        for task_id in task_ids
    }
    tasks: list[dict[str, Any]] = []
    attachments = attachments or []
    for definition in config["tasks"]:
        task_id = str(definition["task_id"])
        source = human_tasks[task_id]
        tasks.append(
            {
                **definition,
                "materials": [
                    {
                        **material,
                        "download_url": (
                            f"/api/task-materials/{task_id}/"
                            f"{material['filename']}"
                        ),
                    }
                    for material in definition["materials"]
                ],
                "attachments": [
                    item
                    for item in attachments
                    if item.get("task_id") == task_id
                ][-5:],
                "status": states[task_id],
                "owner": str(source.get("owner", "")),
                "approver": str(source.get("approver", "")),
                "required_result": str(source.get("required_result", "")),
                "must_be_completed_before": str(
                    source.get("must_be_completed_before", "")
                ),
                "evidence_url": links.get(task_id, {}).get(
                    "evidence_url", ""
                ),
                "evidence_label": links.get(task_id, {}).get(
                    "evidence_label", ""
                ),
                "latest_event": latest[task_id],
                "formal_effect": False,
            }
        )
    tasks.sort(key=lambda item: (int(item["pilot_order"]), item["task_id"]))
    counts = {
        status: sum(item["status"] == status for item in tasks)
        for status in sorted(PILOT_STATUSES)
    }
    return {
        "pilot_id": str(config.get("pilot_id", "")),
        "status": str(config.get("status", "")),
        "formal_effect": False,
        "authentication_required_for_formal_use": True,
        "task_count": len(tasks),
        "state_counts": counts,
        "tasks": tasks,
        "events": events[-20:],
        "attachments": attachments[-20:],
        "allowed_transitions": {
            name: {
                "from": sorted(rule["from"]),
                "to": rule["to"],
            }
            for name, rule in TRANSITIONS.items()
        },
    }
