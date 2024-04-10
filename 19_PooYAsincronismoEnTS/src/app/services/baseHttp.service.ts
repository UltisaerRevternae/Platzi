import { UpdateProductDto } from "../dtos/product.dto";
import { Category } from "../models/category.model"
import { Product } from "../models/product.model";

import { settings } from "../settings";

class BaseHttpService<TypeClass> {
  // data: TypeClass[] = []
  // #API = settings.API_PRODUCTS
  #API : string;

  constructor (API: string) {
    this.#API = API
  }

  async getAll(): Promise<TypeClass[]> {
    const response = await fetch(this.#API)
    const data: TypeClass[] = await response.json()
    return data
  }

  async update<ID, DTO>(id: ID, changes: DTO){
    const response = await fetch(`${this.#API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes)
    })

    const data: Product = await response.json()
    return data
  }
}

// const service = new BaseHttpService<Category>(settings.API_PRODUCTS)
// service.getAll()

(async() => {
  const productService = new BaseHttpService<Product>(settings.API_PRODUCTS)
  console.log(await productService.getAll())

  console.log('---'.repeat(15))
  const categoryService = new BaseHttpService<Category>(settings.API_CATEGORIES)
  const dataCategory = await categoryService.getAll()
  console.log(dataCategory)
  console.log('---'.repeat(15))
  categoryService.update<Product['id'], UpdateProductDto>(5, {
    title: 'Try TEST',

  })

})()

export { BaseHttpService }
