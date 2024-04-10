import { Animal, Dog } from "./09_protected";

// const animal = new Animal({name: 'Elit'})
const animal = new Dog({name: 'Elit', owner: 'LASD'})
const dog = new Dog({name: 'Pato' , owner: 'Me'})
console.log({
  A_gretting: animal.greeting(),
  D_gretting: dog.greeting(),
  D_woof: dog.woof(5),
})
