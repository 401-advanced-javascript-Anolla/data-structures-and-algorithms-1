'use strict';

const Stack= require('../stacksAndQueues/stacks-and-queues');
const Node =require('../stacksAndQueues/stacks-and-queues');

let stack=new Stack();

stack.push(4);
stack.push(1);
stack.push(3);
stack.push(8);
console.log(stack);


class PseudoQueue {
  constructor(){
    this.storage = [];
    this.front = null;
    this.rear = null; 
  }

  enqueue(value){
    const node = new Node(value);
    if (!this.storage.length) {
      this.front = node;
      this.rear = node;
      this.storage.push(node);
      return this;
    }
    // this.storage.unshift(node);
    // this.rear.next = value;
    // this.rear = node;
  //   let prevFront = this.front;
  //   this.front = node;
  //   this.front.next = prevFront;
  //   return this;
  }

  //   dequeue(){

  //   }

}
let pseudoQueue = new PseudoQueue();
console.log(pseudoQueue.enqueue(6));