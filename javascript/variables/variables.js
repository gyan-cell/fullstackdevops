// Declaring a Variable..
// var, let, const These are the Three keywords which are used to declare variables in javascript.

let myName;
console.log(myName);
// Here the Values of ,myName of undefined because we have not assigned any value to it.
// Now We will assign a value to it.
// Once you've declared a variable, you can initialize it with a value.
// You do this by typing the variable name, followed by an equals sign (=),
// followed by the value you want to give it.
myName = "Gyan";
console.log(myName);

var age;
const pi = 3.14;

let a = 10
if (true) {
  let a = 9
  console.log(a) // It prints 9
}
console.log(a) // It prints 10
//
//
const a1 = {
  prop1: 10,
  prop2: 9
}

console.log(a1)
// It is allowed
a1.prop1 = 3

console.log(a1)
// It is not allowed
// a1 = {
//   b: 10,
//   prop2: 9
// }
//
