//> Herencia prototipal
// Clase padre
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hello I am " + this.name;
};

// Herencia ES5
function Developer(name) {
  this.name = name
}
Developer.prototype = Object.create(Person.prototype)

Developer.prototype.writeCode = function (coffee) {
  if (coffee) {
    console.log("I am developing in a new feature");
  } else {
    console.log("I need coffeeee");
  }
};

var juny = new Developer('July')
console.log(juny.greet())
juny.writeCode()

//> Herencia clases
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello I am ${this.name}`;
  }
}

// ES6
class Developer extends Person {
  constructor (name) {
    super(name)
  }
  writeCode(coffee) {
    coffee ? console.log("I am developing in a new feature") : console.log("I need coffeeee");
  }
}

const dev = new Developer('Candy')
console.log(dev.greet())
dev.writeCode('XD')