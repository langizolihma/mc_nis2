from __future__ import annotations

import csv
import json
from pathlib import Path
import tempfile
import unittest
import zipfile

from nis2_harness.control_catalog import extract_catalog, write_catalog_outputs
from nis2_harness.registry import (
    ControlCatalogRecord,
    ControlRequirementRecord,
    load_control_catalog,
    load_control_requirements,
)
from nis2_harness.validation import (
    validate_control_catalog,
    validate_control_catalog_review,
)


def catalog_record(**changes: str) -> ControlCatalogRecord:
    values = {
        "control_ref": "1.1",
        "requirement_family": "1",
        "control_title": "Információbiztonsági szabályzat",
        "basic_applicability": "X",
        "significant_applicability": "X",
        "high_applicability": "X",
        "source_ref": "SRC-009",
        "source_sheet": "1",
        "source_row_start": "2",
        "source_row_end": "4",
        "source_confidence": "unverified_internal",
        "human_review_status": "PROPOSED",
        "row_number": 2,
        "source_path": "control_catalog.csv",
    }
    values.update(changes)
    return ControlCatalogRecord(**values)


def requirement_record(**changes: str) -> ControlRequirementRecord:
    values = {
        "requirement_id": "REQ-0001",
        "parent_control_ref": "1.1",
        "requirement_ref": "1.1.1",
        "requirement_text": "A szervezet dokumentálja a követelményt.",
        "source_ref": "SRC-009",
        "source_sheet": "1",
        "source_row": "4",
        "source_confidence": "unverified_internal",
        "human_review_status": "PROPOSED",
        "row_number": 2,
        "source_path": "control_requirements.csv",
    }
    values.update(changes)
    return ControlRequirementRecord(**values)


def metadata(control_count: int = 1, detail_count: int = 1) -> dict:
    return {
        "source_sha256": "a" * 64,
        "counts": {
            "requirement_family_count": 1,
            "control_count": control_count,
            "detailed_requirement_count": detail_count,
        },
        "human_review": {"status": "PENDING"},
    }


def _inline_cell(reference: str, value: str) -> str:
    return (
        f'<c r="{reference}" t="inlineStr"><is><t>{value}</t></is></c>'
    )


def _sheet_xml(family: int) -> str:
    prefix = str(family)
    rows = [
        f'<row r="1">{_inline_cell("A1", prefix + ".")}'
        f'{_inline_cell("B1", "CSALÁD " + prefix)}</row>',
        f'<row r="2">{_inline_cell("A2", prefix + ".1.")}'
        f'{_inline_cell("B2", "Kontroll " + prefix)}'
        f'{_inline_cell("C2", "X")}{_inline_cell("D2", "X")}'
        f'{_inline_cell("E2", "X")}</row>',
        f'<row r="3">{_inline_cell("A3", prefix + ".1.")}'
        f'{_inline_cell("B3", "A szervezet:")}'
        f'{_inline_cell("F3", "Magyarázat")}'
        f'{_inline_cell("G3", "Megvalósítás")}</row>',
        f'<row r="4">{_inline_cell("A4", prefix + ".1.1.")}'
        f'{_inline_cell("B4", "Részletes követelmény")}</row>',
    ]
    return (
        '<?xml version="1.0" encoding="UTF-8"?>'
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
        f'<sheetData>{"".join(rows)}</sheetData></worksheet>'
    )


def _write_test_workbook(path: Path) -> None:
    sheets = "".join(
        f'<sheet name="{family}" sheetId="{family}" r:id="rId{family}"/>'
        for family in range(1, 20)
    )
    relationships = "".join(
        f'<Relationship Id="rId{family}" '
        'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" '
        f'Target="worksheets/sheet{family}.xml"/>'
        for family in range(1, 20)
    )
    with zipfile.ZipFile(path, "w") as archive:
        archive.writestr(
            "xl/workbook.xml",
            '<?xml version="1.0" encoding="UTF-8"?>'
            '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
            'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
            f"<sheets>{sheets}</sheets></workbook>",
        )
        archive.writestr(
            "xl/_rels/workbook.xml.rels",
            '<?xml version="1.0" encoding="UTF-8"?>'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            f"{relationships}</Relationships>",
        )
        for family in range(1, 20):
            archive.writestr(
                f"xl/worksheets/sheet{family}.xml", _sheet_xml(family)
            )


class ControlCatalogTests(unittest.TestCase):
    def test_proposal_catalog_is_valid_but_warns(self) -> None:
        result = validate_control_catalog(
            [catalog_record()], [requirement_record()], metadata(), {"1.1"}
        )
        self.assertFalse(result.errors)
        self.assertIn("W_CATALOG_REVIEW_PENDING", {item.code for item in result.warnings})

    def test_missing_used_control_is_hard_error(self) -> None:
        result = validate_control_catalog(
            [catalog_record()], [requirement_record()], metadata(), {"1.1", "2.1"}
        )
        self.assertIn("E_CATALOG_REFERENCE_COVERAGE", {item.code for item in result.errors})

    def test_applicability_order_is_validated(self) -> None:
        result = validate_control_catalog(
            [catalog_record(significant_applicability="-")],
            [requirement_record()],
            metadata(),
        )
        self.assertIn("E_CATALOG_APPLICABILITY_ORDER", {item.code for item in result.errors})

    def test_unknown_requirement_parent_is_error(self) -> None:
        result = validate_control_catalog(
            [catalog_record()],
            [requirement_record(parent_control_ref="2.1")],
            metadata(),
        )
        self.assertIn("E_CATALOG_DETAIL_PARENT", {item.code for item in result.errors})

    def test_pending_g1_review_is_valid_but_warns(self) -> None:
        review_path = (
            Path(__file__).resolve().parents[1]
            / "data"
            / "control_catalog_review.json"
        )
        review = json.loads(review_path.read_text(encoding="utf-8"))
        result = validate_control_catalog_review(review, review_path)
        self.assertFalse(result.errors)
        self.assertEqual(
            {"W_CATALOG_G1_DECISION_PENDING", "W_CATALOG_EIR_CLASS_PENDING"},
            {item.code for item in result.warnings},
        )

    def test_g1_review_rejects_false_approval(self) -> None:
        review_path = (
            Path(__file__).resolve().parents[1]
            / "data"
            / "control_catalog_review.json"
        )
        review = json.loads(review_path.read_text(encoding="utf-8"))
        review["human_decision"]["decision"] = "APPROVED_REFERENCE"
        result = validate_control_catalog_review(review, review_path)
        self.assertIn(
            "E_CATALOG_REVIEW_FALSE_APPROVAL",
            {item.code for item in result.errors},
        )

    def test_g1_review_rejects_tampered_legal_precheck(self) -> None:
        review_path = (
            Path(__file__).resolve().parents[1]
            / "data"
            / "control_catalog_review.json"
        )
        review = json.loads(review_path.read_text(encoding="utf-8"))
        review["official_legal_precheck"]["identifier_match_count"] = 913
        result = validate_control_catalog_review(review, review_path)
        self.assertIn(
            "E_CATALOG_LEGAL_PRECHECK",
            {item.code for item in result.errors},
        )

    def test_official_legal_comparison_is_complete_and_pending_human_review(self) -> None:
        comparison_path = (
            Path(__file__).resolve().parents[1]
            / "data"
            / "control_catalog_legal_comparison.csv"
        )
        with comparison_path.open(encoding="utf-8", newline="") as handle:
            rows = list(csv.DictReader(handle))
        self.assertEqual(914, len(rows))
        self.assertTrue(all(row["identifier_status"] == "MATCH" for row in rows))
        self.assertTrue(all(row["title_status"] == "MATCH" for row in rows))
        self.assertTrue(all(row["applicability_status"] == "MATCH" for row in rows))
        self.assertTrue(
            all(row["human_review_status"] == "PENDING_G1_REVIEW" for row in rows)
        )
        amended = [
            row["control_ref"]
            for row in rows
            if row["amendment_status"] == "AMENDED_BY_18_2024"
        ]
        self.assertEqual(["5.3", "5.4"], amended)

    def test_extraction_and_csv_round_trip_are_deterministic(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            workbook = root / "catalog.xlsx"
            _write_test_workbook(workbook)
            catalog, requirements, meta = extract_catalog(workbook)
            self.assertEqual(19, len(catalog))
            self.assertEqual(38, len(requirements))
            self.assertEqual("Magyarázat", catalog[0].explanation)
            self.assertNotEqual("MAGYARÁZAT", catalog[0].explanation)
            self.assertEqual("1.1", requirements[0].parent_control_ref)

            catalog_path = root / "catalog.csv"
            requirements_path = root / "requirements.csv"
            metadata_path = root / "metadata.json"
            write_catalog_outputs(
                catalog_path, requirements_path, metadata_path,
                catalog, requirements, meta,
            )
            first_catalog_bytes = catalog_path.read_bytes()
            write_catalog_outputs(
                catalog_path, requirements_path, metadata_path,
                catalog, requirements, meta,
            )
            self.assertEqual(first_catalog_bytes, catalog_path.read_bytes())
            self.assertEqual(19, len(load_control_catalog(catalog_path)))
            self.assertEqual(38, len(load_control_requirements(requirements_path)))
            self.assertEqual(19, json.loads(metadata_path.read_text(encoding="utf-8"))["counts"]["control_count"])


if __name__ == "__main__":
    unittest.main()
