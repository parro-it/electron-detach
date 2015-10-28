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
  import electronDetach from 'electron-detach';
  electronDetach({
  	requireCmdlineArg: false
  });
```

## Options

* requireCmdlineArg

only restart the app if --detach command line argument is present.
Defaults to false.

## License

The MIT License (MIT)

Copyright (c) 2015 Andrea Parodi



