// Enumerable Magic #2 - True for Any?

// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

// Ruby: If you get stuck, you can read up here:

// http://www.rubycuts.com/enum-any

// My answer:

const any = (arr, fun) => (arr.some(fun) ? true : false);

// My reasoning:
// 1. The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function.
// 2. With the ternary operator, we ask ourselves: "Does at least one element in the array pass the function?".
// 3. If it does, we return true.
// 4. If it doesn't, we return false.

// Kata from https://www.codewars.com/kata/54598e89cbae2ac001001135/javascript
