

function insertShiftArray (arr,value){
    arr.splice(Math.ceil(arr.length/2),0,value)
   return arr;
    
}

insertShiftArray([4,8,15,23,42],16)