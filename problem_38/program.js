/*
snow pack problem example :- input : int arr[] = {0, 1, 3, 0, 1, 2, 0,4, 2, 0, 3, 0}; output 13
To understand snowpack go through this geeks for geeks problem  https://www.geeksforgeeks.org/trapping-rain-water/
*/

const findWater = (arr)  => { 
    let n = arr.length; 
    let left = []; let right = []; let water = 0; 
    // fill left aray
    left[0] = arr[0]; 
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i-1], arr[i]); 
    }
    // fill right array
    right[n-1] = arr[n-1]; 
    for (let i = n-2; i >= 0; i--) {
        right[i] = Math.max(right[i+1], arr[i]);
    } 
    // compaire and fill water 
    for (let i = 0; i < n; i++) {
        water += Math.min(left[i],right[i]) - arr[i]; 
    }
    return water; 
} 