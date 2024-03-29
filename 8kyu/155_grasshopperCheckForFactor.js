// Grasshopper - Check for factor

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

// My answer:

const checkForFactor = (base, factor) => (base % factor === 0 ? true : false);

// My reasoning:
// 1. Since multiplication is the opposite of division, to check if the given number is really a factor for the base, we can divide the latter by the former.
// 2. For that, we can use the remainder operator (%) to check if the remainder of this division is zero.
// 3. If it it, we return true.
// 4. If it isn't, we return false.

// Kata from https://www.codewars.com/kata/55cbc3586671f6aa070000fb
