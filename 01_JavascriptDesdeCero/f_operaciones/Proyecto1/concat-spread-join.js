// Methods that DO NOT modify the original array (Immutability).

const morseCode1 = ['....', '---'] // H O
const morseCode2 = ['.-..', '.-'] // L A

// Combine with concat() · way 1

const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

// Combine with concat() · way 2

const morseCodeMessage2 = [].concat(morseCode1, morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

// Combine with Spread Operator

function combineMorseMessages (morseCode1, morseCode2) {
  console.log([...morseCode1, ...morseCode2])
}

combineMorseMessages(morseCode1, morseCode2)
console.log('  ')
console.log([...morseCode1, ...morseCode2])


const numbers = [1, 2, 3]
const string = 'string'

const combinated = [...numbers, ...string]

// join()

const morseCodeMessageString = combinated.join('\n')

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)