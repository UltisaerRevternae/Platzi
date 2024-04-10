const data = [1,5,4,2,9,8,7,3,6,10,100000,0,1,2,2,4,5,5,5,47,7,7,7,9,4];
// const data = [288, 92, 765, 437, 666, 495, 342, 123, 156, 992, 906, 732, 448, 331, 254, 454, 703, 745, 983, 473, 946, 714, 954, 691, 618, 892, 722, 505, 548, 429, 710, 27, 348, 514, 372, 264, 912, 534, 840, 888, 838, 954, 832, 559, 935, 847, 54, 491, 411, 905, 376, 141, 85, 641, 516, 710, 808, 409, 836, 437, 541, 902, 280, 693, 812, 731, 168, 151, 487, 290, 667, 643, 695, 738, 37, 809, 955, 758, 654, 497, 938, 576, 547, 708, 751, 84, 97, 726, 877, 278, 73, 767, 256, 745, 514, 950, 137, 129, 57, 104, 242, 24, 396, 459]

const promedio = (data.reduce((a, b) => a + b) / data.length).toFixed(3)
const isPar = () => !(data.length % 2)

const mediana = (data) => {
  data.sort((a, b) => a - b)
  if (isPar()) {
    const n = data.length / 2
    const result = (data[n - 1] + data[n]) / 2
    return result
  }
  
  const number = Math.floor(data.length / 2)
  return data[number]
  
}

const moda = (data) => {
  const objData = {}
  data.reduce((acc, cur) => {
    acc = cur
    if (!objData[acc]) {
      objData[acc] = 1
    } else {
      objData[acc]++
    }
  }, 0)

  let maxData = [ '0' , '0']
  Object.entries(objData).forEach(([key, value]) => {
    if (value > maxData[1]) {
      maxData.pop()
      maxData.pop()
      maxData.push(key, value)
    } 
  })
  return maxData
}

// console.log(moda(data))

// console.log({
//   isPar: isPar(),
//   promedio,
//   mediana: mediana(data)
// })

const dataModa = [1,1,1,1,1,1,115,4,2,9,8,7,3,6,10,100000,0,1,2,2,4,5,5,5,47,7,7,7,9,4];

const newModa = (data) => {
  const objData = {}
  data.forEach((num) => objData[num] = (objData[num] || 0) + 1)

  let maxData = ['', 0];
  Object.entries(objData).forEach(([key, value]) => {
    if (value > maxData[1]) {
      maxData = [key, value]
    }
  })

  return  maxData
}

console.log(newModa(dataModa))

const dataModaSort = [1,1,1,1,1,1,115,4,2,9,8,7,3,6,10,100000,0,1,2,2,4,5,5,5,47,7,7,7,9,4];

const newModaSort = (data) => {
  const objData = {}
  data.forEach((num) => objData[num] = (objData[num] || 0) + 1)

  const newData = Object.entries(objData)
  newData.sort((a, b) => b[1] - a[1])

  return  newData[0]
}

console.log(newModaSort(dataModaSort))




const notes = [
  {
      course: "Educación Física",
      note: 10,
      credit: 2,
  },
  {
      course: "Programación",
      note: 8,
      credit: 5,
  },
  {
      course: "Finanzas personales",
      note: 7,
      credit: 5,
  },
];

const weightedAverage = (notes) => {
  let notesCredits = 0
  let credits = 0
  notes.forEach(({note, credit}) => {
    notesCredits += note * credit
    credits += credit
  })

  return (notesCredits / credits).toFixed(3)
}

console.log(weightedAverage(notes))