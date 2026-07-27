"""Build a dependency-free, presentation-only portal data snapshot."""

from __future__ import annotations

import argparse
from datetime import date
import json
from pathlib import Path
import sys

ROOT = Path(__file__).parents[1]
sys.path.insert(0, str(ROOT / "src"))

from nis2_harness.portal import (  # noqa: E402
    ReviewDraftStore,
    build_live_snapshot,
    build_snapshot,
    load_actions,
    load_deferred,
)


DEFAULT_OUTPUT = ROOT / "portal_demo" / "data" / "demo_data.js"


def main() -> int:
    parser = argparse.ArgumentParser(description="Build the local NIS2 presentation portal snapshot")
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--as-of", type=date.fromisoformat, required=True)
    args = parser.parse_args()
    snapshot = build_live_snapshot(
        ROOT,
        ReviewDraftStore(ROOT / "runtime" / "review_drafts.jsonl"),
        args.as_of,
    )
    args.output.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(snapshot, ensure_ascii=False, indent=2, sort_keys=True)
    args.output.write_text(f"window.NIS2_DEMO_DATA = {payload};\n", encoding="utf-8", newline="\n")
    print(f"Portal snapshot: {len(snapshot['actions'])} action, {len(snapshot['deferred_tasks'])} human task -> {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
