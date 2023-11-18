var rotate = function (nums, k) {
  k = k % nums.length;
  let a = [
    ...nums.slice(nums.length - k, nums.length),
    ...nums.slice(0, nums.length - k),
  ];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = a[i];
  }
  return nums.length;
};

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 8;
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
console.log(rotate(nums, k));
