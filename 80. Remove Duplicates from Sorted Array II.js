/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 1) {
    return nums.length;
  }
  let count = 1;
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == cur) {
      if (count >= 2) {
        nums.splice(i, 1);
        i--;
      } else {
        count++;
      }
    } else {
      cur = nums[i];
      count = 1;
    }
  }
  return nums;
};
let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
