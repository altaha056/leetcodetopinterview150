var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const ans = [];
  while (queue.length) {
    const levelSize = queue.length;
    const curLevel = [];
    for (let i = 0; i < levelSize; i++) {
      const curNode = queue.shift();
      curLevel.push(curNode.val);
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
    ans.push(curLevel);
  }
  return ans;
};
