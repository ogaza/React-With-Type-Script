const { app, BrowserWindow, ipcMain } = require('electron');
const { createLogger } = require('./logger');
const path = require('path');

const appLogger = createLogger('app');

app.on('ready', handleAppReady);

// declare it here so it is not garbage collected
let mainWindow = null;

function handleAppReady() {
  // show false - means hide the main window initially
  // logger.info('creating browser window');
  registerLogHandler();
  mainWindow = createMainWindow();

  // load the html
  // mainWindow.loadFile(`${__dirname}/index.html`);
  // logger.info('lodaing html page');
  loadMainWindow();

  // the html is loaded so the browser window can be shown
  showMainWindow();
}
function createMainWindow() {
  return new BrowserWindow({
    webPreferences: { show: false, preload: path.join(__dirname, 'preload.js') }
  });
}

function loadMainWindow() {
  mainWindow.loadURL('http://localhost:8080/').catch((e) => {
    // logger.info('lodaing html page error');
  });
}

function showMainWindow() {
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  // logger.info('rendering app');
}

function registerLogHandler() {
  ipcMain.on('send-message', (event, messageObject) => {
    appLogger.info(messageObject);
  });
}
