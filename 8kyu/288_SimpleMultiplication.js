// Simple multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My answer:

const simpleMultiplication = (number) =>
  number % 2 === 0 ? number * 8 : number * 9;

// My reasoning:
// 1. If number is divisible by 2, it is an even number.
// 2. If a number is even, the remainder (%) of 2 is 0.
// 3. We use a ternary operator to ask: "Is number even?".
// 4. If it is, we multiply it by 8.
// 5. If it isn't, we multiply it by 9.

// Kata from https://www.codewars.com/kata/583710ccaa6717322c000105/javascript
