/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let counts = {};
  nums.reduce((a, v) => {
    counts[v] = (counts[v] || 0) + 1;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
};
let nums = [2, 2, 1, 1, 1, 2, 2, 1, 1, 3, 3, 3, 3, 3, 3, 3];
console.log(majorityElement(nums));
