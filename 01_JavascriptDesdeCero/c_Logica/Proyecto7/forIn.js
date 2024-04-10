// Iterar sobre objetos enumerables
// Propiedades valores

const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1,
};

for (compras in listaDeCompras) {
  console.log(compras)
}

// Objeto enimerable
for (compras in listaDeCompras) {
  console.log(`Compras ${compras} : ${listaDeCompras[compras]}`)
}

// Objeto iterable
for (fruta of listaDeCompras) {
  console.log(fruta)
}