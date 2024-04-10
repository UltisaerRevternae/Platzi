// Inmutables

// filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(numbers);
console.log(evenNumbers);

// recuce() reduce el array a un solo valor CASE 1
const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(numbersReduce);
console.log(sum);

// CASE 2
const words = ["apple", "banana", "hello", "bye", "banana", "bye", "bye"];
const wordFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
console.log(wordFrecuency);

// reto
const notes = [70, 5, 50, 65, 84, 78, 95, 24, 96, 32, 75, 71];
const filterAprovedNotes = notes.filter((notes) => notes >= 70)
const averageNotes = filterAprovedNotes.reduce((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  if (index === array.length - 1) {
    return parseFloat((accumulator / array.length).toFixed(2));
  }
  return accumulator;
}, 0)
console.log(averageNotes);
