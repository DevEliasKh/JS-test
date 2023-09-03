function caesarCipher(string, number) {
	const splitString = string.split('');
	let finalArr = [];
	splitString.forEach((e) => {
		finalArr.push(shiftAlphabet(e, number));
	});
	return finalArr.join('');
}

const alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

function shiftAlphabet(e, number) {
	const index = alphabet.indexOf(e);
	return alphabet[index + number];
}

module.exports = caesarCipher;

caesarCipher('elias', 5);
