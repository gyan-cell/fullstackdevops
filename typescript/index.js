"use strict";
// TypeScript Provides Type  Safety To The  javascrit programs 
//TypeScript stands in an unusual relationship to JavaScript.
//TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.
//For example, JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these.
//TypeScript does.
//This means that your existing working JavaScript code is also TypeScript code.
//The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.
//For example, JavaScript provides language primitives like string and number,
//but it doesn’t check that you’ve consistently assigned these. TypeScript does.
//This means that your existing working JavaScript code is also TypeScript code.
//The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.
//Type By Inference : 
//In This The TypeScript Compiler Infer The Type Of The Variable
let helloWorld = "Hello World";
console.log(typeof helloWorld);
//But We Can Also Define The Types Of Various objects And Variables
const user = {
    userName: "Abhishek",
    age: 22
};
//Here we Are Creating The Object user with properties userName and age
