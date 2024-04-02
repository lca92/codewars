// Area or Perimeter

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// My answer:

const areaOrPerimeter = (l, w) => (l == w ? l * w : 2 * (l + w));

// My reasoning:
// 1. We ask ourselves: "Is the length equal to the width?".
// 2. If it is, we have a square and must return its area (l*w).
// 3. If it isn't, we have another type of rectangle and must return its perimeter (the sum of all its sides, or twice its length plus twice its width).

// Kata from https://www.codewars.com/kata/5ab6538b379d20ad880000ab/javascript
