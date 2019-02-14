/*
Find if a given number is Armstrong number -
An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
For example, 371 is an Armstrong number since 3*3*3 + 7*7*7 + 1*1*1 = 371.

N361180711381485
*/

const isArmstrong = (num) => {
    return num === [...("0" + num)].reduce((prev, current) => {
        return parseInt(prev) + Math.pow(current, 3);
    });
}