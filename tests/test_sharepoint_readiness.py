from __future__ import annotations

import copy
import json
from pathlib import Path
import tempfile
import unittest

from nis2_harness.cli import main
from nis2_harness.sharepoint_readiness import (
    readiness_summary,
    validate_sharepoint_graph_readiness,
)


ROOT = Path(__file__).parents[1]
PLAN_PATH = ROOT / "config" / "sharepoint_graph_readiness.json"


class SharePointReadinessTests(unittest.TestCase):
    def setUp(self) -> None:
        self.plan = json.loads(PLAN_PATH.read_text(encoding="utf-8"))

    def test_design_baseline_is_valid_but_human_gated(self) -> None:
        result = validate_sharepoint_graph_readiness(self.plan, PLAN_PATH)
        self.assertEqual(0, len(result.errors))
        self.assertEqual(
            3,
            sum(issue.code == "W_SP_READY_GATE_PENDING" for issue in result.warnings),
        )
        summary = readiness_summary(self.plan, result)
        self.assertEqual("BLOCKED_PENDING_HUMAN_GATES", summary["status"])
        self.assertEqual(
            ["G1_DOMAIN_REVIEW", "G2_SECURITY_LEGAL", "G3_PRODUCTION_CHANGE"],
            summary["pending_gates"],
        )
        self.assertFalse(summary["network_allowed"])
        self.assertFalse(summary["token_acquisition_allowed"])
        self.assertFalse(summary["write_back_allowed"])
        self.assertFalse(summary["formal_effect"])

    def test_broad_or_write_permission_is_rejected(self) -> None:
        plan = copy.deepcopy(self.plan)
        plan["permissions"]["candidate_application_permission"] = "Sites.ReadWrite.All"
        plan["permissions"]["broad_permissions_allowed"] = True
        plan["permissions"]["allowed_http_methods"] = ["GET", "POST"]
        plan["permissions"]["write_operations_allowed"] = True
        result = validate_sharepoint_graph_readiness(plan, PLAN_PATH)
        codes = {issue.code for issue in result.errors}
        self.assertIn("E_SP_READY_WRITE_PERMISSION", codes)
        self.assertIn("E_SP_READY_BROAD_PERMISSION", codes)
        self.assertIn("E_SP_READY_HTTP_METHOD", codes)
        self.assertIn("E_SP_READY_WRITE_OPERATION", codes)

    def test_network_and_token_acquisition_cannot_be_enabled(self) -> None:
        plan = copy.deepcopy(self.plan)
        plan["runtime_controls"]["network_allowed"] = True
        plan["runtime_controls"]["token_acquisition_allowed"] = True
        result = validate_sharepoint_graph_readiness(plan, PLAN_PATH)
        self.assertGreaterEqual(
            sum(issue.code == "E_SP_READY_RUNTIME_DISABLED" for issue in result.errors),
            2,
        )

    def test_false_gate_approval_is_rejected(self) -> None:
        plan = copy.deepcopy(self.plan)
        plan["status"] = "APPROVED_FOR_NON_PRODUCTION_PILOT"
        plan["mode"] = "NON_PRODUCTION_READ_ONLY_PILOT"
        plan["human_gates"][0]["status"] = "APPROVED"
        result = validate_sharepoint_graph_readiness(plan, PLAN_PATH)
        codes = {issue.code for issue in result.errors}
        self.assertIn("E_SP_READY_FALSE_APPROVAL", codes)
        self.assertIn("E_SP_READY_PREMATURE_APPROVAL", codes)

    def test_plaintext_secret_is_rejected(self) -> None:
        plan = copy.deepcopy(self.plan)
        plan["identity"]["client_secret"] = "forbidden-plaintext-value"
        result = validate_sharepoint_graph_readiness(plan, PLAN_PATH)
        self.assertIn(
            "E_SP_READY_PLAINTEXT_SECRET",
            {issue.code for issue in result.errors},
        )

    def test_target_cannot_leave_nis2_site(self) -> None:
        plan = copy.deepcopy(self.plan)
        plan["target"]["list_url"] = "https://metalcom.sharepoint.com/sites/Other/Lists/X"
        result = validate_sharepoint_graph_readiness(plan, PLAN_PATH)
        self.assertIn("E_SP_READY_TARGET_SCOPE", {issue.code for issue in result.errors})

    def test_cli_accepts_safe_design_baseline(self) -> None:
        self.assertEqual(
            0,
            main(["validate-sharepoint-readiness", "--plan", str(PLAN_PATH)]),
        )

    def test_cli_rejects_unsafe_plan(self) -> None:
        plan = copy.deepcopy(self.plan)
        plan["runtime_controls"]["sharepoint_write_back_allowed"] = True
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "unsafe.json"
            path.write_text(json.dumps(plan, ensure_ascii=False), encoding="utf-8")
            self.assertEqual(
                1,
                main(["validate-sharepoint-readiness", "--plan", str(path)]),
            )


if __name__ == "__main__":
    unittest.main()
