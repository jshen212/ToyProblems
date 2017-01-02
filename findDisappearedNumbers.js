// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [5,6]
var testArr = [-4,-3,-2,-7,-8,-2,-3,-1];

var findDisappearedNumbers = function(inputArr) {
  var results = [];

  function switch

  for(var i = 0; i < inputArr.length; i++) {
    var val = Math.abs(inputArr[i]) - 1;
    if(inputArr[val] > 0) {
      inputArr[val] = -inputArr[val];
    }
  }

  for(var j = 0; j < inputArr.length; j++) {
    if(inputArr[j] > 0) {
      results.push(j+1);
    }
  }

  return results;
};
