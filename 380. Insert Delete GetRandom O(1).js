var RandomizedSet = function () {
  this.set = new Set();
};

RandomizedSet.prototype.insert = function (val) {
  if (this.set.has(val)) return false;
  this.set.add(val);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.set.has(val)) return false;
  this.set.delete(val);
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const rand = Math.floor(Math.random() * this.set.size);
  const arr = [...this.set];
  return th
};
