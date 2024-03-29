var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (target <= matrix[i][matrix[i].length - 1]) {
      matrix = matrix[i];
      break;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] === target) {
      return true;
    }
  }
  return false;
};
var searchMatrix = function (matrix, target) {
  matrix = matrix.flat();
  for (let i = matrix.length - 1; i >= 0; i--) {
    if (matrix[i] == target) return true;
    if (matrix[i] > target) {
      continue;
    } else return false;
  }
  return false;
};

let matrix = [[1], [3]];
let target = 3;
console.log(searchMatrix(matrix, target));
