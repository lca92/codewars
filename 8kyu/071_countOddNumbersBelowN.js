// Count Odd Numbers below n

// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// My answer:

const oddCount = (n) => Math.floor(n / 2);

// My reasoning:
// 1. If we do something like iterate through a bunch of numbers to check if they are even and then count them, we could run out of time, since we may expect large inputs.
// 2. What we can do instead is divide n by two.
// 3. Any integer divided by two is either an integer or an integer plus 0.5.
// 4. Since we only have to count the odd numbers below n and not n itself, we use Math.floor(), which rounds down and returns the largest integer less than or equal to a given number.
// 5. In other words, it takes out that extra 0.5.

// Kata from https://www.codewars.com/kata/59342039eb450e39970000a6/javascript
