const saludoConEspacios = '               Hola Mundo                       ';
console.log(saludoConEspacios.trim())
const fruta = { nombre: 'manzana', color: 'roja' };
fruta.color = 'verde'
fruta.tamaño = 'mediano'
console.log(fruta)
const nombre = 'Pedro';
const edad = 30;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`)
const numeroEnString = '100';
console.log(parseInt(numeroEnString) + 11)
const Sym= Symbol('Identificador')
const user = { [Sym] : '2425'}
console.log(user)
const valor = '5';
console.log(valor * 1)
console.log(parseInt(valor))
const nullData = null
console.log(typeof nullData)
const BigNumber = 4254777777777722534423544234235442252344235442345462335442634733n
console.log(BigNumber * 245n)