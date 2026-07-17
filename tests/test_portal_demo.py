from __future__ import annotations

from datetime import date
import json
from pathlib import Path
import tempfile
import unittest

from scripts.build_portal_demo import build_snapshot, load_actions, load_deferred


ROOT = Path(__file__).parents[1]


class PortalDemoTests(unittest.TestCase):
    def test_snapshot_uses_all_actions_and_deferred_tasks(self) -> None:
        actions = load_actions(ROOT / "data" / "actions.csv")
        deferred = load_deferred(ROOT / "DEFERRED_EVIDENCE_LOG.md")
        dates = json.loads((ROOT / "data" / "project_dates.json").read_text(encoding="utf-8"))
        result = build_snapshot(actions, deferred, dates, date(2026, 7, 17))
        self.assertEqual(42, result["summary"]["total_actions"])
        self.assertEqual(len(deferred), len(result["deferred_tasks"]))
        self.assertEqual(69, result["summary"]["days_to_deadline"])

    def test_snapshot_is_proposal_only(self) -> None:
        actions = load_actions(ROOT / "data" / "actions.csv")
        dates = json.loads((ROOT / "data" / "project_dates.json").read_text(encoding="utf-8"))
        result = build_snapshot(actions, [], dates, date(2026, 7, 17))
        self.assertTrue(result["ai_proposals"])
        self.assertEqual({"PROPOSAL"}, {item["status"] for item in result["ai_proposals"]})
        self.assertIn("nem hajt végre jóváhagyást", result["meta"]["disclaimer"])

    def test_deferred_parser_ignores_non_records(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "log.md"
            path.write_text("| ID | fejléc |\n| DEF-999 | A-001 | állapot | feladat | kapu | felelős | jóváhagyó | `OPEN_DEFERRED` |\n", encoding="utf-8")
            records = load_deferred(path)
        self.assertEqual(1, len(records))
        self.assertEqual("OPEN_DEFERRED", records[0]["status"])

    def test_portal_assets_exist_without_external_dependencies(self) -> None:
        portal = ROOT / "portal_demo"
        for relative in ("index.html", "styles.css", "app.js"):
            self.assertTrue((portal / relative).is_file())
        html = (portal / "index.html").read_text(encoding="utf-8")
        self.assertNotIn("https://", html)
        self.assertNotIn("http://", html)


if __name__ == "__main__":
    unittest.main()
