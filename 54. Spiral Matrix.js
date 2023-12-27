/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let ans = [];
  while (matrix.length) {
    ans.push(matrix.shift());
    for (let i = 0; i < matrix.length; i++) {
      ans.push(matrix[i].pop());
    }
    if (matrix.length > 0) ans.push(matrix.pop().reverse());
    for (let i = matrix.length - 1; i >= 0; i--) {
      ans.push(matrix[i].shift());
    }
  }
  return ans.flat().filter((x) => x != undefined);
};

let matrix = [[7], [9], [6]];

console.log(spiralOrder(matrix));
