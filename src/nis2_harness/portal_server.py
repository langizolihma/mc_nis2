"""Loopback-only HTTP server for the local NIS2 portal MVP."""

from __future__ import annotations

from datetime import date
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
from pathlib import Path
from typing import Any, Callable
from urllib.parse import urlparse

from .portal import ReviewDraftStore, build_live_snapshot, load_actions, validate_review_draft


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


def make_handler(root: Path, store: ReviewDraftStore, today: Callable[[], date] = date.today) -> type[BaseHTTPRequestHandler]:
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
                self._json(HTTPStatus.OK, build_live_snapshot(root, store, today()))
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
            if urlparse(self.path).path != "/api/review-drafts":
                self._json(HTTPStatus.NOT_FOUND, {"error": "NOT_FOUND"})
                return
            if _kill_switch_engaged(root):
                self._json(HTTPStatus.SERVICE_UNAVAILABLE, {"error": "KILL_SWITCH_ENGAGED"})
                return
            try:
                length = int(self.headers.get("Content-Length", "0"))
            except ValueError:
                length = 0
            if length <= 0 or length > MAX_REQUEST_BYTES:
                self._json(HTTPStatus.REQUEST_ENTITY_TOO_LARGE, {"error": "INVALID_REQUEST_SIZE"})
                return
            try:
                payload = json.loads(self.rfile.read(length).decode("utf-8"))
            except (UnicodeDecodeError, json.JSONDecodeError):
                self._json(HTTPStatus.BAD_REQUEST, {"error": "INVALID_JSON"})
                return
            actions = {item["action_id"]: item for item in load_actions(root / "data" / "actions.csv")}
            errors = validate_review_draft(payload, actions)
            if errors:
                self._json(HTTPStatus.BAD_REQUEST, {"error": "VALIDATION_FAILED", "details": errors})
                return
            record = store.append(payload)
            self._json(HTTPStatus.CREATED, {"record": record, "warning": "A review-tervezetnek nincs formális jóváhagyási hatása."})

        def log_message(self, format: str, *args: object) -> None:
            return

    return PortalHandler


def serve_portal(root: Path, host: str, port: int) -> None:
    """Run the MVP only on a loopback interface."""
    if host not in {"127.0.0.1", "localhost", "::1"}:
        raise ValueError("Az MVP csak loopback címen indítható; belső hálózati közzétételhez G2/G3 jóváhagyás szükséges.")
    store = ReviewDraftStore(root / "portal_runtime" / "review_drafts.jsonl")
    server = ThreadingHTTPServer((host, port), make_handler(root, store))
    print(f"NIS2 local portal MVP: http://{host}:{server.server_port}")
    print("A review-tervezetek nem formális jóváhagyások. Leállítás: Ctrl+C")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
