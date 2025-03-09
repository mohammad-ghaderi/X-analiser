const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld("api", {
//   getUsers: () => ipcRenderer.invoke("get-users"),
});


contextBridge.exposeInMainWorld('electron', {
    generateExcel: (data) => ipcRenderer.invoke('generate-excel', data),
    generatePDF: (data) => ipcRenderer.invoke('generate-pdf', data),
});