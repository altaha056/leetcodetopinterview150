/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    if (obj[nums[i]] > 1) {
      delete obj[nums[i]];
    }
  }
  return parseInt(Object.keys(obj)[0]);
};
let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
