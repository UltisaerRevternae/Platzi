class Animal {
  name: string

  constructor(data: { name: string}) {
    this.name = data.name
  }

  move() {
    return 'No mms me muevo'
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

class Dog extends Animal {

  owner: string

  constructor(data: { name: string, owner: string}) {
    super({...data})
    this.owner = data.owner
  }

  woof(times: number) : string {
    return ('woofs! '.repeat(times)).trim()
  }
}

const fifi = new Animal({name: 'Fifi'})
console.log({
  move: fifi.move(),
  greeting: fifi.greeting()
})

const paco = new Dog({name: 'paco', owner: 'peto'})
console.log({
  move: paco.move(),
  greeting: paco.greeting(),
  woof: paco.woof(3),
  name: paco.name,
  owner: paco.owner
})

export { Animal , Dog}

