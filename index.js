'use strict';
var emojis = require('emoji-lexicon');
var faces = require('cool-ascii-faces');
var cats = require('cat-ascii-faces');
var dance = require('kirby-dance');
var japanese = require('./node_modules/emoticon-data/emoticons.json');
var types = [
	'emoji',
	'face',
	'cat',
	'dance',
	'japan'
];

exports.emoji = emojis[Math.floor(Math.random() * emojis.length)];
exports.face = faces();
exports.cat = cats();
exports.dance = dance(Math.floor(Math.random() * 10) + 2);
exports.japan = japanese.emoticons[Math.floor(Math.random() * japanese.emoticons.length)].string;
exports.random = exports[types[Math.floor(Math.random() * types.length)]];
