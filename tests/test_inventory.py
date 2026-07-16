from __future__ import annotations

import unittest

from nis2_harness.validation import (
    validate_inventory_export_plan,
    validate_inventory_register,
)


def inventory() -> dict:
    return {
        "schema_version": "1.0",
        "status": "PROPOSAL",
        "action_id": "A-011",
        "source_refs": ["SRC-008:p6"],
        "human_review": {"status": "PENDING", "reviewer": "", "reviewed_at": "", "decision_ref": ""},
        "eir_records": [
            {
                "eir_id": f"EIR-{number:03d}", "name": name,
                "audit_scope": "AUDITED" if number <= 3 else "NOT_AUDITED",
                "owner": "TBD-HUMAN", "source_ref": "SRC-008:p6",
                "source_confidence": "audited", "record_status": "PROPOSED",
            }
            for number, name in enumerate(
                ["Vezetéstámogató", "Irodai", "Termelés", "Hálózat-kommunikációs", "Biztonsági"],
                start=1,
            )
        ],
        "assets": [], "data_sets": [], "locations": [], "dependencies": [],
    }


def export_plan() -> dict:
    return {
        "schema_version": "1.0", "status": "PROPOSAL", "action_id": "A-011",
        "sources": [{
            "source_id": "INV-SRC-001", "category": "COMPUTE",
            "source_system": "TBD-HUMAN", "source_owner": "TBD-HUMAN",
            "scope_eir": "Mind", "acquisition_mode": "EXPORT",
            "required_fields": ["asset_id"], "approval_status": "PENDING",
            "output_classification": "TBD-HUMAN", "evidence_output": "Export és hash.",
        }],
    }


class InventoryValidationTests(unittest.TestCase):
    def test_proposal_baseline_has_only_warnings(self) -> None:
        result = validate_inventory_register(inventory(), "inventory.json")
        self.assertFalse(result.errors)
        self.assertIn("W_INVENTORY_REVIEW_PENDING", {item.code for item in result.warnings})

    def test_duplicate_eir_is_error(self) -> None:
        value = inventory()
        value["eir_records"][1]["eir_id"] = "EIR-001"
        result = validate_inventory_register(value, "inventory.json")
        self.assertIn("E_INVENTORY_EIR_DUPLICATE", {item.code for item in result.errors})

    def test_approved_inventory_requires_human_metadata(self) -> None:
        value = inventory()
        value["status"] = "APPROVED"
        value["human_review"]["status"] = "APPROVED"
        result = validate_inventory_register(value, "inventory.json")
        self.assertIn("E_INVENTORY_APPROVAL", {item.code for item in result.errors})

    def test_unknown_dependency_reference_is_error(self) -> None:
        value = inventory()
        value["dependencies"] = [{
            "dependency_id": "DEP-001", "from_type": "EIR", "from_id": "EIR-001",
            "to_type": "ASSET", "to_id": "AST-X", "dependency_type": "USES",
            "owner": "Teszt", "source_ref": "TEST", "source_confidence": "audited",
            "record_status": "PROPOSED",
        }]
        result = validate_inventory_register(value, "inventory.json")
        self.assertIn("E_INVENTORY_DEPENDENCY_REF", {item.code for item in result.errors})

    def test_asset_must_reference_known_eir(self) -> None:
        value = inventory()
        value["assets"] = [{
            "asset_id": "AST-001", "eir_id": "EIR-X", "name": "Teszt",
            "asset_type": "SERVER", "owner": "Tesztgazda", "location_id": "LOC-001",
            "source_ref": "TEST", "source_confidence": "audited",
            "record_status": "PROPOSED",
        }]
        result = validate_inventory_register(value, "inventory.json")
        self.assertIn("E_INVENTORY_EIR_REF", {item.code for item in result.errors})

    def test_duplicate_dependency_is_error(self) -> None:
        value = inventory()
        dependency = {
            "dependency_id": "DEP-001", "from_type": "EIR", "from_id": "EIR-001",
            "to_type": "EIR", "to_id": "EIR-002", "dependency_type": "USES",
            "owner": "Teszt", "source_ref": "TEST", "source_confidence": "audited",
            "record_status": "PROPOSED",
        }
        value["dependencies"] = [dependency, dependency.copy()]
        result = validate_inventory_register(value, "inventory.json")
        self.assertIn("E_INVENTORY_DEPENDENCY_DUPLICATE", {item.code for item in result.errors})

    def test_export_plan_accepts_read_only_mode(self) -> None:
        result = validate_inventory_export_plan(export_plan(), "export.json")
        self.assertFalse(result.errors)

    def test_export_plan_rejects_write_mode(self) -> None:
        value = export_plan()
        value["sources"][0]["acquisition_mode"] = "REMOTE_CHANGE"
        result = validate_inventory_export_plan(value, "export.json")
        self.assertIn("E_EXPORT_NOT_READ_ONLY", {item.code for item in result.errors})

    def test_approved_export_requires_human_metadata(self) -> None:
        value = export_plan()
        value["sources"][0]["approval_status"] = "APPROVED"
        result = validate_inventory_export_plan(value, "export.json")
        self.assertIn("E_EXPORT_APPROVAL", {item.code for item in result.errors})


if __name__ == "__main__":
    unittest.main()
