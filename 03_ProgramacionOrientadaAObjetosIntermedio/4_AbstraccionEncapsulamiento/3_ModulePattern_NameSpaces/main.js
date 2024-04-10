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

/*
const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const juan = deepCopy(studentBase)
Object.seal(juan)
Object.isSealed(juan) // Todas las propiedades estan protegisas
Object.isFrozen(juan)

Object.defineProperty(juan, 'name', {
  value: 'Juanito',
  configurable: false,
})*/

requiredParam = (params) => {
  throw new Error(`Parametro ${params} es obligatorio`)
}

frozeenObject = (isFroozen) => {
  Object.isFrozen(isFroozen)
}
function createStudent({
  name = requiredParam('name'),
  email = requiredParam('email'),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) { // Al ser por default un objeto vacio entonces no se rompe
  const private = {
    '_name': name,
  }
  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    readName() {
      return private._name
    },
    changeName(newName) {
      private._name = newName
    },
  }
  Object.defineProperty(public, 'changeName', {
    writable: false,
    configurable: false
  });
  
  Object.defineProperty(public, 'readName' , {
    writable: false,
    configurable: false
  })
  return public
}

const juan = createStudent({
  name: 'Pe',
  email: 'Ob'
})