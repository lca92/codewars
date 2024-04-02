// 8kyu interpreters: HQ9+

// DESCRIPTION:
// You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

// If the input is 'H', return 'Hello World!'
// If the input is 'Q', return the input
// If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// For everything else, don't return anything (return null in C#, None in Rust, and "" in Haskell).
// (+ has no visible effects so we can safely ignore it.)

// My answer:

const HQ9 = (code) => {
  let song = [];

  for (let i = 99; i >= 0; i--) {
    i == 2
      ? song.push(
          `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${
            i - 1
          } bottle of beer on the wall.\n`
        )
      : i == 1
      ? song.push(
          `${i} bottle of beer on the wall, ${i} bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
        )
      : i == 0
      ? song.push(
          `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
        )
      : song.push(
          `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${
            i - 1
          } bottles of beer on the wall.\n`
        );
  }

  switch (code) {
    case "H":
      return "Hello World!";
    case "Q":
      return "Q";
    case "9":
      return song.join("");
  }
};

// My reasoning:
// 1. It's not ideal, but let's create a function that does two things: 1) it sings 99 bottles of beer and 2) it evaluates the code input.
// 2. For the song:
// 3. Let's create an empty array song to keep our verses.
// 4. With a for loop, we count down from 99.
// 5. For every number, we push the correspondent verse to the song array.
// 6. The verses are fairly the same until we reach 2 bottles of beer. Then we have to adjust one thing or another.
// 7. Note that, to print each verse on a different line, we must separate them with "\n".
// 8. Now, for the main challenge:
// 9. If code is "H", we return "Hello World!".
// 10. If code is "Q", we return "Q".
// 11. If code is "9", we return our song array...
// 12. ... but we use join("") to turn it into a string (without the commas that separate elements in an array).
// 13. All other cases will already return undefined by default.

// Kata from https://www.codewars.com/kata/591588d49f4056e13f000001/javascript
