/*
Find the smallest subarray whose sum is equal or greater than thetarget value
*/

const arraySum = (arr) => {
    return arr.reduce((a,c) => a + c);
}

const findSmallestSubArrOfGivenTargetSum = (arr, target) => { 
    let res = [];
    let temp = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        temp.length = 0;
        temp.push(arr[i]);
        for (let j = i + 1; j < length; j++) {
            let array_sum = arraySum(temp) + arr[j];
            if (array_sum >= target) {
                res.push(temp.length + 1);
            } else {
                temp. push(arr[j]);
            }
        }
    }
    if (res.length === 0) {
        return "Not found sum in array";
    }  
    return Math.min(...res); 
}