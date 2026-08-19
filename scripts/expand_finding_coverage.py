"""Add proposal-only exact actions for all uncovered non-compliant controls."""

from __future__ import annotations

import argparse
from collections import Counter
from pathlib import Path
import sys

ROOT = Path(__file__).parents[1]
sys.path.insert(0, str(ROOT / "src"))

from nis2_harness.coverage_expansion import (  # noqa: E402
    build_proposals,
    build_review_markdown,
    read_csv,
    write_csv,
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--actions", type=Path, default=Path("data/actions.csv"))
    parser.add_argument("--findings", type=Path, default=Path("data/audit_findings.csv"))
    parser.add_argument("--mapping", type=Path, default=Path("data/control_action_mapping.csv"))
    parser.add_argument("--report", type=Path)
    parser.add_argument("--apply", action="store_true")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    action_fields, actions = read_csv(args.actions)
    finding_fields, findings = read_csv(args.findings)
    mapping_fields, mappings = read_csv(args.mapping)
    proposals, finding_links, proposal_mappings = build_proposals(findings, actions, mappings)
    severity = Counter(item["priority"] for item in proposals)
    print(
        f"proposal_actions={len(proposals)} P0={severity['P0']} P1={severity['P1']} "
        f"P2={severity['P2']} finding_links={len(finding_links)} mappings={len(proposal_mappings)}"
    )
    if not args.apply:
        if args.report:
            args.report.parent.mkdir(parents=True, exist_ok=True)
            args.report.write_text(build_review_markdown(actions, findings, mappings), encoding="utf-8")
            print(f"REPORT: {args.report}")
        print("DRY_RUN: forrásfájl nem módosult; alkalmazáshoz használja a --apply kapcsolót")
        return 0

    if not proposals:
        print("NO_CHANGE: nincs közvetlen akciókapcsolat nélküli eltérés")
        return 0

    updated_findings: list[dict[str, str]] = []
    for row in findings:
        updated = dict(row)
        action_id = finding_links.get(row["finding_id"])
        if action_id:
            current = [item for item in row["direct_action_ids"].split(";") if item]
            updated["direct_action_ids"] = ";".join([*current, action_id])
            updated["mapping_status"] = "DIRECT"
            updated["notes"] = (
                row["notes"].rstrip(". ")
                + "; lefedettségpótló pontos akciókapcsolat PROPOSED, G1 review szükséges."
            )
        updated_findings.append(updated)

    write_csv(args.actions, action_fields, [*actions, *proposals])
    write_csv(args.findings, finding_fields, updated_findings)
    write_csv(args.mapping, mapping_fields, [*mappings, *proposal_mappings])
    if args.report:
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(
            build_review_markdown(
                [*actions, *proposals], updated_findings, [*mappings, *proposal_mappings]
            ),
            encoding="utf-8",
        )
        print(f"REPORT: {args.report}")
    print("APPLIED: actions, findings és mapping frissítve; minden új kapcsolat PROPOSED")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
