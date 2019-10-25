'use strict';

module.exports = function (content, words, subString) {
	return content.replace(new RegExp(words.join('|'), 'ig'), subString || '****');
};