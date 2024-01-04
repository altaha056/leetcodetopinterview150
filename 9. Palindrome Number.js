/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") === x.toString();
};

let x = -12021;
console.log(isPalindrome(x));
