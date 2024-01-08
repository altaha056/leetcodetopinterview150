/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits[digits.length - 1] += 1;
  let i = digits.length - 1;
  while (i >= 0) {
    if (digits[i] > 9) {
      digits[i] = 0;
      i--;
      if (i < 0) {
        digits.unshift(1);
      }
      digits[i] += 1;
    } else return digits;
  }
  return digits;
};
let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(digits));
