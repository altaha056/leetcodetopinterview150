var removeElement = function(nums, val) {
    let count = []
    for(let num of nums){
        if(num != val){
            count.push(num)
        }
    }
    let numslength = count.length
    for(let i =0;i<nums.length;i++){
        nums[i] = count[i]
    }
    return numslength
};
let nums = [3, 2, 2, 3],
  val = 3;

console.log(removeElement(nums, val));
