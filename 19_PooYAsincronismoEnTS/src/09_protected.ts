abstract class Animal {
  protected name: string

  constructor(data: { name: string}) {
    this.name = data.name
  }

  move() {
    console.log('MASD')

    // return 'No mms me muevo'
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething() {
    console.log('Doooooooooooooooooooooo')}
}

class Dog extends Animal {

  owner: string

  constructor(data: { name: string, owner: string}) {
    super({...data})
    this.owner = data.owner
  }

  woof(times: number) : string {
    this.doSomething()
    return ('Woof! '.repeat(times)).trim()
  }

  move() {
    console.log('asdasdasd')
    super.move
  }
}

// const fifi = new Animal({name: 'Fifi'})
// console.log({
//   move: fifi.move(),
//   greeting: fifi.greeting()
// })

const paco = new Dog({name: 'paco', owner: 'peto'})
// console.log({
//   greeting: paco.greeting(),
//   // name: paco.name = 'asd',
//   woof: paco.woof(3),
//   owner: paco.owner ,
//   move: paco.move(),
// })

export { Animal , Dog}

