// Find Multiples of a Number

// DESCRIPTION:
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// My answer:

const findMultiples = (integer, limit) => {
  let multiples = [];
  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }
  return multiples;
};

// My reasoning:
// 1. We declare an empty array called multiples to store the results from our for loop later.
// 2. The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.
// 3. The syntax goes like this: for (initialization; condition; afterthought) {statement}
// 4. Initialization: we define an initial value for i (short for index).
// 5. Here, it is our integer, since it will be the first element of the array.
// 6. Condition: Before every iteration, this condition will be checked. If it's true, we proceed; if it isn't, we stop our loop.
// 7. Here, our condition is "if i is less than or equal to the limit".
// 8. Afterthought: At the end of the loop, this expression will be evaluated.
// 9. Here, what we're saying is: "For this iteration, i is equal to its current value plus the integer".
// 10. Note that if i starts at the integer and with every iteration we add the integer to its total, the result of this after every iteration will be the next multiple of the integer.
// 11. All we have to do now it to register this value somehow.
// 12. For this, we use push() to add the current value of i to the end of the multiples array.
// 13. And we return the multiples array.

// Kata from https://www.codewars.com/kata/58ca658cc0d6401f2700045f/javascript
