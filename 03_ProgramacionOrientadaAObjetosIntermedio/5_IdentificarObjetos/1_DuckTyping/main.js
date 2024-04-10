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

requiredParam = (params) => {
  throw new Error(`Parametro ${params} es obligatorio`)
}
function createLearningPath({
  name = requiredParam('name'),
  courses = [],
}) {
  const private = {
    '_name': name,
    '_courses' : courses
  }
  const public = {
    get name() {
      return private['_name']
    },
    set name(newName) {
      if ( newName.trim().length > 3) {
        private['_name'] = newName.trim()
      } else {
        console.warn('Tu nombre no cumple las condiciones')
      }
    } ,
    get courses() {
      return private['_courses']
    },
  }
  return public
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
} = {}) {
  const private = {
    '_name': name,
    '_learningPaths': learningPaths
  }
  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name(){
      return private['_name']
    },
    set name(newName){
      if ( newName.trim().length > 3) {
        private['_name'] = newName.trim()
      } else {
        console.warn('Tu nombre no cumple las condiciones')
      }
    },
    get learningPaths(){
      return private['_learningPaths']
    },
    
    set learningPaths(newLP){
      if (!newLP.name) {
        console.warn("Tu LP no tiene la propiedad name");
        return;
      }
      if (!newLP.courses) {
        console.warn("Tu LP no tiene courses");
        return; 
      }
      if (!isArray(newLP.courses)) {
        console.warn("Tu LP no es una lista (*de cursos)");
        return; 
      }

      private['_learningPaths'].push(newLP)
    },
  }
  return public
}

const juan = createStudent({
  name: 'Pe',
  email: 'Ob'
})
