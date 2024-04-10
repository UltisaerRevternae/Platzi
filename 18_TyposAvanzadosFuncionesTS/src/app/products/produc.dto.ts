import { Product } from "./product.model"

interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'>{
  categoryId: string
}
type examplePick = Pick<Product, 'color' | 'description'>

interface UpdateProductDto extends Partial<CreateProductDto> {}

type exampleRequire = Required <Product>

interface FindProductsDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>
}

type exampleReadonly = Readonly <Product>

export { CreateProductDto, UpdateProductDto , FindProductsDto}
