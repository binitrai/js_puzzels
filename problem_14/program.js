/*
Arrange given numbers to form the biggest number.
Input- List of numbers : {1, 34, 3, 98, 9, 76, 45, 4} Output – 998764543431
formBiggestNumber([1, 34, 3, 98, 9, 76, 45, 4])
sort the given array according to the both possibilities of number forming means ab and ba
then join the list and return as number
*/

const formBiggestNumber = (list) => {
    list.sort((a,b) => {
        let x = "" + a + b;
        let y = "" +  b + a;
        return parseInt(y) - parseInt(x);
    });
    return +list.join("");
}