const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  aprobarCursos(nuevoCursoAprobado) {
    this.cursosAprobados.push(nuevoCursoAprobado);
    console.log(this.cursosAprobados);
  },
};

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}
Student.prototype.aprobarCursos = function (nuevoCursoAprobado) {
  this.cursosAprobados.push(nuevoCursoAprobado);
  console.log(this.cursosAprobados);
};

const juanita = new Student("Juanita", 30, [
  "Curso Definitivo de HTML y CSS",
  "Curso Práctico de HTML y CSS",
]);

// Prototipo con la sintaxis de classes

class StudentClass {
  constructor({
    name,
    age,
    twitter,
    cursosAprobados = [],
    email = 'email.pordefault@gmail.com',
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCursos(newCurse){
    this.cursosAprobados.push(newCurse)
  }
}

const miguel = new StudentClass({
  name: 'Miguel',
  age: 28,
  cursosAprobados: [
    "Analisis de negocios",
    "Ciencia de datos",
  ]
})