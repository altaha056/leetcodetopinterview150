var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let left = false;
  const queue = [root];
  const ans = [];
  while (queue.length) {
    const levelSize = queue.length;
    const curLevel = [];
    const nextLevel = [];
    for (let i = 0; i < levelSize; i++) {
      const curNode = queue.shift();
      if (left) {
        curLevel.unshift(curNode.val); // Unshift to prepend in reverse order
      } else {
        curLevel.push(curNode.val);
      }
      if (curNode.left) nextLevel.push(curNode.left);
      if (curNode.right) nextLevel.push(curNode.right);
    }
    left = !left;
    ans.push(curLevel);
    queue.push(...nextLevel);
  }
  return ans;
};
