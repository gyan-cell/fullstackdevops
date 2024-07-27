// The Basic Syntax Of Javascript is 
function myName() {
  console.log("Gyan");
  return "Gyan";//After This Line Function Will not  Return Anything ........ 
}
// We Need To Call The Person To make Sure Function is Executed ......
myName();

// Another Example 
function add(a, b) {
  return a + b;
}
console.log(add(5, 4));
// Or 

let add1 = function(a, b) {
  return a + b;
}
console.log(add(5, 4));
// This is The Basic Syntax Of Javascript Arrow Function

let add2 = (a, b) => {
  return a + b;
}
console.log(add(5, 4));
// Nested Function

let msg = (firstName) => {
  let hey = () => {
    console.log("Hey " + firstName);
  }
  return hey();
}
msg("Ravi");

let messager = (firstNamer) => {
  let monkeyCaller = () => {
    console.log("Hey " + firstNamer);
  }
  return monkeyCaller();
}
messager("Orangatun.")


// Immediately Invoked Function Expressions : An IIFE is a JavaScript function that runs as soon as it is defined.
// The browser executes the invoked function expression as soon as it detects it.

const iife = (() => {
  console.log("I am an IIFE In Format of () => {} which happens to be format of The Arrow Function.");
})()
// We can Also do 
const iife1 = (function() {
  console.log("I am an IIFE In Format of Standard Function.");
})()
// This Will Return Undefined
console.log(iife1);
console.log(iife)
