import { Dog } from "./09_protected"

const getValue = <Type>(value: Type) => value

getValue<number>(12).toFixed()
getValue<string>('ASD').charAt(4)
const fifi = new Dog({name: 'Fifi', owner: 'FIFA'})
getValue<Dog>(fifi)
