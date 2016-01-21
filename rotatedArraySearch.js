function rotatedArraySearch (rotated, target) {
  var midIndex = Math.floor(rotated.length/2);
  var ansIndex;

function recurse(input){
      if(input[midIndex]===target){
          ansIndex = midIndex;
      }
      else if(target < input[midIndex]){
                  midIndex = Math.floor((rotated.length-midIndex)/2);
                  recurse(rotated);
              }

      else if(target>input[midIndex]){
              midIndex = Math.floor((midIndex+rotated.length+1)/2);
              recurse(rotated);
          }

      else {
          ansIndex = -1;
      }
  }

    recurse(rotated);
   return ansIndex;
  }
