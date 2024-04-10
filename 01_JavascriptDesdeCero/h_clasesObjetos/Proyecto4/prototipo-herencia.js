class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log(`El animal ${this.nombre} emite un sonido`);
  }
}

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }
  emitirSonidoPersonalizado() {
    console.log("Guagu guau");
  }
  corre() {
    console.log(`${this.nombre} Corre alegremente`);
  }
}

const perro1 = new Perro("Juan", "pERRO", "Buldog");
perro1.emitirSonido();
perro1.emitirSonidoPersonalizado();
perro1.corre();
console.log(perro1);

Perro.prototype.ladrar = function() {
  console.log("Guau!");
};

perro1.ladrar()

console.log(perro1);
