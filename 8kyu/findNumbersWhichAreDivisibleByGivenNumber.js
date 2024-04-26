// Find numbers which are divisible by given number

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// My answer:

const divisibleBy = (numbers, divisor) =>
  numbers.filter((number) => number % divisor === 0);

// My reasoning:
// 1. filter() takes an array and returns only the elements that pass our test.
// 2. In this case, if we divide each element (number) by the divisor and there's no remainder, we return that element.

// Kata from https://www.codewars.com/kata/55edaba99da3a9c84000003b/javascript
