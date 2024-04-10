// Metodos que iteran sobre el array
// No modifican el array original crean uno nuevo 

// map() transforma el nuevo array
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(numbers);
console.log(squaredNumbers);

// forEach() itera pero no crea un nuevo array
const colors = ["red", "pink", "blue"];
const iteratedColors = colors.forEach((color) => console.log(color));
console.log(colors);
console.log(iteratedColors);

// reto
const temperaturesInFahrenheit = [30, 32, 68, 95, 104, 212];

const temperaturesInCelsius = temperaturesInFahrenheit.map((fahrenheit) => parseFloat(((5/9) * (fahrenheit - 32)).toFixed(2)))

console.log("Temperatures In Fahrenheit: ", temperaturesInFahrenheit);
console.log("Temperatures In Celsius: ", temperaturesInCelsius);

// suma de los elementos de un array

let x = 0
const arrayData = [30, 32, 68, 95, 104, 212];
arrayData.forEach((sum) => x += sum)
console.log(x)