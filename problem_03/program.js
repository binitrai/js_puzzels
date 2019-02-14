/*
Find the second smallest number from sorted rotated array
input example : [5,6,1,2,3,4]

Algo : Follow Binary search to find the rotation point from the array
1. Find the mid of the array
2. Compare if the current mid element is the rotation point
		if current element is greater than pos 0 and them middle element should be less than its left elemt
		else if 
		   miffle element is greater than last element than search in second half
		else search in first half with the same method
*/

const findSecondSmallestFromSortedRotatedArray = (arr, l, h) => {
	let m = parseInt(l + (h-l) /2);

	if (m > 0 && arr[m] < arr[m-1]) {
		return arr[m+1];
	} else if (arr[m] > arr[h]) {
		return findSecondSmallestFromSortedRotatedArray(arr, m+1, h);
	} else {
		return findSecondSmallestFromSortedRotatedArray(arr, l, m-1);
	}
}

