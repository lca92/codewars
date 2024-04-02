// Add new item (collections are passed by reference)

// Add an item to the list:

// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.

// P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)

// My answer:

const addExtra = (listOfNumbers) => listOfNumbers.concat(4);

// My reasoning:
// 1. You can't modify the existing array. You must return a new one.
// 2. concat() is great, because it "joins" arrays together, in order, without modifying the original one. It returns a new one.
// 3. I chose the number 4 as my object, but it can be any object.

// Kata from https://www.codewars.com/kata/566dc05f855b36a031000048/javascript
