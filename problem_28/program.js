/*
Check if an array is stack sortable.
An array A[] is said to be stack sortable if it can be stored in another array B[], 
using a temporary stack S.
*/

const isStackSortable = (arr) => {
    let arr_str = arr.join("");
    const sorted = arr.sort((a,b) => a - b).join("");
    const r_sorted = arr.sort((a,b) => b - a).join("");
    return sorted == arr_str || r_sorted == arr_str;
}