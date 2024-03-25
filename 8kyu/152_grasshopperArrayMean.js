// Grasshopper - Array Mean

// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

// My answer:

const findAverage = (nums) =>
  nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
  nums.length;

// My reasoning:
// 1. The kata's creator already told us how to find the mean for a specific set of numbers, but how can we generalize their reasoning?
// 2. The reduce() method can sum all the numbers in an array, no matter its length.
// 3. Then, to know the number of elements (numbers) in the array, we use the length property.
// 4. We divide one by the other.

// Kata from https://www.codewars.com/kata/55d277882e139d0b6000005d/javascript
