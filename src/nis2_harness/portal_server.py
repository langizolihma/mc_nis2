"""Loopback-only HTTP server for the local NIS2 portal MVP."""

from __future__ import annotations

from datetime import date
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
from pathlib import Path
from typing import Any, Callable
from urllib.parse import urlparse
from urllib.parse import unquote

from .deadline_reconciliation import validate_deadline_reconciliation
from .portal import (
    ReconciliationDraftStore,
    ReviewDraftStore,
    build_live_snapshot,
    load_actions,
    validate_reconciliation_draft,
    validate_review_draft,
)
from .registry import load_actions as load_action_records
from .task_workflow import (
    MAX_ATTACHMENT_BYTES,
    TaskAttachmentStore,
    TaskWorkflowDraftStore,
    current_pilot_states,
    load_pilot_config,
    validate_work_event,
)


MAX_REQUEST_BYTES = 16_384
STATIC_FILES = {
    "/": ("index.html", "text/html; charset=utf-8"),
    "/index.html": ("index.html", "text/html; charset=utf-8"),
    "/styles.css": ("styles.css", "text/css; charset=utf-8"),
    "/app.js": ("app.js", "text/javascript; charset=utf-8"),
    "/data/demo_data.js": ("data/demo_data.js", "text/javascript; charset=utf-8"),
}


def _kill_switch_engaged(root: Path) -> bool:
    path = root / "config" / "continuous_assurance_pilot.json"
    try:
        config = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return True
    return config.get("kill_switch", {}).get("engaged") is not False


def make_handler(
    root: Path,
    store: ReviewDraftStore,
    today: Callable[[], date] = date.today,
    reconciliation_store: ReconciliationDraftStore | None = None,
    task_workflow_store: TaskWorkflowDraftStore | None = None,
    task_attachment_store: TaskAttachmentStore | None = None,
) -> type[BaseHTTPRequestHandler]:
    portal_dir = root / "portal_demo"

    class PortalHandler(BaseHTTPRequestHandler):
        server_version = "NIS2LocalPortal/0.1"

        def _headers(self, status: int, content_type: str, length: int) -> None:
            self.send_response(status)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(length))
            self.send_header("Cache-Control", "no-store")
            self.send_header("X-Content-Type-Options", "nosniff")
            self.send_header("X-Frame-Options", "DENY")
            self.send_header("Referrer-Policy", "no-referrer")
            self.send_header("Content-Security-Policy", "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'")
            self.end_headers()

        def _json(self, status: int, payload: dict[str, Any]) -> None:
            body = (json.dumps(payload, ensure_ascii=False, sort_keys=True) + "\n").encode("utf-8")
            self._headers(status, "application/json; charset=utf-8", len(body))
            self.wfile.write(body)

        def do_GET(self) -> None:  # noqa: N802
            path = urlparse(self.path).path
            if path == "/api/health":
                self._json(HTTPStatus.OK, {"status": "OK", "mode": "LOCAL_LOOPBACK_MVP", "kill_switch_engaged": _kill_switch_engaged(root), "authentication": "NOT_CONFIGURED"})
                return
            if path == "/api/snapshot":
                self._json(
                    HTTPStatus.OK,
                    build_live_snapshot(
                        root,
                        store,
                        today(),
                        reconciliation_store,
                        task_workflow_store,
                        task_attachment_store,
                    ),
                )
                return
            if path.startswith("/api/task-materials/"):
                parts = path.split("/")
                if len(parts) != 5:
                    self._json(HTTPStatus.NOT_FOUND, {"error": "NOT_FOUND"})
                    return
                task_id, filename = parts[3], unquote(parts[4])
                try:
                    config = load_pilot_config(
                        root / "data" / "human_task_pilot.json"
                    )
                    material = next(
                        item
                        for task in config["tasks"]
                        if task["task_id"] == task_id
                        for item in task["materials"]
                        if item["filename"] == filename
                    )
                    file_path = root / str(material["path"])
                    body = file_path.read_bytes()
                except (OSError, StopIteration, ValueError, json.JSONDecodeError):
                    self._json(
                        HTTPStatus.NOT_FOUND,
                        {"error": "TASK_MATERIAL_NOT_FOUND"},
                    )
                    return
                self.send_response(HTTPStatus.OK)
                self.send_header(
                    "Content-Type",
                    "application/vnd.openxmlformats-officedocument."
                    "wordprocessingml.document",
                )
                self.send_header("Content-Length", str(len(body)))
                self.send_header(
                    "Content-Disposition",
                    f'attachment; filename="{filename}"',
                )
                self.send_header("Cache-Control", "no-store")
                self.send_header("X-Content-Type-Options", "nosniff")
                self.end_headers()
                self.wfile.write(body)
                return
            if path.startswith("/api/task-attachments/"):
                parts = path.split("/")
                if len(parts) != 5 or task_attachment_store is None:
                    self._json(HTTPStatus.NOT_FOUND, {"error": "NOT_FOUND"})
                    return
                task_id, attachment_id = unquote(parts[3]), unquote(parts[4])
                try:
                    record = next(
                        item
                        for item in task_attachment_store.load()
                        if item.get("task_id") == task_id
                        and item.get("attachment_id") == attachment_id
                    )
                    file_path = (
                        task_attachment_store.directory
                        / str(record["stored_relative_path"])
                    )
                    body = file_path.read_bytes()
                    filename = str(record["filename"])
                    content_type = str(
                        record.get(
                            "content_type",
                            "application/octet-stream",
                        )
                    )
                except (OSError, StopIteration, ValueError):
                    self._json(
                        HTTPStatus.NOT_FOUND,
                        {"error": "TASK_ATTACHMENT_NOT_FOUND"},
                    )
                    return
                self.send_response(HTTPStatus.OK)
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Length", str(len(body)))
                self.send_header(
                    "Content-Disposition",
                    f'attachment; filename="{filename}"',
                )
                self.send_header("Cache-Control", "no-store")
                self.send_header("X-Content-Type-Options", "nosniff")
                self.end_headers()
                self.wfile.write(body)
                return
            static = STATIC_FILES.get(path)
            if static is None:
                self._json(HTTPStatus.NOT_FOUND, {"error": "NOT_FOUND"})
                return
            relative, content_type = static
            file_path = portal_dir / relative
            if not file_path.is_file():
                self._json(HTTPStatus.NOT_FOUND, {"error": "ASSET_NOT_FOUND"})
                return
            body = file_path.read_bytes()
            self._headers(HTTPStatus.OK, content_type, len(body))
            self.wfile.write(body)

        def do_POST(self) -> None:  # noqa: N802
            path = urlparse(self.path).path
            is_attachment = path.startswith("/api/task-attachments/")
            if path not in {
                "/api/review-drafts",
                "/api/reconciliation-drafts",
                "/api/task-work-events",
            } and not is_attachment:
                self._json(HTTPStatus.NOT_FOUND, {"error": "NOT_FOUND"})
                return
            if _kill_switch_engaged(root):
                self._json(HTTPStatus.SERVICE_UNAVAILABLE, {"error": "KILL_SWITCH_ENGAGED"})
                return
            try:
                length = int(self.headers.get("Content-Length", "0"))
            except ValueError:
                length = 0
            max_size = MAX_ATTACHMENT_BYTES if is_attachment else MAX_REQUEST_BYTES
            if length <= 0 or length > max_size:
                self._json(HTTPStatus.REQUEST_ENTITY_TOO_LARGE, {"error": "INVALID_REQUEST_SIZE"})
                return
            if is_attachment:
                if task_attachment_store is None:
                    self._json(
                        HTTPStatus.SERVICE_UNAVAILABLE,
                        {"error": "TASK_ATTACHMENT_STORE_NOT_CONFIGURED"},
                    )
                    return
                task_id = unquote(path.removeprefix("/api/task-attachments/"))
                filename = unquote(self.headers.get("X-Filename", ""))
                content_type = self.headers.get(
                    "Content-Type", "application/octet-stream"
                )
                try:
                    config = load_pilot_config(
                        root / "data" / "human_task_pilot.json"
                    )
                    task_ids = {
                        str(item["task_id"]) for item in config["tasks"]
                    }
                    record = task_attachment_store.append(
                        task_id,
                        filename,
                        content_type,
                        self.rfile.read(length),
                        task_ids,
                    )
                except (OSError, ValueError, json.JSONDecodeError) as error:
                    self._json(
                        HTTPStatus.BAD_REQUEST,
                        {
                            "error": "ATTACHMENT_REJECTED",
                            "details": [str(error)],
                        },
                    )
                    return
                self._json(
                    HTTPStatus.CREATED,
                    {
                        "record": record,
                        "warning": (
                            "A csatolmány csak helyi előkészített munkapéldány. "
                            "A formális evidenciához SharePoint-feltöltés és "
                            "emberi review szükséges."
                        ),
                    },
                )
                return
            try:
                payload = json.loads(self.rfile.read(length).decode("utf-8"))
            except (UnicodeDecodeError, json.JSONDecodeError):
                self._json(HTTPStatus.BAD_REQUEST, {"error": "INVALID_JSON"})
                return
            if path == "/api/review-drafts":
                actions = {
                    item["action_id"]: item
                    for item in load_actions(root / "data" / "actions.csv")
                }
                errors = validate_review_draft(payload, actions)
                if errors:
                    self._json(
                        HTTPStatus.BAD_REQUEST,
                        {"error": "VALIDATION_FAILED", "details": errors},
                    )
                    return
                record = store.append(payload)
                self._json(
                    HTTPStatus.CREATED,
                    {
                        "record": record,
                        "warning": (
                            "A review-tervezetnek nincs formális "
                            "jóváhagyási hatása."
                        ),
                    },
                )
                return
            if path == "/api/task-work-events":
                if task_workflow_store is None:
                    self._json(
                        HTTPStatus.SERVICE_UNAVAILABLE,
                        {"error": "TASK_WORKFLOW_STORE_NOT_CONFIGURED"},
                    )
                    return
                try:
                    config = load_pilot_config(
                        root / "data" / "human_task_pilot.json"
                    )
                    task_ids = {
                        str(item["task_id"]) for item in config["tasks"]
                    }
                    events = task_workflow_store.load()
                    states = current_pilot_states(task_ids, events)
                except (OSError, ValueError, json.JSONDecodeError):
                    self._json(
                        HTTPStatus.SERVICE_UNAVAILABLE,
                        {"error": "TASK_WORKFLOW_SOURCE_INVALID"},
                    )
                    return
                errors = validate_work_event(payload, task_ids, states)
                if errors:
                    self._json(
                        HTTPStatus.BAD_REQUEST,
                        {"error": "VALIDATION_FAILED", "details": errors},
                    )
                    return
                task_id = str(payload["task_id"]).strip()
                try:
                    record = task_workflow_store.append(
                        payload,
                        states[task_id],
                    )
                except ValueError as error:
                    self._json(
                        HTTPStatus.CONFLICT,
                        {
                            "error": "STALE_TASK_STATE",
                            "details": [str(error)],
                        },
                    )
                    return
                self._json(
                    HTTPStatus.CREATED,
                    {
                        "record": record,
                        "warning": (
                            "A pilot munkafolyamat-esemény nem módosítja a "
                            "kanonikus emberi feladatot és nem jóváhagyás."
                        ),
                    },
                )
                return
            if reconciliation_store is None:
                self._json(
                    HTTPStatus.SERVICE_UNAVAILABLE,
                    {"error": "RECONCILIATION_STORE_NOT_CONFIGURED"},
                )
                return
            try:
                reconciliation = json.loads(
                    (
                        root / "data" / "deadline_reconciliation.json"
                    ).read_text(encoding="utf-8")
                )
                if reconciliation.get("formal_effect") is not False:
                    raise ValueError
                records = reconciliation.get("records", [])
                if not isinstance(records, list):
                    raise ValueError
                validation = validate_deadline_reconciliation(
                    reconciliation,
                    load_action_records(root / "data" / "actions.csv"),
                )
                if validation.errors:
                    raise ValueError
                known_records = {
                    str(item.get("action_id", "")): item
                    for item in records
                    if isinstance(item, dict)
                }
                reconciliation_date = date.fromisoformat(
                    str(reconciliation.get("as_of", ""))
                )
            except (OSError, ValueError, json.JSONDecodeError):
                self._json(
                    HTTPStatus.SERVICE_UNAVAILABLE,
                    {"error": "RECONCILIATION_SOURCE_INVALID"},
                )
                return
            errors = validate_reconciliation_draft(
                payload,
                known_records,
                max(reconciliation_date, today()),
            )
            if errors:
                self._json(
                    HTTPStatus.BAD_REQUEST,
                    {"error": "VALIDATION_FAILED", "details": errors},
                )
                return
            record = reconciliation_store.append(payload)
            self._json(
                HTTPStatus.CREATED,
                {
                    "record": record,
                    "warning": (
                        "Az egyeztetési tervezet nem módosítja az akció "
                        "státuszát vagy céldátumát."
                    ),
                },
            )

        def log_message(self, format: str, *args: object) -> None:
            return

    return PortalHandler


def serve_portal(root: Path, host: str, port: int) -> None:
    """Run the MVP only on a loopback interface."""
    if host not in {"127.0.0.1", "localhost", "::1"}:
        raise ValueError("Az MVP csak loopback címen indítható; belső hálózati közzétételhez G2/G3 jóváhagyás szükséges.")
    store = ReviewDraftStore(root / "portal_runtime" / "review_drafts.jsonl")
    reconciliation_store = ReconciliationDraftStore(
        root / "portal_runtime" / "deadline_reconciliation_drafts.jsonl"
    )
    from .pilot_storage import (
        PilotDatabase,
        SqliteTaskAttachmentStore,
        SqliteTaskWorkflowStore,
        migrate_jsonl_runtime,
    )

    runtime = root / "portal_runtime"
    database = PilotDatabase(runtime / "pilot.db")
    attachment_directory = runtime / "attachments"
    imported = migrate_jsonl_runtime(
        database,
        runtime / "task_workflow_events.jsonl",
        attachment_directory / "attachment_manifest.jsonl",
    )
    task_workflow_store = SqliteTaskWorkflowStore(database)
    task_attachment_store = SqliteTaskAttachmentStore(
        database, attachment_directory
    )
    server = ThreadingHTTPServer(
        (host, port),
        make_handler(
            root,
            store,
            reconciliation_store=reconciliation_store,
            task_workflow_store=task_workflow_store,
            task_attachment_store=task_attachment_store,
        ),
    )
    print(f"NIS2 local portal MVP: http://{host}:{server.server_port}")
    if any(imported.values()):
        print(
            "Korábbi helyi adatok átvéve SQLite-ba: "
            f"{imported['work_events']} esemény, "
            f"{imported['attachments']} csatolmány."
        )
    print(
        "A munkafolyamat-, review- és státusztervezetek nem formális "
        "jóváhagyások. Leállítás: Ctrl+C"
    )
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
