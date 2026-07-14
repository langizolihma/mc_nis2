"""Command-line interface for the local NIS2 harness."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Sequence

from .deadlines import REPEAT_AUDIT_LATEST, action_plan_deadline, draft_quarterly_schedule, parse_iso_date
from .registry import RegistryLoadError, default_project_dates_path, load_actions, load_project_dates
from .reports import render_action_plan, render_status
from .validation import combine_results, validate_actions, validate_project_dates


def _parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="nis2_harness", description="Deterministic local NIS2 harness")
    subparsers = parser.add_subparsers(dest="command", required=True)
    for name in ("validate", "status"):
        command = subparsers.add_parser(name)
        command.add_argument("--actions", required=True, type=Path)
        command.add_argument("--project-dates", type=Path)
    deadlines = subparsers.add_parser("deadlines")
    deadlines.add_argument("--received", required=True)
    draft = subparsers.add_parser("draft-action-plan")
    draft.add_argument("--actions", required=True, type=Path)
    draft.add_argument("--project-dates", type=Path)
    draft.add_argument("--output", required=True, type=Path)
    return parser


def _load_and_validate(actions_path: Path, dates_path: Path | None):
    project_path = dates_path or default_project_dates_path(actions_path)
    actions = load_actions(actions_path)
    dates = load_project_dates(project_path)
    result = combine_results(validate_actions(actions), validate_project_dates(dates, project_path))
    return actions, dates, result


def main(argv: Sequence[str] | None = None) -> int:
    """Run the CLI and return a process exit code."""
    args = _parser().parse_args(argv)
    try:
        if args.command == "deadlines":
            received = parse_iso_date(args.received, field_name="received")
            deadline = action_plan_deadline(received)
            print(f"Kézhezvétel: {received.isoformat()}")
            print(f"Cselekvési terv határideje (receipt + 90 naptári nap): {deadline.isoformat()}")
            print(f"Megismételt audit legkésőbb: {REPEAT_AUDIT_LATEST.isoformat()}")
            print("Negyedéves ütemezés: DRAFT_SCHEDULE – emberi G2/G4 jóváhagyás szükséges")
            for item in draft_quarterly_schedule(deadline):
                print(f"  - {item.isoformat()} DRAFT_SCHEDULE")
            return 0

        actions, dates, result = _load_and_validate(args.actions, args.project_dates)
        if args.command == "validate":
            for issue in result.issues:
                print(issue.format())
            print(f"Összesítés: {len(result.errors)} hard error, {len(result.warnings)} warning")
            return 1 if result.errors else 0
        if args.command == "status":
            print(render_status(actions, result, dates), end="")
            return 1 if result.errors else 0
        if args.command == "draft-action-plan":
            if result.errors:
                for issue in result.errors:
                    print(issue.format(), file=sys.stderr)
                print("A tervezet hard validation error miatt nem készült el.", file=sys.stderr)
                return 1
            output: Path = args.output
            output.parent.mkdir(parents=True, exist_ok=True)
            output.write_text(render_action_plan(actions, dates), encoding="utf-8", newline="\n")
            print(f"Tervezet elkészült: {output}")
            return 0
    except (RegistryLoadError, ValueError, OSError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2
    return 2

