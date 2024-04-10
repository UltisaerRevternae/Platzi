import { faker } from "@faker-js/faker";
import { ProductMemoryService } from "./services/productMemory.service";

const productService = new ProductMemoryService()
productService.create({
  title: faker.commerce.productAdjective(),
  price: parseInt(faker.commerce.price({ min: 1430, max: 2730 })),
  description: faker.commerce.productDescription(),
  categoryId: faker.number.int(),
  images: [faker.image.url(), faker.image.url(), faker.image.url()],
})

const products = productService.getAll()
const productId = products[0].id

const rta1 = productService.findOne(productId)
console.log(rta1)

productService.update(productId, {
  title: 'CHAMOOOOOOOOOOOOOOOOOOOOOOOO'
})

const rta2 = productService.findOne(productId)
console.log(rta2)
