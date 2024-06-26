// Difference of Volumes of Cuboids

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

// My answer:

const findDifference = (a, b) =>
  Math.abs(
    a.reduce((accumulator, currentValue) => accumulator * currentValue) -
      b.reduce((accumulator, currentValue) => accumulator * currentValue)
  );

// My reasoning:
// 1. The reduce() method executes a callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
// 2. Math.abs returns the absolute value of a number.

// Kata from https://www.codewars.com/kata/58cb43f4256836ed95000f97/javascript
