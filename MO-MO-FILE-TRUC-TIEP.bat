@echo off
cd /d "%~dp0"
start "" "%~dp0index.html"
echo Opened index.html directly (no server). CSS should still load.
pause