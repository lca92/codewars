// Count the Monkeys!

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

// My answer:

const monkeyCount = (n) => {
  let counting = [];

  for (let i = 1; i <= n; i++) {
    counting.push(i);
  }

  return counting;
};

// My reasoning:
// 1. If you are given an integer as an input, you can iterate through the numbers before and/or after it with a for loop.
// 2. First, we create an empty array which will contain our numbers as elements.
// 3. Then, we create a for loop.
// 4. We use the letter i as a convention for index, but it could be any word that made sense to you.
// 5. let i = 1: i starts at 1 because we start counting the monkeys at 1.
// 6. i <= n: while i is less than or equal to the number of monkeys (n).
// 7. i++: we add one to the value of i.
// 8. For every iteration, we will push the current value of i to the counting array.
// 9. We return the counting array.

// Kata from https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/javascript
