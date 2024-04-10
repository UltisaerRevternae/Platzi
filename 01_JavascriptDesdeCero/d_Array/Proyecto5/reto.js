const typeCard = ["♠", "♥", "♦", "♣"];
const valueCard = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const deckOfCard = [];
const deckOfCardPlayer = {};

(() => {
  for (let i = 0; i < typeCard.length; i++) {
    for (let a = 0; a < valueCard.length; a++) {
      const card = valueCard[a] + " " + typeCard[i];
      deckOfCard.push(card);
    }
  }
})();

aletory = (max) => Math.floor(Math.random() * max);

shuffleDeck = () => {
  const numberOfIterations = aletory(30)
  for(let a = 0; a < numberOfIterations; a ++) {
    for (let i = (deckOfCard.length) - 1 ; i >= 0; i--){
      j = aletory(i + 1)

      let temp = deckOfCard[i];
      deckOfCard[i] = deckOfCard[j]; 
      deckOfCard[j] = temp;

      // [deckOfCard[i],deckOfCard[j]]=[deckOfCard[j],deckOfCard[i]]
    }
  }

};

rangeTableCards = () => {
  const min = parseInt((deckOfCard.length * 20) / 100);
  const max = parseInt((deckOfCard.length * 25) / 100);
  return tableCards = Array.from({length: max - min + 1}, (v, i) => min + i);
}

players = (numberPlayer) => {
  if(numberPlayer < 2 || numberPlayer > 10) {
    console.log('Los sentimos la cantidad de jugadores permitidos es de:\n2 a 10 Jugadores estableceremos 2 jugadores por defecto')
    rangeTableCards()
    for (let i = 0; i < tableCards.length; i++) {  
      const cardsPlayer = parseInt((deckOfCard.length - tableCards[i]) / 2)

      if (cardsPlayer % 2 === 0) {
        cardByPlayers(cardsPlayer, 2)
        break;
      }
      
    }
  } else {
    rangeTableCards()
    for (let i = 0; i < tableCards.length; i++) {  
      const cardsPlayer = parseInt((deckOfCard.length - tableCards[i]) / numberPlayer)

      if (cardsPlayer % 2 === 0) {
        cardByPlayers(cardsPlayer, numberPlayer)
        break;
      }
      
    }
  }
}

cardByPlayers = (amount, players) => {
  for(let i = 0; i < players; i ++) { // Cantidad de jugadores
    let playerName = `Player ${i + 1}`; 
    deckOfCardPlayer[playerName] = []

    for(let p = 0; p < amount; p ++) { // Cantidad de cartas dadas
      let j = aletory(deckOfCard.length)
      let cardGiven = deckOfCard.splice(j, 1)
      deckOfCardPlayer[playerName].push(cardGiven) 
    }

    deckOfCardPlayer[playerName] = deckOfCardPlayer[playerName].flat()
  }
}

console.log("\n Baraja inicial: ", deckOfCard , "\n");
shuffleDeck();
console.log("Baraja aleatoria: ", deckOfCard , "\n");
players(10)
console.log("\nCartas por jugador", deckOfCardPlayer , "\n");
console.log("Baraja sobrante: ", deckOfCard , "\n");