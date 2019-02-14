/*
Find the first repeated word in a string
*/

const findFirstRepeatedWord = (word) => {
    const word_list = word.split(" ");
    const length = word_list.length;
    const word_map = {};
    for (let i = 0; i < length; i++) {
        if (typeof word_map[word_list[i]] != "undefined") {
            return word_list[i];
        } else {
            word_map [word_list[i]] =  1;
        }
    }
    return word_map;
}