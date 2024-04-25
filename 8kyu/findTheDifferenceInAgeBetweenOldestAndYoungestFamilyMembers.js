// Find the Difference in Age between Oldest and Youngest Family Members

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// My answer:

const differenceInAges = (ages) => {
  let youngest = Math.min(...ages);
  let oldest = Math.max(...ages);
  return [youngest, oldest, oldest - youngest];
};

// My reasoning:
// 1. The Math.min() static method returns the smallest of the numbers given as input parameters.
// 2. The Math.max() static method returns the largest of the numbers given as input parameters.
// 3. The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
// 4. We return the youngest, the oldest and the difference in years between them.

// Kata from https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/javascript
