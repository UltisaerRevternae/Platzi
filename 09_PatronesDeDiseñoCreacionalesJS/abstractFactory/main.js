class MastodonCar {
  useGPS() {
    throw new Error('Method not implemented')
  }
}
class RhinoCar {
  useGPS() {
    throw new Error('Method not implemented')
  }
}

class MastodonSedanCar extends MastodonCar{
  useGPS() {
    return '[SEDAN] Mastodon GPS '
  }
}
class MastodonHatchbackCar extends MastodonCar{
  useGPS() {
    return '[HATCHBACK] Mastodon GPS '
  }
}
class RhinoSedanCar extends RhinoCar{
  useGPS() {
    return '[SEDAN] Rhino GPS '
  }
}
class RhinoHatchbackCar extends RhinoCar{
  useGPS() {
    return '[HATCHBACK] Rhino GPS '
  }
}


class CarAbstractFactory {
  createMastodon(){
    throw new Error('Method not implemented')
  }
  createRhino(){
    throw new Error('Method not implemented')
  }
}

class SedanCarFactory extends CarAbstractFactory{
  createMastodon(){
    return new MastodonSedanCar()
  }
  createRhino(){
    return new RhinoSedanCar()
  }
}
class HatchbackCarFactory {
  createMastodon(){
    return new MastodonHatchbackCar()
  }
  createRhino(){
    return new RhinoHatchbackCar()
  }
}

function appCarFactory(factory) {
  const mastodon = factory.createMastodon()
  const rhino = factory.createRhino()

  console.log(mastodon.useGPS())
  console.log(rhino.useGPS())
}
// appCarFactory(new HatchbackCarFactory())
// appCarFactory(new SedanCarFactory())

function createFactory(type) {
  const factories = {
    sedan: SedanCarFactory,
    hatchBack: HatchbackCarFactory
  }
  const Factory = factories[type]
  if (!Factory) {
    throw new Error(`Car type '${type}' is not recognized`);
  }
  return new Factory()
}

appCarFactory(createFactory('sedan'))
appCarFactory(createFactory('hatchBack'))