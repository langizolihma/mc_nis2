from __future__ import annotations

from datetime import datetime, timezone
import json
from pathlib import Path
import tempfile
import unittest

from nis2_harness.task_workflow import (
    TaskAttachmentStore,
    TaskWorkflowDraftStore,
    build_pilot_projection,
    current_pilot_states,
    load_pilot_config,
    validate_work_event,
)


ROOT = Path(__file__).parents[1]


class TaskWorkflowTests(unittest.TestCase):
    def setUp(self) -> None:
        self.config = load_pilot_config(
            ROOT / "data" / "human_task_pilot.json"
        )
        self.task_ids = {
            str(item["task_id"]) for item in self.config["tasks"]
        }
        self.valid_start = {
            "task_id": "DEF-002",
            "actor_display": "Pásztor András",
            "transition": "START_WORK",
            "note": "A kapcsolódó dokumentumok ellenőrzése megkezdődött.",
            "evidence_uri": "",
            "evidence_sha256": "",
        }

    def test_checked_in_pilot_has_five_real_human_tasks(self) -> None:
        self.assertEqual(5, len(self.config["tasks"]))
        package = json.loads(
            (ROOT / "data" / "human_execution_package.json").read_text(
                encoding="utf-8"
            )
        )
        known = {
            task["task_id"]
            for wave in package["waves"]
            for task in wave["tasks"]
        }
        self.assertTrue(self.task_ids.issubset(known))
        self.assertFalse(self.config["formal_effect"])
        for task in self.config["tasks"]:
            self.assertEqual(1, len(task["materials"]))
            material = task["materials"][0]
            self.assertTrue((ROOT / material["path"]).is_file())
            self.assertEqual(".docx", Path(material["filename"]).suffix)

    def test_attachment_store_hashes_and_stages_outside_formal_flow(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            store = TaskAttachmentStore(
                Path(temp) / "attachments",
                clock=lambda: datetime(
                    2026, 7, 30, 9, 0, tzinfo=timezone.utc
                ),
            )
            record = store.append(
                "DEF-002",
                "alairt-review.pdf",
                "application/pdf",
                b"%PDF-1.7 test",
                self.task_ids,
            )
            self.assertFalse(record["formal_effect"])
            self.assertEqual("LOCAL_STAGED_NOT_EVIDENCE", record["status"])
            self.assertEqual(
                f"/api/task-attachments/DEF-002/{record['attachment_id']}",
                record["download_url"],
            )
            self.assertEqual(
                "eddc31937fbdaf708e866af0d20b9fb8c79dd001881c8a11e4c617f2882e779f",
                record["sha256"],
            )
            self.assertTrue(
                (
                    Path(temp)
                    / "attachments"
                    / record["stored_relative_path"]
                ).is_file()
            )
            self.assertEqual([record], store.load())
            with self.assertRaisesRegex(ValueError, "Csak PDF"):
                store.append(
                    "DEF-002",
                    "program.exe",
                    "application/octet-stream",
                    b"unsafe",
                    self.task_ids,
                )
            with self.assertRaisesRegex(ValueError, "fájlneve"):
                store.append(
                    "DEF-002",
                    "../review.pdf",
                    "application/pdf",
                    b"unsafe",
                    self.task_ids,
                )

    def test_workflow_requires_ordered_transitions(self) -> None:
        states = current_pilot_states(self.task_ids, [])
        self.assertEqual(
            [],
            validate_work_event(self.valid_start, self.task_ids, states),
        )
        invalid = dict(
            self.valid_start,
            transition="SUBMIT_FOR_REVIEW",
        )
        errors = validate_work_event(invalid, self.task_ids, states)
        self.assertGreaterEqual(len(errors), 2)

    def test_review_submission_requires_protected_evidence(self) -> None:
        states = {task_id: "TODO" for task_id in self.task_ids}
        states["DEF-002"] = "IN_PROGRESS"
        payload = dict(
            self.valid_start,
            transition="SUBMIT_FOR_REVIEW",
            evidence_uri=(
                "https://metalcom.sharepoint.com/sites/NIS2/"
                "Megosztott%20dokumentumok/NIS2_EVIDENCE/review.pdf"
            ),
            evidence_sha256="a" * 64,
        )
        self.assertEqual(
            [],
            validate_work_event(payload, self.task_ids, states),
        )
        errors = validate_work_event(
            dict(payload, evidence_uri="https://example.com/review.pdf"),
            self.task_ids,
            states,
        )
        self.assertIn("SharePoint", " ".join(errors))

    def test_store_is_append_only_hash_chain_and_non_formal(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            store = TaskWorkflowDraftStore(
                Path(temp) / "events.jsonl",
                clock=lambda: datetime(
                    2026, 7, 30, 8, 0, tzinfo=timezone.utc
                ),
            )
            first = store.append(self.valid_start, "TODO")
            second = store.append(
                dict(
                    self.valid_start,
                    transition="SAVE_PROGRESS",
                    note="Az auditjelentés és a döntési rekord összevetve.",
                ),
                "IN_PROGRESS",
            )
            with self.assertRaisesRegex(ValueError, "megváltozott"):
                store.append(self.valid_start, "TODO")
            self.assertFalse(first["formal_effect"])
            self.assertTrue(first["actor_claim_unverified"])
            self.assertEqual(
                first["audit_sha256"],
                second["previous_event_sha256"],
            )
            self.assertEqual([first, second], store.load())
            lines = (Path(temp) / "events.jsonl").read_text(
                encoding="utf-8"
            ).splitlines()
            tampered = json.loads(lines[0])
            tampered["note"] = "Manipulált tartalom."
            lines[0] = json.dumps(
                tampered,
                ensure_ascii=False,
                sort_keys=True,
            )
            (Path(temp) / "events.jsonl").write_text(
                "\n".join(lines) + "\n",
                encoding="utf-8",
            )
            self.assertEqual([], store.load())

    def test_projection_is_plain_language_and_proposal_only(self) -> None:
        package = json.loads(
            (ROOT / "data" / "human_execution_package.json").read_text(
                encoding="utf-8"
            )
        )
        sharepoint = json.loads(
            (ROOT / "data" / "sharepoint_task_snapshot.json").read_text(
                encoding="utf-8"
            )
        )
        tasks = sharepoint.get("tasks", sharepoint.get("records", []))
        projection = build_pilot_projection(
            self.config,
            package,
            tasks,
            [],
        )
        self.assertEqual(5, projection["task_count"])
        self.assertFalse(projection["formal_effect"])
        self.assertTrue(
            projection["authentication_required_for_formal_use"]
        )
        self.assertTrue(
            all(item["status"] == "TODO" for item in projection["tasks"])
        )
        self.assertTrue(
            all(item["plain_language_goal"] for item in projection["tasks"])
        )
        self.assertTrue(
            all(item["materials"][0]["download_url"].startswith(
                "/api/task-materials/"
            ) for item in projection["tasks"])
        )


if __name__ == "__main__":
    unittest.main()
