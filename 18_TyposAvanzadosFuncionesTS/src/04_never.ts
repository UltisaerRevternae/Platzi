const infinite = () => {
  while (true) {
    console.log('LOL')
  }
}
// infinite()
const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Che esto es un string'
  } else if (Array.isArray(input)) {
    return 'This is a array'
  }
  return fail('Not match bro')
}

console.log(example('HI'))
console.log(example([1,5,855,5,5,]))
console.log(example(354531))
console.log(example('asdkjhasjhda'))
