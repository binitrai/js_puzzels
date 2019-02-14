/*
Given a String “aabbbbddcc” find the longest first repeating index and its length.
(Input: “aabbbbddcc” Output: [2,4] 2 is the index and 4 is the length
*/

const longestRepeatingSubString = (str) => {
    const len = str.length;
    const set  = [];
    const temp = [];
    let index  = 0;
    for (let i = 0; i <  len; i++) {
        if (temp.indexOf(str[i]) !== -1) {
            temp.push(str[i]);
        } else {
            set.push([index, temp.join("")]);
            temp.length = 0;
            temp.push(str[i]);
            index = i;
        }
    }
    const sorted_set = set.sort((a,b) => {
        return b[1].length - a[1].length;
    });
    return [sorted_set[0][0], sorted_set[0][1].length];
}

/*
1. Init 3 temp variable, 1 is set, second for temp and third is index
2. Walk thorugh each char of string
3. Keep track of first ever created index in temp array
4. Empaty temp array if any odd character is falling
5. Push the value in set with temp substring and index aswell as
6. Sort the set by the length of string stored
7. Return the first element
*/