/*
Given a set of numbers identify pairs such that a^b = b^a
*/

const isPowerofEachOther = (arr) => {
    const result = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (Math.pow(arr[i], arr[j]) === Math.pow(arr[j], arr[i])) {
                result.push([arr[i], arr[j]])
            }
        }
    }
    return result;
}