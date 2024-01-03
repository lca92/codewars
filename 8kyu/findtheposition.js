// Find the position!

// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// My answer:

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

// My reasoning:
// 1. I assumed we wouldn't need to check for lower and upper case.
// 2. First, a beautiful string with the alphabet.
// 3. Then, I check the index of the letter in the alphabet string.
// 4. I make sure to add 1, because the index starts at 0.
// 5. I return the position of said letter in the alphabet.

// Kata from https://www.codewars.com/kata/5808e2006b65bff35500008f/javascript
