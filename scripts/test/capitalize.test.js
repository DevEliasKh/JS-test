const capitalize = require('../capitalize');

test('Capitalized of the elias', () => {
	expect(capitalize('elias')).toBe('Elias');
});

test('Capitalized of the elias with spaces', () => {
	expect(capitalize('     elias')).toBe('Elias');
});
