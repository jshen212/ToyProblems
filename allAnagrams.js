/*
All Anagrams
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

Parameters:

string (required) - a string of characters.
*/

// function allAnagrams(string){
//   var copy = string.slice();
//   var word = '';
//   var results = [];
//
//
//   function recurse(input){
//     if(word.length === string.length){
//       if(results.indexOf(word)<0){
//         results.push(word);
//       }
//     }
//
//     if(results.length===0){
//       results.push(copy);
//     }
//
//     for(var i=0; i<input.length; i++){
//       word+=copy.splice(0,1);
//       copy = copy.reverse();
//     }
//     copy = string.slice();
//     }
//
//   recurse();
//   return results;
// }

function allAnagrams(string){
  var word = '';
  var left;
  var results = [];


  function recurse(addWord, left){
    if(addWord.length === string.length){
      results.push(addWord);
    }

    for(var i=0; i<left.length; i++){
      word += left[i];
      left = string.slice() +
    }
    
  recurse('', string);
  return results;
}
