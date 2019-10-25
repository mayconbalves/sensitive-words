'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('replace blacklisted words with asterisks', function () {
	expect((0, _2.default)('your speak portuguese ?', ['portuguese'])).toBe('your speak **** ?');
});

test('replace blacklisted words with asterisks', function () {
	return expect((0, _2.default)('your speak portuguese ? do you dont speak portuguese ?', ['portuguese'])).toBe('your speak **** ? do you dont speak **** ?');
});