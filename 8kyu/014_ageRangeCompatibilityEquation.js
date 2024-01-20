// Age Range Compatibility Equation

// Task
// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

// ##Examples:

// age = 27   =>   20-40
// age = 5    =>   4-5
// age = 17   =>   15-20

// My answer:

const datingRange = (age) =>
  age <= 14
    ? `${Math.floor(age - 0.1 * age)}-${Math.floor(age + 0.1 * age)}`
    : `${Math.floor(age / 2) + 7}-${Math.floor(age - 7) * 2}`;

// My reasoning:
// 1. With a ternary operator, we ask ourselves: "Is age less than or equal to 14?".
// 2. If it is, the minimum age will be age - 0.1 * age rounded down to the nearest integer with Math.floor()...
// 3. ... and the maximum age will be age + 0.1 * age rounded down to the nearest integer with Math.floor().
// 4. If it isn't, the minimum age will be age / 2 rounded down to the nearest integer with Math.floor() + 7...
// 5. ... and the maximum age will be age - 7 rounded down to the nearest integer with Math.floor() * 2.

// Kata from https://www.codewars.com/kata/5803956ddb07c5c74200144e/javascript
