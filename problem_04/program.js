/*
FInd max and min from an array
*/

const findMaxMin = (arr) => {
	let max = arr[0];
	let min = arr[1];
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		let current = arr[i];
		max = current > max ? current : max;
		min = current < min ? current : min;
	}
	return [max, min];
}