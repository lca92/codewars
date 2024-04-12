// Do I get a bonus?

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

// My answer:

const bonusTime = (salary, bonus) => (bonus ? `£${10 * salary}` : `£${salary}`);

// My reasoning:
// 1. We use the ternary operator to ask ourselves: "Is bonus true?".
// 2. If it is, we return ten times the salary with a pound sign in front.
// 3. It it isn't, we return the salary with a pound sign in front.

// Kata from https://www.codewars.com/kata/56f6ad906b88de513f000d96/javascript
