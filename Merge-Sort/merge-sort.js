'use strict';

function mergeSort(arr){
  if (arr.length <2 ) {
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  return merge(
    mergeSort(arr.slice(0,mid)),
    mergeSort(arr.slice(mid)),
  );
}

function merge(left,right){
  let output = [];
  while (left.length && right.length){
    output.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  while (left.length){
    output.push(left.shift());
  }
  while (right.length){
    output.push(right.shift());
  }
  return output;
}

mergeSort([8,4,23,42,16,15]);


module.exports = {mergeSort, merge};