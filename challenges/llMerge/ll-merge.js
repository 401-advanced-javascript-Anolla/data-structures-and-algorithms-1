'use strict';

const list = require('../../Data-Structures/linkedList/linked-list');

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

  merged.head = list1.head;
//   console.log(list1);

  let current = merged.head;
//   console.log(current);
  
  while(current.next){
    current = current.next;
  }
//   console.log(current.next);
  // console.log(merged);
  
}
mergeLists(list1,list2);