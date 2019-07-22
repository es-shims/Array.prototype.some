var some = require('../implementation');
var bind = require('function-bind');
var test = require('tape');
var hasStrictMode = require('has-strict-mode')();

var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](bind.call(some, null, undefined, 'a'), TypeError, 'undefined is not an object');
		st['throws'](bind.call(some, null, null, 'a'), TypeError, 'null is not an object');
		st.end();
	});

	t.test('receiver boxing', function (st) {
		st.plan(hasStrictMode ? 3 : 2);

		var context = 'x';

		some.call('foo', function () {
			st.equal(typeof this, 'object');
			st.equal(String.prototype.toString.call(this), context);
			return true;
		}, context);

		st.test('strict mode', { skip: !hasStrictMode }, function (sst) {
			sst.plan(2);

			some.call('foo', function () {
				'use strict';

				sst.equal(typeof this, 'string');
				sst.equal(this, context);
				return true;
			}, context);
			sst.end();
		});

		st.end();
	});

	runTests(bind.call(Function.call, some), t);

	t.end();
});
