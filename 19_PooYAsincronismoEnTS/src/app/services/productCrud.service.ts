import { UpdateProductDto } from "../dtos/product.dto"
import { Product } from "../models/product.model"
import { settings } from "../settings"
import { BaseHttpService } from "./baseHttp.service"
import { ProductHttp2Service } from "./productHttp2.service"

class ProductCrudService {
  #url = settings.API_PRODUCTS
  #http = new ProductHttp2Service(this.#url)

  async update(id: Product['id'], dto: UpdateProductDto) {
    return this.#http.update(id, dto)
  }
}

export { ProductCrudService }
