import { addProduct, printProduct } from "./products.service"

addProduct({
  title: 'TITLE 2',
  createdAt: new Date(),
  stock: 130,
  size: 'XL'
})

console.log(printProduct({
  title: 'TITLE 2',
  createdAt: new Date(),
  stock: 130,
  size: 'XL'
}))
