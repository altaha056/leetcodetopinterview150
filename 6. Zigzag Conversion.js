var convert = function (s, numRows) {
  if (numRows == 1) return s;
  let ans = [];
  let pointer = 0;
  let bottom = true;

  //true: bottom, false: tilted upwards
  new Array(numRows).fill().forEach(() => ans.push(""));
  let qq = s.split("");
  while (qq.length) {
    ans[pointer] += qq.shift();
    bottom ? pointer++ : pointer--;
    if (pointer % numRows == 0) {
      bottom = !bottom;
      if (bottom == true) {
        pointer = 0;
      } else {
        pointer = numRows - 2;
        if (pointer == 0) bottom = !bottom;
      }
    }
  }
  return ans.join("");
};

let s = "ABCDEFGHIJ";
let numRows = 2;

console.log(convert(s, numRows));
