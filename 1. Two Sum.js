var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] && obj[target - nums[i]] != i)
      return [i, obj[target - nums[i]]];
  }
  return;
};
let nums = [1, 3, 4, 2];
let target = 6;
console.log(twoSum(nums, target));
