const FocusTaskApp = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

FocusTaskApp.on('ready', function() {
    var mainWindow = new BrowserWindow({width: 800,height: 600,resizable:false, maxWidth:800,maxHeight:600});
    mainWindow.setMenu(null);
    mainWindow.loadURL(__dirname + '/index.html');
    mainWindow.openDevTools();
});

FocusTaskApp.on('window-all-closed', function() {
    FocusTaskApp.quit();
});
