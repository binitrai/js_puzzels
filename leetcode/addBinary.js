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




//Solution

function binarySum(d1, d2, carry) {
  let sum = parseInt(d1) + parseInt(d2) + carry
  if (sum === 3) {
       return [1,1]
  }
  if (sum === 2) {
      return [0, 1]
  }
  return [sum, 0]
}

function strpad (str, length, padChar = 0) {
   if (length === 0) {
       return str;
   }
   let prefix = new Array(length).fill(padChar).join("");
   return prefix + str;
}

function addBinary(a, b) {
  const lenA = a.length;
  const lenB = b.length;
  const biggestLength = lenA > lenB ? lenA : lenB;
  const paddedA = strpad(a, biggestLength - lenA);
  const paddedB = strpad(b, biggestLength - lenB);

  let sum = [], carry = 0;
  for (let i = biggestLength - 1; i >= 0; i--) {
    const [s, c] = binarySum(paddedA.charAt(i), paddedB.charAt(i), carry);
    carry = c;
    sum.unshift(s);
  }
  if (carry === 1) {
    sum.unshift(carry);
  }
  return sum.join("")
}
