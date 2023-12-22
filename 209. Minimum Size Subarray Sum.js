var minSubArrayLen = function (target, nums) {
  let minLength = Infinity;
  let sum = nums[0];
  let start = 0;
  let end = 0;
  while (start <= end && end < nums.length) {
    if (sum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      sum -= nums[start];
      start++;
    } else {
      end++;
      sum += nums[end];
    }
  }
  return minLength === Infinity ? 0 : minLength;
};
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];

console.log(minSubArrayLen(target, nums));
