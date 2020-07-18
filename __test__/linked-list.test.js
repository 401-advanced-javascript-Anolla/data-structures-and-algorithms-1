'use strict';

const linkedList = require('../Data-Structures/linkedList/linked-list');

describe('Linked List Module', () => {

  it('1. Can successfully instantiate an empty linked list', () => {
    const linkedListInstance = new linkedList();
    expect(linkedListInstance.head).toBeNull();
  });

  it('2. Can properly insert into the linked list', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.insert(7);
    expect(linkedListInstance.head.value).toStrictEqual(7);
  });

  it('3. The head property will properly point to the first node in the linked list', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.insert(3);
    linkedListInstance.insert(1);
    expect(linkedListInstance.head.value).toStrictEqual(1);
  });

  it('4. Can properly insert multiple nodes into the linked list', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.insert(7);
    linkedListInstance.insert(9);
    linkedListInstance.insert(1);
    expect(linkedListInstance.head.next.next.value).toStrictEqual(7);

  });

  it('5. Will return true when finding a value within the linked list that exists', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.insert(5);
    linkedListInstance.insert(8);
    linkedListInstance.insert(10);
    expect(linkedListInstance.includes(10)).toBeTruthy();
  });

  it('6. Will return false when searching for a value in the linked list that does not exist', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.insert(7);
    linkedListInstance.insert(8);
    linkedListInstance.insert(9);
    expect(linkedListInstance.includes(5)).toBeFalsy();
  });

  it('7. Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.insert(11);
    linkedListInstance.insert(55);
    linkedListInstance.insert(77);
    linkedListInstance.insert(30);
    linkedListInstance.insert(100);
    expect(linkedListInstance.toString()).toStrictEqual('{100} -> {30} -> {77} -> {55} -> {11} -> NULL');
  });
});

/////////////////////////////// CODE CHALLENGE 6

describe('Linked List Module 2', () => {

  it('1. Can successfully add a node to the end of the linked list', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.append(20);
    linkedListInstance.append(14);
    expect(linkedListInstance.head.next.value).toEqual(14);
  });

  it('2. Can successfully add multiple nodes to the end of a linked list', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.append(20);
    linkedListInstance.append(14);
    linkedListInstance.append(84);
    expect(linkedListInstance.head.next.next.value).toStrictEqual(84);
  });

  it('3. Can successfully insert a node before a node located in the middle of a linked list', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.append(20);
    linkedListInstance.append(14);
    linkedListInstance.append(84);
    console.log(linkedListInstance.insertBefore(84,0));
    expect(linkedListInstance.head.next.next.value).toStrictEqual(0);
  });

  it('4. Can successfully insert a node before the first node of a linked list', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.append(20);
    linkedListInstance.append(14);
    linkedListInstance.append(84);
    console.log(linkedListInstance.insertBefore(14,0));
    expect(linkedListInstance.head.next.value).toStrictEqual(0);

  });

  it('5. Can successfully insert after a node in the middle of the linked list', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.append(20);
    linkedListInstance.append(14);
    linkedListInstance.append(84);
    console.log(linkedListInstance.insertAfter(14,0));
    expect(linkedListInstance.head.next.next.value).toStrictEqual(0);
  });

  it('6. Can successfully insert a node after the last node of the linked list', () => {
    const linkedListInstance = new linkedList();
    linkedListInstance.append(20);
    linkedListInstance.append(14);
    linkedListInstance.append(84);
    console.log(linkedListInstance.insertAfter(84,0));
    expect(linkedListInstance.head.next.next.next.value).toStrictEqual(0);
  });
});

/////////////////////////////// CODE CHALLENGE 7

describe('Linked List Module 3', () => {

  it('1. Where k is greater than the length of the linked list', () => {
    
  });

  it('2. Where k and the length of the list are the same', () => {
    
  });

  it('3. Where k is not a positive integer', () => {
   
  });

  it('4. Where the linked list is of a size 1', () => {
    

  });

  it('5. “Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    
  });

});