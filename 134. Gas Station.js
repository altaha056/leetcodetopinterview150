/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let curGas = 0;
  let totalGas = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i];
    curGas += gas[i] - cost[i];
    if (curGas < 0) {
      curGas = 0;
      start = i + 1;
    }
  }
  return totalGas >= 0 ? start : -1;
};

let gas = [2, 3, 4],
  cost = [3, 4, 3];
console.log(canCompleteCircuit(gas, cost));
