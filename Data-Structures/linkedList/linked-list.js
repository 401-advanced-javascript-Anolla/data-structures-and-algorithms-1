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
}

module.exports = LinkedList;

const list = new LinkedList();
list.insert('first node');
list.insert('new node');
list.insert('last node');
console.log(list.includes('first node'));
console.log(list);
console.log(list.toString());