// Find the Difference in Age between Oldest and Youngest Family Members

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// My answer:

const differenceInAges = (ages) => {
  let youngest = ages.sort((a, b) => a - b)[0];
  let oldest = ages.sort((a, b) => a - b).reverse()[0];
  return [youngest, oldest, oldest - youngest];
};

// My reasoning:
// 1. Let's define the youngest person's age. sort() will organize the integers in ascending order, but it does this based on Unicode characters.
// 2. 

// Kata from https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/javascript
// 2024.01.03
