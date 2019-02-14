/*
Given a string str and a character x, find last index of x in str.
*/

const lastIndexOfCharInWord =  (str, target) => {
    let res = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            res = i;
        }
    }
    return res;
}