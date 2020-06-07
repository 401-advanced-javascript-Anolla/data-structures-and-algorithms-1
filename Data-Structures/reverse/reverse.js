'use strict';

const list = require('../linkedList/linked-list');

const list1 = new list();
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);


function reverseLL(ll){

  let resultingLL = new list();
    
  let  current=ll.head;
    
  while(current.next){
    
    let value=current.value;
    resultingLL.insert(value);
    current=current.next;
    
  }
  resultingLL.insert(current.value);
  console.log(resultingLL);
  return resultingLL;
}
    
reverseLL(list1);