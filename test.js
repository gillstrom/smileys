'use strict';
var test = require('ava');
var smileys = require('./');

test('smileys', function (t) {
	t.plan(6);

	t.assert(typeof smileys.emoji === 'string');
	t.assert(typeof smileys.face === 'string');
	t.assert(typeof smileys.cat === 'string');
	t.assert(typeof smileys.dance === 'string');
	t.assert(typeof smileys.japan === 'string');
	t.assert(typeof smileys.random === 'string');
});
