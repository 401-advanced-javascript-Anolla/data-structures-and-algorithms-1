'use strict';

const InsertionSort = require ('../Insertion-Sort/insertion-sort');

describe('Insertion Sort Module', () => {
  it('Sorts the elements of the passed array in an ascending order', () => {
    expect(InsertionSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });
});