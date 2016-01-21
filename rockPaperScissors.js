function rockPaperPermutation (roundCount) {
  // Write your code here, and
  // return your final answer.
  var results = [];
  var rpsChoices = ['r','p','s'];

  var recurse = function(input){
    if(input===0){
    return;
    }
    if(input.length === roundCount){
      results.push(input);
    } else {
      for(var i=0; i<rpsChoices.length; i++){
        recurse(input+rpsChoices[i]);
      }
    }
  };
  recurse(roundCount);
  return results;
}

rockPaperPermutation(0);
