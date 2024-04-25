// Century From Year

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

// My answer:

const century = (year) => Math.ceil(year / 100);

// My reasoning:
// 1. Math.ceil() rounds up and returns the smallest integer greater than or equal to a given number.
// 2. If we divide year by a hundred, we'll have the correct century for years ending in "00".
// 3. For every other case, we're left with a decimal number.
// 4. If we round our calculations up, we get the correct century.
// 5. And rounding up doesn't affect an integer.

// Kata from https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/javascript
