const calculate = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	divide: (a, b) => a / b,
	multiply: (a, b) => a * b,
};

module.exports = calculate;

calculate.add(1, 2);
calculate.subtract(3, 2);
calculate.divide(2, 2);
calculate.multiply(3, 4);
