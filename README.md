#array.prototype.some <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

An ES5 spec-compliant `Array.prototype.some` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the proposed [spec](http://www.ecma-international.org/ecma-262/6.0/).

Because `Array.prototype.some` depends on a receiver (the “this” value), the main export takes the array to operate on as the first argument.

## Example

```js
var some = require('array.prototype.some');
var assert = require('assert');

assert.equal(true, some([1, 2, 3], function (x) { return x === 2; }));
assert.equal(false, some([1, 2, 3], function (x) { return x === 4; }));
```

```js
var some = require('array.prototype.some');
var assert = require('assert');
/* when Array#some is not present */
delete Array.prototype.some;
var shimmedSome = some.shim();
assert.equal(shimmedSome, some.getPolyfill());
var arr = [1, 2, 3];
var threeOrLarger = function (x) { return x >= 3; };
assert.deepEqual(arr.some(threeOrLarger), some(arr, threeOrLarger));
```

```js
var some = require('array.prototype.some');
var assert = require('assert');
/* when Array#some is present */
var shimmedSome = some.shim();
assert.equal(shimmedSome, Array.prototype.some);
assert.deepEqual(arr.some(threeOrLarger), some(arr, threeOrLarger));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array.prototype.some
[npm-version-svg]: http://versionbadg.es/ljharb/Array.prototype.some.svg
[travis-svg]: https://travis-ci.org/ljharb/Array.prototype.some.svg
[travis-url]: https://travis-ci.org/ljharb/Array.prototype.some
[deps-svg]: https://david-dm.org/ljharb/Array.prototype.some.svg
[deps-url]: https://david-dm.org/ljharb/Array.prototype.some
[dev-deps-svg]: https://david-dm.org/ljharb/Array.prototype.some/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/Array.prototype.some#info=devDependencies
[testling-svg]: https://ci.testling.com/ljharb/Array.prototype.some.png
[testling-url]: https://ci.testling.com/ljharb/Array.prototype.some
[npm-badge-png]: https://nodei.co/npm/array.prototype.some.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/array.prototype.some.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/array.prototype.some.svg
[downloads-url]: http://npm-stat.com/charts.html?package=array.prototype.some
>>>>>>> 4c018f8... Read me.
