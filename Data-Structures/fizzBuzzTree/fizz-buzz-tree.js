'use strict';

let {Node,BinaryTree} = require('../tree/tree');

function fizzBuzzTree(tree){
  let fizzBuzzTree=new BinaryTree(tree.root);
  const _traverse=(node)=>{
    if(node.value %5 ===0){
      node.value='Buzz';
    }

    else if(node.value % 3 === 0){
      node.value='Fuzz';
    }

    else if(node.value % 5 === 0 & node.value % 3=== 0){
      node.value='FuzzBuzz';
    }

    else{
      node.value.toString();
    }

    if (node.left) _traverse(node.left);
    if (node.right) _traverse(node.right);
  };

  _traverse(fizzBuzzTree.root);
  return fizzBuzzTree;

}

const five = new Node(5);
const seventeen = new Node(17);
const three = new Node(3);
const twentyFive = new Node(25);
const ten = new Node(10);
const six = new Node(6);
const thirty = new Node(30);
const eight = new Node(8);
const twentyseven = new Node(27);

five.left = seventeen;
five.right = three;

three.right = twentyFive;
three.left = ten;

twentyFive.right = eight;

seventeen.right = six;
seventeen.left = thirty;

six.left = twentyseven;

let tree = new BinaryTree(five);

console.log(fizzBuzzTree(tree));

