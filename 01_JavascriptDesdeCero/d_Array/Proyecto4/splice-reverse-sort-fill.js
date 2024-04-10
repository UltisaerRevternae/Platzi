// Methods that modify the original array (Mutability).

// splice()

const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato']
// El elemento a eliminar y a partir de hay cuantos elementos a eliminar
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion')

console.log(vegetables)
console.log(removedVegetables)

// reverse()

const numbers = [1, 2, 3, 4, 5]
const reversedNumbers = numbers.reverse()

console.log(numbers)
console.log(reversedNumbers)

// sort() with number

const unsortedNumbers1 = [4, 18, 1, 62, 34]
const unicodeSortedNumbers = unsortedNumbers1.sort()

console.log(unsortedNumbers1)
console.log(unicodeSortedNumbers)

const unsortedNumbers2 = [4, 18, 1, 62, 34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)
// 4 - 18 = -14 entonces 4 es menor
// 18 - 1 = 17 como es positivo cambian la posicion
console.log(unsortedNumbers2)
console.log(sortedNumbers)

// sort() with strings Â· UTF-16

const cities = ['New York', 'Paris', 'Tokyo', 'London']
const sortedCities = cities.sort()

console.log(cities)
console.log(sortedCities)

// fill()

const ages = [21, 35, 45, 50, 99]
console.log(ages.fill(0, 2, 4)) // Llena con 0 desde la posicion 2 hasta la 4
console.log(ages.fill(15, 1)) 
console.log(ages.fill(15))
