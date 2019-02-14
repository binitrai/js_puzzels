// find lonest word in given dictionary
 //  example : dictionary is : {"to","toe","toes","doe","dog","god","dogs","book","banana"} and input String is "dsetog"
 //           output : toes, dogs




 // filter the array by checking if the given word can be formed by given set of strings
 // get the maximum according to the length from given array;
// Broute fource method
 function canFormedByStr(str, word) {
    let ret = false;
    for (let i = 0; i < word.length; i++) {
        ret = str.indexOf(word[i]) !== -1;
    }
    return ret;
 }
 function longestWordFrom(str, dictionary) {
    let ret = dictionary.filter((entry) => canFormedByStr(str, entry));
    if (ret.length === 1) {
        return ret;
    } else {
        ret = ret.sort((a,b) => b.length - a.length);
        let max = ret[0].length;
        ret = ret.filter((entry) => entry.length === max);
    }
     return ret;
 }

 


