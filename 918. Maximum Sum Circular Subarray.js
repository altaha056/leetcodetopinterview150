var maxSubarraySumCircular = function (nums) {
  let curValMax = 0;
  let curValMin = 0;
  let globalMax = -Infinity;
  let globalMin = Infinity;
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    curValMax += nums[i];
    totalSum += nums[i];
    globalMax = Math.max(globalMax, curValMax);
    if (curValMax < 0) curValMax = 0;

    curValMin += nums[i];
    globalMin = Math.min(globalMin, curValMin);
    if (curValMin > 0) curValMin = 0;
  }
  if (totalSum - globalMin == 0) {
    return globalMax;
  }
  return Math.max(totalSum - globalMin, globalMax);
};
let nums = [1, -2, 3, -2];

console.log(maxSubarraySumCircular(nums));
