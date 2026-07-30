from __future__ import annotations

from datetime import datetime, timezone
import json
from pathlib import Path
import tempfile
import unittest

from nis2_harness.cli import main
from nis2_harness.portal import ReconciliationDraftStore
from nis2_harness.reconciliation_review import (
    build_reconciliation_review_package,
    load_reconciliation_drafts,
    render_reconciliation_review_package,
)
from nis2_harness.registry import load_actions


ROOT = Path(__file__).resolve().parents[1]


class ReconciliationReviewTests(unittest.TestCase):
    def setUp(self) -> None:
        self.actions = load_actions(ROOT / "data" / "actions.csv")
        self.register = json.loads(
            (ROOT / "data" / "deadline_reconciliation.json").read_text(
                encoding="utf-8"
            )
        )
        self.known = {
            item["action_id"]: item for item in self.register["records"]
        }
        self.payload = {
            "action_id": "A-001",
            "actor_display": "Teszt Rögzítő",
            "outcome": "IN_PROGRESS",
            "actual_progress_summary": "A feladat végrehajtása folyamatban van.",
            "proposed_new_target_date": "",
            "evidence_uri": "",
            "evidence_sha256": "",
        }

    def _write_drafts(
        self,
        directory: Path,
        payloads: list[dict[str, str]],
    ) -> Path:
        moments = iter([
            datetime(2026, 7, 29, 8, 0, tzinfo=timezone.utc),
            datetime(2026, 7, 29, 9, 0, tzinfo=timezone.utc),
        ])
        path = directory / "drafts.jsonl"
        store = ReconciliationDraftStore(path, clock=lambda: next(moments))
        for payload in payloads:
            store.append(payload)
        return path

    def test_missing_log_builds_empty_pending_review_package(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            drafts = load_reconciliation_drafts(
                Path(temp) / "missing.jsonl",
                self.known,
                datetime.fromisoformat(self.register["as_of"]).date(),
            )
        package = build_reconciliation_review_package(
            self.register,
            self.actions,
            drafts,
        )
        self.assertEqual(0, package["summary"]["draft_count"])
        self.assertEqual(16, package["summary"]["actions_without_draft"])
        self.assertFalse(package["formal_effect"])

    def test_valid_draft_is_loaded_and_projected_for_human_review(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            path = self._write_drafts(Path(temp), [self.payload])
            drafts = load_reconciliation_drafts(
                path,
                self.known,
                datetime.fromisoformat(self.register["as_of"]).date(),
            )
        package = build_reconciliation_review_package(
            self.register,
            self.actions,
            drafts,
        )
        record = next(
            item for item in package["records"] if item["action_id"] == "A-001"
        )
        self.assertEqual(1, record["draft_count"])
        self.assertEqual("IN_PROGRESS", record["latest_draft"]["outcome"])
        self.assertEqual("PENDING_HUMAN_REVIEW", record["human_review_status"])
        self.assertFalse(record["latest_draft"]["formal_effect"])

    def test_different_proposals_are_reported_as_conflict(self) -> None:
        second = dict(
            self.payload,
            outcome="RESCHEDULE_REQUESTED",
            proposed_new_target_date="2026-08-15",
            actual_progress_summary="Új céldátum jóváhagyása szükséges.",
        )
        with tempfile.TemporaryDirectory() as temp:
            path = self._write_drafts(Path(temp), [self.payload, second])
            drafts = load_reconciliation_drafts(
                path,
                self.known,
                datetime.fromisoformat(self.register["as_of"]).date(),
            )
        package = build_reconciliation_review_package(
            self.register,
            self.actions,
            drafts,
        )
        record = next(
            item for item in package["records"] if item["action_id"] == "A-001"
        )
        self.assertTrue(record["conflict"])
        self.assertEqual("CONFLICT_REQUIRES_REVIEW", record["human_review_status"])
        self.assertEqual(1, package["summary"]["conflict_count"])
        self.assertIn(
            "automatikus kiválasztás tilos",
            render_reconciliation_review_package(package),
        )

    def test_tampered_hash_is_rejected(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            path = self._write_drafts(Path(temp), [self.payload])
            record = json.loads(path.read_text(encoding="utf-8"))
            record["actual_progress_summary"] = "Csendben átírt tartalom."
            path.write_text(
                json.dumps(record, ensure_ascii=False) + "\n",
                encoding="utf-8",
            )
            with self.assertRaisesRegex(ValueError, "audit_sha256"):
                load_reconciliation_drafts(
                    path,
                    self.known,
                    datetime.fromisoformat(self.register["as_of"]).date(),
                )

    def test_unhashed_extra_field_is_rejected(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            path = self._write_drafts(Path(temp), [self.payload])
            record = json.loads(path.read_text(encoding="utf-8"))
            record["approved"] = True
            path.write_text(
                json.dumps(record, ensure_ascii=False) + "\n",
                encoding="utf-8",
            )
            with self.assertRaisesRegex(ValueError, "mezőkészlete"):
                load_reconciliation_drafts(
                    path,
                    self.known,
                    datetime.fromisoformat(self.register["as_of"]).date(),
                )

    def test_package_is_deterministic_for_input_order(self) -> None:
        second = dict(
            self.payload,
            action_id="A-003",
            actual_progress_summary="Az A-003 feladat folyamatban van.",
        )
        with tempfile.TemporaryDirectory() as temp:
            path = self._write_drafts(Path(temp), [self.payload, second])
            drafts = load_reconciliation_drafts(
                path,
                self.known,
                datetime.fromisoformat(self.register["as_of"]).date(),
            )
        first = build_reconciliation_review_package(
            self.register,
            self.actions,
            drafts,
        )
        second_package = build_reconciliation_review_package(
            self.register,
            self.actions,
            list(reversed(drafts)),
        )
        self.assertEqual(first, second_package)

    def test_cli_builds_empty_baseline_when_runtime_log_is_absent(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            json_output = root / "review.json"
            markdown_output = root / "review.md"
            exit_code = main([
                "build-reconciliation-review-package",
                "--actions", str(ROOT / "data" / "actions.csv"),
                "--register",
                str(ROOT / "data" / "deadline_reconciliation.json"),
                "--drafts", str(root / "missing.jsonl"),
                "--allow-missing-drafts",
                "--json-output", str(json_output),
                "--markdown-output", str(markdown_output),
            ])
            self.assertEqual(0, exit_code)
            output = json.loads(json_output.read_text(encoding="utf-8"))
            self.assertEqual(0, output["summary"]["draft_count"])
            self.assertIn("Formális hatás", markdown_output.read_text("utf-8"))

    def test_cli_fails_closed_for_missing_runtime_log_by_default(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            exit_code = main([
                "build-reconciliation-review-package",
                "--actions", str(ROOT / "data" / "actions.csv"),
                "--register",
                str(ROOT / "data" / "deadline_reconciliation.json"),
                "--drafts", str(root / "missing.jsonl"),
                "--json-output", str(root / "review.json"),
                "--markdown-output", str(root / "review.md"),
            ])
            self.assertEqual(2, exit_code)
            self.assertFalse((root / "review.json").exists())


if __name__ == "__main__":
    unittest.main()
