// Classes old fashioned way
// class Human {
//   constructor() {
//     this.gender = 'male';
//   }

//   printGender() {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//   constructor() {
//     super(); // You need super() method added when you have ‘constructor’
//     this.name = 'Kuba';
//     // this.gender = 'female';
//   }

//   printMyName() {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

// Classes new generation
class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = 'Kuba';
  gender = 'female';

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();

// Spread & Rest Operators

// ... - Yes, that is the operator - just three dots. It's usage
// determines whether you're using it as the spread or rest
// operator.
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person1 = {
  name: 'Kuba',
};

const newPerson1 = {
  ...person1,
  age: 28,
};

console.log(newPerson1);

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));
// === checks types and value

// Destructuring
// Destructuring allows you to easily access the values of
// arrays or objects and assign them to variables.

const numbers1 = [1, 2, 3];
[num1, , num2] = numbers1;

console.log(num1, num2);

// Reference and Primitive types
const number3 = 7; // Primitive type
const num3 = number3;

console.log(num3);

// Objects and arrays are reference types
const person2 = {
  name: 'Kuba',
};
// const person2 = ['Kuba']; // Array works same
const secondPerson = { ...person2 };

person2.name = 'Manu';

console.log(secondPerson);

// Refreshing array functions
const numbers4 = [1, 2, 3];

const doubleNumArray = numbers4.map((num) => {
  return num * 2;
});

console.log(numbers4);
console.log(doubleNumArray);
