'use strict';

function reverseFun(arr) {
  var arrReversed = [];
  for (var i = arr.length; i > 0; i--) {
    arrReversed.push(arr[i - 1]);
  }
  return(arrReversed);
}

var myArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
reverseFun(myArr);
