"""Validated read-only projection of the SharePoint human-task list."""

from __future__ import annotations

import json
from pathlib import Path
import re
from typing import Any
from urllib.parse import urlparse


EXPECTED_MODE = "READ_ONLY_CONNECTOR_SNAPSHOT"


def load_sharepoint_snapshot(path: Path, allowed_host: str) -> dict[str, Any]:
    """Load and validate a non-authoritative SharePoint link snapshot."""
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        raise ValueError(f"Hibás SharePoint snapshot JSON: {path}") from exc
    if not isinstance(payload, dict):
        raise ValueError("A SharePoint snapshot gyökere JSON objektum legyen.")
    if payload.get("schema_version") != "1.0":
        raise ValueError("Ismeretlen SharePoint snapshot schema_version.")
    if payload.get("mode") != EXPECTED_MODE:
        raise ValueError("A SharePoint snapshot csak read-only connector módban használható.")
    if payload.get("formal_effect") is not False or payload.get("write_back_allowed") is not False:
        raise ValueError("A SharePoint snapshot nem engedhet formális vagy write-back hatást.")

    tasks = payload.get("tasks")
    if not isinstance(tasks, list):
        raise ValueError("A SharePoint snapshot tasks mezője lista legyen.")
    seen: set[str] = set()
    for index, item in enumerate(tasks):
        if not isinstance(item, dict):
            raise ValueError(f"A SharePoint snapshot {index}. tétele objektum legyen.")
        task_id = str(item.get("id", "")).strip()
        label = str(item.get("evidence_label", "")).strip()
        url = str(item.get("evidence_url", "")).strip()
        if re.fullmatch(r"DEF-\d{3}", task_id) is None:
            raise ValueError(f"Hibás SharePoint feladatazonosító: {task_id or '<üres>'}.")
        if task_id in seen:
            raise ValueError(f"Duplikált SharePoint feladatazonosító: {task_id}.")
        seen.add(task_id)
        parsed = urlparse(url)
        if parsed.scheme != "https" or parsed.hostname != allowed_host:
            raise ValueError(f"A(z) {task_id} hivatkozása nem az engedélyezett SharePoint hostra mutat.")
        if not parsed.path.startswith("/sites/NIS2/"):
            raise ValueError(f"A(z) {task_id} hivatkozása kívül esik a jóváhagyott NIS2 webhelyen.")
        if not label or len(label) > 160:
            raise ValueError(f"A(z) {task_id} hivatkozásfelirata hiányzik vagy túl hosszú.")
    return payload


def project_sharepoint_tasks(
    deferred: list[dict[str, str]],
    snapshot: dict[str, Any],
) -> list[dict[str, Any]]:
    """Merge canonical local DEF records with connector-derived links."""
    links = {str(item["id"]): item for item in snapshot["tasks"]}
    deferred_ids = {item["id"] for item in deferred}
    missing = sorted(deferred_ids - links.keys())
    unexpected = sorted(links.keys() - deferred_ids)
    if missing or unexpected:
        details = []
        if missing:
            details.append("hiányzik: " + ", ".join(missing))
        if unexpected:
            details.append("ismeretlen: " + ", ".join(unexpected))
        raise ValueError("A SharePoint snapshot DEF-lefedettsége hibás (" + "; ".join(details) + ").")

    projected: list[dict[str, Any]] = []
    for item in deferred:
        link = links[item["id"]]
        projected.append({
            **item,
            "evidence_url": str(link["evidence_url"]),
            "evidence_label": str(link["evidence_label"]),
            "sharepoint_status": str(link.get("status", "Nyitott")),
            "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
            "formal_effect": False,
            "write_back_allowed": False,
        })
    return projected


def load_sharepoint_projection(
    root: Path,
    deferred: list[dict[str, str]],
) -> tuple[list[dict[str, Any]], dict[str, Any]]:
    """Load the configured local snapshot or fail safely without network access."""
    config_path = root / "config" / "sharepoint_integration.json"
    if not config_path.exists():
        return [], {"status": "NOT_CONFIGURED", "write_back_allowed": False}
    config = json.loads(config_path.read_text(encoding="utf-8"))
    if config.get("network_allowed") is not False or config.get("write_back_allowed") is not False:
        raise ValueError("A H-002 SharePoint adapter csak hálózat- és write-back-tiltással indulhat.")
    resolved_root = root.resolve()
    snapshot_path = (resolved_root / str(config.get("snapshot_path", ""))).resolve()
    try:
        snapshot_path.relative_to(resolved_root)
    except ValueError as exc:
        raise ValueError("A SharePoint snapshot útvonala kívül esik a projekt gyökerén.") from exc
    allowed_host = str(config.get("allowed_host", "")).strip()
    snapshot = load_sharepoint_snapshot(snapshot_path, allowed_host)
    tasks = project_sharepoint_tasks(deferred, snapshot)
    return tasks, {
        "status": "READ_ONLY_SNAPSHOT_ACTIVE",
        "mode": snapshot["mode"],
        "site_url": snapshot.get("site_url", ""),
        "list_url": snapshot.get("list_url", ""),
        "captured_at": snapshot.get("captured_at", ""),
        "task_count": len(tasks),
        "network_allowed": False,
        "write_back_allowed": False,
        "formal_effect": False,
    }
