from __future__ import annotations

import argparse
from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))

from nis2_harness.action_scheduling import (
    build_schedule,
    read_csv,
    render_schedule_report,
    update_execution_details,
    write_csv,
)


ACTIONS = ROOT / "data" / "actions.csv"
DETAILS = ROOT / "data" / "action_execution_details.csv"
SCHEDULE = ROOT / "data" / "action_schedule.csv"
REPORT = ROOT / "ACTION_SCHEDULE_2026-08-19.md"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    action_fields, actions = read_csv(ACTIONS)
    detail_fields, details = read_csv(DETAILS)
    updated_actions, schedule = build_schedule(actions)
    updated_details = update_execution_details(details, schedule)

    if args.apply:
        write_csv(ACTIONS, action_fields, updated_actions)
        write_csv(SCHEDULE, list(schedule[0]), schedule)
        write_csv(DETAILS, detail_fields, updated_details)
        REPORT.write_text(render_schedule_report(schedule), encoding="utf-8")
        print(
            f"APPLIED: {len(schedule)} action; "
            f"latest={max(row['calculated_target_date'] for row in schedule)}"
        )
    else:
        print(
            f"DRY-RUN: {len(schedule)} action; "
            f"latest={max(row['calculated_target_date'] for row in schedule)}"
        )


if __name__ == "__main__":
    main()
