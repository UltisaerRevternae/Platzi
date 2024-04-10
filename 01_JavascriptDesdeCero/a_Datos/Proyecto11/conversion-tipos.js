// Explicit type casting

const string = '596'
const integer = parseInt(string)
console.log(integer, typeof integer, '\n')

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float, typeof float, '\n')

const binary = '10001010'
const decimal = parseInt(binary, 2)
console.log(decimal, typeof decimal, '\n')

// Implicit type casting

const sum = 5 + '3'
console.log(sum)
const sumWithBoolean = '3' + true
console.log(sumWithBoolean)
const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log('--------------------')
// Combinaciones con stringValue
console.log(stringValue + stringValue); // CONCATENAR
console.log(stringValue + numberValue); // CONCATENAR
console.log(stringValue + booleanValue); // CONCATENAR

// Combinaciones con numberValue
console.log(numberValue + stringValue); // CONCATENAR
console.log(numberValue + numberValue); // SUMAR
console.log(numberValue + booleanValue); // SUMAR

// Combinaciones con booleanValue
console.log(booleanValue + stringValue); // CONCATENAR
console.log(booleanValue + numberValue); // SUMAR
console.log(booleanValue + booleanValue); // SUMAR