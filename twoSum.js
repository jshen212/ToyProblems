// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution.

var twoSum = function(nums, target) {
  var num1 = null;
  var idx1 = null;
  var idx2 = null;

  for(var i = 0; i < nums.length; i++) {
    num1 = nums[i];
    for(var j = 0; j !== i && j < nums.length; j++) {
        if(num1 + nums[j] === target) {
            idx1 = i;
            idx2 = j;
        }
    }
  }
    return [idx1, idx2];
};
