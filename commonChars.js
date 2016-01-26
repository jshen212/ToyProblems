commonCharacters = function(string1, string2){
var results=[];

  var splitJoinStr2 = string2.split(' ').join('');

  for(var i = 0; i < string1.length; i++){
     if(splitJoinStr2.indexOf(string1[i])!==-1){
       if(results.indexOf(string1[i])===-1){
         results.push(string1[i]);
       }
    }
  }

   return results.join('');
};
