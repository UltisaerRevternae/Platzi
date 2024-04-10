function sum(a , b ) {
  return a + b
}

function call (a , b , callback) {
  return callback(a , b)
}

console.log(call(1,2, sum))


//// TIME OUT
setTimeout(function() {
  console.log('Hi in 2 seconds')
}, 2000)

function greetting(name) {
  console.log(`Hi you are welcome: ${name}`)
}

setTimeout(greetting , 100, 'Pedro')

