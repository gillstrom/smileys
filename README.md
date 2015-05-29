# smileys [![Build Status](https://travis-ci.org/gillstrom/smileys.svg?branch=master)](https://travis-ci.org/gillstrom/smileys)

> Returns a random smiley of your choice


## Install

```
$ npm install --save smileys
```


## Usage

```js
var smileys = require('smileys');

console.log(smileys.face())
//=> '(͡° ͜ʖ ͡°)'

console.log(smileys.random());
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
