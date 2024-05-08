// Draw stairs

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

// My answer:

const drawStairs = (n) => {
  if (n === 0) return "I";

  let step = "";

  for (let i = 1; i < n; i++) {
    step += "I\n" + " ".repeat(i);
  }

  let stairs = step + "I";

  return stairs;
};

// My reasoning:

// Kata from https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/javascript
