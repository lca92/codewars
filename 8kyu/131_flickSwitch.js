// Flick Switch

// DESCRIPTION:
// Task
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

// My answer:

const flickSwitch = (arr) => {
  let flicker = true;
  return arr.map((item) => (item == "flick" ? (flicker = !flicker) : flicker));
};

// My reasoning:
// 1. First, we define a flicker variable to check the items in the array against.
// 2. Then, we iterate through the array with map(), ...
// 3. ... where for each item we'll ask: is the item 'flick'?
// 4. If it is, flicker switches values.
// 5. If it isn't, flicker remains with the previous value.

// Kata from https://www.codewars.com/kata/64fbfe2618692c2018ebbddb
