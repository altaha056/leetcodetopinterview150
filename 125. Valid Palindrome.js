var isPalindrome = function (s) {
  let qq = s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  let j = qq.length - 1;
  for (let i = 0; i < j; i++) {
    if (qq[i] != qq[j]) return false;
    j--;
  }
  return true;
};
let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
