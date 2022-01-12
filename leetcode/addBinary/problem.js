/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 const addBinary = function(a, b) {
    // write your code
};

/*
  Input: a = "11", b = "1"
  Output: "100"
  Example 2:

  Input: a = "1010", b = "1011"
  Output: "10101"
*/

// test cases :

console.assert(addBinary("11", "1") === "100") // "100"
console.assert(addBinary("1010", "1011") === "10101") // "10101"
console.assert(addBinary("10", "01") === "11") // "11"
console.assert(addBinary("1101", "111") === "10100") // "10100"
console.assert(addBinary("1101", "0010") === "1111") // "1111"
console.assert(addBinary("110111010", "001011101") === "1000010111") // "1000010111"

console.log("\n-------All testcases passed---------\n")
