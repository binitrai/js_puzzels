//Write an efficient program to find the sum of contiguous subarray 
//within a one-dimensional array of numbers which has the largest sum.

function maxSum(arr) {
    let cur_max = arr[0];
    let max_so_far = arr[0];
    for (let i in arr) {
        cur_max = Math.max(arr[i], curr_max + arr[i]);
        max_so_far =  Math.max(max_so_far, cur_max);
    }
    return max_so_far;
}

function maxSubArraySum(arr) {
    let max_sum = -Infinity;
    let start = 0;
    let end = 0;
    let s = 0;
    let current_max = 0;
    for (let i = 0; i < arr.length; i++) {
        current_max += arr[i];
        if (max_sum < current_max) {
            start = s;
            end = i;
            max_sum = current_max;
        }
        if (current_max < 0) {
            current_max = 0;
            s = i + 1;
        }
    }
    return {max_sum : max_sum, start : start, end : end};
}