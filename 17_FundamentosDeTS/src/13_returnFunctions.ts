(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((a , b) => a + b)
  }

  const printTotal = (prices: number[]): void => {
    console.log(prices.reduce((a , b) => a + b))

  }
  printTotal([1,2,3,4,5,6])

})()
