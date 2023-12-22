var maxArea = function (height) {
  let ans = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    height[i] <= height[j] ? i++ : j--;
  }
  return ans;
};
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
