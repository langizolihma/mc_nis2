from __future__ import annotations

from copy import deepcopy
import json
from pathlib import Path
import tempfile
import unittest

from nis2_harness.cli import main
from nis2_harness.reconciliation_changeset import (
    build_reconciliation_change_proposal,
)
from nis2_harness.reconciliation_preflight import (
    build_reconciliation_application_preflight,
    render_reconciliation_application_preflight,
)
from nis2_harness.registry import Action, load_actions
from tests.test_reconciliation_changeset import (
    _accepted_decisions,
    _review_package,
)


ROOT = Path(__file__).resolve().parents[1]


def _action(**changes: object) -> Action:
    values = {
        "action_id": "A-001",
        "status": "IN_PROGRESS",
        "target_date": "2026-07-03",
        "human_owner": "Pásztor András",
        "human_approver": "Lángi Zoltán",
        "human_gate": "G2_SECURITY_LEGAL",
        "row_number": 2,
    }
    values.update(changes)
    return Action(**values)


def _change_proposal(*, outcome: str = "COMPLETED_READY_FOR_REVIEW") -> dict:
    review = _review_package()
    review["records"][0]["latest_draft"]["outcome"] = outcome
    if outcome != "COMPLETED_READY_FOR_REVIEW":
        review["records"][0]["latest_draft"]["evidence_uri"] = ""
        review["records"][0]["latest_draft"]["evidence_sha256"] = ""
    return build_reconciliation_change_proposal(
        review,
        _accepted_decisions(review),
    )


class ReconciliationPreflightTests(unittest.TestCase):
    def test_valid_proposal_builds_non_executing_preflight(self) -> None:
        output = build_reconciliation_application_preflight(
            _change_proposal(),
            [_action()],
        )
        self.assertEqual("PREFLIGHT_READY_FOR_MANUAL_APPLICATION", output["status"])
        self.assertFalse(output["formal_effect"])
        self.assertEqual(1, output["summary"]["evidence_review_count"])
        self.assertFalse(output["checklist"][0]["registry_change_required"])
        self.assertTrue(output["checklist"][0]["manual_application_only"])

    def test_status_change_is_listed_but_not_applied(self) -> None:
        output = build_reconciliation_application_preflight(
            _change_proposal(outcome="NOT_STARTED"),
            [_action()],
        )
        change = output["checklist"][0]["fields_to_change"][0]
        self.assertEqual(
            {"field": "status", "from": "IN_PROGRESS", "to": "NEW"},
            change,
        )
        self.assertEqual("IN_PROGRESS", _action().status)

    def test_stale_registry_snapshot_is_rejected(self) -> None:
        with self.assertRaisesRegex(ValueError, "megváltozott a review óta"):
            build_reconciliation_application_preflight(
                _change_proposal(),
                [_action(target_date="2026-08-01")],
            )

    def test_changed_human_gates_are_rejected(self) -> None:
        with self.assertRaisesRegex(ValueError, "kapui megváltoztak"):
            build_reconciliation_application_preflight(
                _change_proposal(),
                [_action(human_gate="G1_DOMAIN_REVIEW")],
            )

    def test_changed_owner_is_rejected_as_stale(self) -> None:
        with self.assertRaisesRegex(ValueError, "megváltozott a review óta"):
            build_reconciliation_application_preflight(
                _change_proposal(),
                [_action(human_owner="Más felelős")],
            )

    def test_done_status_tampering_is_rejected(self) -> None:
        package = _change_proposal()
        package["records"][0]["proposed_update"]["status"] = "DONE"
        with self.assertRaisesRegex(ValueError, "javasolt státusz"):
            build_reconciliation_application_preflight(package, [_action()])

    def test_evidence_acceptance_tampering_is_rejected(self) -> None:
        package = _change_proposal()
        package["records"][0]["proposed_update"][
            "evidence_acceptance_allowed"
        ] = True
        with self.assertRaisesRegex(ValueError, "evidenciaelfogadás"):
            build_reconciliation_application_preflight(package, [_action()])

    def test_nonaccepted_record_is_not_an_application_candidate(self) -> None:
        package = _change_proposal()
        package["records"][0]["review_decision"] = "RETURN"
        package["records"][0]["proposed_update"] = None
        package["summary"].update({
            "accepted_count": 0,
            "returned_count": 1,
        })
        output = build_reconciliation_application_preflight(package, [_action()])
        self.assertEqual(0, output["summary"]["accepted_record_count"])
        self.assertEqual([], output["checklist"])

    def test_unknown_changeset_field_is_rejected(self) -> None:
        package = _change_proposal()
        package["records"][0]["hidden_instruction"] = "apply"
        with self.assertRaisesRegex(ValueError, "rekordmezői eltérnek"):
            build_reconciliation_application_preflight(package, [_action()])

    def test_tampered_summary_is_rejected(self) -> None:
        package = _change_proposal()
        package["summary"]["accepted_count"] = 99
        with self.assertRaisesRegex(ValueError, "összesítése eltér"):
            build_reconciliation_application_preflight(package, [_action()])

    def test_cli_builds_preflight_against_current_registry(self) -> None:
        actions = load_actions(ROOT / "data" / "actions.csv")
        action = next(item for item in actions if item.action_id == "A-001")
        review = _review_package()
        review_record = review["records"][0]
        review_record["registered_status"] = action.status
        review_record["registered_target_date"] = action.target_date
        review_record["required_gates"] = list(action.gates)
        package = build_reconciliation_change_proposal(
            review,
            _accepted_decisions(review),
        )
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            proposal_path = root / "proposal.json"
            json_output = root / "preflight.json"
            markdown_output = root / "preflight.md"
            proposal_path.write_text(json.dumps(package), encoding="utf-8")
            self.assertEqual(0, main([
                "build-reconciliation-application-preflight",
                "--actions", str(ROOT / "data" / "actions.csv"),
                "--change-proposal", str(proposal_path),
                "--json-output", str(json_output),
                "--markdown-output", str(markdown_output),
            ]))
            output = json.loads(json_output.read_text(encoding="utf-8"))
            self.assertEqual(1, output["summary"]["accepted_record_count"])
            self.assertIn(
                "nem módosít fájlt",
                render_reconciliation_application_preflight(output),
            )


if __name__ == "__main__":
    unittest.main()
