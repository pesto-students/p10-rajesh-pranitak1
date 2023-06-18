// Using call
function greet() {
  console.log(`Hello ${this.name}, nice to meet you!`);
}

const employee = {
  name: 'Pranita',
};

// Using bind
const person = {
  name: 'Pranita',
  greet: function() {
    console.log(`Hello ${this.name}, nice to meet you!`);
  }
};

const greetPerson = person.greet.bind(person);

greetPerson();

// Using apply
function sum(a, b, c) {
  console.log(`The sum of ${a}, ${b}, and ${c} is ${a + b + c}`);
}

const numbers = [1, 2, 3];

sum.apply(null, numbers);
  