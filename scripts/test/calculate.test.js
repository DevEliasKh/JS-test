const calculate = require('../calculate');

test('add 1 to 2', () => {
	expect(calculate.add(1, 2)).toBe(3);
});

test('subtract 3 by 2', () => {
	expect(calculate.subtract(3, 2)).toBe(1);
});

test('divide 2 by 2', () => {
	expect(calculate.divide(2, 2)).toBe(1);
});

test('multiply 3 by 4', () => {
	expect(calculate.multiply(3, 4)).toBe(12);
});
