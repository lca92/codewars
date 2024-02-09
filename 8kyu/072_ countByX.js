// Count by X

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// My answer:

const countBy = (x, n) => {
  let multiplesOfX = [];

  for (i = 1; i <= n; i++) {
    multiplesOfX.push(i * x);
  }

  return multiplesOfX;
};

// My reasoning:
// 1. We declare a variable multiplesOfX with an empty array that will later store the multiples of x.
// 2. We create a for loop to iterate through the number n and its predecessors.
// 3. i = 1: we start at 1 because we're not considering zero as a multiple.
// 4. i <= n: while i is lesser than or equal to n...
// 5. ... i++: the current number is equal to the number before plus one.
// 6. We multiply the current number by x, which will give us a multiple of x.
// 7. And we store the result in the multiplesOfX array.
// 8. We return multiplesOfX.

// Kata from https://www.codewars.com/kata/5513795bd3fafb56c200049e
