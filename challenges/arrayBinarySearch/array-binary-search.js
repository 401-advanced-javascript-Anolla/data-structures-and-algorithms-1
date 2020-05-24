'use strict';

function BinarySearch (sortedArray,searchKey) {
  var result;
  for(var i=0;i<sortedArray.length;i++){
    if(searchKey!==sortedArray[i]){
      result= -1;
    }
    else{
      result=i;
      break;
    }
  }
  
  return result;
}

module.exports=BinarySearch;

BinarySearch([4,8,15,16,23,42], 15);