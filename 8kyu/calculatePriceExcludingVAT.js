// Calculate Price Excluding VAT

// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

// My answer:

const excludingVatPrice = (price) =>
  price === null ? -1 : parseFloat((price / 1.15).toFixed(2));

// My reasoning:
// 1. To calculate the original price, we can divide the total price by 1.15 i.e. 115%.
// 2. The toFixed() method returns a string with the number rounded to two decimal places.
// 3. Since we now have a string, we must use parseFloat() to change it back to a number (with decimal places).
// 4. Finally, we use the ternary operator to ask ourselves: "Is the price null?".
// 5. If it is, we return -1.
// 6. If it isn't, we return our calculation.

// Kata from https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/javascript
