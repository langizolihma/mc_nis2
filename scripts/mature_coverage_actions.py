from __future__ import annotations

import argparse
from datetime import date
from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))

from nis2_harness.action_maturation import (  # noqa: E402
    DETAIL_FIELDS,
    build_maturation,
    read_csv,
    render_review_markdown,
    write_csv,
)


def main() -> int:
    parser = argparse.ArgumentParser(description="A-043–A-127 részletes végrehajtási javaslatainak előállítása")
    parser.add_argument("--apply", action="store_true", help="Az actions.csv frissítése és a részletes regiszter kiírása")
    args = parser.parse_args()

    action_fields, actions = read_csv(ROOT / "data" / "actions.csv")
    _, catalog = read_csv(ROOT / "data" / "control_catalog.csv")
    intake_root = ROOT / "alapadatok" / "Dokumentumok Váraljai Csabától" / "_feltöltve_"
    candidate_paths = (
        (path.relative_to(ROOT) for path in intake_root.rglob("*") if path.is_file())
        if intake_root.exists()
        else ()
    )
    updated_actions, details = build_maturation(
        actions,
        catalog,
        as_of=date(2026, 8, 19),
        candidate_paths=candidate_paths,
    )
    print(f"matured_actions={len(details)} proposed_dates={len(details)} canonical_dates_changed=0")
    if not args.apply:
        print("DRY_RUN: nincs módosítás; alkalmazáshoz használja a --apply kapcsolót")
        return 0
    write_csv(ROOT / "data" / "actions.csv", action_fields, updated_actions)
    write_csv(ROOT / "data" / "action_execution_details.csv", DETAIL_FIELDS, details)
    (ROOT / "COVERAGE_MATURATION_REVIEW_2026-08-19.md").write_text(
        render_review_markdown(details), encoding="utf-8"
    )
    print("APPLIED: data/actions.csv; data/action_execution_details.csv; COVERAGE_MATURATION_REVIEW_2026-08-19.md")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
