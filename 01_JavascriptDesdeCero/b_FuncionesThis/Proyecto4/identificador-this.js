// Enlace implicito

const house = {
  dogName: "Fido",
  dogGreeting: function () {
    console.log(`Hi, I'm ${this.dogName}`);
  },
};
house.dogGreeting();

// Enlace explicito
function dogGreeting() {
  console.log(`Hi, I'm ${this.dogName}`);
}

const newHouse = { dogName: "Coconut" };
dogGreeting.call(newHouse); // vinculacion

function newDogGreeting(owner, address) {
  console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = 'Licy'
const addres = 'Avenue AC 5DSA'
// Manda el contexto owner y direccion
newDogGreeting.call(newHouse, owner, addres)