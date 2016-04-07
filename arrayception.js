/*
Arrayception
Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

Examples
Input	Output
array:
[ [ 5 ], [ [ ] ] ]	2
array:
[ 10, 20, 30, 40 ]	1
array:
[ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]	4
array:
[ ]	0
array:
[ [ [ ] ] ]	0
*/

function arrayception (array) {
  var count = 0;
  var longest = 0;

  var recurse = function(el){
    for(var i = 0; i < el.length; i++){
      if(Array.isArray(el[i])){
        if(el[i].length){
        count+=1;
        if(count > longest){
          longest = count;
        }
        recurse(el[i]);
       }
      }
      if(count < longest){
        count = 0;
      }
    }
  };

    recurse(array);
    return longest;
}
