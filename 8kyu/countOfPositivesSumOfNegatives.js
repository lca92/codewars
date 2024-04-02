// Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My answer:

const countPositivesSumNegatives = (input) => {
  if (!input || input.length === 0) return [];

  const result = [0, 0];

  input.forEach((integer) =>
    integer > 0 ? result[0]++ : (result[1] += integer)
  );

  return result;
};

// My reasoning:
// 1. For the if: the opposite of an existing object is null; if the length of an array is 0, it's an empty array.
// 2. Now, I start with an array result with two values, both equal to 0.
// 3. I iterate through the indexes of input with forEach().
// 4. If a given integer is bigger than 0, I add 1 to result's index 0. It serves as a counter.
// 5. If a given integer is less or equal to 0, I sum it to the current value at result's index 1. Since adding 0 makes no difference, I don't have to check if the integer is 0 or negative.
// 6. Return the result.

// Kata from https://www.codewars.com/kata/576bb71bbbcf0951d5000044/javascript
