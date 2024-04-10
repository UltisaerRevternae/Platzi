class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'estudiante'
  }) {
    this.content = content
    this.studentName = studentName
    this.studentRole = studentRole
    this.like = 0
  }

  publish() {
    console.log(`${this.studentName} (${this.studentRole})\n${this.like} likes\n${this.content}`)
  }
}

function videoPlay(id) {
  const URLSECRET = 'https://static.platzi.com/media/tmp/class-files/github/curso-basico-js-poo/curso-basico-js-poo-80e7c14e8771aa53b0d03d3ef663cadc2b0a81a0/main.js/' + id
  console.log("Se esta produciendo desde la url " + URLSECRET)
}

function videoStop(id) {
  const URLSECRET = 'https://static.platzi.com/media/tmp/class-files/github/curso-basico-js-poo/curso-basico-js-poo-80e7c14e8771aa53b0d03d3ef663cadc2b0a81a0/main.js/' + id
  console.log("Pausamosla url " + URLSECRET)
}

class PlatziClass {
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
    isFree = false,
    lang = 'spanish',
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
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
  isFree: true
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: 'english'
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

  publishComment(commentContent){
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    }) 
    comment.publish()
  }
}

class FreeStudent  extends Student{
  constructor(props){
    super(props)
  }

  approvedCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse)
    } else {
      console.warn('This course is premium')
    }
  }
}

class BasicStudent extends Student{
  constructor(props){
    super(props)
  }

  approvedCourse(newCourse) {
    if (newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse)
    } else {
      console.warn('This course is super premium')
    }
  }
}

class ExpertStudent extends Student{
  constructor(props){
    super(props)
  }

  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }
}

class TeacherStudent extends Student{
  constructor(props){
    super(props)
  }

  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }

  publishComment(commentContent){
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'Admin'
    }) 
    comment.publish()
  }
}

const freddy = new TeacherStudent({
  name: "Freddy vega",
  username: "FUsa",
  email: "FUsa@vega.com",
  instagram: "FUsa_vega",
});

const juan = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});