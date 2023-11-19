var canJump = function (nums) {
  if (nums.length == 1) {
    return true;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[0] == 0) {
      return false;
    }
    while (nums[i] > 0) {
      if (i + nums[i] >= nums.length - 1) {
        return true;
      }
      if (nums[i + nums[i]] == 0) {
        nums[i] -= 1;
      } else i += nums[i];
      if (nums[i] == 0) {
        i = 0;
      }
      if (nums[0] == 0) {
        return false;
      }
    }
  }
  return true;
};
let nums = [0, 1];
console.log(canJump(nums));
