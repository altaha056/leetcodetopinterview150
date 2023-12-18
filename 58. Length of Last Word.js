var lengthOfLastWord = function (s) {
  return s
    .split(" ")
    .filter((x) => x.length > 0)
    .pop().length;
};
let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
