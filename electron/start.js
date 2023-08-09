const { app, BrowserWindow } = require('electron');
const { createLogger } = require('./logger');

const logger = createLogger();

app.on('ready', handleAppReady);

// declare it here so it is not garbage collected
let mainWindow = null;

function handleAppReady() {
  // show false - means hide the main window initially
  logger.info('creating browser window');
  mainWindow = new BrowserWindow({ show: false });

  // load the html
  // mainWindow.loadFile(`${__dirname}/index.html`);
  logger.info('lodaing html page');
  mainWindow.loadURL('http://localhost:8080/').catch((e) => {
    logger.info('lodaing html page error');
  });

  // the html is loaded so the browser window can be shown
  mainWindow.once('ready-to-show', renderApp);
}

function renderApp() {
  logger.info('rendering app');

  mainWindow.show();
}
