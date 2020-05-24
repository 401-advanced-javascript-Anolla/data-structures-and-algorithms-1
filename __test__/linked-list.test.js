

const linkedList = require('../Data-Structures/linkedList/linked-list.js');

describe('Linked List', () => {
  it('LinkedList constructor', () => {
    const list = new linkedList();
    expect(list.head).toBeNull();
  });

  it('Insert a value to the head of the list', () => {
    let list =new linkedList();
    const anyValue = 'something';
    list.insert(anyValue);
    expect(list.head.value).toEqual(anyValue);
    const secondValue = 'something else';
    list.insert(secondValue);
    expect(list.head.value).toEqual(secondValue);
  });

  it('includes function checks if the value is in one of the values of the list',()=>{
    let list =new linkedList();
    const anyValue = 'something';
    const secondValue = 'something else';
    list.insert(anyValue);
    list.insert(secondValue);
    expect(list.includes(anyValue)).toBeTruthy();

  });

  it('to string function returns all values in the list as a string',()=>{
    let list =new linkedList();
    const anyValue = 'something';
    const secondValue = 'something else';
    list.insert(anyValue);
    list.insert(secondValue);
    expect(list.toString()).toEqual(`{${secondValue}} -> {${anyValue}} -> NULL`);


  });
});
