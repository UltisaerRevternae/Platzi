import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { ProductService } from "../models/productService.model";
import { settings } from "../settings";

class ProductHttpService implements ProductService{

  #API = settings.API_PRODUCTS

  async getAll (){
    const response = await fetch(this.#API)
    const data: Product[] = await response.json()
    return data
  }
  async update(id: Product['id'], changes: UpdateProductDto){
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
  async create(dto: CreateProductDto) {
    const response = await fetch(this.#API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto)
    })
    const data: Product = await response.json()
    return data
  }
  async findOne(id: Product['id']): Promise<Product | undefined> {
    const response = await fetch(`${this.#API}/${id}`)
    const data: Product | undefined = await response.json()
    return data
  }

}

export { ProductHttpService }
