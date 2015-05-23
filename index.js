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

exports.emoji = function () {
	return emojis[Math.floor(Math.random() * emojis.length)];
}

exports.face = function () {
	return faces();
}

exports.cat = function () {
	return cats();
}

exports.dance = function () {
	return dance(Math.floor(Math.random() * 10) + 2);
}

exports.japan = function () {
	return japanese.emoticons[Math.floor(Math.random() * japanese.emoticons.length)].string;
}

exports.random = function () {
	return exports[types[Math.floor(Math.random() * types.length)]]();
}

