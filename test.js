'use strict';

const electron = require('electron');
const electronDetach = require('.');

function start() {
	process.stdout.write('We are writing to log file now.\n');
	electron.app.on('ready', () => {
		const win = new electron.BrowserWindow({});
		win.loadURL('about://blank');
	});
}

const appDetachedFromTerminal = electronDetach({
	requireCmdlineArg: true
});
console.log({appDetachedFromTerminal});
if (appDetachedFromTerminal) {
	start();
}
