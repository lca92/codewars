// Enumerable Magic #25 - Take the First N Elements

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// My answer:

const take = (arr, n) => arr.slice(0, n);

// My reasoning:
// 1. With the slice() method, we specify both starting and ending indices from the part of an array we wish to select.

// Kata from https://www.codewars.com/kata/545afd0761aa4c3055001386/javascript
