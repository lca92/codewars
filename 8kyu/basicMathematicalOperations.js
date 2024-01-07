// Basic Mathematical Operations

// DESCRIPTION:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// My answer:

const basicOp = (operation, value1, value2) =>
  eval(value1 + operation + value2);

// My reasoning:
// 1. The eval() function evaluates JavaScript code represented as a string and returns its completion value.
// 2. So, if I use it to evaluate value1 + operation + value2, it returns the expected result.

// Kata from https://www.codewars.com/kata/57356c55867b9b7a60000bd7/javascript
