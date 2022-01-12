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


function binarySum(d1, d2, carry) {
  let sum = parseInt(d1) + parseInt(d2) + carry
  if (sum === 3) {
       return [1,1];
  }
  if (sum === 2) {
      return [0, 1]
  }
  return [sum, 0];
}


function strpad (str, length, padChar = 0) {
   if (length === 0) {
       return str;
   }
   let prefix = new Array(length).fill(padChar).join("");
   return prefix + str;
}
