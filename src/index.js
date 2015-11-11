'use strict';

const argv = require('yargs').argv;
const spawn = require('child_process').spawn;
const fs = require('fs');
const app = require('app');
const tty = require('tty');

module.exports = function electronDetach(opts) {
  opts = opts || {}; //eslint-disable-line
  if (argv.detachedProcess || !tty.isatty(process.stdout.fd)) {
    // this is already a detached process, exit
    return true;
  }
  if (!opts.requireCmdlineArg || argv.detach) {
    const args = process.argv
      .slice(1)
      .filter(a => a !== '--detach')
      .concat(['--detached-process']);

    const out = fs.openSync('./out.log', 'a');
    const err = fs.openSync('./out.log', 'a');

    const child = spawn(process.argv[0], args, {
      detached: true,
      stdio: [ 'ignore', out, err ]
    });
    child.unref();
    app.quit();
    return false;
  }
};
