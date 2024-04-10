// Enumerable Magic - Does My List Include This?

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// My answer:

const include = (arr, item) => (arr.includes(item) ? true : false);

// My reasoning:
// 1. The includes() method of Array instances determines whether an array includes a certain value among its entries.
// 2. With the ternary operator, we ask ourselves: "Does the array contain this item?".
// 3. If it does, we return true.
// 4. If it doesn't, we return false.

// Kata from https://www.codewars.com/kata/545991b4cbae2a5fda000158/javascript
