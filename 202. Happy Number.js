var isHappy = function (n) {
  if (n < 10) return n === 1 || n === 7 ? true : false;
  let total = 0;
  while (n > 0) {
    let sq = n % 10;
    total += sq ** 2;
    n -= sq;
    n /= 10;
  }
  if (total === 1) {
    return true;
  }
  return isHappy(total);
};

let n = 19;
console.log(isHappy(n));
