function greet() {
    console.log(`Hello, ${this.name}`);
  }
  
  const person1 = { name: 'John' };
  greet.call(person1); // Output: Hello, John
 
  
  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
  
  const person2 = { name: 'John' };
  greet.apply(person2, ['Hello']); // Output: Hello, John
  
  
  function greet() {
    console.log(`Hello, ${this.name}`);
  }
  
  const person3 = { name: 'John' };
  const greetPerson = greet.bind(person3);
  greetPerson(); // Output: Hello, John
  