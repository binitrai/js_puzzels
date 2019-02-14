/**
 * Given Input,print the following input: “SSSSSTTPPQ” Output:“5S2T2P1Q”.
 */

 const charFreq = (str) => {
     const length = str.length;
     const map = {};
    for (let i = 0; i < length; i++) {
         if (typeof map[str[i]] == "undefined") {
             map[str[i]] = 0;
         }
         map[str[i]] =  map[str[i]] + 1;
    }
    let res = "";
    for (let i in map) {
        res += map[i] + i;
    }
    return res;
 }