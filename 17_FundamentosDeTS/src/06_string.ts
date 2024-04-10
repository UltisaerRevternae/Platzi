(() => {
  let number: number = 0
  number = number + 1
  let productTitle = 'My amazing product';
  productTitle = "My amazing product V2"
  productTitle = `My amazing product ${number}`

  console.log({
    productTitle
  })
})()
