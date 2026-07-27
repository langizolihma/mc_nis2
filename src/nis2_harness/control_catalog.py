"""Deterministic extraction of the NIS2 control reference workbook."""

from __future__ import annotations

import csv
from dataclasses import asdict, fields
import hashlib
import io
import json
from pathlib import Path
import re
from typing import Any, Iterable
import xml.etree.ElementTree as ET
import zipfile

from .registry import ControlCatalogRecord, ControlRequirementRecord


MAIN_NS = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
REL_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
NS = {"m": MAIN_NS, "r": REL_NS}
EXPECTED_FAMILIES = tuple(str(value) for value in range(1, 20))
SOURCE_REF = "SRC-009"
SOURCE_CONFIDENCE = "unverified_internal"
REVIEW_STATUS = "PROPOSED"
APP_MARKERS = {"X", "-"}


def normalize_control_ref(value: str) -> str:
    """Normalize display-only dots and whitespace without changing hierarchy."""
    return value.strip().rstrip(".").replace(" ", "")


def _normalize_cell_text(value: str) -> str:
    """Remove non-semantic line-end whitespace inherited from Excel cells."""
    return "\n".join(line.rstrip() for line in value.strip().splitlines())


def _cell_column(reference: str) -> str:
    match = re.match(r"[A-Z]+", reference)
    if match is None:
        raise ValueError(f"hibás cellahivatkozás: {reference!r}")
    return match.group(0)


def _shared_strings(archive: zipfile.ZipFile) -> list[str]:
    if "xl/sharedStrings.xml" not in archive.namelist():
        return []
    root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
    return [
        "".join(node.text or "" for node in item.iter(f"{{{MAIN_NS}}}t"))
        for item in root.findall("m:si", NS)
    ]


def _sheet_rows(
    archive: zipfile.ZipFile, target: str, shared_strings: list[str]
) -> list[tuple[int, dict[str, str]]]:
    normalized_target = target.lstrip("/")
    if not normalized_target.startswith("xl/"):
        normalized_target = f"xl/{normalized_target}"
    root = ET.fromstring(archive.read(normalized_target))
    sheet_data = root.find("m:sheetData", NS)
    rows: list[tuple[int, dict[str, str]]] = []
    for row in () if sheet_data is None else sheet_data.findall("m:row", NS):
        values: dict[str, str] = {}
        for cell in row.findall("m:c", NS):
            reference = cell.attrib.get("r", "")
            column = _cell_column(reference)
            cell_type = cell.attrib.get("t")
            value_node = cell.find("m:v", NS)
            value = ""
            if cell_type == "s" and value_node is not None and value_node.text is not None:
                value = shared_strings[int(value_node.text)]
            elif cell_type == "inlineStr":
                value = "".join(
                    node.text or "" for node in cell.iter(f"{{{MAIN_NS}}}t")
                )
            elif value_node is not None:
                value = value_node.text or ""
            if value:
                values[column] = _normalize_cell_text(value)
        if values:
            rows.append((int(row.attrib.get("r", "0")), values))
    return rows


def _workbook_sheets(archive: zipfile.ZipFile) -> dict[str, list[tuple[int, dict[str, str]]]]:
    shared = _shared_strings(archive)
    relationships = {
        item.attrib["Id"]: item.attrib["Target"]
        for item in ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
    }
    workbook = ET.fromstring(archive.read("xl/workbook.xml"))
    result: dict[str, list[tuple[int, dict[str, str]]]] = {}
    sheets = workbook.find("m:sheets", NS)
    if sheets is None:
        raise ValueError("az Excel nem tartalmaz munkalapokat")
    for sheet in sheets:
        name = sheet.attrib["name"]
        relationship_id = sheet.attrib[f"{{{REL_NS}}}id"]
        result[name] = _sheet_rows(archive, relationships[relationship_id], shared)
    return result


def _core_properties(archive: zipfile.ZipFile) -> dict[str, str]:
    if "docProps/core.xml" not in archive.namelist():
        return {}
    result: dict[str, str] = {}
    for item in ET.fromstring(archive.read("docProps/core.xml")):
        if item.text:
            result[item.tag.split("}")[-1]] = item.text
    return result


def _first_value(rows: Iterable[dict[str, str]], column: str) -> str:
    return next((row[column] for row in rows if row.get(column)), "")


def extract_catalog(
    input_path: str | Path,
) -> tuple[list[ControlCatalogRecord], list[ControlRequirementRecord], dict[str, Any]]:
    """Read the source workbook and return proposal-only structured records."""
    source = Path(input_path)
    workbook_bytes = source.read_bytes()
    with zipfile.ZipFile(io.BytesIO(workbook_bytes)) as archive:
        names = archive.namelist()
        if any("vbaProject" in name for name in names):
            raise ValueError("a kontrollkatalógus makrót tartalmaz; automatikus kivonás tiltva")
        if any("externalLink" in name or "connections" in name.lower() for name in names):
            raise ValueError("a kontrollkatalógus külső adatkapcsolatot tartalmaz")
        sheets = _workbook_sheets(archive)
        properties = _core_properties(archive)

    missing_sheets = [name for name in EXPECTED_FAMILIES if name not in sheets]
    if missing_sheets:
        raise ValueError(
            "hiányzó követelménycsalád-munkalapok: " + ", ".join(missing_sheets)
        )

    catalog: list[ControlCatalogRecord] = []
    requirements: list[ControlRequirementRecord] = []
    requirement_counter = 0
    family_titles: dict[str, str] = {}

    for family in EXPECTED_FAMILIES:
        rows = sheets[family]
        family_titles[family] = rows[0][1].get("B", "") if rows else ""
        headings = [
            (index, row_number, values)
            for index, (row_number, values) in enumerate(rows)
            if normalize_control_ref(values.get("A", ""))
            and any(values.get(column) in APP_MARKERS for column in ("C", "D", "E"))
        ]
        for heading_index, (row_index, row_number, values) in enumerate(headings):
            next_row_index = (
                headings[heading_index + 1][0] if heading_index + 1 < len(headings) else len(rows)
            )
            block = rows[row_index:next_row_index]
            block_values = [item[1] for item in block]
            detail_values = block_values[1:]
            control_ref = normalize_control_ref(values.get("A", ""))
            end_row = block[-1][0] if block else row_number
            catalog.append(
                ControlCatalogRecord(
                    control_ref=control_ref,
                    requirement_family=family,
                    control_title=values.get("B", ""),
                    basic_applicability=values.get("C", ""),
                    significant_applicability=values.get("D", ""),
                    high_applicability=values.get("E", ""),
                    explanation=_first_value(detail_values, "F"),
                    implementation_steps=_first_value(detail_values, "G"),
                    legacy_41_2015_ref=_first_value(detail_values, "H"),
                    iso_27001_ref=_first_value(detail_values, "I"),
                    nist_sp_800_53_rev5_ref=_first_value(detail_values, "J"),
                    parameters=_first_value(detail_values, "K"),
                    related_controls=_first_value(detail_values, "L"),
                    source_ref=SOURCE_REF,
                    source_sheet=family,
                    source_row_start=str(row_number),
                    source_row_end=str(end_row),
                    source_confidence=SOURCE_CONFIDENCE,
                    human_review_status=REVIEW_STATUS,
                    notes=(
                        "G1 szakmai és forráseredet-review előtt referenciajavaslat; "
                        "nem auditbizonyíték és nem zár le akciót."
                    ),
                )
            )
            for detail_row_number, detail_values in block[1:]:
                requirement_ref = normalize_control_ref(detail_values.get("A", ""))
                requirement_text = detail_values.get("B", "")
                if not requirement_ref or not requirement_text:
                    continue
                requirement_counter += 1
                requirements.append(
                    ControlRequirementRecord(
                        requirement_id=f"REQ-{requirement_counter:04d}",
                        parent_control_ref=control_ref,
                        requirement_ref=requirement_ref,
                        requirement_text=requirement_text,
                        source_ref=SOURCE_REF,
                        source_sheet=family,
                        source_row=str(detail_row_number),
                        source_confidence=SOURCE_CONFIDENCE,
                        human_review_status=REVIEW_STATUS,
                        notes="Az eredeti munkafüzetből determinisztikusan kinyert részletes követelmény.",
                    )
                )

    digest = hashlib.sha256(workbook_bytes).hexdigest()
    metadata: dict[str, Any] = {
        "schema_version": "1.0",
        "status": "PROPOSAL",
        "source_ref": SOURCE_REF,
        "source_file": source.name,
        "source_sha256": digest,
        "source_confidence": SOURCE_CONFIDENCE,
        "catalog_version": "1.0",
        "legal_basis": "7/2024. (VI. 24.) MK rendelet 2. melléklet",
        "workbook_properties": properties,
        "safety_scan": {
            "macros_present": False,
            "external_links_present": False,
            "digital_signature_present": False,
        },
        "counts": {
            "sheet_count": len(sheets),
            "requirement_family_count": len(EXPECTED_FAMILIES),
            "control_count": len(catalog),
            "detailed_requirement_count": len(requirements),
        },
        "families": [
            {"requirement_family": family, "title": family_titles[family]}
            for family in EXPECTED_FAMILIES
        ],
        "human_review": {
            "status": "PENDING",
            "reviewer": "",
            "reviewed_at": "",
            "decision_ref": "",
            "required_gate": "G1_DOMAIN_REVIEW",
        },
        "limitations": [
            "A munkafüzet digitális aláírást nem tartalmaz; eredete külön igazolandó.",
            "Az Excel nem auditbizonyíték és nem igazol kontrollműködést.",
            "Az alkalmazandó kontrollkörhöz EIR-enként emberileg igazolt biztonsági osztály szükséges.",
        ],
    }
    return catalog, requirements, metadata


def _write_typed_csv(
    path: str | Path, records: Iterable[ControlCatalogRecord | ControlRequirementRecord],
    record_type: type[ControlCatalogRecord] | type[ControlRequirementRecord],
) -> None:
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    fieldnames = [
        item.name for item in fields(record_type)
        if item.name not in {"row_number", "source_path"}
    ]
    with target.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        for record in records:
            writer.writerow({name: asdict(record)[name] for name in fieldnames})


def write_catalog_outputs(
    catalog_path: str | Path,
    requirements_path: str | Path,
    metadata_path: str | Path,
    catalog: list[ControlCatalogRecord],
    requirements: list[ControlRequirementRecord],
    metadata: dict[str, Any],
) -> None:
    """Write stable UTF-8 outputs without modifying the input workbook."""
    _write_typed_csv(catalog_path, catalog, ControlCatalogRecord)
    _write_typed_csv(requirements_path, requirements, ControlRequirementRecord)
    target = Path(metadata_path)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(
        json.dumps(metadata, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )
