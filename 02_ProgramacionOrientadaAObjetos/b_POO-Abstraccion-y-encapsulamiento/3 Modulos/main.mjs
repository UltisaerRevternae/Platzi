function videoPlay(id) {
  const URLSECRET = 'https://static.platzi.com/media/tmp/class-files/github/curso-basico-js-poo/curso-basico-js-poo-80e7c14e8771aa53b0d03d3ef663cadc2b0a81a0/main.js/' + id
  console.log("Se esta produciendo desde la url " + URLSECRET)
}

function videoStop(id) {
  const URLSECRET = 'https://static.platzi.com/media/tmp/class-files/github/curso-basico-js-poo/curso-basico-js-poo-80e7c14e8771aa53b0d03d3ef663cadc2b0a81a0/main.js/' + id
  console.log("Pausamosla url " + URLSECRET)
}

export class PlatziClass {
  constructor({
    name,
    videoId,
  }) {
    this.name = name
    this.videoId = videoId
  }

  reproducir(){
    videoPlay(this.videoId)
  }
  pausar(){
    videoStop(this.videoId)
  }
}
























class Course {
  constructor({
    name,
    classes = [],
  }) {
    this._name = name;
    this.classes = classes;
  }

  get setName(){
    return this._name
  }

  set setName(newName){
    if (newName === "Curso Malito de Programación Basica") {
      console.error('Web... nop')
    } else {
      this._name = newName
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
});


class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
})

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
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

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});