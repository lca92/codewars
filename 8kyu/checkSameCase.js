// Check same case

// DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// My answer:

const sameCase = (a, b) => {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
};

// My reasoning:
// 1. If we put the input in upper case and lower case at the same time and the result is equal on both sides, it means the input didn't change at all i.e. it's not a letter.
// 2. For the letters, if we put them both in lower case or upper case and they're equal to their original inputs, they're either upper case letters or lower case letters.
// 3. If they aren't, return 0.

// Kata from https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/javascript
