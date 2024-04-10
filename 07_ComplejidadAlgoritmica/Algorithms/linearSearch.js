/**
 * Complejidad Temporal -> O( n + 1 + 1 + 1 ) => O( n + 3 ) => O(n)
 * Complejidad Espacial -> O( n + 1 ) => O( n )
 * Espacio Auxiliar -> Complejidad espacial - datos de entrada => O(n) - O(1) remove espacial => O(1)
 */
function linearSearch(arreglo, clave) { // Espacial O(n + 1) => O(n)
  for (let indice = 0; indice < arreglo.length; indice++) { // Temporal O(n) // Espacial O(1)
    if (arreglo[indice] === clave) { // Temporal O(1)
      return indice; // Temporal O(1)
    }
  }
  return -1; // Temporal O(1) 
}
