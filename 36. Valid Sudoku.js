var isValidSudoku = function (board) {
  const rows = new Array(9).fill(null).map(() => new Set());
  const columns = new Array(9).fill(null).map(() => new Set());
  const boxes = new Array(9).fill(null).map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];
      if (cell !== ".") {
        if (
          rows[i].has(cell) ||
          columns[j].has(cell) ||
          boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(cell)
        ) {
          return false; // Already seen this value in the same row, column, or 3x3 box
        }
        rows[i].add(cell);
        columns[j].add(cell);
        boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(cell);
      }
    }
  }
  return true; // The Sudoku puzzle is valid
};
let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
