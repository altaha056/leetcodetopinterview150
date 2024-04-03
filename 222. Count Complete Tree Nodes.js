var countNodes = function (root) {
  let ans = 0;
  const count = (root) => {
    if (!root) return null;
    ans++;
    count(root.left);
    count(root.right);
  };
  count(root);
  return ans;
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
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(countNodes(root));
