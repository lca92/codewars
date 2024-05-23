// Get Nth Even Number

// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

// My answer:

const nthEven = (n) => n * 2 - 2;

// My reasoning:
// 1. We multiply n by 2 because even numbers are multiples of 2.
// 2. Since we start counting at 0, we must subtract 2 from the total.

// Kata from https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/javascript
