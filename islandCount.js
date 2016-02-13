/*
Island Count
Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

(!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

\n
character. Check your console when submitting to see the input for yourself.
*/

function countIslands (mapStr) {
  var count = 0;
  var splitMap = mapStr.split('\n');
  var islandMap=[];
  var subArr;

 for(var i = 0; i < splitMap.length; i++){
    subArr = splitMap[i].split('');
    islandMap.push(subArr);
}

function inBounds(row, col){
  if(row < islandMap.length){
    return false;
  }
  if(row > islandMap.length){
    return false;
  }
  if(col > subArr.length){
    return false;
  }
  if(col < subArr.length){
    return false;
  }
}


function recurse(row, col){
  if(inBounds(row,col)){
    if(islandMap[row][col] === 0){
      count++;
      if(islandMap[row][col-1] === 0){
        [row][col-1] = '.';
      }
      if(islandMap[row][col+1] === 0){
        [row][col-1] = '.';
      }
      if(islandMap[row-1][col] === 0){
        [row-1][col] = '.';
      }
      if(islandMap[row+1][col] === 0){
        [row+1][col] = '.';
      }
    }
  }
}

 for(var j = 0; j < islandMap.length; j++){
   for(var k = 0; k < islandMap[j].length; k++){
    if(inBounds(j,k)){
     if(islandMap[j][k] === 0){
      count++;
      recurse(j,k);
    }

    }
   }
 }

return count;
}
