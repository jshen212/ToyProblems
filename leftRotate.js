function isArrayLengthLessThan2(length) {
  if (length < 2) {
    return true;
  } else {
    return false;
  }
}

function getRotatedIndex(currentIndex, rotations, arrayLength) {
  if(rotations > 0 && rotations < arrayLength) {
    rotatedIndex = currentIndex + (arrayLength - rotations);
  } else {
    rotatedIndex = currentIndex + (arrayLength - (rotations % arrayLength));
  }

  if(rotatedIndex >= arrayLength) {
    rotatedIndex = rotatedIndex - arrayLength;
  }

  return rotatedIndex;
}

function leftRotateArray(array, rotations) {
  var rotatedIndex;
  var arrayLength = array.length || 0;
  var result = [];

  if (isArrayLengthLessThan2(arrayLength) || rotations < 0 || rotations % arrayLength === 0) {
    return array;
  }

  for(var i = 0; i < array.length; i++) {
    rotatedIndex = getRotatedIndex(i, rotations, arrayLength);
    result[rotatedIndex] = array[i];
  }
  return result;
}

// 0 2
// 1 3
// 2 4
// 3 0
// 4 1
// [1,2,3,4,5] 3
// [4,5,1,2,3]

// 0 1
// 1 2
// 2 3
// 3 4
// 4 1
// [1,2,3,4,5] 4
// [5,1,2,3,4]

// 0 4
// 1 0
// 2 1
// 3 2
// 4 3
// [1,2,3,4,5] 6
// [2,3,4,5,1]

// 0  3
// 1  4
// 2  0
// 3  1
// 4  2
// [1,2,3,4,5] 7
// [3,4,5,1,2]


// 0  2
// 1  3
// 2  4
// 3  0
// 4  1
// [1,2,3,4,5] 8
// [4,5,1,2,3]

// 0  4
// 1  0
// 2  1
// 3  2
// 4  3
// [1,2,3,4,5] 11
// [2,3,4,5,1]
