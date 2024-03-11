// "this" is a problem

// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }

// var n = new NameMe('John', 'Doe');
// n.firstName //Expected: John
// n.lastName //Expected: Doe
// n.name //Expected: John Doe

// My answer:

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + " " + last;
}

// My reasoning:
// 1. We have to debug the function. We have to change the third line of the function's body.
// 2. In this case, "this" is used to access the object that the function is used on.
// 3. To access the name property, we use "this.name".
// 4. Then, we specify that name is the first name and the last name combined, with a space between.

// Kata from https://www.codewars.com/kata/547c71fdc5b2b38db1000098/javascript
