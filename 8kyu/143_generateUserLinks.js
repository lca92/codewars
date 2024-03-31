// Generate user links

// Generate user links
// Your task is to create userlinks for the url, you will be given a username and must return a valid link.

// Example
// generate_link('matt c')
// http://www.codewars.com/users/matt%20c
// reference
// use this as a reference encoding [https://www.w3schools.com/tags/ref_urlencode.asp]

// My answer:

const generateLink = (user) =>
  `http://www.codewars.com/users/${encodeURIComponent(user)}`;

// My reasoning:
// 1. An URI is a string that refers to a resource. Its most common use is in URLs.
// 2. When writing URI, special characters must be converted to a valid ASCII format.
// 3. The documentation provided in the description has a table for ASCII encoding reference.
// 4. But the encodeURIComponent() native JavaScript function does that conversion for us.
// 5. Now, all we have to do is use template literals to create our URL, embedding encodeURIComponent(user) at the end.

// Kata from https://www.codewars.com/kata/57037ed25a7263ac35000c80/javascript
