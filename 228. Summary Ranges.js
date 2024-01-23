var summaryRanges = function (nums) {
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < nums.length) {
    j = i + 1;
    while (j < nums.length && nums[j - 1] === nums[j] - 1) j++;
    if (i != j - 1) {
      ans.push(nums[i] + "->" + nums[j - 1]);
    } else {
      ans.push(nums[i] + "");
    }
    i = j;
  }
  return ans;
};
let nums = [0, 1, 2, 3, 4, 6, 8, 9];
// let nums = [];
console.log(summaryRanges(nums));
