const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e'
  },
  /*
  editA() {
    this.a = 'AAAAAAAAAAAAAAAAAAAAAA'
  } */
}

const deepCopy = structuredClone(obj1)