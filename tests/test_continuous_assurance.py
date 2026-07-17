import copy
import json
import unittest
from pathlib import Path

from nis2_harness.continuous_assurance import build_pilot_output, validate_pilot


ROOT = Path(__file__).resolve().parents[1]


class ContinuousAssuranceTests(unittest.TestCase):
    def setUp(self):
        self.config = json.loads((ROOT / "config" / "continuous_assurance_pilot.json").read_text(encoding="utf-8"))
        self.inputs = json.loads((ROOT / "tests" / "fixtures" / "continuous_assurance_events.json").read_text(encoding="utf-8"))

    def test_baseline_is_valid(self):
        self.assertEqual((), validate_pilot(self.config, self.inputs, "pilot").errors)

    def test_output_is_deterministic_and_proposal_only(self):
        first = build_pilot_output(self.config, self.inputs)
        second = build_pilot_output(self.config, self.inputs)
        self.assertEqual(first, second)
        self.assertEqual(["PROP-CA-PILOT-001-001", "PROP-CA-PILOT-001-002", "PROP-CA-PILOT-001-003"], [p["proposal_id"] for p in first["proposals"]])
        self.assertTrue(all(p["status"] == "PROPOSAL" and p["human_review_status"] == "PENDING_HUMAN" for p in first["proposals"]))

    def test_kill_switch_processes_nothing(self):
        config = copy.deepcopy(self.config)
        config["kill_switch"]["engaged"] = True
        output = build_pilot_output(config, self.inputs)
        self.assertEqual("STOPPED_BY_KILL_SWITCH", output["status"])
        self.assertEqual([], output["proposals"])
        self.assertEqual(0, output["metrics"]["events_seen"])

    def test_non_allowlisted_source_is_rejected(self):
        inputs = copy.deepcopy(self.inputs)
        inputs["events"][0]["source_id"] = "PRODUCTION-SYSTEM"
        self.assertTrue(any(i.code == "E_CA_SOURCE_DENIED" for i in validate_pilot(self.config, inputs, "pilot").errors))

    def test_sensitive_input_is_rejected(self):
        inputs = copy.deepcopy(self.inputs)
        inputs["events"][0]["contains_sensitive_data"] = True
        self.assertTrue(any(i.code == "E_CA_SENSITIVE" for i in validate_pilot(self.config, inputs, "pilot").errors))

    def test_network_cannot_be_enabled(self):
        config = copy.deepcopy(self.config)
        config["safety"]["network_allowed"] = True
        self.assertTrue(any(i.code == "E_CA_SAFETY" for i in validate_pilot(config, self.inputs, "pilot").errors))

    def test_metrics_are_explicitly_simulated(self):
        output = build_pilot_output(self.config, self.inputs)
        self.assertEqual(6, output["metrics"]["simulated_manual_steps_saved"])
        self.assertIn("NOT_MEASURED", output["metrics"]["false_alert_rate"])

    def test_checked_in_output_matches_deterministic_run(self):
        checked_in = json.loads((ROOT / "generated" / "continuous_assurance_pilot_output.json").read_text(encoding="utf-8"))
        self.assertEqual(build_pilot_output(self.config, self.inputs), checked_in)


if __name__ == "__main__":
    unittest.main()
