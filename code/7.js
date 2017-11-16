/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	const px = x > 0 ? x : (0 - x);
	const rx = +(px + '').split('').reverse().join('');
	return x < 0 ? (0 - rx) : rx
};
