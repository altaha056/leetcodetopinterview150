/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let localMax = 0;
  let globalMax = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    localMax += nums[i];
    if (localMax > globalMax) {
      globalMax = localMax;
    }
    if (localMax < 0) {
      localMax = 0;
    }
  }
  return globalMax;
};
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
