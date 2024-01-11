/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return checkSymmetric(root.left, root.right);
};

var checkSymmetric = function (left, right) {
  if (
    (!left && right) ||
    (left && !right) ||
    (right && left && right.val !== left.val)
  )
    return false;

  if (left && right)
    return (
      checkSymmetric(left.left, right.right) &&
      checkSymmetric(left.right, right.left)
    );

  return true;
};
