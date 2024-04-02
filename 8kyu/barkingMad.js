// Barking mad

// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.

// My answer:

class Dog {
  constructor(breed) {
    this.breed = breed;
  }

  bark() {
    return "Woof";
  }
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");

// My reasoning:

// Kata from https://www.codewars.com/kata/54dba07f03e88a4cec000caf/javascript
