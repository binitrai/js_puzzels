/*
Given an unsorted array from 1 to n

One number is missing from the array.
Find the missing number from the array

console.log(findMissing([1,3,4])) // 2

Note : if only one number is missing then we can use this
*/

const findMissing  = (list) => {
    const len = list.length;
    const totalSum = (len + 1) * (len + 2) / 2;
    const arraySum = list.reduce((acc, curr) => acc + curr);
    return totalSum - arraySum;
}

// Test cases

console.log(findMissing([1,3,4])) // 2

