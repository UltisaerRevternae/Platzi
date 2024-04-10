class Product {
  static #ALL_PRODUCTS = [];
  #data;

  constructor({ id, name, cost, stock }) {
    this.#data = new Map();
    this.#data.set('id', id);
    this.#data.set('name', name);
    this.#data.set('cost', cost);
    this.#data.set('stock', stock);

    this.#data.forEach((value, key) => {
      if (value == null) {
        throw new Error(`El valor para '${key}' no puede estar vacío.`);
      }
    });

    Product.#ALL_PRODUCTS.push(this);
  }

  getName() {
    return this.#data.get('name');
  }

  getCost() {
    return this.#data.get('cost');
  }

  getId() {
    return this.#data.get('id');
  }

  getStock() {
    return this.#data.get('stock');
  }

  setStock(newStock) {
    this.#data.set('stock', newStock);
  }

  static getProducts() {
    return Product.#ALL_PRODUCTS;
  }
}

class ShoppingCar {
  static #USER_CARS = new Map();
  #userId;
  productsSelect = [];

  constructor(userId) {
    this.#userId = userId;
  }

  static newUser(userId) {
    if (!ShoppingCar.#USER_CARS.has(userId)) {
      const newCar = new ShoppingCar(userId);
      ShoppingCar.#USER_CARS.set(userId, newCar);
      return newCar;
    } else {
      console.log('User existing');
      return ShoppingCar.#USER_CARS.get(userId);
    }
  }

  #changeStock(product, amount) {
    const productObj = Product.getProducts().find(p => p.getId() === product.getId());
    if (productObj) {
      const currentStock = productObj.getStock();
      if (currentStock + amount >= 0) {
        productObj.setStock(currentStock + amount);
      } else {
        throw new Error('No hay suficiente stock del producto.');
      }
    }
  }

  addProduct(product) {
    this.#changeStock(product, -1);
    this.productsSelect.push(product);
  }

  deleteProduct(product) {
    this.#changeStock(product, 1);
    this.productsSelect = this.productsSelect.filter(p => p.getId() !== product.getId());
  }
}
