// !a == a ?!

// DESCRIPTION:
// You task to pass only this tests :

// a == false
// !a == false
// a == !a

// My answer:

const a = [];

// My reasoning:
// 1. Terribly described kata. Doesn't teach you anything. You either already know the answer or you won't solve it.
// 2. Anyways. It's about truthy and falsy values and the difference between abstract equality (==) and strict equality (===).
// 3. a == false: In JavaScript, when you use the abstract equality operator (==), it performs type coercion. An empty array [] is truthy, so a == false will be false.
// 4. !a == false: The logical NOT (!) operator negates the truthiness of a value. Since an empty array is truthy, !a will be false, and false == false is true.
// a == !a: Here, you're comparing the empty array a to its negation !a. !a is false, so this expression is equivalent to a == false, which is false.

// Kata from https://www.codewars.com/kata/59f9796cffe75f9299000025/javascript
