(() => {
  const prices: (string | number | boolean | {})[] = [1,1,5,59,4,6,4,64,65,5, 'asd', true, {}, []]
  prices.push([])
  console.log(prices)
  let number = [1,5,5,2,2,14,4]
  number.map((item) => item * 2)
})()
