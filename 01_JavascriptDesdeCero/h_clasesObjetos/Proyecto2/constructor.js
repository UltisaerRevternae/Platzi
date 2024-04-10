// let persona =  {
//   nombre: "Diego",
//   apellido: "De Granda",
//   edad: 35
// }

function Persona(nombre, apellido, edad) {
  this.nombre = nombre
  this.edad = edad
  this.apellido = apellido
}

const persona1 = new Persona("Juan", "Perez", 20);
persona1.nacionalidad = "Mexicano";
console.log(persona1);

const persona2 = new Persona("Diego", "De Granda", 35);
console.log(persona2);

// Objeto reutilizable
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar();
persona2.saludar();

console.log(persona1);
console.log(persona2);

