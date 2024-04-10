class Patito {
  static sonidito = 'Cuak! 🦆';

  static hacerSonidito() {
    return 'Cuak! 🦆🦆';
  }
}

console.log(Patito.sonidito);
console.log(Patito.hacerSonidito());

const objetito = {
  name: 'Miguel',
  email: 'miguel@gmail.com',
  age: 22
}

console.log('Object.keys')
console.table(Object.keys(objetito))
console.log('Object.getOwnPropertyNames')
console.table(Object.getOwnPropertyNames(objetito)) //*Hace lo mismo que el método de arriba
console.log('Object.entries')
console.table(Object.entries(objetito)); //*Devuelve un array, cada posición es otro array con las propiedades del objeto
console.log('Object.getOwnPropertyDescriptors')
console.table(Object.getOwnPropertyDescriptors(objetito)); //*Devuelve un objeto con las propiedades del objeto