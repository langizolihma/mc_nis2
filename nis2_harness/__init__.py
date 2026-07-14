"""Source-tree compatibility package for install-free execution."""

from pathlib import Path

_SOURCE_PACKAGE = Path(__file__).resolve().parent.parent / "src" / "nis2_harness"
if str(_SOURCE_PACKAGE) not in __path__:
    __path__.append(str(_SOURCE_PACKAGE))

__version__ = "0.1.0"

