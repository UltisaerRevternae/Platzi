// every() Si cumplen o no con una condicion devuelve true o false

const ages = [21, 25, 30, 19, 22];
const allAreAdult = ages.every((ages) => ages > 18);
console.log(ages);
console.log(allAreAdult);

// some()
const atLeastOneIsOver30 = ages.some((age) => age >= 30);
console.log(ages);
console.log(atLeastOneIsOver30);
