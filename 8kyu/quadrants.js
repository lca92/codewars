// Quadrants

// DESCRIPTION:
// Task
// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

// Reference:

// There are four quadrants:

// First quadrant, the quadrant in the top-right, contains all points with positive X and Y
// Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
// Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
// Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y

// My answer:

const quadrant = (x, y) => (x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3);

// My reasoning:
// 1. Ternary operators can have chained conditions, similar to if ... else if ... else chains.
// 2. Firstly, I ask myself: "Is x positive?". If it is, the quadrant is either 1 or 4.
// 3. Now, "Is y also positive?" If it is, the answer is the first quadrant; if not, the fourth.
// 4. But, if x is not positive, the quadrants will be either the second or the third.
// 5. I ask again: "Is y positive"? If it is, the answer is the second quadrant; if not, the third.

// Kata from https://www.codewars.com/kata/643af0fa9fa6c406b47c5399/javascript
