var merge = function (nums1, m, nums2, n) {
  for (let i = nums1.length - 1; i > m - 1; i--) {
    nums1[i] = nums2.pop();
  }
  return nums1.sort((a,b)=>a-b);
};
let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

console.log(merge(nums1, m, nums2, n));
