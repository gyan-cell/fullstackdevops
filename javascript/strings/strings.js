const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

// declare String object from String constructor

const string4 = new String("A string object");

const string5 = "Hello, World!";
string5.charAt(0); // "H"
string5.charAt(1); // "e"
string5.charAt(2); // "l"
//The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:
string5[0]; // "H"
string5[1]; // "e"
string5[2]; // "l"


const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"


