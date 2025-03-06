const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld("api", {
//   getUsers: () => ipcRenderer.invoke("get-users"),
});


const x = () => {
    console.log('hello');
    return 'How.........'
}

contextBridge.exposeInMainWorld('electron', {
    generateExcel: (data) => ipcRenderer.invoke('generate-excel', data),  // Call IPC from renderer
    xxx: () => x(),  // Call IPC from renderer
});