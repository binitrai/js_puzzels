/*
Largest substring with unique characters e.g. aaabcbdeaf Output : cbdeaf
*/
const findLargestSubStringWithUniqueChars = (str) => {
    const length = str.length;
    if (str.length === 1) {
        return str;
    }
    let temp  = [];
    for (let i = 0; i < length; i++) {
        let current = str[i];
        if (temp.indexOf(current) != -1) {
            temp = temp.slice(temp.indexOf(current) + 1);
        }
        temp.push(current);
    }
    return temp.join("");
}

/*
    1. Init a temp Array
    2. Walk through each char of string
    3. check if current currectar is present in temp Array
    4. Then slice the array from its next Element
    5. Push the current Element in temp array
    6. Return the strin by joining the array
*/