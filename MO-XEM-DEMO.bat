@echo off
title Portfolio Preview
cd /d "%~dp0"
echo.
echo  Laptop: http://127.0.0.1:55088/
echo  (Do NOT use 192.168.x.x on the same laptop)
echo.
start "" "http://127.0.0.1:55088/"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve-preview.ps1"