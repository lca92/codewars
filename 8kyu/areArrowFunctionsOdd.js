// Are arrow functions odd?

// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

// My answer:

const odds = (values) => values.filter((value) => value % 2 == 1);

// My reasoning:
// 1. You just had to complete the arrow function in the filter() method.
// 2. If you use the remainder operator (%), you're basically saying: "If I divide x by 2, what is the remainder?".
// 3. If it is 0, the number is even; if it is 1, the number is odd.
// 4. Now, the "== 1" part is optional, but only in this specific case. That's why I left it in the function.
// 5. But here's the explanation of why it is optional:
// 6. The filter() method expects a truthy or falsy value from the callback function to determine whether to include or exclude the current element in the resulting array.
// 7. Any nonzero number is considered truthy, and 0 is considered falsy. Therefore, value % 2 will evaluate to 0 for even numbers and 1 for odd numbers.
// 8. Since 0 is falsy, even numbers will be excluded, and odd numbers (where value % 2 is 1) will be included in the filtered array.

// Kata from https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/javascript
