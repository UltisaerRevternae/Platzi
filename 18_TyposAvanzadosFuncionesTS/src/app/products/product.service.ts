import { Product } from "./product.model"
import { CreateProductDto, FindProductsDto, UpdateProductDto } from "./produc.dto"
import { faker } from "@faker-js/faker"
const products: Product[] = []

const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent(),
      category: {
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        createdAt: faker.date.recent(),
        updateAt: faker.date.recent(),
      }
  }
  products.push(newProduct)
  return newProduct
}

const updateProduct = (idUpdate: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(({id}) => id === idUpdate)
  const prevData = products[index]
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index]
}

const findProducts = (dto: FindProductsDto): Product[] => {
  return products
}

export { addProduct, products, updateProduct, findProducts}
