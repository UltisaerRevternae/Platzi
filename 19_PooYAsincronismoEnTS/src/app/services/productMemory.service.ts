import { Product } from "../models/product.model"
import { CreateProductDto, FindProductsDto, UpdateProductDto } from "../dtos/product.dto"
import { faker } from "@faker-js/faker"
import { ProductService } from "../models/productService.model"

class ProductMemoryService implements ProductService {
  #products: Product[] = []

  getAll() {
    return this.#products
  }
  create (data: CreateProductDto): Product {
    const newProduct = {
      ...data,
        id: faker.number.int(),
        category: {
          id: data.categoryId,
          name: faker.commerce.department(),
          image: faker.image.url(),
          creationAt: new Date(),
          updatedAt: new Date(),
        },
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    }
    return this.add(newProduct)
  }

  add (product: Product) {
    this.#products.push(product)
    return product
  }

  update (idUpdate: Product['id'], changes: UpdateProductDto): Product {
    const index = this.#products.findIndex(({id}) => id === idUpdate)
    const prevData = this.#products[index]
    this.#products[index] = {
      ...prevData,
      ...changes
    }
    return this.#products[index]
  }

  findOne(id: Product['id']) {
    return this.#products.find((value) => value.id === id)
  }
}

export { ProductMemoryService }
