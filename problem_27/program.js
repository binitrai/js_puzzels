/*
Possible to make a divisible by 3 number using all digits in an array
*/

const isPossibleBydivisibleBy3 = (arr) => {
    let arr_sum = arr.reduce((a, c) => {
        return a + c;
    })
    return arr_sum/3 == parseInt(arr_sum/3);
}