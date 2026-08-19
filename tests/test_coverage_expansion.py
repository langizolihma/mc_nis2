from __future__ import annotations

import unittest

from nis2_harness.coverage_expansion import build_proposals, group_uncovered_controls


FINDING_BASE = {
    "finding_id": "F-1",
    "scope_eir": "Irodai",
    "requirement_family": "17",
    "control_ref": "17.49",
    "control_title": "Kriptográfiai kulcs előállítása és kezelése",
    "rating": "Kiemelt mértékű eltérés",
    "source_page_start": "10",
    "source_page_end": "11",
    "direct_action_ids": "",
}


class CoverageExpansionTests(unittest.TestCase):
    def test_only_noncompliant_without_direct_action_is_uncovered(self) -> None:
        compliant = {**FINDING_BASE, "finding_id": "F-2", "control_ref": "17.53", "rating": "Megfelelt"}
        covered = {**FINDING_BASE, "finding_id": "F-3", "control_ref": "17.54", "direct_action_ids": "A-1"}
        result = group_uncovered_controls([FINDING_BASE, compliant, covered])
        self.assertEqual(["17.49"], list(result))

    def test_builds_exact_proposal_and_preserves_human_gates(self) -> None:
        actions = [{"action_id": "A-042", "human_owner": "Pásztor András"}]
        mappings = [{
            "mapping_id": "M-0104", "action_id": "A-042", "requirement_family": "1",
            "control_ref": "", "scope_eir": "Mind", "mapping_basis": "FAMILY_CONTEXT",
            "matched_finding_ids": "", "human_owner": "Pásztor András",
            "evidence_required": "x", "source_ref": "x", "source_confidence": "derived",
            "human_review_status": "PROPOSED", "reviewer": "", "reviewed_at": "", "notes": "",
        }]
        proposals, links, proposal_mappings = build_proposals([FINDING_BASE], actions, mappings)
        self.assertEqual("A-043", proposals[0]["action_id"])
        self.assertEqual("17.49", proposals[0]["control_ref"])
        self.assertEqual("P0", proposals[0]["priority"])
        self.assertEqual("management_schedule", proposals[0]["deadline_basis"])
        self.assertEqual("", proposals[0]["target_date"])
        self.assertIn("G1_DOMAIN_REVIEW", proposals[0]["human_gate"])
        self.assertIn("G2_SECURITY_LEGAL", proposals[0]["human_gate"])
        self.assertIn("G3_PRODUCTION_CHANGE", proposals[0]["human_gate"])
        self.assertEqual({"F-1": "A-043"}, links)
        self.assertEqual("EXACT_CONTROL", proposal_mappings[0]["mapping_basis"])
        self.assertEqual("PROPOSED", proposal_mappings[0]["human_review_status"])

    def test_multiple_scopes_share_one_control_action(self) -> None:
        second = {**FINDING_BASE, "finding_id": "F-2", "scope_eir": "Termelés"}
        actions = [{"action_id": "A-001"}]
        mappings = [{
            "mapping_id": "M-0001", "action_id": "A-001", "requirement_family": "1",
            "control_ref": "", "scope_eir": "Mind", "mapping_basis": "FAMILY_CONTEXT",
            "matched_finding_ids": "", "human_owner": "", "evidence_required": "",
            "source_ref": "", "source_confidence": "derived", "human_review_status": "PROPOSED",
            "reviewer": "", "reviewed_at": "", "notes": "",
        }]
        proposals, links, proposal_mappings = build_proposals([second, FINDING_BASE], actions, mappings)
        self.assertEqual(1, len(proposals))
        self.assertEqual("Irodai;Termelés", proposals[0]["scope_eir"])
        self.assertEqual({"F-1": "A-002", "F-2": "A-002"}, links)
        self.assertEqual("F-2;F-1", proposal_mappings[0]["matched_finding_ids"])


if __name__ == "__main__":
    unittest.main()
