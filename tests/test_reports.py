from __future__ import annotations

import unittest

from nis2_harness.reports import render_action_plan
from tests.test_validation import valid_action


class ReportTests(unittest.TestCase):
    def test_report_is_deterministic_and_contains_all_families(self) -> None:
        actions = [
            valid_action(action_id="A-002", requirement_family="2;19"),
            valid_action(action_id="A-001", requirement_family="1"),
        ]
        dates = {"receipt_date": "2026-06-26", "recorded_on": "2026-07-14"}
        first = render_action_plan(actions, dates)
        second = render_action_plan(list(reversed(actions)), dates)
        self.assertEqual(first, second)
        self.assertIn("TERVEZET – EMBERI JÓVÁHAGYÁS NÉLKÜL NEM NYÚJTHATÓ BE", first)
        self.assertIn("Tesztjóváhagyó", first)
        self.assertEqual(first.count(". követelménycsalád"), 19)


if __name__ == "__main__":
    unittest.main()
