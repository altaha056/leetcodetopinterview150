var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  let cur = 1;
  if (nums.length <= 1) return nums.length;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      cur++;
      ans = Math.max(ans, cur);
    } else if (nums[i] - nums[i - 1] === 0) {
      ans = Math.max(ans, cur);
    } else {
      cur = 1;
      ans = Math.max(ans, cur);
    }
  }
  return ans;
};
let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(nums));
