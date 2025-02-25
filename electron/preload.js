const { contextBridge } = require('electron/renderer')

contextBridge.exposeInMainWorld("api", {
//   getUsers: () => ipcRenderer.invoke("get-users"),
});
