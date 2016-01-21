// this function tests to see if a subset is part of a superset

Array.prototype.isSubsetOf = function(array) {
  var isSubset = true;

  if(this.forEach(function(element){
    if(!array.includes(element)){
      isSubset = false;
    }
  }));

  return isSubset;
};
