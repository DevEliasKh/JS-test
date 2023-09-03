function capitalize(word) {
	const noSpace = word.trim();
	const capital = noSpace.charAt(0).toUpperCase() + noSpace.slice(1);
	return capital;
}

module.exports = capitalize;

capitalize('     elias');
