'use strict';

const BinarySearch=require('../challenges/arrayBinarySearch/array-binary-search');

describe('Array Binary Search Function Module', () => {
  it('Array Binary Search Function returns the index if the number if it finds it in the array', () => {
    let arr = [4,8,15,16,23,42];
    let num = 15;
    let result = 2;
    expect(BinarySearch(arr, num)).toStrictEqual(result);
  });
  
  it('It should return -1 if the if the number if it doesn"t find it in the array', () => {
    expect(BinarySearch([4,8,15,16,23,42], 90)).toStrictEqual(-1);
  });
});