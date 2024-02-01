// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My answer:

const findAverage = (array) =>
  array.length !== 0
    ? array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) / array.length
    : 0;

// My reasoning:
// 1. We use the ternary operator to ask: "Does the array have elements?"
// 2. If it does, we calculate the average.
// 3. If it doesn't, we return 0.
// 4. For the question, we access the length property to compare it to zero.
// 5. The strict inequality (!==) operator checks whether its two operands are not equal, returning a Boolean result.
// 6. For the truthy possibility, we use reduce() to sum all the elements of the array.
// 7. Then, we divide it by the array's length to get the average.

// Kata from https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/javascript
