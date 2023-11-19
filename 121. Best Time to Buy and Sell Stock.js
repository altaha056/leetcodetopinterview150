var maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0;
  let minPrice = prices[0];
  let maxPrice = 0;
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(prices[i], minPrice);
    maxPrice = Math.max(prices[i] - minPrice, maxPrice);
  }
  return maxPrice;
};
