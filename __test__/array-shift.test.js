'use strict';

const insertShiftArray = require('../challenges/arrayShift/array-shift');

describe('Array shift Function Module', () => {
  it('Insert shift array function inserts a value into the middle index of the array', () => {
    let arr = [2, 4, 5,6, 8];
    let num = 5;
    let result = [2, 4, 5, 5, 6, 8];
    expect(insertShiftArray(arr, num)).toEqual(result);
  });

  it('Insert shift array function inserts a value into the middle index of the array', () => {
    let arr = [2, 4, 6, 8];
    let num = 5;
    let result = [2, 4, 5, 6, 8];
    expect(insertShiftArray(arr, num)).toEqual(result);
  });
});