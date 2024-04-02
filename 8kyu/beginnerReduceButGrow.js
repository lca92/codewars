// Beginner - Reduce but Grow

// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// My answer:

const grow = (x) =>
  x.reduce((accumulator, currentValue) => accumulator * currentValue);

// My reasoning:
// 1. We're used to seeing the reduce method being used as a way to add all elements of an array together, but that is just one of its functions.
// 2. reduce() saves a total amount (accumulator), takes another element (currentValue), does something to it and then puts it in the accumulator with its fellows.
// 3. That "something" can be addition, for sure, but it can also be multiplication, just like what we did to solve this puzzle.

// Kata from https://www.codewars.com/kata/57f780909f7e8e3183000078
