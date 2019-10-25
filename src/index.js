module.exports = (content, words, subString) => (
	content.replace(
		new RegExp(words.join('|'), 'ig'),
		subString || '****'
	)
)