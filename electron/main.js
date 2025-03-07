const { app, BrowserWindow, ipcMain, dialog  } = require('electron/main')
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
  
  ipcMain.handle('generate-excel', async (event, data) => {

    const { filePath } = await dialog.showSaveDialog({
      title: 'Save Excel File',
      defaultPath: 'analysis.xlsx',
      filters: [{ name: 'Excel Files', extensions: ['xlsx'] }],
    });
  
    if (filePath) {
      const result = generateExcel(data, filePath); // Pass filePath to your function
      return result;
    } else {
      return { error: 'User canceled file selection' };
    }
  });
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});