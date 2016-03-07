/*
Robot Paths
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.

Parameters:

n (required) - amount of rows/columns (max 6)
*/

function robotPaths (n) {
  var board = makeBoard(n);
  var count = 0;

  function inbounds(row, col){
    if(row < 0){
      return false;
    }

    if(row > board.length){
      return false;
    }

    if(col < 0){
      return false;
    }

    if(col > board[0].length){
      return false;
    }

    return true;
  }


  function recurse(row, col){
    if(row === col){
      count++;
    }

    if(!hasBeenVisited(row, col) && inbounds(row,col)){
      board.togglePiece(row, col);
      recurse(row, col);
    }

    if(!hasBeenVisited(row+1, col) && inbounds(row+1,col)){
      board.togglePiece(row+1, col);
      recurse(row+1, col);
    }

    if(!hasBeenVisited(row, col+1) && inbounds(row, col+1)){
      board.togglePiece(row, col+1);
      recurse(row, col+1);
    }

    // must check left squares and top squares 
  }

for(var i = 0; i < board.length; i++){
  for(var j = 0; j < board[i].length; j++){
    recurse(i, j);
  }
}
  return count;
}
