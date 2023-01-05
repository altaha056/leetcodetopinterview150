/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let maxLength = Math.max(a.length, b.length);
  let result = "";
  let carry = 0;

  // Pad the shorter binary number with leading zeros
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");
  console.log(a, b);
  // Perform binary addition from right to left
  for (let i = maxLength - 1; i >= 0; i--) {
    let bit1 = parseInt(a[i], 2);
    let bit2 = parseInt(b[i], 2);

    let sum = bit1 + bit2 + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  // If there's a carry left, add it to the leftmost position
  if (carry > 0) {
    result = carry + result;
  }

  return result;
};
let a = "11";
let b = "1";
console.log(addBinary(a, b));
