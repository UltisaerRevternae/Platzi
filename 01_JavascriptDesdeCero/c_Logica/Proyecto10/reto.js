const adivinanzas = {
  Leon: 'Rey de la selva',
  Elefante: 'Es un animal grande gris',
  Gato: 'Maulla'
}

let intentos = 3

aleatory = () => Math.floor(Math.random() * keys.length);

const keys = Object.keys(adivinanzas);
const claveAleatoria = keys[aleatory()];
const valorAleatorio = adivinanzas[claveAleatoria];

let user;
do {
  if (intentos === 3) {
    user = prompt(`Adivina la palabra secreta una pista es:\n${valorAleatorio}`)
  } else {
    user = prompt(`Fallaste aun te quedan ${intentos} intentos\nRecuerda la pista es: ${valorAleatorio}`)
  }
  
  if (user.toLowerCase() === claveAleatoria.toLowerCase()) {
    alert('Felicidades adivinaste la palabra');
    break;
  }

  intentos--;
} while (intentos > 0);

if (intentos === 0 && user !== claveAleatoria) {
  alert('Has perdido, la palabra correcta era: ' + claveAleatoria);
}