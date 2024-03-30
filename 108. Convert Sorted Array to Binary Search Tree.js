/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// Definition for a binary tree node
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var sortedArrayToBST = function (nums) {
  const factory = (start, end) => {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = factory(start, mid - 1);
    node.right = factory(mid + 1, end);
    return node;
  };

  return factory(0, nums.length - 1);
};

const nums = [-10, -3, -1, 0, 5, 9];
console.log(sortedArrayToBST(nums));
