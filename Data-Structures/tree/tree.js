'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
  
class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  // Root -> Left -> Right
  preOrder() {
    const results = [];
    const _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }

  // Left -> Root -> Right
  inOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      results.push(node.value);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }

  // Left -> Right -> Root
  postOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }

  findMaximumValue(){
    let max = 0;
    let _traversal = (node) => {
      if(node.value>max){
        max = node.value;
      }
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return max;
  }


  BreadthFirstTraversal(){
    let queue=[];
    let results=[];
    let current=this.root;
  
    queue.push(this.root);
    results.push(this.root);

    while(queue.length){

      current=queue.shift();

      if(current.left){
        queue.push(current.left);
        results.push(current.left);
      } 
      if (current.right){
        queue.push(current.right);
        results.push(current.right);
      }
    }

    return results;

  }
}
  
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
one.left = two;
one.right = three;
three.right = four;
three.left = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
let tree = new BinaryTree(one);

console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
console.log(tree.findMaximumValue());
console.log('aaarrrraaaay',tree.BreadthFirstTraversal());

  
  
class BinarySearchTree {
  constructor() {  
    this.root = null;
  }
  add(val) {
    let currentNode= this.root;
    if(!currentNode) this.root = new Node(val);
    while(currentNode){
      if(currentNode.value > val){
        if(!currentNode.left){
          currentNode.left = new Node(val); 
          break;  
        } else {
          currentNode = currentNode.left;
        }
      }
      if(currentNode.value < val){
        if(!currentNode.right){
          currentNode.right = new Node(val);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  
  }
  
  contains(val){
    let node = this.root;
    while(node != null){
      if(val == node.value){
        return true;
      }
      else if(val< node.value){
        node=node.left;
      }
      else if(val> node.value){
        node = node.right;
      }
    }
    return false;
  }
}


let treeBST= new BinarySearchTree();
console.log(treeBST.add(8));
console.log(treeBST.add(5));
console.log(treeBST.add(20));
console.log(treeBST.add(7));
console.log(treeBST.add(3));

console.log(treeBST.contains(20));
console.log(treeBST.contains(0));


module.exports = {Node,BinaryTree,BinarySearchTree};