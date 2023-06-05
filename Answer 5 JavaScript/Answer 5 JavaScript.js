function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = (a) => (b) => (c) => a + b + c;
const add5 = curriedAdd(5);
const add5and6 = add5(6);

console.log(add(2, 3, 4));       // Output: 9
console.log(add5(6)(7));         // Output: 18
console.log(add5and6(8));        // Output: 19

