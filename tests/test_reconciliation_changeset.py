from __future__ import annotations

from copy import deepcopy
import json
from pathlib import Path
import tempfile
import unittest

from nis2_harness.cli import main
from nis2_harness.reconciliation_changeset import (
    build_reconciliation_change_proposal,
    build_reconciliation_decision_template,
    render_reconciliation_change_proposal,
)


def _review_package(*, conflict: bool = False) -> dict:
    return {
        "schema_version": "1.0",
        "status": "PROPOSAL_PENDING_HUMAN_REVIEW",
        "as_of": "2026-07-29",
        "source_refs": ["data/actions.csv", "runtime.jsonl"],
        "formal_effect": False,
        "records": [
            {
                "action_id": "A-001",
                "registered_status": "IN_PROGRESS",
                "registered_target_date": "2026-07-03",
                "owner": "Pásztor András",
                "approver": "Lángi Zoltán",
                "required_gates": ["G2_SECURITY_LEGAL"],
                "conflict": conflict,
                "latest_draft": {
                    "draft_id": "RDR-0123456789ab",
                    "audit_sha256": "a" * 64,
                    "outcome": "COMPLETED_READY_FOR_REVIEW",
                    "proposed_new_target_date": "",
                    "evidence_uri": (
                        "https://metalcom.sharepoint.com/sites/NIS2/"
                        "NIS2_EVIDENCE/A-001/proof.pdf"
                    ),
                    "evidence_sha256": "b" * 64,
                },
            },
            {
                "action_id": "A-002",
                "registered_status": "NEW",
                "registered_target_date": "2026-07-03",
                "required_gates": ["G2_SECURITY_LEGAL"],
                "conflict": False,
                "latest_draft": None,
            },
        ],
    }


def _accepted_decisions(review: dict) -> dict:
    decisions = build_reconciliation_decision_template(review)
    record = decisions["records"][0]
    record.update({
        "decision": "ACCEPT",
        "reviewer": "Lángi Zoltán",
        "reviewed_at": "2026-07-29T15:30:00+02:00",
        "decision_ref": (
            "https://metalcom.sharepoint.com/sites/NIS2/"
            "NIS2_EVIDENCE/decisions/A-001-review.pdf"
        ),
        "review_note": "Kontrollált átvezetésre előkészíthető.",
    })
    return decisions


class ReconciliationChangesetTests(unittest.TestCase):
    def test_template_contains_only_actions_with_drafts(self) -> None:
        template = build_reconciliation_decision_template(_review_package())
        self.assertEqual("REVIEW_DECISION_CLAIMS_PENDING_HUMAN", template["status"])
        self.assertEqual(["A-001"], [item["action_id"] for item in template["records"]])
        self.assertFalse(template["formal_effect"])

    def test_accepted_draft_never_proposes_done_or_evidence_acceptance(self) -> None:
        review = _review_package()
        package = build_reconciliation_change_proposal(
            review,
            _accepted_decisions(review),
        )
        update = package["records"][0]["proposed_update"]
        self.assertEqual("IN_PROGRESS", update["status"])
        self.assertFalse(update["completion_allowed"])
        self.assertFalse(update["evidence_acceptance_allowed"])
        self.assertFalse(package["records"][0]["apply_allowed"])
        self.assertNotIn("DONE", json.dumps(package))

    def test_conflicting_draft_cannot_be_accepted(self) -> None:
        review = _review_package(conflict=True)
        with self.assertRaisesRegex(ValueError, "Ellentmondásos"):
            build_reconciliation_change_proposal(
                review,
                _accepted_decisions(review),
            )

    def test_tampered_draft_hash_is_rejected(self) -> None:
        review = _review_package()
        decisions = _accepted_decisions(review)
        decisions["records"][0]["selected_draft_sha256"] = "c" * 64
        with self.assertRaisesRegex(ValueError, "hash-e eltér"):
            build_reconciliation_change_proposal(review, decisions)

    def test_non_sharepoint_decision_reference_is_rejected(self) -> None:
        review = _review_package()
        decisions = _accepted_decisions(review)
        decisions["records"][0]["decision_ref"] = "https://example.com/review.pdf"
        with self.assertRaisesRegex(ValueError, "nem védett"):
            build_reconciliation_change_proposal(review, decisions)

    def test_return_requires_review_note(self) -> None:
        review = _review_package()
        decisions = _accepted_decisions(review)
        decisions["records"][0]["decision"] = "RETURN"
        decisions["records"][0]["review_note"] = ""
        with self.assertRaisesRegex(ValueError, "indoklás kell"):
            build_reconciliation_change_proposal(review, decisions)

    def test_pending_record_cannot_claim_reviewer(self) -> None:
        review = _review_package()
        decisions = build_reconciliation_decision_template(review)
        decisions["records"][0]["reviewer"] = "Valaki"
        with self.assertRaisesRegex(ValueError, "nem tartalmazhat review-adatot"):
            build_reconciliation_change_proposal(review, decisions)

    def test_reschedule_preserves_registered_status(self) -> None:
        review = _review_package()
        review["records"][0]["registered_status"] = "NEW"
        latest = review["records"][0]["latest_draft"]
        latest["outcome"] = "RESCHEDULE_REQUESTED"
        latest["proposed_new_target_date"] = "2026-08-31"
        decisions = _accepted_decisions(review)
        package = build_reconciliation_change_proposal(review, decisions)
        update = package["records"][0]["proposed_update"]
        self.assertEqual("NEW", update["status"])
        self.assertEqual("2026-08-31", update["target_date"])

    def test_unknown_decision_field_is_rejected(self) -> None:
        review = _review_package()
        decisions = _accepted_decisions(review)
        decisions["records"][0]["unreviewed_instruction"] = "DONE"
        with self.assertRaisesRegex(ValueError, "mezőkészlete eltér"):
            build_reconciliation_change_proposal(review, decisions)

    def test_cli_builds_template_and_change_proposal(self) -> None:
        review = _review_package()
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            review_path = root / "review.json"
            decision_path = root / "decisions.json"
            change_json = root / "changes.json"
            change_md = root / "changes.md"
            review_path.write_text(json.dumps(review), encoding="utf-8")
            self.assertEqual(0, main([
                "build-reconciliation-decision-template",
                "--review-package", str(review_path),
                "--output", str(decision_path),
            ]))
            decisions = json.loads(decision_path.read_text(encoding="utf-8"))
            accepted = _accepted_decisions(review)
            decisions["records"] = deepcopy(accepted["records"])
            decision_path.write_text(json.dumps(decisions), encoding="utf-8")
            self.assertEqual(0, main([
                "build-reconciliation-change-proposal",
                "--review-package", str(review_path),
                "--decisions", str(decision_path),
                "--json-output", str(change_json),
                "--markdown-output", str(change_md),
            ]))
            output = json.loads(change_json.read_text(encoding="utf-8"))
            self.assertEqual(1, output["summary"]["accepted_count"])
            self.assertIn(
                "A csomag nem alkalmaz változtatást",
                render_reconciliation_change_proposal(output),
            )


if __name__ == "__main__":
    unittest.main()
