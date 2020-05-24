'use strict';

const BinarySearch=require('../challenges/arrayBinarySearch/array-binary-search');

describe('Array Binary Search Function Module', () => {
  it('Array Binary Search Function returns the index of the number if it"s it finds it in  the array', () => {
    let arr = [4,8,15,16,23,42];
    let num = 15;
    let result = 2;
    expect(BinarySearch(arr, num)).toEqual(result);
  });

});