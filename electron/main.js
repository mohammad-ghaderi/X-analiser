const { app, BrowserWindow, ipcMain } = require('electron/main')
const { generateExcel } = require('./IPC-funcs/generateExcel'); // Import function
const path = require('node:path')

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  
  mainWindow.loadURL("http://localhost:5173"); // React Dev Server
  // mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
}



app.whenReady().then(() => {
  createWindow();
  
  // ✅ Register the IPC handler BEFORE `app.whenReady()`
  ipcMain.handle('generate-excel', async (event, data) => {
    console.log("✅ Received request to generate Excel:", data);
    return generateExcel(data);
  });

  console.log("✅ IPC handler for 'generate-excel' is registered");

  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});