// Be Concise III - Sum Squares

// Be Concise III - Sum Squares
// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.

// A few hints:

// Try researching about built-in Array methods; they may help shorten your code a lot
// Good luck!

// My answer:

const sumSquares = (array) => array.reduce((a, b) => a + b ** 2, 0);

// My reasoning:
// 1. reduce() is a great method to sum all the elements of an array.
// 2. The syntax is array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// 3. In reduce(), you start with a value (it can be the first index, or you can define an initialValue)...
// 4. ... and sum it with the next index in the array (currentValue).
// 5. The total is the accumulator, which will be your "initial" value for the next iteration.
// 6. In our sumSquares function, we also need to know the square of each index, so we use currentValue ** 2 on each iteration.
// 7. Now, one of the kata tests wants our code to have 101 characters or less.
// 8. I don't like to use abbreviations, because they're not helpful when we're learning something new, but to pass this test I did.
// 9. Otherwise, I'd write it as const sumSquares = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0);

// Kata from https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7/javascript
