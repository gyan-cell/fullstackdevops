// Initiate an object
let initiateObject = {}
console.log(initiateObject)
// Initiate an object with properties
let initiateObjectWithProperties = {
  name: "John",
  age: 30
}
console.log(initiateObjectWithProperties)

const person = {
  name: ["Gyanranjan", "Jha"],
  age: 19,
  bio: function() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
  },
  whoAmI: function() {
    console.log(`Hi! I'm ${this.name[0]}.`)
  }
}

console.log(person.name[0])
person.bio()
person.whoAmI()
const objectPrototype = Object.getPrototypeOf(person)
console.log(objectPrototype)
console.log(objectPrototype.constructor)
console.log(Object.getPrototypeOf(new Date()))

const strawHat = {
  whoAmI: function(name) {
    console.log(`Hi! I'm ${name}.`)
  }
}

strawHat.whoAmI("John")

