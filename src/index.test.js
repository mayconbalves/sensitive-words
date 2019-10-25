import sensitiveWords from '.'

test('replace blacklisted words with asterisks', () => (
	expect(sensitiveWords('your speak portuguese ?', ['portuguese']))
	.toBe('your speak **** ?')
))

test('replace blacklisted words with asterisks', () => (
	expect(sensitiveWords(
	'your speak portuguese ? do you dont speak portuguese ?', ['portuguese']))
	.toBe('your speak **** ? do you dont speak **** ?')
))

test('replace blacklisted words with asterisks and another substitued string', () => (
	expect(sensitiveWords('your speak portuguese ?', ['portuguese'], '[hidden_text]'))
	.toBe('your speak [hidden_text] ?')
))

test('replace blacklisted words with asterisks and another substitued string', () => (
	expect(sensitiveWords(
	'your speak portuguese ? do you dont speak portuguese ?', ['portuguese'], '[hidden_text]'))
	.toBe('your speak [hidden_text] ? do you dont speak [hidden_text] ?')
))
