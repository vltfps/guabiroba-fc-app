const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadFile('index.html');
}

const template = [
  {
    label: "Arquivo",
    submenu: [
      { role: "reload", label: "Recarregar" },
      { role: "toggleDevTools", label: "Dev Tools" },
      { type: "separator" },
      { role: "quit", label: "Sair" }
    ]
  },
  {
    label: "Ajuda",
    submenu: [
      {
        label: "Abrir pasta de dados (localStorage fica no app)",
        click: async () => {
          const dir = app.getPath('userData');
          await shell.openPath(dir);
        }
      }
    ]
  }
];

app.whenReady().then(() => {
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});