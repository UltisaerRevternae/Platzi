class Vehicle {
  constructor() {
      this.wheels = 0;
      this.doors = 0;
      this.engine = '';
      this.seats = 0;
      // Otros atributos posibles
  }
}
class VehicleBuilder {
  constructor() {
      this.vehicle = new Vehicle();
  }

  setWheels(wheels) {
      this.vehicle.wheels = wheels;
      return this;
  }

  setDoors(doors) {
      this.vehicle.doors = doors;
      return this;
  }

  setEngine(engine) {
      this.vehicle.engine = engine;
      return this;
  }

  setSeats(seats) {
      this.vehicle.seats = seats;
      return this;
  }

  build() {
      return this.vehicle;
  }
}
class CarBuilder extends VehicleBuilder {
  constructor() {
      super();
      this.setWheels(4).setDoors(4);
  }

  addSunroof() {
      this.vehicle.sunroof = true;
      return this;
  }
}

class MotorcycleBuilder extends VehicleBuilder {
  constructor() {
      super();
      this.setWheels(2).setDoors(0);
  }

  addSidecar() {
      this.vehicle.sidecar = true;
      return this;
  }
}

function buildVehicle() {
  const carBuilder = new CarBuilder();
  const car = carBuilder.setEngine('V8').setSeats(5).addSunroof().build();
  console.log('Car:', car);

  const motorcycleBuilder = new MotorcycleBuilder();
  const motorcycle = motorcycleBuilder.setEngine('500cc').addSidecar().build();
  console.log('Motorcycle:', motorcycle);
}

buildVehicle();
