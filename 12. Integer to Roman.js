var intToRoman = function (num) {
  let ans = "";
  while (num > 0) {
    if (num >= 1000) { ans += "M"; num -= 1000; continue;}
    if (num >= 900) { ans += "CM";  num -= 900; continue;}
    if (num >= 500) { ans += "D"; num -= 500; continue;}
    if (num >= 400) { ans += "CD";  num -= 400; continue;}
    if (num >= 100) { ans += "C"; num -= 100; continue;}
    if (num >= 90) { ans += "XC";  num -= 90; continue;}
    if (num >= 50) { ans += "L"; num -= 50; continue;}
    if (num >= 40) { ans += "XL";  num -= 40; continue;}
    if (num >= 10) { ans += "X"; num -= 10; continue;}
    if (num >= 9) { ans += "IX";  num -= 9; continue;}
    if (num >= 5) { ans += "V"; num -= 5; continue;}
    if (num >= 4) { ans += "IV";  num -= 4; continue;}
    if (num >= 1) { ans += "I"; num -= 1; continue;}
  }
  return ans;
};
let num = 3999;
console.log(intToRoman(num));
