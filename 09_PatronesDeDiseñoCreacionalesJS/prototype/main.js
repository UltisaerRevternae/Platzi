class CarProductionLine {
  setAirBags(airBagsNumber) {
    throw new Error("Method not implemented");
  }
  setColor(color) {
    throw new Error("Method not implemented");
  }
  setEdition(edition) {
    throw new Error("Method not implemented");
  }
  resetProductionLine() {
    throw new Error("Method not implemented");
  }
}

class SedanProductionLine extends CarProductionLine {
  constructor({ model }) {
    super();
    this.model = model;
    this.resetProductionLine();
  }
  clone(){
    return new MastodonCar(this)
  }
  setAirBags(howMany) {
    this.sedanCar.airBags = howMany;
    return this;
  }

  setColor(color) {
    this.sedanCar.color = color;
    return this;
  }

  setEdition(edition) {
    this.sedanCar.edition = edition;
    return this;
  }

  setModel() {
    this.sedanCar.model = this.model
  }

  modelTypes() {
    const modelTypes = {
      mastodon: MastodonCar,
      rhino: RhinoCar,
    };
    return modelTypes
  }

  modelVerification(){
    const modelTypes = this.modelTypes()
    const Model = modelTypes[this.model];
    if (!Model) {
      throw new Error("Invalid model type");
    }
    return Model
  }

  resetProductionLine() {
    const Model = this.modelVerification()
    this.sedanCar = new Model();
  }


  build() {
    this.setModel()
    const sedanCar = this.sedanCar;
    this.resetProductionLine();
    return sedanCar;
  }
}

class Car {
  #edition;
  #model;
  #airBags;
  #color;
  constructor() {
    this.#edition = "";
    this.#model = "";
    this.#airBags = 2;
    this.#color = "black";
  }
  set airBags(howMany) {
    this.#airBags = howMany;
  }
  set color(color) {
    this.#color = color;
  }
  set edition(edition) {
    this.#edition = edition;
  }
  set model(model) {
    this.#model = model;
  }
  clone() {
    throw new Error("Method not implemented");
  }
}

class MastodonCar extends Car {
  constructor() {
    super();
  }
}

class RhinoCar extends Car {
  constructor() {
    super();
  }
}

class Director {
  setProductionLine(productionLine) {
    this.productionLine = productionLine;
  }
  constructCvtEdition() {
    this.productionLine.setAirBags(4).setColor("blue").setEdition("CVT");
  }
  constructSignatureEdition() {
    this.productionLine.setAirBags(8).setColor("red").setEdition("signature");
  }
}

function appBuilder(director) {
  const mastodonSedanProductionLine = new SedanProductionLine({model: 'rhino'});
  director.setProductionLine(mastodonSedanProductionLine);
  director.constructCvtEdition();
  const mastodonSedanCvt = mastodonSedanProductionLine.build();
  const copyMastodonSedanCvt = mastodonSedanCvt.clone()
  console.log(mastodonSedanCvt);
  console.log(copyMastodonSedanCvt);

  director.constructSignatureEdition()
  const mastodonSedanSignature = mastodonSedanProductionLine.build()
  console.log(mastodonSedanSignature)
}
appBuilder(new Director());