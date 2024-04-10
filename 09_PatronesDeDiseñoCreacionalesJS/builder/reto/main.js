class PizzaProduction {
  size(value) {
    throw new Error("Method not implemented");
  }
  typeDough(value) {
    throw new Error("Method not implemented");
  }
  ingredients(value) {
    throw new Error("Method not implemented");
  }
  extra(value) {
    throw new Error("Method not implemented");
  }
}
class PizzaBuilder extends PizzaProduction {
  constructor({ typePizza }) {
    super();
    this.typePizza = typePizza;
    this.resetProductionPizza();
  }
  
  size(value) {
    this.pizza.size = value;
    return this;
  }
  typeDough(value) {
    this.pizza.typeDough = value;
    return this;
  }
  ingredients(value) {
    this.pizza.ingredients = value;
    return this;
  }
  extra(value) {
    this.pizza.extra = value;
    return this;
  }
  typePizzaSelect() {
    this.pizza.type = this.typePizza;
  }
  typePizzaList() {
    const listPizza = {
      mexican: MexicanPizza,
      hawaiana: HawaianaPizza,
    };
    return listPizza;
  }
  checkListPizza() {
    const listPizza = this.typePizzaList();
    const ModelTypePizza = listPizza[this.typePizza];
    if (!ModelTypePizza) {
      throw new Error("Invalid model type");
    }
    return ModelTypePizza;
  }

  resetProductionPizza() {
    const Pizza = this.checkListPizza();
    this.pizza = new Pizza();
  }

  build() {
    this.typePizzaSelect();
    const pizza = this.pizza;
    this.resetProductionPizza();
    return pizza;
  }
}

class Pizza {
  #size;
  #typeDough;
  #ingredients;
  #extra;
  #type;
  constructor() {
    this.#size = "Middle"; // Especificar tamaños posibles
    this.#typeDough = "Normal"; // Especificar tamaños posibles
    this.#ingredients = ["Cheese"];
    this.#extra = {};
    this.#type = "";
  }
  set size(value){
    this.#size = value
  }
  set typeDough(value){
    this.#typeDough = value
  }
  set ingredients(value){
    this.#ingredients = value
  }
  set extra(value){
    this.#extra = value
  }
  set type(value){
    this.#type = value
  }
}

class HawaianaPizza extends Pizza {
  constructor() {
    super();
  }
}

class MexicanPizza extends Pizza {
  constructor() {
    super();
  }
}

class Director {
  setProductionPizza(pizza) {
    this.pizza = pizza;
  }
  pizzaSmall() {
    this.pizza
      .size("small")
      .typeDough("slim")
      .ingredients({
        base: ["Cheese", "Parmesan"],
        toppings: ["Aji"],
      })
      .extra({ seasoning: "Oregano" });
  }

  pizzaMedium() {
    this.pizza
      .size("medium")
      .typeDough("classic")
      .ingredients({
        base: ["Mozzarella", "Ham"],
        toppings: ["Mushrooms", "Olives"],
      })
      .extra({ sauce: "Tomato", seasoning: "Oregano" });
  }

  pizzaFamily() {
    this.pizza
      .size("family")
      .typeDough("thick")
      .ingredients({
        base: ["Pepperoni", "Bell Peppers"],
        toppings: ["Onions", "Sausage"],
      })
      .extra({ sauce: "Barbecue", cheese: "Gouda" });
  }

  pizzaSpecial() {
    this.pizza
      .size("special")
      .typeDough("stuffedCrust")
      .ingredients({
        base: ["Four Cheese", "Bacon"],
        toppings: ["Artichokes", "Cherry Tomatoes"],
      })
      .extra({ sauce: "Pesto", topping: "Arugula" });
  }
}

function appPizza (director) {
  const productionPizzaHawaiana = new PizzaBuilder({typePizza: 'hawaiana'});
  director.setProductionPizza(productionPizzaHawaiana);
  
  director.pizzaSmall();
  const smallPizzaHawaiana = productionPizzaHawaiana.build(); // Guarda la pizza pequeña

  director.pizzaFamily();
  const familyPizzaHawaiana = productionPizzaHawaiana.build(); 

  const productionPizzaMexican = new PizzaBuilder({typePizza: 'mexican'});
  director.setProductionPizza(productionPizzaMexican);

  director.pizzaFamily();
  const familyPizzaMexican = productionPizzaMexican.build(); // Guarda la pizza familiar mexicana

  director.pizzaSpecial();
  const specialPizzaMexican = productionPizzaMexican.build(); 

  console.log(smallPizzaHawaiana);
  console.log(familyPizzaHawaiana);
  console.log(familyPizzaMexican);
  console.log(specialPizzaMexican);
}
appPizza(new Director());
