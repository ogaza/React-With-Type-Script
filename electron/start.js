const { app, BrowserWindow } = require('electron');

app.on('ready', handleAppReady);

// declare it here so it is not garbage collected
let mainWindow = null;

function handleAppReady() {
  // show false - means hide the main window initially
  mainWindow = new BrowserWindow({ show: false });

  // load the html
  // mainWindow.loadFile(`${__dirname}/index.html`);
  mainWindow.loadURL('http://localhost:8080/');

  // the html is loaded so the browser window can be shown
  mainWindow.once('ready-to-show', renderApp);
}

function renderApp() {
  mainWindow.show();
}
