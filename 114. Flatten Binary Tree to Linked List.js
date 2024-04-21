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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let head = null;
  let curr = root;
  while (head != root) {
    console.log("head: ", head);
    if (curr.right === head) curr.right = null;
    if (curr.left === head) curr.left = null;
    if (curr.right) curr = curr.right;
    else if (curr.left) curr = curr.left;
    else (curr.right = head), (head = curr), (curr = root);
  }
  console.log(root);
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
let targetSum = 30;
console.log(flatten(root, targetSum));
