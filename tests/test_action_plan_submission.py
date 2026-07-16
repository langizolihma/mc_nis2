from __future__ import annotations

import unittest

from nis2_harness.action_plan_submission import validate_action_plan_submission
from tests.test_validation import valid_action


def complete_actions():
    actions = [
        valid_action(action_id="A-006", requirement_family="1", human_gate="G4_EXTERNAL_SUBMISSION", external_submission="yes"),
        valid_action(action_id="A-002", requirement_family="2", status="DONE"),
        valid_action(action_id="A-004", requirement_family="3", status="DONE"),
        valid_action(action_id="A-005", requirement_family="4", status="DONE"),
        valid_action(action_id="A-036", requirement_family="5", status="DONE"),
    ]
    actions.extend(
        valid_action(action_id=f"A-T{family:02d}", requirement_family=str(family))
        for family in range(6, 20)
    )
    return actions


class ActionPlanSubmissionTests(unittest.TestCase):
    def test_complete_proposal_only_waits_for_g4(self) -> None:
        result = validate_action_plan_submission(
            complete_actions(), {"action_plan_deadline": "2026-09-24"}, "actions.csv"
        )
        self.assertFalse(result.errors)
        self.assertEqual({"W_SUBMISSION_G4_PENDING"}, {item.code for item in result.warnings})

    def test_all_nineteen_families_are_required(self) -> None:
        actions = [item for item in complete_actions() if item.requirement_family != "19"]
        result = validate_action_plan_submission(actions, {"action_plan_deadline": "2026-09-24"}, "actions.csv")
        self.assertIn("E_SUBMISSION_FAMILY", {item.code for item in result.errors})

    def test_relative_date_is_visible_warning(self) -> None:
        actions = complete_actions()
        actions[-1] = valid_action(action_id="A-T19", requirement_family="19", target_date="")
        result = validate_action_plan_submission(actions, {"action_plan_deadline": "2026-09-24"}, "actions.csv")
        self.assertIn("W_SUBMISSION_RELATIVE_DATE", {item.code for item in result.warnings})

    def test_a006_requires_g4(self) -> None:
        actions = complete_actions()
        actions[0] = valid_action(action_id="A-006", requirement_family="1", human_gate="G1_DOMAIN_REVIEW")
        result = validate_action_plan_submission(actions, {"action_plan_deadline": "2026-09-24"}, "actions.csv")
        self.assertIn("E_SUBMISSION_G4", {item.code for item in result.errors})

    def test_pending_dependency_is_warning(self) -> None:
        actions = complete_actions()
        actions[1] = valid_action(action_id="A-002", requirement_family="2", status="IN_PROGRESS")
        result = validate_action_plan_submission(actions, {"action_plan_deadline": "2026-09-24"}, "actions.csv")
        self.assertIn("W_SUBMISSION_DEPENDENCY_PENDING", {item.code for item in result.warnings})

    def test_canonical_deadline_cannot_change(self) -> None:
        result = validate_action_plan_submission(
            complete_actions(), {"action_plan_deadline": "2026-09-25"}, "actions.csv"
        )
        self.assertIn("E_SUBMISSION_DEADLINE", {item.code for item in result.errors})


if __name__ == "__main__":
    unittest.main()
