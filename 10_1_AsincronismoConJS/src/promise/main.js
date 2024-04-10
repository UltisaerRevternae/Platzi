// Pendiente Cumplido Rechazado
const promise = new Promise(function (resolve, reject) {
  resolve('This is correct')
  reject('D')
})

const cows = 15;
const countCows = new Promise(function(resolve, reject) {
  cows > 10 
    ? resolve(`Nice we have ${cows} cows on the farm`)
    : reject(`Cows no enough`)
})

countCows.then((result) => { // resolve
  console.log(result)
}).catch((error) => { // reject
  console.log(error)
}).finally(() => console.log('Process finished'))
