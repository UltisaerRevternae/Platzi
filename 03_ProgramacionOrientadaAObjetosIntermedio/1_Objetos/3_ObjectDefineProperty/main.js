console.log(Object.keys(juan))
console.log(Object.getOwnPropertyNames(juan))
console.log(Object.entries(juan))

console.log(Object.entries(juan)[3][1].bind(juan)("curso 2"));




Object.defineProperty(juan, 'pruebaNasa', {
  value: 'Extraterrestres',
  enumerable: false, // Listar
  writable: false, // Editar
  configurable: false, // Permite borrar
})

Object.defineProperty(juan, 'Navigator', {
  value: 'Chrome',
  enumerable: false,
  writable: true,
  configurable: true,
})

Object.defineProperty(juan, 'editor', {
  value: 'VSC',
  enumerable: true,
  writable: false,
  configurable: true,
})

Object.defineProperty(juan, 'Terminal', {
  value: 'WSL',
  enumerable: true,
  writable: true,
  configurable: false,
})


Object.seal(juan) // configurable false
Object.freeze(juan) // configurable false writable false no se puede borrar ni editar
console.log(Object.getOwnPropertyDescriptors(juan))