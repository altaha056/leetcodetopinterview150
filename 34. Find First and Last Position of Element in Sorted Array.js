/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length;
  while (start <= end) {
    if (nums[start] != target) start++;
    if (nums[end] != target) end--;
    if (nums[start] === target && nums[end] === target) return [start, end];
  }
  return [-1, -1];
};
let nums = [5, 6, 7, 7, 8, 8, 10];
let target = 60;

console.log(searchRange(nums, target));
