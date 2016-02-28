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


}
