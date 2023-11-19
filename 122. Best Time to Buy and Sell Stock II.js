/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) {
    return 0;
  }
  let total = 0;
  let cur = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < cur) {
      cur = prices[i];
    } else {
      total += prices[i] - cur;
      cur = prices[i];
    }
  }
  return total;
};
let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
