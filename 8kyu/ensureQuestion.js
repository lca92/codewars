// Ensure question

// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?"
// "No?" --> "No?"

// My answer:

const ensureQuestion = (s) => (s.endsWith("?") ? s : s.concat("?"));

// My reasoning:
// 1. The endsWith() method checks if a string ends with the characters we provide.
// 2. The concat() method adds the characters we provide to the end of a string.
// 3. We start by using the ternary operator to ask ourselves: "Does the string end with a question mark?".
// 4. If it does, we return the unaltered string.
// 5. If it doesn't, we add a question mark to the end of the string and then return it.

// Kata from https://www.codewars.com/kata/5866fc43395d9138a7000006/javascript
