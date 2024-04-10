function isObject(subject) {
  return typeof subject == "object";
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
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;

  // const private = {
  //   "_name": name,
  //   "_courses": courses,
  // };

  // const public = {
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get courses() {
  //     return private["_courses"];
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    '_learningPaths': [] 
  }

  this.validate = (LP) => {
    if (!Array.isArray(LP)) {
      console.warn("LearningPaths must be an array");
      return {isPath : false }
    }
    if (LP.length === 0) {
      console.warn("LearningPaths must elements in the array");
      return {isPath : false }
    }
    if (!LP.every(lp => lp instanceof LearningPath)){
      console.warn("Error in new LearningPath");
      return {isPath : false }
    }

    const newLP = this.addPathGlobal(LP);

    if (!newLP.every(lp => lp instanceof LearningPath)){
      console.warn("Error in LearningPath");
      return {isPath : false }
    }
    return {isPath : true , path : newLP}
  }

  this.addPathGlobal = (learningPaths) => {
    for (lp of learningPaths) {
      if (lp instanceof LearningPath) {
        private['_learningPaths'].push(lp);
      }
    }
    return(private['_learningPaths'])
  }

  Object.defineProperty(this, 'learningPaths', {
    get() {
      return private['_learningPaths'];
    },
    set(newPaths) {
      const validate = this.validate(newPaths);
      if (validate.isPath) {
        return private['_learningPaths'] = validate.path;
      } else {
        private['_learningPaths'] = private['_learningPaths']
      }
    }
  });

}

const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
  email: "juanito@frijoles.co",
  name: "Juanito",
});
//juan.learningPaths= [escuelaWeb, escuelaData]
