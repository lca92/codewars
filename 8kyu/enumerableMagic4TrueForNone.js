// Enumerable Magic #4 - True for None?

// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

// My answer:

const none = (arr, fun) => (!arr.some(fun) ? true : false);

// My reasoning:
// 1. The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function.
// 2. Logically, "some" is the opposite of "none".
// 3. In JavaScript, the opposite of something is represented with "!" in front of it.
// 4. With the ternary operator, we ask ourselves: "Does none of the elements in the array pass the function?".
// 5. If they don't, we return true.
// 6. If they do, we return false.

// Kata from https://www.codewars.com/kata/54598e89cbae2ac001001135/javascript
