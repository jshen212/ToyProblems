/*
Longest Run
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run.
If there are two runs of equal length, return the first one. Return [0,0] for no runs.
*/


function longestRun (string) {
  var splitStr = string.split('');
  var count = 0;
  var longestCount = 0;
  var letter;
  var firstI;
  var lastI;

  for(var i = 0; i < string.length; i++){
    for(var j = i+1; j < string.length; j++){
      letter = string[i];
      firstI = i;
      count++;
      if(string[j]===letter){
        count++;
        if(count > longestCount){
          lastI = j;
          longestCount = count;
        }
      } else {
        firstI = '';
        lastI = '';
        count = 0;
      }
    }
  }
}
