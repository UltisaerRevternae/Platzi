function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repetir(arreglo) {
  let arreglo_repetido = arreglo;
  return arreglo_repetido;
}

function convertirAString(arreglo) {
  let resultado = arreglo.map((elemento) => elemento.toString());
  return resultado;
}
// console.log(convertirAString([1,2,3]))

function dosDimensiones(valor) {
  let x = new Array(parseInt(valor))
  for (let i = 0; i < valor; i++) {
    x[i] = new Array(valor).fill(0)
  }
  return x
}

console.log(dosDimensiones(99999999n))