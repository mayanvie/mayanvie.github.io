@echo off
title GitHub login (mayanvie)
set "GH=%LOCALAPPDATA%\GitHubCLI\gh.exe"
if not exist "%GH%" (
  echo GitHub CLI not found. Run mayanvie-setup or install gh first.
  pause
  exit /b 1
)
echo.
echo Log in as MAYANVIE (not Logos52).
echo Browser will open — complete login in the browser.
echo.
"%GH%" auth login -h github.com -p https -w
echo.
"%GH%" auth status
pause