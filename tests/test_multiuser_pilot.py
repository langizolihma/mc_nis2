from __future__ import annotations

import json
from pathlib import Path
import unittest

from nis2_harness.multiuser_pilot import validate_multiuser_pilot


ROOT = Path(__file__).resolve().parents[1]


class MultiuserPilotTests(unittest.TestCase):
    def setUp(self) -> None:
        self.path = ROOT / "config" / "multiuser_pilot.json"
        self.data = json.loads(self.path.read_text(encoding="utf-8"))

    def test_checked_in_design_is_valid_but_blocked(self) -> None:
        result = validate_multiuser_pilot(self.data, self.path)
        self.assertEqual(result.errors, ())
        self.assertGreaterEqual(len(result.warnings), 4)
        self.assertFalse(
            self.data["runtime_controls"]["publish_enabled"]
        )

    def test_pending_gate_cannot_enable_publish(self) -> None:
        self.data["runtime_controls"]["publish_enabled"] = True
        result = validate_multiuser_pilot(self.data, self.path)
        self.assertIn(
            "E_MULTIUSER_PREMATURE_ENABLE",
            {issue.code for issue in result.errors},
        )

    def test_plaintext_secret_field_is_rejected(self) -> None:
        self.data["identity"]["client_secret"] = "do-not-store"
        result = validate_multiuser_pilot(self.data, self.path)
        self.assertIn(
            "E_MULTIUSER_SECRET",
            {issue.code for issue in result.errors},
        )

    def test_backend_cannot_bind_to_lan(self) -> None:
        self.data["topology"]["backend_bind_host"] = "0.0.0.0"
        result = validate_multiuser_pilot(self.data, self.path)
        self.assertIn(
            "E_MULTIUSER_BACKEND_EXPOSURE",
            {issue.code for issue in result.errors},
        )


if __name__ == "__main__":
    unittest.main()
