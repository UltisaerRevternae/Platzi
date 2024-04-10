import { Product } from "../models/product.model"
import { Category } from "../models/category.model"

interface CreateProductDto extends Omit<Product, 'id' | 'creationAt' | 'updatedAt' | 'category'>{
  categoryId: Category['id']
}

interface UpdateProductDto extends Partial<CreateProductDto> {}

interface FindProductsDto extends Readonly<Partial<Product>> {}

export { CreateProductDto, UpdateProductDto , FindProductsDto}
