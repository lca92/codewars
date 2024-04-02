// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// My answer:

const areYouPlayingBanjo = (name) =>
  name[0].toUpperCase() === "R"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

// My reasoning:
// 1. We use the ternary operator to ask ourselves: "Does the name start with R?".
// 2. name[0] access the first index of the string, which is also the first letter of the name.
// 3. We use toUpperCase() to put that letter in uppercase.
// 4. Humans look at "R" and "r" and think they are fairly the same thing, but computers see them as totally different.
// 5. When we use toUpperCase(), we guarantee that we get the same results even if the name comes in lowercase.
// 4. To answer the question, if the name starts with R, the person plays banjo.
// 5. Else, they do not.

// Kata from https://www.codewars.com/kata/53af2b8861023f1d88000832/javascript
