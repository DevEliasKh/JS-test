function reverseString(string) {
	const stringArr = string.trim().split('');
	const reverseArr = stringArr.reverse();
	return reverseArr.join('');
}

module.exports = reverseString;

reverseString('elias');
