

const { app, BrowserWindow } = require('electron');
const path = require('path');
async function createWindow() {
    const isDev = await import('electron-is-dev').then(module => module.default);
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js'),
        //     nodeIntegration: true
        // }
    });
    win.loadFile(path.join(__dirname, 'build', 'index.html'));
    // if (isDev) {
    //     win.loadURL('http://localhost:3000');
    // } else {
    // }
    // win.loadURL('http://localhost:3000');

    // Load React app's index.html

}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
