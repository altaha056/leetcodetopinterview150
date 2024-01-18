var isIsomorphic = function (s, t) {
  let mapObjA = new Map();
  let mapObjB = new Map();
  for (let i = 0; i < s.length; i++) {
    if (mapObjA.get(s[i]) != undefined && mapObjA.get(s[i]) != t[i])
      return false;
    if (mapObjB.get(t[i]) != undefined && mapObjB.get(t[i]) != s[i])
      return false;
    mapObjA.set(s[i], t[i]);
    mapObjB.set(t[i], s[i]);
  }
  return true;
};

let s = "badc";
let t = "baba";
console.log(isIsomorphic(s, t));
