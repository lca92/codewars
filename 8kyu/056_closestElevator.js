// Closest elevator

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

// My answer:

const elevator = (left, right, call) =>
  Math.abs(call - left) < Math.abs(call - right) ? `left` : `right`;

// My reasoning:
// 1. The distance between the floor that called the elevator and the elevator will be the former minus the latter.
// 2. We use Math.abs() to get the absolute value after the subtraction because it doesn't matter if the elevator is going up or down: the distance is the same in each direction.
// 3. We ask: "Is the distance to the left elevator shorter than the right?".
// 4. If it is, it means the left elevator is closer.
// 5. If it isn't, it means that the right elevator is closer or that one is as far as the other.
// 6. In either case, we must return "right".

// Kata from https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
