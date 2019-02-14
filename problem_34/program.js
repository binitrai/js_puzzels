/*
 Given an array A[] of integers find sum of product of all pairs of array elements
 Input : A[] = {1, 3, 4}
 Output : 19
 Possible Pairs : (1,3), (1,4), (3,4)
 Sum of Product : 1*3 + 1*4 + 3*4 = 19
 */


 // Broute force soluction

 const SOP = (list) => {
     let sum = 0;
     const length = list.length;
     for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            sum += list[i] * list[j];
        }
     }
     return sum;
 }

 /*
    EFFICICENT SOLUTION
    We know that
    (a + b + c)2 = a2 + b2 + c2 + 2*(a*b + b*c + c*a)
    Let required sum be P
    Let E = (a1 + a2 + a3 + a4 ... + an)^2 
    => E = a12 + a22 + ... + an2 + 2*(a1*a2 + a1*a3 + ....)
    => E = a12 + a22 + ... + an2 + 2*(P)
    => P = ( E - (a12 + a22 + .... + an2) ) / 2
 */

 const SOP = (list) => {
    let arr_sum = list.reduce((a,c) => a + c);
    arr_sum = arr_sum * arr_sum;
    let individual_square_sum = list.reduce((a, c) => {
        return a + (c*c);
    }, 0);
    return (arr_sum - individual_square_sum) / 2;
 }