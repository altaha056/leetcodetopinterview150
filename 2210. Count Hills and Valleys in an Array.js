var countHillValley = function (nums) {
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) arr.push(nums[i]);
  }
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) count++;
    if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) count++;
  }
  return count;
};
const nums = [2, 4, 1, 1, 6, 5];
console.log(countHillValley(nums));
