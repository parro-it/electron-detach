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
  if (electronDetach({ requireCmdlineArg: false })) { //returns true if your process is a detached child process
    app.on('ready',()=>{
       //turn the app on
    });
  }
```

## Api

Return true if current process is already detached from terminal.
Otherwise if return false the process will be killed as soon a detached one is spawned. You can use the return value to activate your app only
if process is not going to be killed.

### Option argument

An optional object containing following property:

* requireCmdlineArg

only restart the app if --detach command line argument is present.
Defaults to false.

## License

The MIT License (MIT)

Copyright (c) 2015 Andrea Parodi



