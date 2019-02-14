// find the touples

//find unique tuples(substring) of given length 
 //Example : input : "aab" find 2 length substring output : aa,ab
 //           input "abcd" find 2 length substring output : ab, bc,cd


 // hardcoded for 2 lenght of substring

 function touples(str) {
    let ret = [];
    for (let i = 0; i < str.length - k; i++) {
        if (ret.length === 0) {
            ret.push(str[i] + str[i + 1]);
        } else {
            let wrd = str[i] + str[i + 1];
            let rev = str[i + 1] + str[i];
            if (ret.indexOf(wrd) === -1 && ret.indexOf(rev) === -1) {
                ret.push(wrd);
            }
        }
    }
    return ret;
 }


 // lets write dynamic lenght 
 function getSubStr(str, k) {
    let ret = [];
    let sret = [];
    str = [...str];
    for (let i = 0; i < str.length - (k -1); i++) {
        let substr = str.slice(i, i+ k);
        let sorted_substr = substr.sort().join("");
        substr = substr.join("");
        if (ret.length === 0) {
            ret.push(substr);
            sret.push(sorted_substr)
        } else {
            if (sret.indexOf(sorted_substr) === -1) {
                ret.push(substr);
                sret.push(sorted_substr);
            }
        }
    }
    return ret;
 }

 // lets write same code with object

 function getSubStrbyObj(str, k) {
    let ret = {};
    for (let i = 0; i < str.length - (k-1); i++) {
        let substr = str.slice(i, i+k);
        let key = [...substr].sort().join("");
        ret[key] = substr;
    }
    return Object.values(ret);
 }