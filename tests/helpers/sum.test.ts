import { expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

test('adds 1 + 2 to equal 3', () => {
  const a = 1;
  const b = 2;

  const result = sum(a, b);
  expect(result).toBe(3);
});

test('should return 0 if the array is empty', () => {
    const numberArray = [];

    const result = addArray(numberArray);

    expect(result).toBe(0);

})

test('should return the proper value of the addArray function', () => {
    const numberArray = [1,2,3,4,5];

    const result = addArray(numberArray);

    expect(result).toBe(15);

})
