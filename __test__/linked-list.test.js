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