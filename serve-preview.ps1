# Simple static preview server for portfolio (PowerShell)
$Root = $PSScriptRoot
$Port = 55088

$lanIp = $null
try {
  $lanIp = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction Stop |
    Where-Object { $_.IPAddress -notlike '127.*' -and $_.PrefixOrigin -ne 'WellKnown' } |
    Select-Object -First 1 -ExpandProperty IPAddress
} catch {
  $lanIp = $null
}

$listener = New-Object System.Net.HttpListener
# localhost first — works without admin / urlacl on Windows
$listener.Prefixes.Add("http://127.0.0.1:$Port/")
$listener.Prefixes.Add("http://localhost:$Port/")
if ($lanIp) {
  try {
    $listener.Prefixes.Add("http://${lanIp}:$Port/")
  } catch {
    Write-Host "  Note: LAN bind skipped (phone preview may need firewall rule)." -ForegroundColor DarkYellow
  }
}

try {
  $listener.Start()
} catch {
  Write-Host ""
  Write-Host "Could not start on port $Port : $($_.Exception.Message)" -ForegroundColor Red
  Write-Host "Try closing other preview windows, or edit `$Port in serve-preview.ps1" -ForegroundColor Yellow
  exit 1
}

Write-Host ""
Write-Host "Portfolio preview is running" -ForegroundColor Green
Write-Host "  On THIS laptop use:" -ForegroundColor Cyan
Write-Host "    http://127.0.0.1:$Port/" -ForegroundColor White
Write-Host "    http://localhost:$Port/" -ForegroundColor White
  Write-Host "  Work (structure): http://127.0.0.1:$Port/work.html#act-2" -ForegroundColor Cyan
Write-Host "  Mobile hub (QR):   http://127.0.0.1:$Port/mobile-preview.html" -ForegroundColor Cyan
if ($lanIp) {
  Write-Host "  On phone (same Wi-Fi only):" -ForegroundColor Yellow
  Write-Host "    http://${lanIp}:$Port/mobile-preview.html" -ForegroundColor White
}
Write-Host "  Folder: $Root" -ForegroundColor DarkGray
Write-Host "  Stop: Ctrl+C in this window" -ForegroundColor DarkGray
Write-Host ""

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".gif"  = "image/gif"
  ".svg"  = "image/svg+xml"
  ".pdf"  = "application/pdf"
  ".ico"  = "image/x-icon"
  ".txt"  = "text/plain; charset=utf-8"
  ".md"   = "text/plain; charset=utf-8"
}

function Get-LocalPath([string]$urlPath) {
  $rel = [System.Uri]::UnescapeDataString($urlPath.TrimStart("/"))
  if ([string]::IsNullOrWhiteSpace($rel)) { $rel = "index.html" }
  $full = Join-Path $Root ($rel -replace "/", [IO.Path]::DirectorySeparatorChar)
  $full = [IO.Path]::GetFullPath($full)
  if (-not $full.StartsWith([IO.Path]::GetFullPath($Root), [StringComparison]::OrdinalIgnoreCase)) {
    return $null
  }
  return $full
}

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $path = $ctx.Request.Url.LocalPath
    $local = Get-LocalPath $path

    if ($null -eq $local -or -not (Test-Path $local)) {
      $ctx.Response.StatusCode = 404
      $bytes = [Text.Encoding]::UTF8.GetBytes("<h1>404</h1><p>Not found: $path</p>")
      $ctx.Response.ContentType = "text/html; charset=utf-8"
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      $ctx.Response.Close()
      continue
    }

    if (Test-Path $local -PathType Container) {
      $local = Join-Path $local "index.html"
      if (-not (Test-Path $local)) {
        $ctx.Response.StatusCode = 404
        $ctx.Response.Close()
        continue
      }
    }

    $ext = [IO.Path]::GetExtension($local).ToLowerInvariant()
    $type = $mime[$ext]
    if (-not $type) { $type = "application/octet-stream" }

    $bytes = [IO.File]::ReadAllBytes($local)
    $ctx.Response.StatusCode = 200
    $ctx.Response.ContentType = $type
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $ctx.Response.Close()
  }
}
finally {
  if ($listener.IsListening) { $listener.Stop() }
}