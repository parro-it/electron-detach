const app = require('app');
const argv = require('yargs').argv;
const child_process = require('child_process');

module.exports = function electronDetach(opts) {

  if (argv.detach) {
    const child = child_process.spawn(
      'electron',
      process.argv.slice(1).filter(a => a !== '--detach'),
      {
        detached: true
      }
    );
    child.unref();
    app.quit();

  }
};
