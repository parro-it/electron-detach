'use strict';

const {spawn} = require('child_process');
const fs = require('fs');
const {app} = require('electron');
const tty = require('tty');
const {argv} = require('yargs');

function electronDetach(opts) {
	opts = opts || {};
	opts.outputPath = opts.outputPath || '/dev/null';

	if (argv.detachedProcess || !tty.isatty(process.stdout.fd)) {
		// This is already a detached process, exit
		return true;
	}

	if (opts.requireCmdlineArg && !argv.detach) {
		// Process has to be restarted only if detach arg
		// is specified on command line, and it isn't
		return true;
	}

	const args = process.argv
		.slice(1)
		.filter(a => a !== '--detach')
		.concat(['--detached-process']);

	const out = fs.openSync(opts.outputPath, 'a');
	const err = fs.openSync(opts.outputPath, 'a');

	const child = spawn(process.argv[0], args, {
		detached: true,
		stdio: ['ignore', out, err]
	});
	child.unref();
	app.quit();
}

module.exports = electronDetach;
