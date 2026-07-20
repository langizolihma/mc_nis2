import copy
import hashlib
import json
import tempfile
import unittest
from pathlib import Path

from nis2_harness.agent_jobs import (
    build_h002_output,
    ensure_generated_output,
    load_h002_inputs,
    validate_h002_job,
    validate_h002_run,
)
from nis2_harness.cli import main


ROOT = Path(__file__).resolve().parents[1]
JOB_PATH = ROOT / "config" / "h002_agent_pilot.json"


class AgentJobTests(unittest.TestCase):
    def setUp(self):
        self.job = json.loads(JOB_PATH.read_text(encoding="utf-8"))

    def _loaded(self):
        return load_h002_inputs(self.job, ROOT, JOB_PATH)

    def test_baseline_job_and_input_are_valid(self):
        inputs, _, _ = self._loaded()
        self.assertEqual((), validate_h002_run(self.job, inputs, JOB_PATH).errors)

    def test_output_is_proposal_only_and_has_ten_synthetic_cases(self):
        inputs, _, input_hash = self._loaded()
        output = build_h002_output(self.job, inputs, input_hash)
        self.assertEqual("PROPOSAL", output["status"])
        self.assertFalse(output["formal_effect"])
        self.assertEqual("PENDING_HUMAN", output["human_review_status"])
        self.assertEqual(10, len(output["proposals"]))
        self.assertEqual(10, len(output["approval_queue"]))
        synthetic_eval = output["metrics"]["synthetic_eval"]
        self.assertEqual("SYNTHETIC_TECHNICAL_CASES_NOT_HUMAN_APPROVED_GOLD_CASES", synthetic_eval["classification"])
        self.assertEqual(10, synthetic_eval["passed"])
        self.assertEqual(1.0, synthetic_eval["pass_rate"])

    def test_checked_in_output_matches_deterministic_run(self):
        inputs, _, input_hash = self._loaded()
        checked_in = json.loads(
            (ROOT / "generated" / "h002_agent_pilot_output.json").read_text(encoding="utf-8")
        )
        self.assertEqual(build_h002_output(self.job, inputs, input_hash), checked_in)

    def test_audit_log_is_deterministic_hash_chain(self):
        inputs, _, input_hash = self._loaded()
        first = build_h002_output(self.job, inputs, input_hash)
        second = build_h002_output(self.job, inputs, input_hash)
        self.assertEqual(first, second)
        previous = "0" * 64
        for record in first["audit_log"]:
            payload = {key: value for key, value in record.items() if key not in {"previous_hash", "record_hash"}}
            canonical = json.dumps(payload, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
            expected = hashlib.sha256((previous + canonical).encode("utf-8")).hexdigest()
            self.assertEqual(previous, record["previous_hash"])
            self.assertEqual(expected, record["record_hash"])
            previous = expected

    def test_kill_switch_prevents_processing(self):
        job = copy.deepcopy(self.job)
        job["engine_config"]["kill_switch"]["engaged"] = True
        inputs, _, input_hash = self._loaded()
        output = build_h002_output(job, inputs, input_hash)
        self.assertEqual("STOPPED_BY_KILL_SWITCH", output["run_status"])
        self.assertEqual([], output["proposals"])
        self.assertEqual(0, output["metrics"]["events_seen"])

    def test_path_traversal_is_rejected(self):
        job = copy.deepcopy(self.job)
        job["input"]["path"] = "../data/actions.csv"
        with self.assertRaisesRegex(ValueError, "tests/fixtures"):
            load_h002_inputs(job, ROOT, JOB_PATH)

    def test_hash_mismatch_is_rejected(self):
        job = copy.deepcopy(self.job)
        job["input"]["expected_sha256"] = "0" * 64
        with self.assertRaisesRegex(ValueError, "SHA-256"):
            load_h002_inputs(job, ROOT, JOB_PATH)

    def test_fail_closed_output_policy_is_required(self):
        job = copy.deepcopy(self.job)
        job["output_policy"]["formal_effect"] = True
        codes = {issue.code for issue in validate_h002_job(job, JOB_PATH).errors}
        self.assertIn("E_H002_OUTPUT_POLICY", codes)

    def test_external_ai_and_invalid_expected_gate_are_rejected(self):
        job = copy.deepcopy(self.job)
        job["engine_config"]["safety"]["external_ai_allowed"] = True
        inputs, _, _ = self._loaded()
        inputs["events"][0]["expected_required_human_gate"] = "G9_UNKNOWN"
        codes = {issue.code for issue in validate_h002_run(job, inputs, JOB_PATH).errors}
        self.assertIn("E_H002_FORBIDDEN", codes)
        self.assertIn("E_H002_EXPECTED_GATE", codes)

    def test_output_must_stay_under_generated(self):
        accepted = ensure_generated_output(ROOT, Path("generated/h002/result.json"))
        self.assertTrue(str(accepted).startswith(str((ROOT / "generated").resolve())))
        with self.assertRaisesRegex(ValueError, "generated"):
            ensure_generated_output(ROOT, Path("data/result.json"))

    def test_cli_writes_valid_job_output(self):
        generated = ROOT / "generated"
        with tempfile.TemporaryDirectory(dir=generated) as directory:
            output = Path(directory) / "result.json"
            exit_code = main([
                "run-h002-agent-pilot",
                "--job", str(JOB_PATH),
                "--root", str(ROOT),
                "--output", str(output),
            ])
            self.assertEqual(0, exit_code)
            data = json.loads(output.read_text(encoding="utf-8"))
            self.assertEqual("H-002", data["handoff_id"])
            self.assertEqual(10, data["metrics"]["synthetic_eval"]["passed"])


if __name__ == "__main__":
    unittest.main()
