/*
Find the second largest element from unsorted array
*/

const findSecondLargestElementFromUnsortedArray = (arr) => {
	const len = arr.length;
	if (len < 2) {
		return "Array has less than 2 element";
	}
	let first = -Infinity;
	let second = first;

	for (let i = 0; i < len; i++) {
		let current = arr[i];
		if (current > first) {
			second = first;
			first = current;
		} else if (current > second && current != first) {
			second = current;
		}
	}
	if (second === -Infinity) {
		return "2nd largest not found";
	}
	return second;
}