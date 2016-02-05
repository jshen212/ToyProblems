/*
Compose, Pipe
Implement the functions compose and pipe`.

Compose:
Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

You can think of compose as moving right to left through its arguments.

Pipe:
Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

You can think of pipe as moving left to right through its arguments.
*/


var compose = function(){
var args = Array.prototype.slice.call(arguments);
var temp;
  return function(input){
    args.reduceRight(function(prev,curr){
      if(args.length === 2){
      temp = prev(input);
      temp = curr(temp);
    } else {
      while(!temp){
      temp = prev(input);
      }
      temp = curr(temp);
    }
    });
    return temp;
  };
};
