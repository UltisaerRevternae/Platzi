const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAAAAAAAAAAAAAAAAAAA";
  },
};

/*
const stringifiedComplexObj = JSON.stringify(obj1)
const obj2 = JSON.parse(stringifiedComplexObj)
*/

function isObject(subject) {
  return typeof subject === "object";
}
function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else if (subjectIsArray) {
      copySubject.push(subject[key]);
    } else {
      copySubject[key] = subject[key];
    }
  }

  return copySubject;
}

//   RETO

export function deepFreeze(obj) {
  if (typeof obj !== "object") return;

  Object.freeze(obj);

  for (let key in obj) {
    deepFreeze(obj[key]);
  }
}

//Dado un objeto como el siguiente:

const juan = {
  name: "Juanito",
  approvedCourses: ["Curso 1", "Curso 2"],
  caracteristicas: {
    age: 18,
    colorCabello: "Negro",
    gustos: {
      musica: ["rock", "punk", "ska"],
      peliculas: ["drama", "horros", "comedia"],
    },
  },
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

//Tu reto es crear una función que aplique Object.freeze a todos los objetos anidados de forma recursiva para así realmente lograr bloquear todo el objeto. A esto se le conoce comunmente como deepFreeze.
