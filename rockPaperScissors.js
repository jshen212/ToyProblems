/*
Rock Paper Permutation
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
*/

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
