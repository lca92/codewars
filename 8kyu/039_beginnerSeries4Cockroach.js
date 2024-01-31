// Beginner Series #4 Cockroach

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// My answer:

const cockroachSpeed = (s) => Math.floor(s / 0.036);

// My reasoning:
// 1. 1 kilometer has 100000 centimeters.
// 2. 1 hour has 3600 seconds.
// 3. 1 km/h is equal to 100000/3600 cm/s, or 0.036 cm/s.
// 4. All we have to do is divide s by 0.036.
// 5. And use Math.floor() to round the number down to the nearest integer.

// Kata from https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/javascript
