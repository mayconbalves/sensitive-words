import sensitiveWords from '.'

test('replace blacklisted words with asterisks', () => {
	expect(sensitiveWords('your speak portuguese ?', ['portuguese']))
	.toBe('your speak **** ?')
})

test('replace blacklisted words with asterisks', () => (
	expect(sensitiveWords(
	'your speak portuguese ? do you dont speak portuguese ?', ['portuguese']))
	.toBe('your speak **** ? do you dont speak **** ?')
))
