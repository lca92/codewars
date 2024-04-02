// Cat years, Dog years

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

// My answer:

const humanYearsCatYearsDogYears = (humanYears) =>
  humanYears == 1
    ? [1, 15, 15]
    : humanYears == 2
    ? [2, 24, 24]
    : [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];

// My reasoning:
// 1. We use the ternary operator to ask if humanYears is equal to 1.
// 2. If it is, we return humanYears and the equivalent ages for the animals (15).
// 3. If it isn't, we ask if humanYears is equal to 2.
// 4. If it is, we return humanYears and the equivalent ages for the animals (24).
// 5. If it isn't, then humanYears is bigger than 2, which means cats and dogs will age differently.
// 6. We add 24 because that is the age for the two first years.
// 7. Since we already considered those years, we can exclude them from the multiplication (humanYears - 2).
// 8. Now we multiply the remaining humanYears by 4 for cats and by 5 for dogs.

// Kata from https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/javascript
