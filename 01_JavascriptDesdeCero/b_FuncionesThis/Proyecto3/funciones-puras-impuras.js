// Funciones puras

// Side Effects
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes http
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulacion del DOM
// 6. Obtener la hora actual

// Funciones puras

function sum (a, b) {
  return a + b
}

// Funciones impuras

function sum (a, b) {
  console.log('A: ', a)
  return a + b
}

let total = 0

function sumWithSideEffect(a){
  total += a
  return total
}

// Funciones puras

function square(x){
  return x ** 2
}

function addTen(y){
  return y + 10
}
  
const number = 5
const finalResut = addTen(square(number))
  console.log(finalResut)