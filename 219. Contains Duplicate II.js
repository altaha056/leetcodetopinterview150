/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let hmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - hmap.get(nums[i]) <= k) return true;
    hmap.set(nums[i], i);
  }
  return false;
};
let nums = [1, 2, 3, 1, 2, 3];
let k = 3;
console.log(containsNearbyDuplicate(nums, k));
