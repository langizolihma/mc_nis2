from __future__ import annotations

import unittest
from datetime import date

from nis2_harness.deadlines import action_plan_deadline, parse_iso_date


class DeadlineTests(unittest.TestCase):
    def test_canonical_deadline(self) -> None:
        self.assertEqual(action_plan_deadline(date(2026, 6, 26)), date(2026, 9, 24))

    def test_year_boundary(self) -> None:
        self.assertEqual(action_plan_deadline(date(2026, 11, 15)), date(2027, 2, 13))

    def test_invalid_date(self) -> None:
        with self.assertRaisesRegex(ValueError, "hibás ISO-dátum"):
            parse_iso_date("2026-02-30")


if __name__ == "__main__":
    unittest.main()

