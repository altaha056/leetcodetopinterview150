var wordPattern = function (pattern, s) {
  let sArr = s.split(" ");

  let mapObjA = new Map();
  let mapObjB = new Map();
  for (let i = 0; i < s.length; i++) {
    if (
      mapObjA.get(pattern[i]) != undefined &&
      mapObjA.get(pattern[i]) != sArr[i]
    )
      return false;
    if (mapObjB.get(sArr[i]) != undefined && mapObjB.get(sArr[i]) != pattern[i])
      return false;
    mapObjA.set(pattern[i], sArr[i]);
    mapObjB.set(sArr[i], pattern[i]);
  }
  return true;
};
let pattern = "abbaa";
let s = "dog cat cat dog dog";
console.log(wordPattern(pattern, s));
