'use strict';
var emojis = require('emoji-lexicon');
var faces = require('cool-ascii-faces');
var cats = require('cat-ascii-faces');
var dance = require('kirby-dance');
var japanese = require('./node_modules/emoticon-data/emoticons.json');
var objectRandom = require('object-random');
var randomItem = require('random-item');

exports.emoji = function () {
	return randomItem(emojis);
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
	return objectRandom(japanese.emoticons)[0].string;
}

exports.random = function () {
	return objectRandom(exports)[0]();
}

