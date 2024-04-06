var getMinimumDifference = function (root) {
  let arr = [];
  const bst = (root) => {
    if (!root) return null;
    arr.push(root.val);
    bst(root.left);
    bst(root.right);
  };
  bst(root);
  arr.sort((a, b) => b - a);
  arr.forEach((x, i, z) => {
    z[i] = x - z[i + 1];
  });
  arr.pop();
  return Math.min(...arr);
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

console.log(getMinimumDifference(root));
