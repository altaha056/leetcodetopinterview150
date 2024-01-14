var MinStack = function () {
  this.items = [];
};

MinStack.prototype.push = function (val) {
  this.items.push({
    value:val,
    min:this.items.length===0?val:Math.min(val, this.getMin())
  });
};

MinStack.prototype.pop = function () {
  this.items.pop();
};

MinStack.prototype.top = function () {
  return this.items[this.items.length - 1].value;
};

MinStack.prototype.getMin = function () {
  return this.items[this.items.length - 1].min;
};
