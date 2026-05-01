const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('appAPI', {
  quit: () => ipcRenderer.send('app:quit')
});
