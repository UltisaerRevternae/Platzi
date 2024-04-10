import { Product } from "./product.model"

const products: Product[] = []

const addProduct = (data: Product): void => {
  products.push(data)
  console.log(products)
}

const printProduct = ({ title, createdAt, stock, size }: Product): Product => {
  return {
    title,
    createdAt,
    stock,
    size
  }
};

export { products , addProduct, printProduct}
