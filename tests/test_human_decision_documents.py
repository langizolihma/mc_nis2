from __future__ import annotations

from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
from nis2_harness.human_decision_documents import build_specs, load_open_tasks


CURATED = [
    {
        "task_id": task_id,
        "filename": f"{task_id}.docx",
        "title": task_id,
        "purpose": "Teszt",
        "owner": "Teszt felelős",
        "reviewer": "Teszt reviewer",
        "source_refs": "TEST",
        "steps": ["Ellenőrzés"],
        "checks": ["Ellenőrzési pont"] * 4,
    }
    for task_id in ("DEF-002", "DEF-004", "DEF-005", "DEF-006", "DEF-007")
]


class HumanDecisionDocumentTests(unittest.TestCase):
    def test_every_open_deferred_task_has_one_document_spec(self) -> None:
        tasks = load_open_tasks(ROOT / "data" / "human_execution_package.json")
        specs = build_specs(tasks, CURATED)
        self.assertEqual(len(tasks), 37)
        self.assertEqual(len(specs), 37)
        self.assertEqual(
            {str(task["task_id"]) for task in tasks},
            {str(spec["task_id"]) for spec in specs},
        )
        self.assertEqual(len({str(spec["filename"]) for spec in specs}), 37)

    def test_all_specs_are_signable_and_evidence_aware(self) -> None:
        tasks = load_open_tasks(ROOT / "data" / "human_execution_package.json")
        for spec in build_specs(tasks, CURATED):
            self.assertTrue(str(spec["owner"]).strip())
            self.assertTrue(str(spec["reviewer"]).strip())
            self.assertTrue(str(spec["source_refs"]).strip())
            self.assertTrue(str(spec["must_be_completed_before"]).strip())
            self.assertGreaterEqual(len(spec["checks"]), 4)


if __name__ == "__main__":
    unittest.main()
