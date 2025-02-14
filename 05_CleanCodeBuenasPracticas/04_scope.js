// Ámbito global
let greeting = "Hello World";
function greet() {
  console.log(greeting);
}
greet(); //> Hello world

//> Ámbito local o de función
function greet() {
  let greeting = "Hello World";
  console.log(greeting);
  return greeting
}
greet(); //> Hello world
console.log(greeting); //> Variable no definida

//> Ámbito de bloque
{
  let greeting = "Hello World";
  var lang = "English";
  console.log(greeting);
}
console.log(lang); //> English
console.log(greeting); //> Uncaught ReferenceError: greeting is not defined

//> Ámbito estático o dinámico
const age = 28;
function printAge() {
  console.log(age);
}
function mainApp() {
  const age = 26;
  printAge();
}
mainApp(); //> 28
// No importa desde donde se llame la funcion siempre toma el primer valor que se declaro
//> Ámbito estático o dinámico
let age2 = 28;

function printAge() {
  console.log(age2);
}
function mainApp() {
  return (age2 = 26,
  printAge());
}
mainApp(); //> 28
// No importa desde donde se llame la funcion siempre toma el primer valor que se declaro