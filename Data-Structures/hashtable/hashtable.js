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
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  // append(value) {
  //   const node = new Node(value);
  //   if (!this.head) {
  //     this.head = node;
  //   } else {
  //     const current = this.head;
  //     while (current.next) {
  //       current = current.next;
  //     }
  //     current.next = node;
  //   }
  // }
}
  

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  getHash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    // 19 is a prime number YOU CAN USE ANY OTHER PRIME Number
    // since the resulted number can go out of size we will do % size
    const hashKey = (sumCharCode * 19) % this.size;
    // console.log(hashKey);
    return hashKey; //to index 2000
  }

  add(key, value) {
    const hash = this.getHash(key);
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value }); //[key] dynamic key, otherwise it will take ket as a string.
      this.storage[hash] = ll; // ===> [3222] = {head:{value:{"key","value"},next:{}}}
    } else {
      this.storage[hash].prepend({ [key]: value });
    }
  }

  find(key){
    const hash = this.getHash(key);
    let current = this.storage[hash].head;
    if(!current.value[key]){
      while(current.next){
        current=current.next;
        if(!current.value[key]){
          current=current.next;
          return current.value[key];
        }
        else{
          return current.value[key];
        }
      }
    }
    else{
      return current.value[key];
    }
  }

  contains(key){
    const hash = this.getHash(key);
    if(this.storage[hash]){
      let current = this.storage[hash].head;
      if(!current.value[key]){
        while(current.next){
          current=current.next;
          if(!current.value[key]){
            current=current.next;
            return true;
          }
          else{
            return true;
          }
        }
      }
      else{
        return true;
      }
    }
    else{
      return false;
    }
  }
}

const hashmap = new Hashmap(4000); // ==> [4000]
hashmap.add('name', 'anolla');
hashmap.add('one', '1');
hashmap.add('eno', '11');
hashmap.add('neo', '111');
hashmap.add('this', 'thing');
// console.log(hashmap.storage);
// console.log(hashmap.storage[3923].head.value['name']);
console.log(hashmap.find('neo'));
console.log(hashmap.find('eno'));
console.log(hashmap.find('one'));
console.log(hashmap.find('name'));

console.log(hashmap.contains('neo'));
console.log(hashmap.contains('eno'));
console.log(hashmap.contains('one'));
console.log(hashmap.contains('name'));
console.log(hashmap.contains('f'));

