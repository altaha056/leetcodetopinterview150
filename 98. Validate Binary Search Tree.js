var isValidBST = function (root) {
  const check = (root, min, max) => {
    if (!root) return true;
    console.log(root.val, min, max);
    if ((min != null && root.val <= min) || (max != null && root.val >= max))
      return false;
    return check(root.left, min, root.val) && check(root.right, root.val, max);
  };
  return check(root, null, null);
};

// Definition for a binary tree node
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const root = new TreeNode(
  50,
  new TreeNode(
    25,
    new TreeNode(12, new TreeNode(6), new TreeNode(18)),
    new TreeNode(48, new TreeNode(32), new TreeNode(49))
  ),
  new TreeNode(
    75,
    new TreeNode(62, new TreeNode(61), new TreeNode(65)),
    new TreeNode(100, new TreeNode(99), new TreeNode(101))
  )
);

console.log(isValidBST(root, 3));
