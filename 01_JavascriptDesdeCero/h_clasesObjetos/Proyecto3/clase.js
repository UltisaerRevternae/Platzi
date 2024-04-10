// Molde para construir un objeto
class Persona {
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(
      `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} aÃ±os.`
    );
  }
}
const persona1 = new Persona("Mariana", 25);
persona1.dinero = 'adsadasd'
persona1.saludar();
console.log(persona1)
