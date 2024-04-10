import { ProductHttpService } from "./services/productHttp.service";

(async () => {
  const productService = new ProductHttpService()

  try {
    console.log('UPDATE')

    const productId = 2
    const update = await productService.update(productId, {
      title: 'Update data test',
      price: 110000,
      description: 'Description Test'
    })

    console.log(update)
    console.log('-----------'.repeat(3))
    console.log('FIND')

    const product = await productService.findOne(productId)
    console.log(product)

    console.log('-----------'.repeat(3))
    console.log('CREATE')
    const create = await productService.create({
      "title": "New Product Test",
      "price": 10,
      "description": "A description test",
      "categoryId": 1,
      "images": ["https://placeimg.com/640/480"]
    })

    console.log(create)

    console.log('-----------'.repeat(3))
    console.log('GET ALL')

    const products = await productService.getAll()
    console.log(products.map((value) => `${value.id})  ${value.title} ---> $${value.price}`))

    console.log('-----------'.repeat(3))
  } catch (error) {
    console.log(error)
  }

})()
