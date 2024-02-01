// Capitalization and Mutability

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// Examples:

// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"

// My answer:

const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

// My reasoning:
// 1. The function has two problems: a) it returns the input unaltered and b) the function's body does capitalize the first letter of the word but returns only that very letter.
// 2. To include the rest of the word, we use slice to extract a section of the string without the index 0 i.e. the first letter.
// 3. We return this, not the input.

// Kata from https://www.codewars.com/kata/595970246c9b8fa0a8000086/javascript
