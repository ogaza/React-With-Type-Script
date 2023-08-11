const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: sendMessageToMainProcess
});

function sendMessageToMainProcess(message) {
  ipcRenderer.send('send-message', message);
}
