# smileys [![Build Status](https://travis-ci.org/gillstrom/smileys.svg?branch=master)](https://travis-ci.org/gillstrom/smileys)

> Returns a smiley


## Install

```
$ npm install --save smileys
```


## Usage

```js
var smileys = require('smileys');

smileys('face');
//=> '(͡° ͜ʖ ͡°)'

smileys('random');
//=> '👰'
```


## CLI

```
$ npm install --global smileys
```

```
$ smileys --help

  Usage
    $ smileys
    $ smileys <type-of-smiley>

  List of smileys
    emoji
    face
    cat
    dance
    japan
```


## License

MIT © [Andreas Gillström](https://github.com/gillstrom)
