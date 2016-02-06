/*
Binary Search Array
Given a sorted array of integers, find the index of a target value using a binary search algorithm.

A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.


Note:
Your function should return -1 for target values not in the array.

Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?
*/

function binarySearch (array, target) {
var midIndex = Math.floor(array.length/2);
var ans;

function recurse(val){
  if(target > array[array.length-1] || target < array[0]){
    ans = -1;
    return;
  }

   if(val === target){
    ans = midIndex;
    return;
  }

  else if(val<target){
    if(Math.floor((array.length+midIndex)/2) === midIndex){
      ans=-1;
      return;
    } else {
    midIndex = Math.floor((array.length+midIndex)/2);
    recurse(array[midIndex]);
    }
  }

  else if (val>target){
    //sees if the value has already been checked
    if(Math.floor(midIndex/2) === midIndex){
      ans=-1;
      return;
    } else {
    midIndex = Math.floor(midIndex/2);
    recurse(array[midIndex]);
    }
  }
 }

  recurse(array[midIndex]);
  return ans;
}
