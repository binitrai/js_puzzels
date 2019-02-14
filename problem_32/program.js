/*
Given a string and a delimiter character. 
Split the string based on the delimiter and print the list of resulting sub strings.
*/

const splitString =  (str, target) => {
    const result = [];
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target && temp != "") {
            result.push(temp);
            temp = "";
        } else {
            temp += str[i];
        }
    }
    if (temp != "") {
        result.push(temp);
    }
    return result;
}