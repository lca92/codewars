// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// My answer:

const betterThanAverage = (classPoints, yourPoints) =>
  classPoints.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ) /
    classPoints.length <
  yourPoints;

// My reasoning:
// 1. We must check what is the class' average.
// 2. First, we use reduce() to sum all the array's elements.
// 3. Then, we divide it by the array's length.
// 4. Now, we check if this result is less than our grade.
// 5. If it is, the function returns true.
// 6. If not, it returns false.

// Kata from https://www.codewars.com/kata/5601409514fc93442500010b/javascript
