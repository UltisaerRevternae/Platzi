function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}

console.time('Duracion algoritmo')
count(6)
let finalTime = console.timeEnd('Duracion algoritmo')