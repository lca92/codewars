// Array plus array

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// My answer:

function arrayPlusArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}

// My reasoning:
// 1. Let's use concat(). The concat() method of Array concatenates the values of one array into another, creating a new array.
// 2. Now that we have only one array, let's iterate through its indexes and sum them. For that, I use reduce().
// 3. It receives an accumulator (the value resulting from the previous call or, in this case, the current total sum)...
// 4. ... and a currentValue (the value of the current element or, in this case, the next number to enter our sum).
// 5. Then it returns the total sum of the array.

// Kata from https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/javascript
// 2024.01.02
