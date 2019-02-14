/*
Find second smallest number from an unsorted array
1. Assume first and second smallest number as infinity
2. Loop through each array elements
	1. Compare current element with first smallest
		if current is smaller than first 
			assign the value of first to second
			and make current as first smallest

		else current is less than second and current element is not equal to first then
		  make current as second smallest
3. Return variable second 
*/

const secondSmallestFromUnsortedArray = (arr) => {
	const len = arr.length;
	if (len < 2) {
		return "Array does not have 2 elements";
	}

	let first = Number.MAX_SAFE_INTEGER;
	let second = first;
	for (let i = 0; i < len; i++) {
		let current = arr[i];
		if (current < first) {
			second = first;
			first = current;
		} else if (current < second && current != first) {
			second = current;
		}
	}
	if (second === Number.MAX_SAFE_INTEGER) {
		return "There is no second smallest number";
	}
	return second;
}