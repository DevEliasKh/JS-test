const caesarCipher = require('../caesarCipher');

test('caesarCipher of elias is ', () => {
	expect(caesarCipher('elias', 5)).toBe('jqnfx');
});
