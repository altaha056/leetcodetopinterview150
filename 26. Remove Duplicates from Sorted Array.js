/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 1) {
    return nums.length;
  }
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == cur) {
      nums.splice(i, 1);
      i--;
    } else cur = nums[i];
  }
  return nums.length;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
