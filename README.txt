# Escolinha de Futebol — App Offline (Windows)

Este pacote cria um aplicativo de desktop (Windows) para gerenciar alunos, turmas, matrículas, presença e relatórios — 100% offline (dados no seu computador via localStorage).

## Como usar (rapidez)
1. **Abra `index.html`** (dois cliques) → o app abre no navegador e funciona offline.
   - Use **Backup** (topo) para salvar/recuperar seus dados (.json).

## Como gerar o .EXE (Windows)
1. Instale o **Node.js (LTS)**: https://nodejs.org/
2. Dê dois cliques em **`gerar_exe.bat`**.
3. Ao finalizar, abra a pasta **`dist/EscolinhaFutebol-win32-x64/`** e execute **`EscolinhaFutebol.exe`**.

> O script instala as dependências (Electron) e usa o **electron-packager** para montar o executável.

## Estrutura
- `index.html`, `styles.css` → App web offline (UI + lógica).
- `main.js` → Processo principal do Electron.
- `package.json` → Configuração do projeto Electron.
- `gerar_exe.bat` → Script para criar o executável.
- `dist/` → (será criada) pasta com o .exe após o build.

## Backup/Importação
- Clique em **Backup (.json)** para baixar os dados (alunos, turmas, matrículas e presença).
- Clique em **Importar** e selecione o `.json` para restaurar.

## Observações
- Os dados ficam salvos no **localStorage** do app.
- O .exe não precisa de internet.
- Para atualizar para uma próxima versão, basta substituir estes arquivos (e manter seus backups `.json`).

Bom uso! ⚽