const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')


let mainWindow;
app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // mainWindow.loadURL("http://localhost:5173"); // React Dev Server
  mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
});
