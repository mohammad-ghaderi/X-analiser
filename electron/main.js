const { app, BrowserWindow, ipcMain, dialog } = require('electron/main')
const path = require('node:path');
const { generateExcel } = require('./IPC-funcs/generateExcel');
const { generatePDF } = require('./IPC-funcs/generatePdf');
require('./backend');

let mainWindow;
const isDev = !app.isPackaged;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            icon: path.join(__dirname, "public", "logo.svg"), // Set icon
            nodeIntegration: true,
            contextIsolation: true,
        },
    });

    if (isDev) {
        mainWindow.loadURL("http://localhost:5173"); // Load React dev server
      } else {
        mainWindow.loadFile(path.join(__dirname, '../dist/index.html')); // Load built React app
      }

    // mainWindow.loadURL("http://localhost:5173"); // React Dev Server
    // mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
}



app.whenReady().then(() => {
    createWindow();

    ipcMain.handle('generate-excel', async (event, data) => {

        const { filePath } = await dialog.showSaveDialog({
            title: 'Save Excel File',
            defaultPath: `analysis${Date.now()}.xlsx`,
            filters: [{ name: 'Excel Files', extensions: ['xlsx'] }],
        });

        if (filePath) {
            const result = generateExcel(data.data, data.type, filePath); // Pass filePath to your function
            return result;
        } else {
            return { error: 'User canceled file selection' };
        }
    });

    ipcMain.handle('generate-pdf', async (event, data) => {
        // Show Save Dialog to let the user select where to save the PDF file
        const { filePath } = await dialog.showSaveDialog({
            title: 'Save PDF File',
            defaultPath: `analysis${Date.now()}.pdf`,
            filters: [{ name: 'PDF Files', extensions: ['pdf'] }],
        });

        if (filePath) {
            // Call the function to copy the Excel template and convert it to PDF
            const result = await generatePDF(data.data, data.type, filePath); // Pass filePath to your function
            return result;
        } else {
            return { error: 'User canceled file selection' };
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});