function powerSet (string) {
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

  // this line makes a sorted array without duplicates
  for(var i = 0; i < lowerCaseSort.length; i++){
    if(noDupes.indexOf(lowerCaseSort[i])<0){
      noDupes.push(lowerCaseSort[i]);
    }
  }

function recurse(string){
  var word='';
  for(var i = 0; i < noDupes.length; i++){
    word = noDupes[i]+noDupes[i+1];
    results.push(word);
    recurse(word);
  }
}

  return results;
}
