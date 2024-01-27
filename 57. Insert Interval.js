var insert = function (intervals, newInterval) {
  let ans = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (ans[ans.length - 1][1] >= intervals[i][0]) {
      ans[ans.length - 1][1] = Math.max(
        ans[ans.length - 1][1],
        intervals[i][1]
      );
    } else {
      ans.push(intervals[i]);
    }
  }
  return ans;
};

let intervals = [[1, 5]];

let newInterval = [6, 8];

console.log(insert(intervals, newInterval));
