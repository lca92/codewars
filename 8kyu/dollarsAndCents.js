// Dollars and Cents

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

// My answer:

const formatMoney = (amount) => `$${amount.toFixed(2)}`;

// My reasoning:
// 1. We have to guarantee amount has two decimal places, so we use toFixed(2).
// 2. The first dollar sign is our "true" dollar sign.
// 3. The second one is just part of template literals syntax.

// Kata from https://www.codewars.com/kata/55902c5eaa8069a5b4000083/javascript
