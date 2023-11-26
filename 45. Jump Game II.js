var jump = function (nums) {
  let step = 0;
  let farthest = 0;
  let curend = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === curend) {
      step++;
      curend = farthest;
      if (farthest >= nums.length - 1) {
        break;
      }
    }
  }
  return step;
};
let nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0];
console.log(jump(nums));
