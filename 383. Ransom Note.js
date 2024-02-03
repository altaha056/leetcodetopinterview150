/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let magArr = magazine.split("");
  let rnArr = ransomNote.split("");
  while (rnArr.length != 0) {
    if (magArr.indexOf(rnArr[0]) === -1) return false;
    magArr.splice(magArr.indexOf(rnArr[0]), 1);
    rnArr.shift();
  }
  return true;
};

let ransomNote = "aa";
let magazine = "caba";

console.log(canConstruct(ransomNote, magazine));
