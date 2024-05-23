// Get the mean of an array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// My answer:

const getAverage = (marks) =>
  Math.floor(
    marks.reduce((accumulator, currentValue) => accumulator + currentValue) /
      marks.length
  );

// My reasoning:
// 1. We use Math.floor() to round down our result.
// 2. reduce() executes a callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
// 3. The length property gives us how many elements there are in the array.
// 4. To calculate the mean, we must sum all the elements and then divide it by how many elements we have.

// Kata from https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript
