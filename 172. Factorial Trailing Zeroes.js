/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let x = 0;
  for (let i = 5; i <= n; i *= 5) {
    x += Math.floor(n / i);
  }
  return x;
};

let n = 30;
console.log(trailingZeroes(n));
