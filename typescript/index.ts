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
}
//Here we Are Creating The Object user with properties userName and age by default the userName Of the Object User is of type 
//string and age is of type number

console.log(typeof user); // object
console.log(typeof user.userName); // string
console.log(typeof user.age); // number
//


// InterFace Declaration : 

console.log("InterFace Declaration : ");

interface User {
  name: string;
  age: number;
  isMarried: boolean | string;
  contactNo: Array<Number>;
  display?: () => void; // This Is Example Of Optional Function 
  //  canHaveDrivingLicense(): boolean // Example Of Required Function
  canHaveDrivingLicense?: () => boolean;
  hasKids?: boolean | string
};


let newUser: User = {
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
    } else {
      return false;
    }
  }
}
//console.log(newUser)
//console.log(typeof newUser);


// Since Javascript Supports Class Based Programming We Can Create Our Own Class And Do It Like This :


console.log("Class Based Programming : ");

class UserEmp implements User {
  name: string;
  age: number;
  isMarried: boolean;
  contactNo: Array<Number>;
  hasKids?: boolean | string
  constructor(name: string, age: number, isMarried: boolean, contactNo: Array<Number>, hasKids?: boolean | string | undefined) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.contactNo = contactNo;
    this.hasKids = hasKids
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
    } else {
      return false;
    }
  }
}
const newEmp: User = new UserEmp("John", 13, false, [123456789, 9876543210], true);

if (newEmp.display) {
  console.log("newEmp.display() is defined");
  newEmp.display();
}
else {
  console.log("newEmp.display() is undefined");
}

// You Can use Interfaces With Functions too

console.log("Interface With Functions : ");

interface returnString {
  name: string;
  class: "10th" | "11th" | "12th";
}


function returnUserName(data: returnString): returnString {
  console.log(data)
  return data
}

returnUserName({ name: "Garry Kasparov", class: "12th" })


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

type myBool = true | false;
type MyWindowState = "open" | "closed" | "minimized";


// Generics : Generics provide variables to types ; 

type myString = Array<string>;
type myNumber = Array<number>;
type objectWithArray = Array<{ name: string }>;


//We Can always define the type of the variable using Generics


interface BackMan<Type> {
  add: (data: Type) => Type;
  get: (data: Type) => Type;
}

declare const badMan: BackMan<string>;
console.log(badMan.add("Gyan"))



const message = "Hello World";

const textToLowerCase = (text: string): string => {
  return text.toLowerCase();
}


// TYPE Assertion 
// Sometimes you will have information about the type of a variable that TypeScript cannot determine.

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;


const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");
// TypeScript only allows type assertions which convert to a more specific or less specific version of a type.
// This rule prevents “impossible” coercions like:


//const x = "hello" as number;

// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
//handleRequest(req.url, req.method as "GET");

// NULL AND UNDEFINED
//JavaScript has two primitive values used to signal absent or uninitialized value: null and undefined.

//TypeScript has two corresponding types by the same names. How these types behave depends on whether you have the strictNullChecks option on.

// The in Operator
// JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the in operator.
// TypeScript takes this into account as a way to narrow down potential types.

type fish = { swim: () => string }
interface shark {
  eat?: (food: string) => string
}

function move(animal: fish | shark) {
  if ("swim" in animal) {
    return animal.swim();
  } else if ("eat" in animal) {
    if (animal.eat) {
      return animal.eat("shark food");
    }

  }
}



//Instance of Narrowing : 


//JavaScript has an operator for checking whether or not a value is an “instance” of another value.
//More specifically, in JavaScript x instanceof Foo checks whether the prototype chain of x contains Foo.prototype. 


function consoleValue(date: Date | string) {
  if (date instanceof Date) {
    return date.toISOString();
  }
  else {
    return date.toUpperCase();
  }
}


interface myNewName<Type> {
  name: Type,
  isAdded: () => string
}

declare const customType: myNewName<string>;

function myFunction(data: myNewName<string>) {
  return data.isAdded();
}


type greeterFunction = () => string;

function myFunction2(data: greeterFunction): string {
  return data();
}


//Building  The Generics :
//A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable.

function identity<Ts>(arg: Ts): Ts {
  return arg;
}
