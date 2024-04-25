// Be Concise II - I Need Squares

// Be Concise II - I Need Squares
// You are given a program squaresOnly that accepts an array of natural numbers up to and including 100 (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

// Refactor the solution to use as few characters as possible. There is a maximum character limit of 127. Here are a few hints:

// There are a lot of handy built-in Array methods in Javascript that you may have never heard of even after completing a basic course in Javascript (e.g. those provided by Codecademy) - well, at least I haven't heard of until quite recently. You may also want to research any new built-in methods offered by ES6, the newest specification of Javascript at the time of writing.
// Don't you think the array parameter is a bit wordy? ;)

// My answer:

const squaresOnly = (array) =>
  array.filter((num) => Number.isInteger(Math.sqrt(num)));

// My reasoning:
// 1. filter() iterates through an array and return only the elements that pass the test we provide.
// 2. Number.isInteger checks if a number is an integer.
// 3. Math.sqrt() returns the square root of a number.
// 4. In the description, there is a minor mistake. It says the input is an array of natural numbers, when in fact it's an array of whole numbers, because it may include zero.
// 5. If the square root of a number from this list is an integer, it means it is also the base of an exponentiation.

// Kata from https://www.codewars.com/kata/56f4f7cfaf5b1f8cd100060e/javascript
