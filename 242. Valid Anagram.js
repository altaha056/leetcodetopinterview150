var isAnagram = function (s, t) {
  return s.split("").sort().toString() === t.split("").sort().toString();
};
let s = "anagram";
let t = "nagaram";

console.log(isAnagram(s, t));
