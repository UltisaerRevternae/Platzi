// function* gen() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
// };
// const g = gen()

// console.log(g)
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)

function* iterable(arg) {
  for (let value of arg) {
    yield value
  }
}
const listNumbers = [1 ,6 ,5, 7]
const it = iterable(listNumbers)

let result = it.next();
while (!result.done) {
  console.log(result.value);
  result = it.next();
}



