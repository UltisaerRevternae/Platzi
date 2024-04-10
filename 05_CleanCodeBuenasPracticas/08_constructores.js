// Antes de ES6
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hi bro i am ${this.name }`
}
var person = new Person("Alex");
console.log(person.name); //> Alex
console.log(person.greet()); //> Alex

// Con ES6
class Cat {
  constructor(cat){
    this.name = cat
  }
  greet() {
    return 'Miau grrrrrrr'  + this.name
  }
}

var catAlex = new Cat("Alex Miai");
console.log(catAlex.name); //> Alex
console.log(catAlex.greet());