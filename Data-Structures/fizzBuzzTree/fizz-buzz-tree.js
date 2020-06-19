'use strict';

class Node{
  constructor(value, left =null,right = null){
    this.value=value;
    this.left=left;
    this.right=right;
  }
}

class BinaryTree{
  constructor(root=null){
    this.root=root;
  }
   
  preOrder(){
    const result = [];
    const _traversal = (node) => {
      result.push(node.value);
      if(node.left) _traversal(node.left);
      if(node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return result;
  }
  
  inOrder(){
    const result = [];
    const _traversal = (node) => {
      if(node.left) _traversal(node.left);
      result.push(node.value);
      if(node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return result;
  }
 
  postOrder(){
    const result = [];
    const _traversal = (node) => {
      if(node.left) _traversal(node.left);
      if(node.right) _traversal(node.right);
      result.push(node.value);
    };
    _traversal(this.root);
    return result;
  }
}

function FizzBuzzTree(tree) {
  tree.map((val, i) => {
    if (val % 15== 0) {
      tree[i] = 'FizzBuzz';
    }
    else if (val % 3 == 0) {
      tree[i] = 'Fizz';
    }
    else if (val % 5 == 0) {
      tree[i] = 'Buzz';
    }
    else {
      tree[i] = val.toString();
    }
  });
  return tree;
}


module.exports={
  Node,
  BinaryTree,
  FizzBuzzTree,
};