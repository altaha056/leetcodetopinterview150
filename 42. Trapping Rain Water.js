var trap = function (height) {
  if (height.length < 2) {
    return 0;
  }
  let left = 0;
  let right = height.length - 1;
  let lhs = 0;
  let rhs = 0;
  let ans = 0;
  while (left < right) {
    lhs = Math.max(lhs, height[left]);
    rhs = Math.max(rhs, height[right]);
    ans += lhs - height[left];
    ans += rhs - height[right];
    left < right ? left++ : right--;
  }
  return ans;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
