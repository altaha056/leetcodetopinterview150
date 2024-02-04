var findMinArrowShots = function (points) {
  let stack = [];
  let p = points.sort((a, b) => a[0] - b[0]);
  for (let range of p) {
    if (stack.length > 0 && stack[stack.length - 1][1] >= range[0]) {
      const topStack = stack.pop();
      stack.push([
        Math.max(topStack[0], range[0]),
        Math.min(Math.min(topStack[1], range[1])),
      ]);
    } else {
      stack.push([range[0], range[1]]);
    }
  }
  return stack.length;
};

let points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];

console.log(findMinArrowShots(points));
