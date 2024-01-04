// Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// My answer:

const countSheeps = (arrayOfSheeps) => arrayOfSheeps.filter(Boolean).length;

// My reasoning:
// 1. Let's use filter() to leave out the missing sheep. If we use Boolean object as a parameter, it will only count the true values.
// 2. filter() will return a shallow copy of the array with only the filtered values. If we use the length property, we can count how many sheep there are in this array.
// 3. Bad values are already checked out when we use Boolean, because null and undefined turns into false.

// Kata from https://www.codewars.com/kata/54edbc7200b811e956000556/javascript
// 2024.01.03
