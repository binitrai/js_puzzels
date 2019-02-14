/*
Find the dot product of two arrays - mean array1[i] * array2[i]
*/

const dotProduct = (arr1, arr2) => {
    const arr = arr1.length < arr2.length ? arr1 : arr2;
    return arr.reduce((prev, current, index) => {
        let m = typeof arr2[index] == "undefined" ? 1 : arr2[index];
        return prev + (current * m);
    }, 0);
}

// Another method using for loop
const dotProductByLoop =  (arr1, arr2) => {
    const length = arr1.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += arr1[i] * arr2[j];
    }
    return sum;
}