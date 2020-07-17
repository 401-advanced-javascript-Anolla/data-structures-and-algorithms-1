'use strict';

const list = require('../linkedList/linked-list');

let list1=new list();
let list2=new list();

list1.append(3);
list1.append(0);
list1.append(5);
// console.log(list1.head.next);

list2.append(8);
list2.append(2);
// console.log(list2);


// let current1= list1.head;
// let count1=0;
// while (current1.next){
//   current1= current1.next;
//   count1++;
// }

// let current2=list2.head;
// let count2=0;
// while (current2.next){
//   current2= current2.next;
//   count2++;
// }

// let mergedCount= count1+count2;
// console.log(mergedCount);


function mergeLists (list1,list2){

  let merged = new list();

  let current1 = list1.head;
  let current2 = list2.head;
  
  while(current1 || current2){
    if(current1){
      merged.append(current1.value);
      current1=current1.next;
    }
    if(current2){
      merged.append(current2.value);
      current2=current2.next;
    }
  }
  console.log (merged);
  return merged;
}
mergeLists(list1,list2);