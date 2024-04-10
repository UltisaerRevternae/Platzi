const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e'
  },
  editA() {
    this.a = 'AAAAAAAAAAAAAAAAAAAAAA'
  }
}

/*
const stringifiedComplexObj = JSON.stringify(obj1)
const obj2 = JSON.parse(stringifiedComplexObj)
*/

const numeritos = [0,2,5,4,7,8,5,4,4,5,5,5,5,8,45,4,4,5,5,2,454,7,78,4,4,4,44,4,7,1,8]
/*
let num = 0
for (let i = 0; i < numeritos.length; i++) {
  numerito = numeritos[i]
  console.log({i, numerito});
  
}*/

function recursiva(numbersArray) {
  if (numbersArray.length !== 0 ) {
    const firstNum = numbersArray[0]
    console.log(firstNum)
    numbersArray.shift()
    recursiva(numbersArray)
  }
}
recursiva(numeritos)