// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// My answer:

const abbrevName = (name) =>
  name
    .toUpperCase()
    .split(" ")
    .map((word) => word.charAt(0))
    .join(".");

// My reasoning:
// 1. We use split(" ") with a space to separate the string by the space between name and surname and save it to an array.
// 2. We iterate through this array with map().
// 3. For each word, we take the first character with charAt(0) and save them in a new array.
// 4. Now we turn the array of initials into a string, with a dot between them, by using join(".").

// Kata from https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/javascript
