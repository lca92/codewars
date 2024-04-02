// Add Length

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// My answer:

const addLength = (str) =>
  str.split(" ").map((word) => `${word} ${word.length}`);

// My reasoning:
// 1. We use split(" ") to push to a new array all the words in str i.e. all the elements divided by space.
// 2. Then we map() the array.
// 3. For each word, we push it and its length into another array, with a space between.

// Kata from https://www.codewars.com/kata/559d2284b5bb6799e9000047/javascript
