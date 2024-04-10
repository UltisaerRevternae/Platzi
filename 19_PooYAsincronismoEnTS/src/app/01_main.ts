import { Product } from "./models/product.model";

(async () => {

  const getProducts = async () => {
    const promise = await fetch('https://api.escuelajs.co/api/v1/products')
    const data: Product[] = await promise.json()

    return data
  }

  const products = await getProducts()
  console.log(products.map((value) => ` ${value.title} --- ${value.price} `))

})();
