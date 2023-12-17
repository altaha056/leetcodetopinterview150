/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < ans.length) {
      if (strs[i][j] == strs[0][j]) {
        console.log(strs[i][j] == strs[0][j], strs[i][j]);
        j++;
      } else {
        ans = ans.slice(0, j);
        break;
      }
    }
  }
  return ans;
};
let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
