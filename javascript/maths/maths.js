const newNumberObject = new Number(21);
const newVariable = 20;
console.log(newNumberObject.toExponential(2)); //2.10e+1
console.log(newNumberObject.toFixed(2));// 21.00
console.log(newNumberObject.toPrecision(2)); // 21
console.log(newNumberObject.toString())// 21
console.log(newNumberObject.valueOf())// 21
console.log(newVariable.toPrecision(6))


// Mathematical Operators :--------------

const sum = 8 + 8 // Adds Two Numbers.
const product = 8 * 8 //multiplies Two Numbers 
const difference = 8 - 8 //subtracts Two Numbers
const quotient = 8 / 8 //divides Two Numbers and returns a quotient
const remainder = 8 % 8 //returns the remainder
const power = 2 ** 8 //returns the power of base 2 and exponent 8
console.log(sum, product, difference, quotient, remainder, power)

let count = 1;
console.log(count);
count++; // Adds The Number By one 
++count
console.log(count);
count--
console.log(count);

// Assignment Operators in javascript :
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4

let a = 3; // x contains the value 3
let b = 4; // y contains the value 4
a *= b; // x now contains the value 12 it equates x  = x * y

// Comparison Operators 

// Strict Equality Operator
console.log(3 == 3); // true
console.log(3 == '3'); // true
console.log(3 === 3); // true
console.log(3 === '3'); // false

//Strict Inequality Operator
console.log(3 != 3); // false
console.log(3 != '3'); // false
console.log(3 !== 3); // false
console.log(3 !== '3'); // true

//Less Than Operator
console.log(3 < 3); // false
console.log(3 < '3'); // false
console.log(3 <= 3); // true
console.log(3 <= '3'); // true

//Greater Than Operator
console.log(3 > 3); // false
console.log(3 > '3'); // false
console.log(3 >= 3); // true
console.log(3 >= '3'); // true

