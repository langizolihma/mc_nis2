from __future__ import annotations

from datetime import datetime, timezone
import json
from pathlib import Path
import tempfile
import threading
import unittest

from nis2_harness.pilot_storage import (
    PilotDatabase,
    SqliteTaskAttachmentStore,
    SqliteTaskWorkflowStore,
    create_pilot_backup,
    migrate_jsonl_runtime,
    verify_pilot_backup,
)
from nis2_harness.task_workflow import TaskWorkflowDraftStore


NOW = datetime(2026, 7, 30, 10, 0, tzinfo=timezone.utc)


def _event(transition: str, note: str = "Előkészítve.") -> dict[str, str]:
    return {
        "task_id": "DEF-001",
        "actor_display": "Teszt Elek",
        "transition": transition,
        "note": note,
        "evidence_uri": "",
        "evidence_sha256": "",
    }


class PilotStorageTests(unittest.TestCase):
    def test_workflow_is_hash_chained_and_state_checked(self) -> None:
        with tempfile.TemporaryDirectory() as temporary:
            database = PilotDatabase(Path(temporary) / "pilot.db")
            store = SqliteTaskWorkflowStore(database, clock=lambda: NOW)
            first = store.append(_event("START_WORK"), "TODO")
            second = store.append(_event("SAVE_PROGRESS"), "IN_PROGRESS")
            self.assertEqual(second["previous_event_sha256"], first["audit_sha256"])
            self.assertEqual(len(store.load()), 2)
            with self.assertRaisesRegex(ValueError, "időközben"):
                store.append(_event("SAVE_PROGRESS"), "TODO")

    def test_concurrent_state_change_allows_only_one_writer(self) -> None:
        with tempfile.TemporaryDirectory() as temporary:
            database = PilotDatabase(Path(temporary) / "pilot.db")
            store = SqliteTaskWorkflowStore(database, clock=lambda: NOW)
            results: list[str] = []

            def write() -> None:
                try:
                    store.append(_event("START_WORK"), "TODO")
                    results.append("OK")
                except ValueError:
                    results.append("STALE")

            threads = [threading.Thread(target=write) for _ in range(2)]
            for thread in threads:
                thread.start()
            for thread in threads:
                thread.join()
            self.assertEqual(sorted(results), ["OK", "STALE"])
            self.assertEqual(len(store.load()), 1)

    def test_attachment_and_backup_are_verifiable(self) -> None:
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            database = PilotDatabase(root / "pilot.db")
            attachments = SqliteTaskAttachmentStore(
                database, root / "attachments", clock=lambda: NOW
            )
            record = attachments.append(
                "DEF-001",
                "aláírt.pdf",
                "application/pdf",
                b"%PDF-pilot",
                {"DEF-001"},
            )
            self.assertEqual(record["formal_effect"], False)
            self.assertEqual(len(attachments.load()), 1)
            archive = root / "backup.zip"
            manifest = create_pilot_backup(
                database.path, attachments.directory, archive
            )
            self.assertGreaterEqual(len(manifest["files"]), 2)
            verified = verify_pilot_backup(archive)
            self.assertEqual(verified["status"], "VALID")

    def test_valid_jsonl_migration_is_idempotent(self) -> None:
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            jsonl = root / "events.jsonl"
            legacy = TaskWorkflowDraftStore(jsonl, clock=lambda: NOW)
            legacy.append(_event("START_WORK"), "TODO")
            attachment_dir = root / "attachments"
            attachment_dir.mkdir()
            manifest = attachment_dir / "attachment_manifest.jsonl"
            manifest.write_text("", encoding="utf-8")
            database = PilotDatabase(root / "pilot.db")
            first = migrate_jsonl_runtime(database, jsonl, manifest)
            second = migrate_jsonl_runtime(database, jsonl, manifest)
            self.assertEqual(first["work_events"], 1)
            self.assertEqual(second["work_events"], 0)
            self.assertEqual(len(SqliteTaskWorkflowStore(database).load()), 1)


if __name__ == "__main__":
    unittest.main()

