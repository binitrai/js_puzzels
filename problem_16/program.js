/*
Missing characters to make a string Pangram
*/

// 1. Broute force approach
// 2. Take a string of all letters 
// 3. Walk through each element of alphabet set 
// 4. Push the current element if that is not found in given string 

const missingCharacterToMakePangram = (str) => {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for (let i = 0; i < 26; i++) {
        let char = charset[i];
        if (str.indexOf(char) === -1) {
            result.push(char);
        }
    }
    return result;
}

// 1. By Using set property of javascript
const missingCharacterToMakePangram = (str) => {
    let strset = new Set([...str]);
    let alphabets = new Set([..."abcdefghijklmnopqrstuvwxyz"]);
    return [...difference(alphabets, strset)];
}

const difference = (setA, setB) => {
    for (var elem of setB) {
        setA.delete(elem);
    }
    return setA;
}