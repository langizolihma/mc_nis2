from __future__ import annotations

import csv
import hashlib
import tempfile
import unittest
from pathlib import Path

from nis2_harness.registry import load_actions


class RegistryTests(unittest.TestCase):
    def test_hungarian_utf8_round_trip_and_no_mutation(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "actions.csv"
            row = {
                "action_id": "A-ÉKEZET",
                "requirement_family": "1",
                "scope_eir": "Szervezet",
                "workstream": "Árvíztűrő tükörfúrógép",
            }
            with path.open("w", encoding="utf-8", newline="") as handle:
                writer = csv.DictWriter(handle, fieldnames=list(row))
                writer.writeheader()
                writer.writerow(row)
            before = hashlib.sha256(path.read_bytes()).hexdigest()
            actions = load_actions(path)
            after = hashlib.sha256(path.read_bytes()).hexdigest()
            self.assertEqual(actions[0].workstream, "Árvíztűrő tükörfúrógép")
            self.assertEqual(before, after)


if __name__ == "__main__":
    unittest.main()

