/*
Given a sentence, task is to remove spaces from the sentence and rewrite in Camel case. 
It is a style of writing where we don’t have spaces and all words begin with capital letters.
*/

const removeSpaceAndRewriteCamelCase = (sentence) => {
    let word_list = sentence.split(" ");
    word_list = word_list.map(element => {
        element = element.trim();
        element = element[0].toUpperCase() + element.substring(1);
        return element;
    });
    return word_list.join("");
}