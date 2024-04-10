const COUPONS = {
  'NewClient': { discount: 15, use: 7 },
  'Welcome2024': { discount: 20, use: 1 },
  'SummerFest': { discount: 10, use: 5 },
  'WinterDeal': { discount: 25, use: 3 },
  'WeekendSale': { discount: 30, use: 2 },
  'NightShopping': { discount: 40, use: 1 },
  'MoneySavingMonday': { discount: 10, use: 10 },
  'ShopAnniversary': { discount: 50, use: 1 },
  'FriendsDiscount': { discount: 15, use: 4 },
  'HappyHourSale': { discount: 35, use: 2 }
}

const PRODUCTS = {
  'SmartphoneX': { price: 799, quantity: 50 },
  'LaptopPro': { price: 1200, quantity: 30 },
  'HeadphonesBT': { price: 150, quantity: 100 },
  'SmartWatch2024': { price: 250, quantity: 40 },
  'Tablet8Inch': { price: 300, quantity: 60 },
  'WirelessCharger': { price: 50, quantity: 150 },
  'BluetoothSpeaker': { price: 100, quantity: 80 },
  'ExternalHardDrive1TB': { price: 120, quantity: 70 },
  'USBTypeCCable': { price: 15, quantity: 200 },
  'ErgonomicKeyboard': { price: 80, quantity: 90 }
};

const purchase1 = [
  { productName: 'SmartphoneX', quantity: 1 },
  { productName: 'HeadphonesBT', quantity: 2 },
  { productName: 'USBTypeCCable', quantity: 3 }
];

const purchase2 = [
  { productName: 'LaptopPro', quantity: 1 },
  { productName: 'BluetoothSpeaker', quantity: 2 },
  { productName: 'WirelessCharger', quantity: 1 }
];

const purchase3 = [
  { productName: 'Tablet8Inch', quantity: 1 },
  { productName: 'ErgonomicKeyboard', quantity: 1 },
  { productName: 'ExternalHardDrive1TB', quantity: 2 }
];

class User {
  constructor({
    name,
    cash,
    age,
    shopping = []
  }) {
    this.name = name;
    this.cash = cash;
    this.age = age;
    this.shopping = shopping
  }

  validateCoupons(coupon) {
    const discount = []
    coupon.forEach((element) => {
      if (COUPONS[element] !== undefined && COUPONS[element].use > 0) {
        discount.push(COUPONS[element].discount)
        COUPONS[element].use--
      } else {
        console.log(`El cupon ${element} no es valido`)
      }
    })
    return discount
  }

  shoppingProducts(products, coupons) {
    const shoppingCard = []
    let total = 0

    products.forEach((element) => {
      if (!!PRODUCTS[element.productName]) {
        if (PRODUCTS[element.productName].quantity > element.quantity) {
          PRODUCTS[element.productName].quantity -= element.quantity;
          shoppingCard.push({
            name : element.productName,
            price:  PRODUCTS[element.productName].price * element.quantity,
            quantity: element.quantity
          })
        }
      }
    })

    this.validateCoupons(coupons).forEach((discount, index) => {
      const newPrice = ((shoppingCard[index].price * (100 - discount)) / 100)
      shoppingCard[index].price = newPrice
    })

    shoppingCard.forEach(({price}) => total+= price)
    this.cash = this.cash - total
    this.shopping.push({item : shoppingCard, total: total})

  }
  viewShoppings() {
    return this.shopping
  }
  viewCahs() {
    return this.cash
  }
}

const juan = new User({ name: 'Juan' , cash: 10000, age: 19})
juan.shoppingProducts(purchase1, ['NewClient', 'ShopAnniversary'])
console.log(juan.viewShoppings())
console.log(juan.viewCahs())
juan.shoppingProducts(purchase2, ['MoneySavin Monday', 'WeekendSale' , 'WeekendSale'])
console.log(juan.viewShoppings())
console.log(juan.viewCahs())
