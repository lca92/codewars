// Formatting decimal places #0

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34

// My answer:

const twoDecimalPlaces = (n) => Number(n.toFixed(2));

// My reasoning:
// 1. The toFixed() method rounds a number to a specified number of decimals and then converts it to a string.
// 2. Since we want the answer to be a number, we convert it back using Number().

// Kata from https://www.codewars.com/kata/5641a03210e973055a00000d/javascript
