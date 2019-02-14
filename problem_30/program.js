/*
Program to find Smallest and Largest Word in a String
*/

const findLargestAndSmallest = (sentence) => {
    const word_list = sentence.split(" ");
    word_list.sort((a, b) => {
        return a.length - b.length;
    });
    return [word_list[0], word_list[word_list.length - 1]];
}