class Product {
  #data
  static #ALL_PRODUCTS = [];

  constructor({ id, name, cost }) {
    this.#data = new Map();
    this.#data.set('id', id);
    this.#data.set('name', name);
    this.#data.set('cost', cost);

    this.#data.forEach((value, key) => {
      if (!value) {
        throw new Error(`El valor para '${key}' no puede estar vacío.`);
      }
    });

    const obj = {};
    this.#data.forEach((value, key) => {
      obj[key] = value;
    });
    Product.#ALL_PRODUCTS.push(obj);
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

  static getProducts() {
    return Product.#ALL_PRODUCTS
  }

}

const coke = new Product({id: 235463 , name: 'Coke' , cost: 50.000 })
const apple = new Product({id: 245641, name: 'Apple' , cost: 80.000 })
const banana = new Product({id: 34354132 , name: 'Banana' , cost: 20.000 })
const coconut = new Product({id: 2424545 , name: 'Coconut' , cost: 10.000 })
const meat = new Product({id: 25452 , name: 'Meat' , cost: 30.000 })
const pineapple = new Product({id: 2452 , name: 'Pineapple' , cost: 980.000 })

class ShoppingCar {
  #productsAvailable = Product.getProducts()
  #userId
  
  static #USER_CARS = new Map();
  
  constructor(userId) {
    this.#userId = userId
    this.productsSelect = []
  }

  static newUser(userId) {
    if (!ShoppingCar.#USER_CARS.has(userId)) {
      const newCar = new ShoppingCar(userId);
      this.#USER_CARS.set(userId, newCar);
      return newCar;
    } else {
      return this.#USER_CARS.get(userId);
    }
  }

  #addProduct(type, product) {
    this.#productsAvailable.forEach((element, index) => { 
      if (element[type] === product) {
        this.productsSelect.push(this.#productsAvailable.splice(index, 1)[0])
      }
    })
  }
  
  addProductByName(product) {
    this.#addProduct('name', product); 
  }
  addProductById(product) {
    this.#addProduct('id', product); 
  }

  #deleteProduct(type, product){
    this.productsSelect.forEach((element, index) => {
      if (element[type] === product) {
        this.#productsAvailable.push(this.productsSelect.splice(index, 1)[0])
      }
    })
  }

  deleteProductByName(product) {
    this.#deleteProduct('name', product)
  }
  deleteProductById(product) {
    this.#deleteProduct('id', product)
  }
}

const user1 = ShoppingCar.newUser('112424254')
const user2 = ShoppingCar.newUser('36')
const user3 = ShoppingCar.newUser('112424254')
user1.addProductByName('Coke')
user1.addProductByName('Meat')
user1.addProductById(2452)
user1.deleteProductById(2452)
console.log(user1)