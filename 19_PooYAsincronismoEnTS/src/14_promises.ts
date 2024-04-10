(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, time)
    });
    return promise
  }

  const getProducts = async () => {
    const promise = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await promise.json()

    console.log(data.slice(0,2))
  }
  getProducts()
  const rts = await delay(3000)
  console.log(rts)
})();
