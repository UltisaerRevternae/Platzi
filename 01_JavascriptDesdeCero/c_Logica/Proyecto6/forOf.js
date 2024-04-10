// Por cada elemendo de / objetos iterables / una lista de algo

const canasta = ['Manzana', 'Pera', 'Uva']

// Variable / of / objeto de donde se extrae los datos
for (fruta of canasta) {
  // console.log(fruta)
}

let iterable = new Map([
  ["a", 9],
  ["b", 2],
  ["c", 3],
]);

for (let entry of iterable) {
  console.log(entry);
}

for (let [clave, valor] of iterable){
  console.log (valor)
  console.log (clave)
}