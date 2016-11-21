'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayPrototypeSome() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ some: polyfill },
		{ some: function () { return Array.prototype.some !== polyfill; } }
	);
	return polyfill;
};
