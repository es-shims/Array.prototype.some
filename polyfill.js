var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Array.prototype.some === 'function') {
		var hasPrimitiveContextInStrict = [1].some(function () {
			'use strict';

			return typeof this === 'string' && this === 'x';
		}, 'x');
		if (hasPrimitiveContextInStrict) {
			return Array.prototype.some;
		}
	}
	return implementation;
};
