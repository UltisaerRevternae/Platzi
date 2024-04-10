(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const createProductToJson = (
    title: string,
    createdAt : Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date() , 12)
  console.log(producto1)

})()
