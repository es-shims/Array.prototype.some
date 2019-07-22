'use strict';

var some = require('../');
var bind = require('function-bind');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](bind.call(some, null, undefined, 'a'), TypeError, 'undefined is not an object');
		st['throws'](bind.call(some, null, null, 'a'), TypeError, 'null is not an object');
		st.end();
	});

	runTests(some, t);

	t.end();
});
