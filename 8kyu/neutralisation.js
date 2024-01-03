// DESCRIPTION:
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.

// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

// Examples
// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"

// My answer:

function neutralise(s1, s2) {
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    result += s1[i] == s2[i] ? s1[i] : "0";
  }
  return result;
}

// My reasoning:
// 1. Both s1 and s2 have the same length, so I don't need to check that.
// 2. result starts as an empty string.
// 3. I do a for loop to iterate through the indexes. Since it doesn't really matter what the character is on each given string, only if they're equal or not, this one loop is enough.
// 4. Now let's check the indexes. If they're equal, result will be result plus the index; if not, it's result plus 0.
// 5. Return result.

// Kata from https://www.codewars.com/kata/65128732b5aff40032a3d8f0/javascript
