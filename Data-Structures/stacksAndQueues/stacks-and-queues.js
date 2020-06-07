class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.storage = [];
    this.top = null;
  }
  
  push(value) {
    let node = new Node(value);
    this.storage.unshift(node);
    node.next = this.top;
    this.top = value;
  }
  
  pop() {
    const item = this.storage.shift();
    this.top = this.storage[0] ? this.storage[0] : null;
    return item;
  }
  
  peek() {
    // console.log(this.top)
    return this.top ? this.top : null;
  }
  
  isEmpty() {
    return this.top ? false : true;
  }
}
  
const stack = new Stack();
stack.push(4);
// stack.push(1);
// stack.push(3);
// stack.push(8);
// stack.pop();
// stack.peek();
// console.log(stack);
// stack.isEmpty();
  


class Queue {
  constructor() {
    this.storage = [];
    this.front = null;
    this.rear = null;
  }
  enqueue(value) {
    let node = new Node(value);
    if (!this.storage.length) {
    //  console.log(this.front)
      this.front = node;
      this.rear = node;
      this.storage.push(node);
      return this;
    }
    this.storage.push(node);
    this.rear.next = value;
    this.rear = node;
    // console.log(this.storage.node.next)
    //this.storage.unshift(item)
  }
  dequeue() {
    const item = this.storage.shift();
    this.front = this.storage[0] ? this.storage[0] : null;
    return item;
    // return this.storage.pop()
  }

  peek() {
    return this.storage[0] ? this.storage[0] : null;
  }

  isEmpty() {
    return this.front ? false : true;
  }
}

let q = new Queue();
q.enqueue(5);
// q.enqueue(7);
// q.enqueue(9);
// q.enqueue(4);
// q.dequeue();
// q.peek();
// q.isEmpty();
// console.log(q);


module.exports = Node;
module.exports = Stack;
// module.exports = Queue;

