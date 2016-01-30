function largestProductOfThree(array) {
  var sortedArray = array.sort(function(a,b){
    return a-b;
  });

  var posArray = sortedArray.slice(-3);
  var negArray = sortedArray.slice(0,2);
  var posProduct = posArray[0]*posArray[1]*posArray[2];
  var posNegProduct = negArray[0]*negArray[1]*posArray[2];

  return Math.max(posProduct, posNegProduct);
}
