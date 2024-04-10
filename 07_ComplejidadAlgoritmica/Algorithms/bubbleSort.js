/**
 * Complejidad Temporal -> O( 1 + n * n + 1 + 1 + 1 + 1 + 1) => O(6 + n * n) => O(n²)
 * Complejidad Espacial -> O( n + 1 + 1 + 1 + 1 ) => O(n + 4) => O(n)
 * Espacio Auxiliar -> 0(n) - O( 4 ) => O(4) => O(1)
 */
function bubbleSort(arreglo) { // espacial => O(n)
  let longitud = arreglo.length; // O(1) // espacial => O(1)
  for (let i = 0; i < longitud; i++) { // O(n) // espacial => O(1)
    for (let j = 0; j < longitud; j++) { // O(n) // espacial => O(1)
      if (arreglo[j] > arreglo[j + 1]) { // O(1) 
        let temporal = arreglo[j];  // O(1) // espacial => O(1)
        arreglo[j] = arreglo[j + 1]; // O(1)
        arreglo[j + 1] = temporal; // O(1)
      }
    }
  }
  return arreglo; // O(1)
}
