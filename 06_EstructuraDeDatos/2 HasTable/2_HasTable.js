class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  // Current bukect es el array del contenedor de los elemenentos que necesitamos
  // Dentro de el puede haber 0 1 o mas elementos por tanto iteramos y comparamos hasta encontrar coincidencias
  get(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      console.log(address )
      for(let i = 0; i < currentBucket.length; i++){
        console.log(currentBucket[i])
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1])
          return currentBucket[i][1]
        }
      } 
    }
    return undefined
  }

  
  splice(key) {
    const address = this.hashMethod(key) // el key del objeto 
    console.log(address)
    const currentBucket = this.data[address] // ingreso al objeto
    console.log(currentBucket)
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        console.log(i)
        if (currentBucket[i][0] === key) {
          console.log(currentBucket.splice(i , 1))
          return currentBucket[i][1]
        }
      } 
    }
  }
  delete(key){
    const address = this.hashMethod(key) // el key del objeto 
    const currentBucket = this.data[address] // ingreso al objeto
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket.splice(i, 1)[0]
        }
      }
    }
  }

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }

  getKeys() {
    return this.data.flat().map((item) => item[0])
  }
}

// eliminar todo el elemento con el jey
// obtener todos los key pasarle el metodo

const myHashTable = new HashTable(50);

myHashTable.set('Alice', 12345)
myHashTable.set('Bob', 67890)
myHashTable.set('Charlie', 54321)
myHashTable.set('David', 98765)
myHashTable.set('Eva', 24680)
myHashTable.set('Frank', 13579)
myHashTable.set('Grace', 11111)
myHashTable.set('Hannah', 22222)
myHashTable.set('Isabel', 33333)
myHashTable.set('Jack', 44444)
myHashTable.set('Katherine', 55555)
myHashTable.set('Liam', 66666)
myHashTable.set('Mia', 77777)
myHashTable.set('Noah', 88888)
myHashTable.set('Olivia', 99999)
myHashTable.set('Parker', 101010)
myHashTable.set('Quinn', 202020)
myHashTable.set('Rachel', 303030)
myHashTable.set('Samuel', 404040)
myHashTable.set('Tessa', 505050)

// myHashTable.get('Tessa')
