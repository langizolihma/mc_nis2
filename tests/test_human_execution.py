from __future__ import annotations

from copy import deepcopy
from datetime import date
import hashlib
import json
from pathlib import Path
import tempfile
import unittest

from nis2_harness.cli import main
from nis2_harness.human_execution import (
    build_human_execution_package,
    render_human_execution_package,
)
from nis2_harness.portal import load_deferred


ROOT = Path(__file__).resolve().parents[1]
LOG = ROOT / "DEFERRED_EVIDENCE_LOG.md"


class HumanExecutionPackageTests(unittest.TestCase):
    def setUp(self) -> None:
        self.records = load_deferred(LOG)

    def test_current_log_is_fully_and_uniquely_covered(self) -> None:
        package = build_human_execution_package(
            self.records,
            LOG,
            date(2026, 7, 29),
        )
        task_ids = [
            task["task_id"]
            for wave in package["waves"]
            for task in wave["tasks"]
        ]
        self.assertEqual(36, len(task_ids))
        self.assertEqual(
            sorted(
                record["id"] for record in self.records
                if record["status"] != "CLOSED_ACCEPTED"
            ),
            sorted(task_ids),
        )
        self.assertEqual(35, package["summary"]["open_deferred_count"])
        self.assertEqual(1, package["summary"]["accepted_risk_count"])
        self.assertEqual(1, package["summary"]["closed_accepted_count"])

    def test_governance_and_submission_tasks_follow_declared_waves(self) -> None:
        package = build_human_execution_package(
            self.records,
            LOG,
            date(2026, 7, 29),
        )
        wave_by_task = {
            task["task_id"]: wave["wave_id"]
            for wave in package["waves"]
            for task in wave["tasks"]
        }
        self.assertNotIn("DEF-001", wave_by_task)
        self.assertEqual("W6", wave_by_task["DEF-014"])
        self.assertEqual("W7", wave_by_task["DEF-012"])

    def test_package_never_marks_human_tasks_complete(self) -> None:
        package = build_human_execution_package(
            self.records,
            LOG,
            date(2026, 7, 29),
        )
        serialized = json.dumps(package)
        self.assertNotIn('"status": "DONE"', serialized)
        self.assertTrue(all(
            task["automatic_completion_allowed"] is False
            for wave in package["waves"]
            for task in wave["tasks"]
        ))

    def test_duplicate_task_is_rejected(self) -> None:
        records = deepcopy(self.records)
        records.append(deepcopy(records[0]))
        with self.assertRaisesRegex(ValueError, "Duplikált"):
            build_human_execution_package(records, LOG, date(2026, 7, 29))

    def test_source_hash_is_bound_to_deferred_log(self) -> None:
        package = build_human_execution_package(
            self.records,
            LOG,
            date(2026, 7, 29),
        )
        self.assertEqual(64, len(package["source_sha256"]))
        self.assertIn(
            "Egyetlen tételt sem jelöl teljesítettnek",
            render_human_execution_package(package),
        )

    def test_cli_writes_json_and_markdown_package(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            json_output = root / "human-tasks.json"
            markdown_output = root / "human-tasks.md"
            self.assertEqual(0, main([
                "build-human-execution-package",
                "--deferred-log", str(LOG),
                "--as-of", "2026-07-29",
                "--json-output", str(json_output),
                "--markdown-output", str(markdown_output),
            ]))
            data = json.loads(json_output.read_text(encoding="utf-8"))
            self.assertEqual(36, data["summary"]["task_count"])
            self.assertTrue(markdown_output.exists())

    def test_checked_in_package_matches_current_deferred_log(self) -> None:
        data = json.loads(
            (ROOT / "data" / "human_execution_package.json").read_text(
                encoding="utf-8"
            )
        )
        self.assertEqual(
            hashlib.sha256(LOG.read_bytes()).hexdigest(),
            data["source_sha256"],
        )
        self.assertEqual(
            sum(record["status"] != "CLOSED_ACCEPTED" for record in self.records),
            data["summary"]["task_count"],
        )


if __name__ == "__main__":
    unittest.main()
