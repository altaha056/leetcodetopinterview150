var merge = function (intervals) {
  let qq = intervals.flat().sort((a, b) => a - b);
  
  console.log(qq);
};
let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(intervals));
