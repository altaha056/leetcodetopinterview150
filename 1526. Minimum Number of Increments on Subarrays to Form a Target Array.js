var minNumberOperations = function (target) {
  let ans = target[0];
  for (let i = 1; i < target.length; i++) {
    if (target[i] <= target[i - 1]) continue;
    ans += target[i] - target[i - 1];
  }
  return ans;
};

const target = [3, 1, 5, 4, 2, 3];
console.log(minNumberOperations(target));
