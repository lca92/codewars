// Enumerable Magic #20 - Cascading Subsets

// DESCRIPTION:
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

// As you can see, the lists are cascading; ie, they overlap, but never out of order.

// My answer:

const eachCons = (array, n) => {
  let answer = [];
  let subset = [];
  for (let i = 0; i + n <= array.length; i++) {
    subset = [];
    for (let j = i; subset.length < n; j++) {
      subset.push(array[j]);
    }
    answer.push(subset);
  }
  return answer;
};

// My reasoning:

// Kata from https://www.codewars.com/kata/545af3d185166a3dec001190/javascript
