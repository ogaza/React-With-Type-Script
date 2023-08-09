const { app, BrowserWindow } = require('electron');

app.on('ready', handleAppReady);

function handleAppReady() {
  const mainWindow = new BrowserWindow();
}
