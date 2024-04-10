console.log({
  PI: Math.PI,
  M: Math.max(-1,9)
})

class Th {
  static #PI = 3.141592653589793
  static get PI (): number {return Th.#PI}

  static readonly max = (...number: number[]) => {
    return (number.sort((a,b) => b - a))[0]
    // return number.reduce((acc, cur) => acc > cur ? acc : cur , number[0])
  }

}

console.log(Th.PI)
console.log(Th.max(-1,-90,-2))
// Th.max(-1,-90,-2) = 425

