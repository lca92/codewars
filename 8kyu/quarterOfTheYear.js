// Quarter of the year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

// My answer:

const quarterOf = (month) => Math.ceil(month / 3);

// My reasoning:
// 1. If we section the year into quarters, there are 3 quarters. Jan - Apr are the 1st, May - Aug are the 2nd, and Sep - Dec are the 3rd.
// 2. Therefore, if we take, for instance, the 9th month, of September, and divide 9 by 3, we see it lands in the 3rd quarter.
// 3. But month => month/3 doesn't work, because the input, although is said to be an integer, may be a rational number. So we have to use Math.ceil() to round up the input number.

// Kata from https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/javascript
