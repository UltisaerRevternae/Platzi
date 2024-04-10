class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

class Courses {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

class Class {
  constructor({ classes, duration = "10:00" }) {
    this.classes = classes;
    this.duration = duration;
  }
}

const progOrientadaAObjetos = new Class({
  classes: "Bienvenido a la programacion",
  duration: "5:00",
});

const cursoProgBasica = new Courses({
  name: "Curso gratis de programacion basica",
  classes: [progOrientadaAObjetos, "Clase 2"],
});

const escuelaWeb = new LearningPath({
  name: "Escuela de desarrollo Web",
  courses: [
    cursoProgBasica,
    "begginer",
    "CSS grid avanced",
    "Curso Práctico de HTML y CSS",
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data",
  courses: [
    cursoProgBasica,
    "Curso Práctico de HTML y CSS",
    "CSS grid avanced",
    "Curso Práctico de HTML y CSS",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Videojuegos",
  courses: [cursoProgBasica, "UNITY", "Unreal", "asd"],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = "",
    instagram = "",
    facebook = "",
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan = new Student({
  name: "Juan",
  username: "Juanito",
  email: "Juanito@gmail.com",
  twitter: "TJuanito",
  learningPaths: [escuelaWeb, escuelaData],
});

const miguel = new Student({
  name: "Miguel",
  username: "Miguelito",
  email: "Miguelito@gmail.com",
  instagram: "IMiguelito",
  learningPaths: [escuelaWeb, escuelaVgs],
});
