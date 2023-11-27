/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let h = 0;
  const cSort = citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    const cur = Math.min(i + 1, cSort[i]);
    h = Math.max(h, cur);
  }
  return h;
};

let citations = [3, 0, 6, 1, 5];

console.log(hIndex(citations));
