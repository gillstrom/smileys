#!/usr/bin/env node
'use strict';
var meow = require('meow');
var smileys = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ smileys',
		'  $ smileys <type-of-smiley>',
		'',
		'List of smileys',
		'  emoji',
		'  face',
		'  cat',
		'  dance',
		'  japan'
	].join('\n')
});

if (!cli.input[0]) {
	console.log(smileys.random());
} else {
	if (!smileys[cli.input[0]]) {
		console.error('This type of smiley doesn\'t exist');
		process.exit(1);
	}

	console.log(smileys[cli.input[0]]());
}
