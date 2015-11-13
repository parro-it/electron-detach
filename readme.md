# electron-detach

This module restart the app as a detached electron process,
allowing an electron app to be started from terminal and
survive parent process closure.

[![NPM module](https://img.shields.io/npm/v/electron-detach.svg)](https://npmjs.org/package/electron-detach)
[![NPM downloads](https://img.shields.io/npm/dt/electron-detach.svg)](https://npmjs.org/package/electron-detach)

## Installation

```bash
npm install --save electron-detach
```

## Usage

```javascript
  const electronDetach = require('electron-detach');

  //returns true if your process is a detached child process
  if (electronDetach({ requireCmdlineArg: false })) {
    app.on('ready',()=>{
       //turn the app on
    });
  }
```

## Api

Calling `electronDetach()` returns `true` if current process is already detached from the terminal.
If calling `electronDetach()` returns `false` the process will be killed as soon a detached one is spawned.

If calling `electronDetach()` returns `true`, this means that it is good to start your app now. If it returns `false`, your process will shortly be terminated.

```javascript
const electronDetach = require('electron-detach');
if(electronDetach()){
  //Turn your app on, as your app is in a process that is not going to be killed
} else {
  //Your app is going to be killed. Respond accordingly
}
```

### Option argument

An optional object containing following property:

* requireCmdlineArg

only restart the app if --detach command line argument is present.
Defaults to false.

## License

The MIT License (MIT)

Copyright (c) 2015 Andrea Parodi



