/*
First unique character of a string. E.g. aabdcce . Output : d
*/

const findUniqueChar = (str) => {
    const len = str.length
    for (let i = 0; i < len; i++) {
        let current = str[i];
        if (str.indexOf(current) === str.lastIndexOf(current)) {
            return current;
        }
    }
    return "no any unique character found in string";
}

/*
Another approach we can think about map
make a frequency map 
also maintain the latest index
Filter the entry of all 1 frequency
Sort the array by its index
*/

const findUniqueChar = (str) => {
    const len = str.length;
    let map = {};
    let index = -1;
    for (let i = 0; i < len; i++) {
        let char = str[i];
        if (map[char] == undefined) {
            map[char] = i;
        } else {
            delete map[char];
        }
    }
    let sortedKeys = Object.keys(map).sort((a, b) => {
        return map[a] - map[b];
    });
    return sortedKeys[0];
}