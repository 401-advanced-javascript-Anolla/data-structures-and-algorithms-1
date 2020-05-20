'use strict';

function BinarySearch (sortedArray,searchKey) {
  let result;
  for(let i=0;i<sortedArray.length;i++){
    if(searchKey!==sortedArray[i]){
      result -1;
    }
    else{
      result=i;
      break;
    }
  }
  
  return result;
}

BinarySearch([4,8,15,16,23,42], 15);