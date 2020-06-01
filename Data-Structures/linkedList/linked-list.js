'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let prevNode = this.head;
    this.head = node;
    this.head.next = prevNode;
    return this;
  }

  includes(value) {
    // console.log(this.head)
    let currentValue = this.head;
    while (currentValue.next) {
      if (value === currentValue.value) {
        // currentValue=currentValue.next
        return true;
      }
      else {
        currentValue = currentValue.next;
      }
      if (!currentValue.next) {
        if (currentValue.value === value) {
          return true;
        }
        return false;
      }
    }
  }

  toString() {
    let currentValue = this.head;
    let allValues = ``;
    // console.log(allValues)
    while (currentValue.next) {
      allValues = allValues + `{${currentValue.value}} -> `;
      currentValue = currentValue.next;
    }
    allValues = allValues + `{${currentValue.value}} -> ` + 'NULL';
    // console.log(allValues)
    return allValues;
  }

  append(value){
    let node =new Node(value);
    if(!this.head){
      this.head=node;
      return this;
    }
  
    let current = this.head;
    while(current.next){
      current=current.next;
    }
    current.next=node;
    return this;
  }
  
  insertBefore(value, newVal){
    let newNode = new Node(newVal); 
    let existingNode =new Node(value);
    let current = this.head;
    while(current.next){
      if(current.next.value===existingNode.value){
        existingNode.next=current.next.next;
        newNode.next= existingNode;
        current.next= newNode;
        return this;
      }
      //  console.log(current.next)
      current=current.next;
    }
    return ('Exception');
  }

  
  insertAfter(value, newVal){
    let newNode = new Node(newVal); 
    let existingNode =new Node(value);
    let current = this.head;
    while(current.next){
      if(current.next.value===existingNode.value){
        newNode.next=current.next.next;
        current.next.next= newNode;
        //  current.next= newNode;
        return this;
      }
      current=current.next;
    }
    return ('Exception');
  }
}

module.exports = LinkedList;

const list = new LinkedList();
list.insert('first node');
list.insert('new node');
list.insert('last node');
console.log(list.includes('first node'));
console.log(list);
console.log(list.toString());

list.append(20);
list.append(14);
list.append(84);
list.append(3);
list.append(8);
console.log(list.insertBefore(84,0));
console.log(list.insertAfter(84,8));

console.log(list.head.next.next);