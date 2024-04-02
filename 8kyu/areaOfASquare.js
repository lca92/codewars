// Area of a Square

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// [In the original kata, there's an image here to illustrate the problem. It is a red square with an arc. Each endpoint touches a vertice of the square. In other words, it looks a lot like a sector representing 1/4 of a circle]

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// My answer:

const squareArea = (A) => ((4 * A) / (2 * Math.PI)) ** 2;

// My reasoning:
// 1. It's more of a math problem. The perimeter of a circle can be calculated using the formula C = 2πr.
// 2. C = perimeter; π = approximately 3.14; r = radius.
// 3. We already have the perimeter. It is equal to A*4, as the image represents a quarter of a circle.
// 4. We want to find the value of the radius, which will also be the value of the side of the square.
// 5. So we divide both sides of the equation by 2π to isolate r.
// 6. Now, we have r = C/(2π).
// 7. As C is the same as 4A, whose value we already know, let's substitute.
// 8. We get r = 4A/(2π).
// 9. In JavaScript, the value of π is given by Math.PI. Let's substitute.
// 10. We get r = 4*A/(2*Math.PI).
// 11. Now we have the radius, which is also the side of the square. All we need to do is calculate the area of the square.
// 12. The area of the square is calculated by multiplying the value of its side by itself, i.e., side ** 2.
// 13. Finally, we have: area of the square = ((4 * A) / (2 * Math.PI)) ** 2.

// Kata from https://www.codewars.com/kata/5748838ce2fab90b86001b1a/javascript
