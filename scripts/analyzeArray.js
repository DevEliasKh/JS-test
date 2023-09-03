function analyzeArray(arr) {
	const info = {};
	info.average = average(arr);
	info.min = arr.reduce((a, b) => Math.min(a, b));
	info.max = arr.reduce((a, b) => Math.max(a, b));
	info.length = arr.length;
	return info;
}

function average(arr) {
	return arr.reduce((total, current) => total + current) / arr.length;
}
module.exports = analyzeArray;

analyzeArray([1, 8, 3, 4, 2, 6]);
