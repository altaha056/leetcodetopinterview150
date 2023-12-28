var setZeroes = function (matrix) {
  let temp = JSON.parse(JSON.stringify(matrix));

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i].length; j++) {
      if (temp[i][j] == 0) {
        for (let g = 0; g < matrix.length; g++) {
          matrix[g][j] = 0;
        }
        for (let h = 0; h < matrix[0].length; h++) {
          matrix[i][h] = 0;
        }
      }
    }
  }
  return matrix;
};

let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log(setZeroes(matrix));
