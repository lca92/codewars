// Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// My answer:

const past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000;

// My reasoning:
// 1. One hour has 3600000 milliseconds, so we multiply h by 3600000.
// 2. One minute has 60000 milliseconds, so we multiply m by 60000.
// 3. One second has 1000 milliseconds, so we multiply s by 1000.
// 4. Now, we sum them all.

// Kata from https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/javascript
