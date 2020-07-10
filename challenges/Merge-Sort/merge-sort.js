'use strict';
  
function mergeSort(arr) {

  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}
    
function merge(left, right, arr){
  let i = 0, j = 0, k = 0;
    
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
    
  if (i === left.length) {
    // add remaining of right to arr
    for (let i = 0; i < right.length; i++) {
      arr[k] = right[i];
      k++;
    }
  } else {
    // add remaining of left to arr
    for (let i = 0; i < left.length; i++) {
      arr[k] = left[i];
      k++;
    }
  }
}

  
mergeSort([8,4,23,42,16,15]);

module.exports = {mergeSort, merge};