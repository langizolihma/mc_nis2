from __future__ import annotations

import copy
import json
from pathlib import Path
import tempfile
import unittest

from nis2_harness.portal import load_deferred
from nis2_harness.sharepoint_snapshot import (
    load_sharepoint_projection,
    load_sharepoint_snapshot,
    project_sharepoint_tasks,
)


ROOT = Path(__file__).parents[1]


class SharePointSnapshotTests(unittest.TestCase):
    def setUp(self) -> None:
        self.snapshot_path = ROOT / "data" / "sharepoint_task_snapshot.json"
        self.deferred = load_deferred(ROOT / "DEFERRED_EVIDENCE_LOG.md")
        self.payload = json.loads(self.snapshot_path.read_text(encoding="utf-8"))

    def _write_payload(self, payload: dict[str, object]) -> Path:
        temp = tempfile.NamedTemporaryFile(mode="w", suffix=".json", encoding="utf-8", delete=False)
        with temp:
            json.dump(payload, temp, ensure_ascii=False)
        return Path(temp.name)

    def test_current_snapshot_covers_every_deferred_task(self) -> None:
        snapshot = load_sharepoint_snapshot(self.snapshot_path, "metalcom.sharepoint.com")
        projected = project_sharepoint_tasks(self.deferred, snapshot)
        self.assertEqual(39, len(projected))
        self.assertEqual([item["id"] for item in self.deferred], [item["id"] for item in projected])
        linked = [item for item in projected if item["evidence_url"]]
        self.assertEqual(39, len(linked))
        self.assertTrue(all(item["evidence_url"].startswith("https://metalcom.sharepoint.com/sites/NIS2/") for item in linked))
        self.assertEqual(39, len(projected))
        self.assertTrue(all(item["evidence_url"] for item in projected))
        self.assertEqual(
            "SRC-009 kontrollkatalógus G1 review célmappája",
            next(item["evidence_label"] for item in projected if item["id"] == "DEF-036"),
        )
        self.assertTrue(all(item["formal_effect"] is False for item in projected))
        self.assertTrue(all(item["write_back_allowed"] is False for item in projected))

    def test_wrong_host_and_non_https_are_rejected(self) -> None:
        for bad_url in (
            "https://example.com/sites/NIS2/file",
            "http://metalcom.sharepoint.com/sites/NIS2/file",
        ):
            payload = copy.deepcopy(self.payload)
            payload["tasks"][0]["evidence_url"] = bad_url
            path = self._write_payload(payload)
            try:
                with self.assertRaisesRegex(ValueError, "engedélyezett SharePoint host"):
                    load_sharepoint_snapshot(path, "metalcom.sharepoint.com")
            finally:
                path.unlink(missing_ok=True)

    def test_duplicate_identifier_is_rejected(self) -> None:
        payload = copy.deepcopy(self.payload)
        payload["tasks"][1]["id"] = payload["tasks"][0]["id"]
        path = self._write_payload(payload)
        try:
            with self.assertRaisesRegex(ValueError, "Duplikált"):
                load_sharepoint_snapshot(path, "metalcom.sharepoint.com")
        finally:
            path.unlink(missing_ok=True)

    def test_missing_snapshot_link_remains_visible_but_unlinked(self) -> None:
        payload = copy.deepcopy(self.payload)
        payload["tasks"].pop()
        projected = project_sharepoint_tasks(self.deferred, payload)
        self.assertEqual("", projected[-1]["evidence_url"])
        self.assertEqual("LOCAL_DEFERRED_ONLY", projected[-1]["source"])

    def test_unexpected_snapshot_task_is_rejected(self) -> None:
        payload = copy.deepcopy(self.payload)
        payload["tasks"].append({
            "id": "DEF-999",
            "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/extra",
            "evidence_label": "Ismeretlen",
        })
        with self.assertRaisesRegex(ValueError, "ismeretlen DEF"):
            project_sharepoint_tasks(self.deferred, payload)

    def test_configured_projection_is_local_and_read_only(self) -> None:
        tasks, metadata = load_sharepoint_projection(ROOT, self.deferred)
        self.assertEqual(39, len(tasks))
        self.assertEqual("READ_ONLY_SNAPSHOT_ACTIVE", metadata["status"])
        self.assertEqual(39, metadata["linked_task_count"])
        self.assertEqual(0, metadata["unlinked_task_count"])
        self.assertFalse(metadata["network_allowed"])
        self.assertFalse(metadata["write_back_allowed"])
        self.assertFalse(metadata["formal_effect"])

    def test_snapshot_path_cannot_escape_project_root(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            (root / "config").mkdir()
            (root / "config" / "sharepoint_integration.json").write_text(
                json.dumps({
                    "snapshot_path": "../outside.json",
                    "allowed_host": "metalcom.sharepoint.com",
                    "network_allowed": False,
                    "write_back_allowed": False,
                }),
                encoding="utf-8",
            )
            with self.assertRaisesRegex(ValueError, "kívül esik"):
                load_sharepoint_projection(root, self.deferred)


if __name__ == "__main__":
    unittest.main()
