'use strict';


function insertShiftArray(arr, value) {
  let arrInHalf = arr.slice(0, Math.ceil(arr.length / 2));
  arrInHalf.push(value);
  //  console.log(arrInHalf)
  let otherHalf = arr.slice(Math.ceil(arr.length / 2), arr.length);
  // console.log(otherHalf)

  // console.log(otherHalf.join(' '))
  let joinArr = arrInHalf.concat(otherHalf);
  //  console.log(joinArr)
  return joinArr;


}


insertShiftArray([4, 8, 15, 56, 65], 16);

module.exports = insertShiftArray;