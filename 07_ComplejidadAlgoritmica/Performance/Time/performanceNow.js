const performance = require('perf_hooks')

function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}
let startTime = performance.performance.now()
count(6)
let finalTime = performance.performance.now()
const totalTime = finalTime - startTime

console.log(`totalTime: ${totalTime} ms`)