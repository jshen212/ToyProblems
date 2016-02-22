/*
Roman Numeral Translator
Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.

You should return "null" on invalid input.
*/



function translateRomanNumeral (romanNumeral) {
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var splitRomans = romanNumeral.split('');
  var digits=[];
  var math = [];
  var finalMath=[];
  var sum = 0;

  if(romanNumeral === ''){
    return 0;
  }

  for(var i = 0; i < splitRomans.length; i++){
    if(DIGIT_VALUES[splitRomans[i]]){
      digits.push(DIGIT_VALUES[splitRomans[i]]);
    }
  }

  if(!digits.length){
    return null;
  }

  if(digits.length === 1){
    return digits[0];
  }


  for(var j = 0; j < digits.length; j++){
    if(digits[0] < digits[1]){
      math.push(digits[1]-digits[0]);
    }

    else {
      math.push(digits[j]);
    }
  }

  for(var k = 0; k < math.length; k++){
    if(math[k] > math[k+1]){
      finalMath.push(math[k]);
    }

    else if ( math[k] === math[k+1]){
      finalMath.push(math[k] + math[k+1]);
    }

    else {
      finalMath.push(math[k+1] - math[k]);
    }
  }


  for(var l = 0; l < math.length; l++){
    if(finalMath[l]){
      sum += finalMath[l];
    }
  }

  return sum;
}
