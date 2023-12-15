var romanToInt = function (s) {
  let fRom = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sRom = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };
  let qq = s.split("");
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (sRom[qq[0] + qq[1]]) {
      ans += sRom[qq[0] + qq[1]];
      i++;
      qq.shift();
      qq.shift();
      continue;
    }
    ans += fRom[s[i]];
    qq.shift();
  }
  return ans;
};
let s = "LVIII";
console.log(romanToInt(s));
