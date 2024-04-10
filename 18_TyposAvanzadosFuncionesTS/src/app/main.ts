import {faker} from '@faker-js/faker';
import { addProduct , findProducts, products, updateProduct} from "./products/product.service"

const tagsProduct = [
  "electronics",
  "fashion",
  "sports",
  "gaming",
  "cooking",
  "gardening",
  "beauty",
  "books",
  "music",
  "photography",
  "pets",
  "travel",
  "art",
  "office",
  "health",
  "automotive",
  "toys",
  "home",
  "food",
  "fitness"
];

for (let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.rgb(),
    price: parseInt(faker.commerce.price()),
    title: faker.commerce.productName(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(tagsProduct, {min: 3, max:5}),
    stock: faker.datatype.number({min: 10, max:100}),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    categoryId: faker.datatype.uuid()
  })
}

console.log(products)
const product = products[0]
updateProduct(product.id, {
  title: 'New chamo',
  stock: 80,
  price: 53,
})
console.log(products[0])

findProducts({
  stock: 10,
  size: 'XL',
  tags: ['sports' , 'gaming']
})
