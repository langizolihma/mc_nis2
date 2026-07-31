"""Transactional local storage for the non-production multi-user pilot."""

from __future__ import annotations

from contextlib import closing
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import sqlite3
import tempfile
import threading
from typing import Any, Callable
import zipfile

from .task_workflow import (
    MAX_ATTACHMENT_BYTES,
    SHA256_PATTERN,
    TRANSITIONS,
    TaskWorkflowDraftStore,
    _safe_attachment_name,
)


SCHEMA_VERSION = 1


def _connect(path: Path) -> sqlite3.Connection:
    connection = sqlite3.connect(path, timeout=10)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    connection.execute("PRAGMA busy_timeout = 10000")
    return connection


class PilotDatabase:
    """Own the SQLite schema and safe migration/backup operations."""

    def __init__(self, path: Path) -> None:
        self.path = path
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self._lock = threading.Lock()
        self._initialize()

    def _initialize(self) -> None:
        with closing(_connect(self.path)) as connection:
            connection.execute("PRAGMA journal_mode = WAL")
            connection.executescript(
                """
                CREATE TABLE IF NOT EXISTS schema_meta (
                    key TEXT PRIMARY KEY,
                    value TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS work_events (
                    sequence INTEGER PRIMARY KEY AUTOINCREMENT,
                    event_id TEXT NOT NULL UNIQUE,
                    task_id TEXT NOT NULL,
                    created_at TEXT NOT NULL,
                    previous_state TEXT NOT NULL,
                    proposed_state TEXT NOT NULL,
                    previous_event_sha256 TEXT NOT NULL,
                    audit_sha256 TEXT NOT NULL UNIQUE,
                    payload_json TEXT NOT NULL
                );
                CREATE INDEX IF NOT EXISTS idx_work_events_task
                    ON work_events(task_id, sequence);
                CREATE TABLE IF NOT EXISTS attachments (
                    sequence INTEGER PRIMARY KEY AUTOINCREMENT,
                    attachment_id TEXT NOT NULL UNIQUE,
                    task_id TEXT NOT NULL,
                    created_at TEXT NOT NULL,
                    sha256 TEXT NOT NULL,
                    stored_relative_path TEXT NOT NULL UNIQUE,
                    payload_json TEXT NOT NULL
                );
                CREATE INDEX IF NOT EXISTS idx_attachments_task
                    ON attachments(task_id, sequence);
                CREATE TABLE IF NOT EXISTS audit_events (
                    sequence INTEGER PRIMARY KEY AUTOINCREMENT,
                    event_type TEXT NOT NULL,
                    object_id TEXT NOT NULL,
                    created_at TEXT NOT NULL,
                    object_sha256 TEXT NOT NULL
                );
                """
            )
            version = connection.execute(
                "SELECT value FROM schema_meta WHERE key = 'schema_version'"
            ).fetchone()
            if version is None:
                connection.execute(
                    "INSERT INTO schema_meta(key, value) VALUES (?, ?)",
                    ("schema_version", str(SCHEMA_VERSION)),
                )
            elif int(version["value"]) != SCHEMA_VERSION:
                raise ValueError(
                    "Nem támogatott pilot-adatbázis séma; migráció szükséges."
                )
            connection.commit()

    def backup_to(self, destination: Path) -> None:
        """Create a consistent SQLite backup while the portal may be running."""
        destination.parent.mkdir(parents=True, exist_ok=True)
        with self._lock:
            with closing(_connect(self.path)) as source:
                with closing(sqlite3.connect(destination)) as target:
                    source.backup(target)


class SqliteTaskWorkflowStore:
    """Concurrent append-only workflow store with optimistic state checking."""

    def __init__(
        self,
        database: PilotDatabase,
        clock: Callable[[], datetime] | None = None,
    ) -> None:
        self.database = database
        self.clock = clock or (lambda: datetime.now(timezone.utc))

    def load(self) -> list[dict[str, Any]]:
        with closing(_connect(self.database.path)) as connection:
            rows = connection.execute(
                "SELECT payload_json FROM work_events ORDER BY sequence"
            ).fetchall()
        records: list[dict[str, Any]] = []
        previous_hash = ""
        for row in rows:
            try:
                record = json.loads(row["payload_json"])
            except json.JSONDecodeError:
                break
            if (
                record.get("status") != "DRAFT_WORK_EVENT"
                or record.get("formal_effect") is not False
                or record.get("previous_event_sha256", "") != previous_hash
                or record.get("audit_sha256")
                != TaskWorkflowDraftStore._digest_for_record(record)
            ):
                break
            records.append(record)
            previous_hash = str(record["audit_sha256"])
        return records

    def append(
        self,
        payload: dict[str, Any],
        current_state: str,
    ) -> dict[str, Any]:
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
        rule = TRANSITIONS[clean_payload["transition"]]
        created_at = self.clock().isoformat()
        with self.database._lock:
            connection = _connect(self.database.path)
            try:
                connection.execute("BEGIN IMMEDIATE")
                latest_task = connection.execute(
                    """
                    SELECT proposed_state FROM work_events
                    WHERE task_id = ? ORDER BY sequence DESC LIMIT 1
                    """,
                    (clean_payload["task_id"],),
                ).fetchone()
                actual_state = (
                    str(latest_task["proposed_state"])
                    if latest_task is not None
                    else "TODO"
                )
                if actual_state != current_state:
                    raise ValueError(
                        "A pilotfeladat állapota időközben megváltozott; "
                        "frissítés és újrapróbálás szükséges."
                    )
                latest = connection.execute(
                    """
                    SELECT audit_sha256 FROM work_events
                    ORDER BY sequence DESC LIMIT 1
                    """
                ).fetchone()
                previous_hash = (
                    str(latest["audit_sha256"]) if latest is not None else ""
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
                digest = TaskWorkflowDraftStore._digest_for_record(record)
                record["event_id"] = f"WFE-{digest[:12]}"
                record["audit_sha256"] = digest
                connection.execute(
                    """
                    INSERT INTO work_events(
                        event_id, task_id, created_at, previous_state,
                        proposed_state, previous_event_sha256, audit_sha256,
                        payload_json
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        record["event_id"],
                        record["task_id"],
                        record["created_at"],
                        record["previous_state"],
                        record["proposed_state"],
                        record["previous_event_sha256"],
                        record["audit_sha256"],
                        json.dumps(
                            record, ensure_ascii=False, sort_keys=True
                        ),
                    ),
                )
                connection.execute(
                    """
                    INSERT INTO audit_events(
                        event_type, object_id, created_at, object_sha256
                    ) VALUES (?, ?, ?, ?)
                    """,
                    (
                        "WORK_EVENT_APPENDED",
                        record["event_id"],
                        created_at,
                        digest,
                    ),
                )
                connection.commit()
                return record
            except Exception:
                connection.rollback()
                raise
            finally:
                connection.close()


class SqliteTaskAttachmentStore:
    """Store attachment metadata transactionally and files outside Git."""

    def __init__(
        self,
        database: PilotDatabase,
        directory: Path,
        clock: Callable[[], datetime] | None = None,
    ) -> None:
        self.database = database
        self.directory = directory
        self.clock = clock or (lambda: datetime.now(timezone.utc))

    def load(self) -> list[dict[str, Any]]:
        with closing(_connect(self.database.path)) as connection:
            rows = connection.execute(
                "SELECT payload_json FROM attachments ORDER BY sequence"
            ).fetchall()
        records: list[dict[str, Any]] = []
        for row in rows:
            try:
                record = json.loads(row["payload_json"])
            except json.JSONDecodeError:
                continue
            if (
                record.get("status") == "LOCAL_STAGED_NOT_EVIDENCE"
                and record.get("formal_effect") is False
                and SHA256_PATTERN.fullmatch(str(record.get("sha256", "")))
            ):
                records.append(record)
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
        relative_path = f"{task_id}/{stored_name}"
        record = {
            "attachment_id": attachment_id,
            "task_id": task_id,
            "filename": safe_name,
            "stored_relative_path": relative_path,
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
        temporary = target.with_suffix(target.suffix + ".pending")
        with self.database._lock:
            try:
                if target.exists():
                    raise ValueError(
                        "Ez a csatolmány ebben a munkamenetben már "
                        "rögzítve van."
                    )
                with temporary.open("xb") as handle:
                    handle.write(content)
                temporary.replace(target)
                with closing(_connect(self.database.path)) as connection:
                    connection.execute(
                        """
                        INSERT INTO attachments(
                            attachment_id, task_id, created_at, sha256,
                            stored_relative_path, payload_json
                        ) VALUES (?, ?, ?, ?, ?, ?)
                        """,
                        (
                            attachment_id,
                            task_id,
                            created_at,
                            digest,
                            relative_path,
                            json.dumps(
                                record, ensure_ascii=False, sort_keys=True
                            ),
                        ),
                    )
                    connection.execute(
                        """
                        INSERT INTO audit_events(
                            event_type, object_id, created_at, object_sha256
                        ) VALUES (?, ?, ?, ?)
                        """,
                        (
                            "ATTACHMENT_STAGED",
                            attachment_id,
                            created_at,
                            digest,
                        ),
                    )
                    connection.commit()
            except Exception:
                temporary.unlink(missing_ok=True)
                target.unlink(missing_ok=True)
                raise
        return record


def migrate_jsonl_runtime(
    database: PilotDatabase,
    workflow_path: Path,
    attachment_manifest_path: Path,
) -> dict[str, int]:
    """Idempotently import valid legacy JSONL records into SQLite."""
    imported = {"work_events": 0, "attachments": 0}
    legacy_events = TaskWorkflowDraftStore(workflow_path).load()
    with database._lock:
        with closing(_connect(database.path)) as connection:
            for record in legacy_events:
                cursor = connection.execute(
                    """
                    INSERT OR IGNORE INTO work_events(
                        event_id, task_id, created_at, previous_state,
                        proposed_state, previous_event_sha256, audit_sha256,
                        payload_json
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        record["event_id"],
                        record["task_id"],
                        record["created_at"],
                        record["previous_state"],
                        record["proposed_state"],
                        record["previous_event_sha256"],
                        record["audit_sha256"],
                        json.dumps(
                            record, ensure_ascii=False, sort_keys=True
                        ),
                    ),
                )
                imported["work_events"] += cursor.rowcount
            if attachment_manifest_path.exists():
                for line in attachment_manifest_path.read_text(
                    encoding="utf-8"
                ).splitlines():
                    try:
                        record = json.loads(line)
                    except json.JSONDecodeError:
                        continue
                    if (
                        not isinstance(record, dict)
                        or record.get("status")
                        != "LOCAL_STAGED_NOT_EVIDENCE"
                        or record.get("formal_effect") is not False
                        or not SHA256_PATTERN.fullmatch(
                            str(record.get("sha256", ""))
                        )
                    ):
                        continue
                    cursor = connection.execute(
                        """
                        INSERT OR IGNORE INTO attachments(
                            attachment_id, task_id, created_at, sha256,
                            stored_relative_path, payload_json
                        ) VALUES (?, ?, ?, ?, ?, ?)
                        """,
                        (
                            record["attachment_id"],
                            record["task_id"],
                            record["created_at"],
                            record["sha256"],
                            record["stored_relative_path"],
                            json.dumps(
                                record, ensure_ascii=False, sort_keys=True
                            ),
                        ),
                    )
                    imported["attachments"] += cursor.rowcount
            connection.commit()
    return imported


def create_pilot_backup(
    database_path: Path,
    attachment_directory: Path,
    output_path: Path,
) -> dict[str, Any]:
    """Create a verifiable ZIP from a consistent database snapshot."""
    if output_path.suffix.lower() != ".zip":
        raise ValueError("A pilotmentés kimenete .zip fájl legyen.")
    database = PilotDatabase(database_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as temporary:
        staging = Path(temporary)
        database_copy = staging / "pilot.db"
        database.backup_to(database_copy)
        files: list[tuple[Path, str]] = [(database_copy, "pilot.db")]
        if attachment_directory.exists():
            for source in sorted(
                path
                for path in attachment_directory.rglob("*")
                if path.is_file()
            ):
                files.append(
                    (
                        source,
                        "attachments/"
                        + source.relative_to(attachment_directory).as_posix(),
                    )
                )
        manifest = {
            "schema_version": 1,
            "created_at": datetime.now(timezone.utc).isoformat(),
            "status": "NON_FORMAL_PILOT_BACKUP",
            "formal_effect": False,
            "files": [
                {
                    "path": archive_name,
                    "size_bytes": source.stat().st_size,
                    "sha256": hashlib.sha256(source.read_bytes()).hexdigest(),
                }
                for source, archive_name in files
            ],
        }
        manifest_path = staging / "backup_manifest.json"
        manifest_path.write_text(
            json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        with zipfile.ZipFile(
            output_path, "w", compression=zipfile.ZIP_DEFLATED
        ) as archive:
            archive.write(manifest_path, "backup_manifest.json")
            for source, archive_name in files:
                archive.write(source, archive_name)
    manifest["archive_sha256"] = hashlib.sha256(
        output_path.read_bytes()
    ).hexdigest()
    return manifest


def verify_pilot_backup(path: Path) -> dict[str, Any]:
    """Validate archive paths, manifest hashes and the SQLite snapshot."""
    with zipfile.ZipFile(path, "r") as archive:
        names = archive.namelist()
        if (
            "backup_manifest.json" not in names
            or "pilot.db" not in names
            or any(
                name.startswith("/")
                or ".." in Path(name).parts
                or "\\" in name
                for name in names
            )
        ):
            raise ValueError("A pilotmentés szerkezete nem biztonságos.")
        manifest = json.loads(
            archive.read("backup_manifest.json").decode("utf-8")
        )
        for item in manifest.get("files", []):
            content = archive.read(str(item["path"]))
            if (
                len(content) != item["size_bytes"]
                or hashlib.sha256(content).hexdigest() != item["sha256"]
            ):
                raise ValueError(
                    f"A pilotmentés sérült: {item.get('path', '')}."
                )
        with tempfile.TemporaryDirectory() as temporary:
            database_copy = Path(temporary) / "pilot.db"
            database_copy.write_bytes(archive.read("pilot.db"))
            with closing(_connect(database_copy)) as connection:
                result = connection.execute(
                    "PRAGMA integrity_check"
                ).fetchone()[0]
            if result != "ok":
                raise ValueError("A mentett SQLite-adatbázis sérült.")
    return {
        "status": "VALID",
        "file_count": len(manifest["files"]),
        "archive_sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
        "formal_effect": False,
    }
