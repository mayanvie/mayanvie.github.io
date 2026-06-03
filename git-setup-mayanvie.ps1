# One-time local Git setup for mayanvie portfolio (does NOT push)
$ErrorActionPreference = "Stop"
$Root = $PSScriptRoot

function Require-Git {
  $git = Get-Command git -ErrorAction SilentlyContinue
  if (-not $git) {
    Write-Host ""
    Write-Host "Git chua duoc cai hoac chua co trong PATH." -ForegroundColor Red
    Write-Host "Tai: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Cai xong, mo PowerShell moi va chay lai script nay." -ForegroundColor Yellow
    exit 1
  }
  return $git.Source
}

Set-Location $Root
$gitExe = Require-Git

if (-not (Test-Path ".git")) {
  & $gitExe init
  Write-Host "Da tao .git trong $Root" -ForegroundColor Green
} else {
  Write-Host ".git da ton tai — bo qua git init" -ForegroundColor DarkGray
}

& $gitExe config user.name "Le Kieu Duyen"
& $gitExe config user.email "kieuduyen.contact@gmail.com"
& $gitExe config credential.useHttpPath true

Write-Host ""
Write-Host "Local git config (chi folder nay):" -ForegroundColor Cyan
& $gitExe config --local --get user.name
& $gitExe config --local --get user.email

$remote = & $gitExe remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host ""
  Write-Host "Chua co remote. Sau khi tao repo mayanvie.github.io tren GitHub (dang nhap mayanvie):" -ForegroundColor Yellow
  Write-Host '  git remote add origin https://github.com/mayanvie/mayanvie.github.io.git' -ForegroundColor White
  Write-Host "  hoac SSH: git remote add origin git@github.com-mayanvie:mayanvie/mayanvie.github.io.git" -ForegroundColor White
  Write-Host ""
  Write-Host "Huong dan day du: HUONG-DAN-GIT-LOCAL-MAYANVIE.md" -ForegroundColor Cyan
} else {
  Write-Host ""
  Write-Host "Remote hien tai: $remote" -ForegroundColor Green
}

Write-Host ""
Write-Host "Script KHONG tu dong push. Ban tu commit/push bang tai khoan mayanvie." -ForegroundColor DarkGray