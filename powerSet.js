function powerSet(string) {
  var results = [''];
  noDupes = [];
  var lowerCaseSort = string.toLowerCase().split('').sort(function(a,b){
    if(a>b){
      return 1;
    }

    else if(b>a){
      return -1;
    }

    else {
      return 0;
    }
  });

  for(var i = 0; i < lowerCaseSort.length; i++){
    if(noDupes.indexOf(lowerCaseSort[i])<0){
      noDupes.push(lowerCaseSort[i]);
    }
  }

  var recurse = function(word, noDupes) {
    for (var i = 0; i < noDupes.length; i++) {
      results.push(word + noDupes[i]);
      recurse(word + noDupes[i], noDupes.slice(i + 1));
    }
  };

  recurse('', noDupes);
  return results;
}
