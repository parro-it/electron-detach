const app = require('app');
const argv = require('yargs').argv;
const spawn = require('child_process').spawn;

module.exports = function electronDetach(opts = {}) {
  if (argv.noDetach) {
    // this is already a detached process, exit
    return;
  }

  if (!opts.requireCmdlineArg || argv.detach) {
    const args = process.argv
        .slice(1)
        .filter(a => a !== '--detach')
        .concat(['--no-detach']);

    const child = spawn('electron', args, { detached: true });
    child.unref();
    app.quit();
  }
};
