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
//Here we Are Creating The Object user with properties userName and age by default the userName Of the Object User is of type 
//string and age is of type number
console.log(typeof user); // object
console.log(typeof user.userName); // string
console.log(typeof user.age); // number
//
// InterFace Declaration : 
console.log("InterFace Declaration : ");
;
let newUser = {
    name: "John Doe",
    age: 13,
    isMarried: false,
    contactNo: [123456789, 9876543210],
    hasKids: true,
    display() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.isMarried);
        console.log(this.contactNo);
        console.log(this.hasKids);
    },
    canHaveDrivingLicense() {
        if (this.age >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
};
//console.log(newUser)
//console.log(typeof newUser);
// Since Javascript Supports Class Based Programming We Can Create Our Own Class And Do It Like This :
console.log("Class Based Programming : ");
class UserEmp {
    constructor(name, age, isMarried, contactNo, hasKids) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        this.contactNo = contactNo;
        this.hasKids = hasKids;
    }
    display() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.isMarried);
        console.log(this.contactNo);
        console.log(this.hasKids);
    }
    canHaveDrivingLicense() {
        if (this.age >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
}
const newEmp = new UserEmp("John", 13, false, [123456789, 9876543210], true);
if (newEmp.display) {
    console.log("newEmp.display() is defined");
    newEmp.display();
}
else {
    console.log("newEmp.display() is undefined");
}
// You Can use Interfaces With Functions too
console.log("Interface With Functions : ");
function returnUserName(data) {
    console.log(data);
    return data;
}
returnUserName({ name: "Garry Kasparov", class: "12th" });
// There is Already Small Set Of derived primitives defined in the typescript  language.
// We can use these primitives in our code.
//BOOLEAN
//BIGINT
//NUMBER
//STRING
//SYMBOL
//ANY
//UNKNOWN
//NULL
//UNDEFINED
//VOID
//OBJECT
//Unions
//With a union, you can declare that a type could be one of many types. For example,
//you can describe a boolean type as being either true or false:
console.log("Use of Unions : And Types : ");
console.log(badMan.add("Gyan"));
