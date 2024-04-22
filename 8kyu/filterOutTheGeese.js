// Filter out the geese

// DESCRIPTION:
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// My answer:

const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

const gooseFilter = (birds) => birds.filter((bird) => !geese.includes(bird));

// My reasoning:
// 1. The filter() method iterates through an array and takes out everything that doesn't comply with the condition we pass.
// 2. The includes() method checks if an array has a certain value among its entries.
// 3. The not operator (!) takes truth to falsity and vice versa.
// 4. In this case, for each bird of the array of birds...
// 5. ... we check if this bird is not included in the array geese.

// Kata from https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
