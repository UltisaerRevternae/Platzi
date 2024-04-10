// const array = ['Maria', 'Karen', 'July']
// array.push('Anais')

// // delete array[3]
// console.log(array)

class ArrayPrototype {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.switfIndex(index);
    return item;
  }
  // El metodo sobreescribe cada contenido entonces impostor sera elemento siguiente y elemento siguiente sera elemento siguiente siguiente y asi entonces el ultimo y penultimo elemento seran iguales entonces se elimina el ultimo y sha
  switfIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  shift(){
    if (this.length === 0) {
      return undefined
    }
    
    const firstItem = this.data[0]

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    
    this.length--
    delete this.data[this.length]
    return firstItem
  }

  unshift(item){
    for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.length
  }
}

const names = new ArrayPrototype();

names.push("New name 1");
names.push("New name 2");
names.push("New name 3");
console.log(names);
