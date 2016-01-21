// this function creates all possible permutations of a rock, paper, scissors match based on number of rounds

function rockPaperPermutation (roundCount) {
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
