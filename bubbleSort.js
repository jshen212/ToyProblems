function bubbleSort (input) {
  // Write your code here, and
  // return your final answer.

  var temp;
  var swap;

  do{
    swap = false;
    for(var i=0; i<input.length; i++){
      if(input[i+1]<input[i]){
        temp = input[i+1];
        input[i+1] = input[i];
        input[i] = temp;
        swap = true;
      }
    }
  }while (swap);
  return input;
}
