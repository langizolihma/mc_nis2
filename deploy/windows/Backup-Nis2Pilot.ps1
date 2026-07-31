param(
    [string]$RepositoryRoot = "C:\NIS2",
    [string]$OutputDirectory = "C:\NIS2\portal_backups"
)

$ErrorActionPreference = "Stop"
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$output = Join-Path $OutputDirectory "nis2-pilot-$timestamp.zip"

Push-Location $RepositoryRoot
try {
    python -m nis2_harness backup-pilot-runtime --output $output
    if ($LASTEXITCODE -ne 0) {
        throw "A pilotmentés sikertelen."
    }
    python -m nis2_harness verify-pilot-backup --input $output
    if ($LASTEXITCODE -ne 0) {
        throw "A pilotmentés ellenőrzése sikertelen."
    }
}
finally {
    Pop-Location
}

Write-Output "Ellenőrzött pilotmentés: $output"
