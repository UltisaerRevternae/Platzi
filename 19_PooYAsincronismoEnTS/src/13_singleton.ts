class MyService {

  static instance: MyService | null = null;

  #name : string
  private constructor(name: string) {
    this.#name = name
  }

  get name () {
    return this.#name
  }

  static create(name : string) {
    if (!MyService.instance) {
      MyService.instance = new MyService(name)
    }
    return MyService.instance
  }
}

const MyService1 = MyService.create('name')
const MyService2 = MyService.create('Plllllllll')

console.log({
  '1' : MyService1.name ,
  '2' : MyService2.name ,
  'isEqual' : MyService1 === MyService2
})


export { MyService }
