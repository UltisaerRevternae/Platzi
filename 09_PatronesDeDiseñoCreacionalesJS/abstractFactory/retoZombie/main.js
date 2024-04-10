// BASE
class HeadZombie {
  useRenderHeads() {
    throw new Error('Method not implemented')
  }
}
class ArmsZombie {
  useRenderArms() {
    throw new Error('Method not implemented')
  }
}
class ShirtZombie {
  useRenderShirt() {
    throw new Error('Method not implemented')
  }
}
class ShoesZombie {
  useRenderShoes(){
    throw new Error('Method not implemented')
  }
}
class TypeZombie {
  setTypeZombie(){
    throw new Error('Method not implemented')
  }
}

// COMPORTAMIENTOS INDIVIDUALES
// HEAD
class HeadZombieDestroyed extends HeadZombie {
  useRenderHeads() {
    return 'HeadZombieDestroyed'
  }
}
class HeadZombieNew extends HeadZombie {
  useRenderHeads() {
    return 'HeadZombieNew'
  }
}
class HeadZombiePartial extends HeadZombie {
  useRenderHeads() {
    return 'HeadZombiePartial'
  }
}
// ARMS
class ArmsZombieIntact extends ArmsZombie {
  useRenderArms() {
    return 'ArmsZombieIntact';
  }
}
class ArmsZombieBroken extends ArmsZombie {
  useRenderArms() {
    return 'ArmsZombieBroken';
  }
}
class ArmsZombieMissing extends ArmsZombie {
  useRenderArms() {
    return 'ArmsZombieMissing';
  }
}
// SHIRT
class ShirtZombieTattered extends ShirtZombie {
  useRenderShirt() {
    return 'ShirtZombieTattered';
  }
}
class ShirtZombieBloody extends ShirtZombie {
  useRenderShirt() {
    return 'ShirtZombieBloody';
  }
}
class ShirtZombieClean extends ShirtZombie {
  useRenderShirt() {
    return 'ShirtZombieClean';
  }
}
// SHOES
class ShoesZombieOld extends ShoesZombie {
  useRenderShoes() {
    return 'ShoesZombieOld';
  }
}
class ShoesZombieTorn extends ShoesZombie {
  useRenderShoes() {
    return 'ShoesZombieTorn';
  }
}
class ShoesZombieMissing extends ShoesZombie {
  useRenderShoes() {
    return 'ShoesZombieMissing';
  }
}
// TYPE 
class TypeZombieWalker extends TypeZombie {
  setTypeZombie() {
    return 'TypeZombieWalker';
  }
}
class TypeZombieRunner extends TypeZombie {
  setTypeZombie() {
    return 'TypeZombieRunner';
  }
}
class TypeZombieCrawler extends TypeZombie {
  setTypeZombie() {
    return 'TypeZombieCrawler';
  }
}

// FACTORY
class ZombieAbstractFactory {
  createHead(){ throw new Error('Method not implemented') }
  createArms(){ throw new Error('Method not implemented') }
  createShirt(){ throw new Error('Method not implemented') }
  createShoes(){ throw new Error('Method not implemented') }
  createType(){ throw new Error('Method not implemented') }
}

// NEW ZOMBIES
class ZombieRunnerWornOut extends ZombieAbstractFactory{
  createHead() { return new HeadZombieDestroyed()}
  createArms() { return new ArmsZombieBroken()}
  createShirt() { return new ShirtZombieTattered()}
  createShoes() { return new ShoesZombieOld()}
  createType() { return new TypeZombieRunner()}
}
class ZombieWalkerNew extends ZombieAbstractFactory {
  createHead() { return new HeadZombieNew(); }
  createArms() { return new ArmsZombieIntact(); }
  createShirt() { return new ShirtZombieClean(); }
  createShoes() { return new ShoesZombieNew(); }
  createType() { return new TypeZombieWalker(); }
}
class ZombieCrawlerTattered extends ZombieAbstractFactory {
  createHead() { return new HeadZombiePartial(); }
  createArms() { return new ArmsZombieMissing(); }
  createShirt() { return new ShirtZombieBloody(); }
  createShoes() { return new ShoesZombieTorn(); }
  createType() { return new TypeZombieCrawler(); }
}
class ZombieRunnerIntact extends ZombieAbstractFactory {
  createHead() { return new HeadZombieNew(); }
  createArms() { return new ArmsZombieIntact(); }
  createShirt() { return new ShirtZombieClean(); }
  createShoes() { return new ShoesZombieNew(); }
  createType() { return new TypeZombieRunner(); }
}
class ZombieWalkerDestroyed extends ZombieAbstractFactory {
  createHead() { return new HeadZombieDestroyed(); }
  createArms() { return new ArmsZombieBroken(); }
  createShirt() { return new ShirtZombieTattered(); }
  createShoes() { return new ShoesZombieOld(); }
  createType() { return new TypeZombieWalker(); }
}
class ZombieCrawlerNew extends ZombieAbstractFactory {
  createHead() { return new HeadZombieNew(); }
  createArms() { return new ArmsZombieIntact(); }
  createShirt() { return new ShirtZombieClean(); }
  createShoes() { return new ShoesZombieNew(); }
  createType() { return new TypeZombieCrawler(); }
}
class ZombieRunnerBloody extends ZombieAbstractFactory {
  createHead() { return new HeadZombiePartial(); }
  createArms() { return new ArmsZombieMissing(); }
  createShirt() { return new ShirtZombieBloody(); }
  createShoes() { return new ShoesZombieTorn(); }
  createType() { return new TypeZombieRunner(); }
}
class ZombieWalkerPartial extends ZombieAbstractFactory {
  createHead() { return new HeadZombiePartial(); }
  createArms() { return new ArmsZombieBroken(); }
  createShirt() { return new ShirtZombieBloody(); }
  createShoes() { return new ShoesZombieTorn(); }
  createType() { return new TypeZombieWalker(); }
}
class ZombieCrawlerOld extends ZombieAbstractFactory {
  createHead() { return new HeadZombieDestroyed(); }
  createArms() { return new ArmsZombieMissing(); }
  createShirt() { return new ShirtZombieTattered(); }
  createShoes() { return new ShoesZombieOld(); }
  createType() { return new TypeZombieCrawler(); }
}
class ZombieRunnerTattered extends ZombieAbstractFactory {
  createHead() { return new HeadZombiePartial(); }
  createArms() { return new ArmsZombieBroken(); }
  createShirt() { return new ShirtZombieTattered(); }
  createShoes() { return new ShoesZombieTorn(); }
  createType() { return new TypeZombieRunner(); }
}
class ZombieWalkerBloody extends ZombieAbstractFactory {
  createHead() { return new HeadZombieNew(); }
  createArms() { return new ArmsZombieIntact(); }
  createShirt() { return new ShirtZombieBloody(); }
  createShoes() { return new ShoesZombieNew(); }
  createType() { return new TypeZombieWalker(); }
}
class ZombieCrawlerBroken extends ZombieAbstractFactory {
  createHead() { return new HeadZombieDestroyed(); }
  createArms() { return new ArmsZombieBroken(); }
  createShirt() { return new ShirtZombieTattered(); }
  createShoes() { return new ShoesZombieOld(); }
  createType() { return new TypeZombieCrawler(); }
}
class ZombieRunnerClean extends ZombieAbstractFactory {
  createHead() { return new HeadZombieNew(); }
  createArms() { return new ArmsZombieIntact(); }
  createShirt() { return new ShirtZombieClean(); }
  createShoes() { return new ShoesZombieNew(); }
  createType() { return new TypeZombieRunner(); }
}
class ZombieWalkerMissing extends ZombieAbstractFactory {
  createHead() { return new HeadZombiePartial(); }
  createArms() { return new ArmsZombieMissing(); }
  createShirt() { return new ShirtZombieBloody(); }
  createShoes() { return new ShoesZombieTorn(); }
  createType() { return new TypeZombieWalker(); }
}
class ZombieCrawlerIntact extends ZombieAbstractFactory {
  createHead() { return new HeadZombieNew(); }
  createArms() { return new ArmsZombieIntact(); }
  createShirt() { return new ShirtZombieClean(); }
  createShoes() { return new ShoesZombieNew(); }
  createType() { return new TypeZombieCrawler(); }
}

// FACTORY 
function appZombieRenderFactory(factory){
  const renderZombie = {
    head: factory.createHead(),
    arms: factory.createArms(),
    shirt: factory.createShirt(),
    shoes: factory.createShoes(),
    type: factory.createType(),
  }
  return renderZombie
}

// POSIBILITY_ZOMBIES
function renderZombie(type) {
  const zombiesList = {
    runnerWornOut : ZombieRunnerWornOut , 
    walkerNew : ZombieWalkerNew ,
    crawlerTattered : ZombieCrawlerTattered ,
    runnerIntact : ZombieRunnerIntact ,
    walkerDestroyed : ZombieWalkerDestroyed ,
    crawlerNew : ZombieCrawlerNew ,
    runnerBloody : ZombieRunnerBloody ,
    walkerPartial : ZombieWalkerPartial ,
    crawlerOld : ZombieCrawlerOld ,
    runnerTattered : ZombieRunnerTattered ,
    walkerBloody : ZombieWalkerBloody ,
    crawlerBroken : ZombieCrawlerBroken ,
    runnerClean : ZombieRunnerClean ,
    walkerMissing : ZombieWalkerMissing ,
    crawlerIntact : ZombieCrawlerIntact ,
  }
  const Zombie = zombiesList[type]
  if (!Zombie) {
    throw new Error(`This zombie '${type}' is not recognized`);
  }
  return new Zombie()
}

console.log(appZombieRenderFactory(renderZombie('runnerWornOut')))
console.log(appZombieRenderFactory(renderZombie('walkerPartial')))
console.log(appZombieRenderFactory(renderZombie('walkerMissing')))
console.log(appZombieRenderFactory(renderZombie('crawlerTattered')))