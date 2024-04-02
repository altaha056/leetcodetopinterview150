var rightSideView = function (root) {
  if (!root) return [];
  let ans = [];
  par(root, 0);
  console.log(ans);
  return ans;
  function par(node, h) {
    if (!node) return;
    ans[h] = node.val;
    par(node.left, h + 1);
    par(node.right, h + 1);
  }
};
