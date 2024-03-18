var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};
let nums = [1, 3, 5, 6];
let target = 7;
console.log(searchInsert(nums, target));
