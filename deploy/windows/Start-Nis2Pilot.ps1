param(
    [string]$RepositoryRoot = "C:\NIS2",
    [string]$ConfigPath = "config\multiuser_pilot.json"
)

$ErrorActionPreference = "Stop"
$configFullPath = Join-Path $RepositoryRoot $ConfigPath
$config = Get-Content -LiteralPath $configFullPath -Raw | ConvertFrom-Json

if ($config.status -ne "APPROVED_FOR_NON_PRODUCTION_PILOT") {
    throw "A hálózati pilot blokkolt: G1, G2 és G3 jóváhagyás szükséges."
}
if (-not $config.runtime_controls.publish_enabled) {
    throw "A publish_enabled kapcsoló nincs jóváhagyva."
}

Push-Location $RepositoryRoot
try {
    python -m nis2_harness validate-multiuser-pilot --config $ConfigPath
    if ($LASTEXITCODE -ne 0) {
        throw "A többfelhasználós pilot konfigurációja érvénytelen."
    }
    python -m nis2_harness serve-portal `
        --host $config.topology.backend_bind_host `
        --port $config.topology.backend_port
}
finally {
    Pop-Location
}
