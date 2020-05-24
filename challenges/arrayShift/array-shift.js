'use strict';


function insertShiftArray(arr, value) {
  var arrInHalf = arr.slice(0, Math.ceil(arr.length / 2));
  arrInHalf.push(value);
  //  console.log(arrInHalf)
  var otherHalf = arr.slice(Math.ceil(arr.length / 2), arr.length);
  // console.log(otherHalf)

  // console.log(otherHalf.join(' '))
  var joinArr = arrInHalf.concat(otherHalf);
  //  console.log(joinArr)
  return joinArr;


}

insertShiftArray([4, 8, 15, 56, 65], 16);