'use strict';

const Stack= require('../stacksAndQueues/stacks-and-queues');
// const Node =require('../stacksAndQueues/stacks-and-queues');

// let stack=new Stack();

// stack.push(4);
// stack.push(1);
// stack.push(3);
// stack.push(8);
// console.log(stack);


class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  
  enqueue(value){
    this.stack1.push(value);
  }
  
  dequeue(){
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        return null;
      }
      while (this.stack1.length > 0) {
        let pop1 = this.stack1.pop();
        this.stack2.push(pop1);
      }
    }
    return this.stack2.pop();
  }
}
  

let pseudoQueue = new PseudoQueue();
pseudoQueue.enqueue(10);
pseudoQueue.enqueue(15);
pseudoQueue.enqueue(20);
console.log(pseudoQueue.stack1);

pseudoQueue.enqueue(20);
pseudoQueue.enqueue(15);
pseudoQueue.enqueue(10);
pseudoQueue.enqueue(5);
pseudoQueue.dequeue();
console.log(pseudoQueue.stack2);