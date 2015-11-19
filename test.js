'use strict';

const electron = require('electron');

function start() {
  process.stdout.write('We are writing to log file now.\n');
  electron.app.on('ready', () => {
    const win = new electron.BrowserWindow({});
    win.loadURL('about://blank');
  });
}

const electronDetach = require('.');
const appDetachedFromTerminal = electronDetach({
  requireCmdlineArg: true,
  // outputPath: __dirname + '/test.log'
});

if (appDetachedFromTerminal) {
  start();
}
