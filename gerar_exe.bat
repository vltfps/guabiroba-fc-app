@echo off
SETLOCAL

echo ===== Escolinha de Futebol - Builder (.exe) =====
echo.

REM Detect Node
where node >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
  echo [!] Node.js nao encontrado. Instale a versao LTS em https://nodejs.org/
  pause
  exit /b 1
)

echo [1/4] Instalando dependencias (electron)...
call npm install

echo [2/4] Instalando electron-packager (global, se necessario)...
where electron-packager >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
  call npm install -g electron-packager
)

echo [3/4] Gerando executavel...
electron-packager . EscolinhaFutebol --platform=win32 --arch=x64 --out=dist --overwrite

IF %ERRORLEVEL% NEQ 0 (
  echo [!] Falha ao empacotar.
  pause
  exit /b 1
)

echo [4/4] Pronto!
echo Abra a pasta: dist\EscolinhaFutebol-win32-x64\
echo E execute:    EscolinhaFutebol.exe
pause