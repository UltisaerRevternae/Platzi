// Como se crean
// new Array() or Array()

const fruits = Array("apple", "banana", "orange");
console.log(fruits);

const justOneNumber = Array(12);
console.log(justOneNumber);

const number = Array(1, 2, 3, 4, 5);
console.log(number);

// Sintaxis literal del array
const oneNumber = [4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ["soccer", "tennis", "rugby"];
console.log(sports);

const recipeIngredients = [
  "Flour",
  true,
  2,
  { ingredient: "Milk", quantity: "1 cup" },
  false,
];
console.log(recipeIngredients[3].ingredient);
console.log(recipeIngredients);

// Acceso a los elementos del array
const firstFruit = fruits[0];
console.log(firstFruit);

// Longitud
const numberOfFruits = fruits.length;
console.log(numberOfFruits);

// Mutabilidad
fruits.push("watermelon");
console.log(fruits);

// Inmutabilidad
const newFruits = fruits.concat(["grape", "kiwi"]);
console.log(fruits);
console.log(newFruits);

// Array isArray?
const isArray = Array.isArray('fruits');
console.log(isArray);

// Exercise
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0
for(i=0; i < numbersArray.length; i++) {
  sum += numbersArray[i]
  //   sum = sum + numbersArray[i]
}
console.log(sum)