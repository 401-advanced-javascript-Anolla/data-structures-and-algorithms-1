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
    // console.log('stack1111111',this.stack1)
  }
  
  dequeue(){
    while (this.stack1.storage.length) {
      // console.log('helloooooooo')
      let pop1 = this.stack1.pop();
      // console.log('pop111111',pop1)
      this.stack2.push(pop1);
      // console.log('stack22222',this.stack2)
    }
    let popped= this.stack2.pop();
    return popped;
  }
}
  

let pseudoQueue = new PseudoQueue();
pseudoQueue.enqueue(1);
pseudoQueue.enqueue(2);
pseudoQueue.enqueue(3);
console.log('dequeueing',pseudoQueue.dequeue());
// console.log(pseudoQueue.stack1);

// pseudoQueue.enqueue(20);
// pseudoQueue.enqueue(15);
// pseudoQueue.enqueue(10);
// pseudoQueue.enqueue(5);
// pseudoQueue.dequeue();
// console.log(pseudoQueue.stack2);