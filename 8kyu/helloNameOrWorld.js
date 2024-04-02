// Hello, Name or World!

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"

// My answer:

const hello = (name) =>
  name
    ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    : `Hello, World!`;

// My reasoning:
// 1. We use a ternary operator to check if name is true i.e. it was given and it's not an empty string.
// 2. If true,
// 3. We use template strings to optimize our code;
// 4. Then, in the placeholder (${}), we concatenate pieces of our string name with the plus sign;
// 5. The first piece is name[0].toUpperCase(). It takes the first letter of the string (index 0) and forcibly transforms it to upper case;
// 6. The second piece is name.slice(1).toLowerCase(). It takes all the string indices (characters) after the first and forcibly transforms them into lowercase.
// 7. If false, we return "Hello, World!".

// Kata from https://www.codewars.com/kata/57e3f79c9cb119374600046b/javascript
