const person = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.sayHello(); // Output: Hello, my name is John

const greet = person.sayHello;
greet(); // Output: Hello, my name is undefined
