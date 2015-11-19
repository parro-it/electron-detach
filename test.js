'use strict';

const electron = require('electron');

function start() {
  electron.app.on('ready', () => {
    const win = new electron.BrowserWindow({});
    win.loadURL('about://blank');
  });
}

const electronDetach = require('.');
if (electronDetach({ requireCmdlineArg: false })) {
  start();
}
