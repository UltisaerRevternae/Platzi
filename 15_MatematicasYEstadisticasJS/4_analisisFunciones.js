class MathEstadistic {

  static promedio = (data) => {
    return (data.reduce((a, b) => a + b) / data.length).toFixed(3)
  }

  static mediana = (data) => {
    const sortedData = [...data].sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    }
    return sortedData[middleIndex];
  }

  static moda = (data) => {
    const objData = {}
    data.forEach((num) => objData[num] = (objData[num] || 0) + 1)

    const newData = Object.entries(objData)
    newData.sort((a, b) => b[1] - a[1])

    return newData[0]
  }

}

export { MathEstadistic }