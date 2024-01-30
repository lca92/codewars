// Be Concise IV - Index of an element in an array

// Be Concise IV - Index of an element in an array
// Task
// Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.

// My answer:

const find = (array, element) =>
  array.includes(element) ? array.indexOf(element) : `Not found`;

// My reasoning:
// 1. We use the ternary operator to ask: "Does the element appear in the array?".
// 2. If so, we return its index.
// 3. If not, we return `Not found`.
// 4. includes() determines whether an array includes a certain value among its entries.
// 5. indexOf() returns the first index at which a given element can be found in the array.

// Kata from https://www.codewars.com/kata/5703c093022cd1aae90012c9/javascript
