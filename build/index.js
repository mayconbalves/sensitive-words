'use strict';

module.exports = function (content, words) {
	return content.replace(new RegExp(words.join('|'), 'ig'), '****');
};