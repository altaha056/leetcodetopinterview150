/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x;
  let i = 0;
  let ans = 0;
  while (x >= ans) {
    i++;
    ans = i * i;
  }
  return i - 1;
};

let x = 9;
console.log(mySqrt(x));
