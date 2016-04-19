function isValidAnagram(s1, s2){
  var results = [];
  var splitS1 = s1.split('');

  var recurse = function(addWord, splitS1){
    if(addWord.length === s1.length){
      if(results.indexOf(addWord) === -1){
        results.push(addWord);
      }
      return;
    }

    for(var i = 0; i < splitS1.length; i++){
      var temp = splitS1.slice();
      var word = addWord + splitS1[i];
      temp.splice(i, 1);
      recurse(word, temp);
    }
  };

recurse('', splitS1);
// console.log(results);
if(results.indexOf(s2) !== -1){
  return true;
} else {
  return false;
}
}
