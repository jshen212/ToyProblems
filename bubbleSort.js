

function bubbleSort (input) {

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
