const personalizedMessage = () => 'IJUAKSD aljs,hdajhsd allshas'

function Rocket (name, ownMessage) {
  this.name = name
  this.launchMessage = ownMessage
}

const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage)
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

const RocketArrow = (name, ownMessage) => ({
  name: name,
  launchMessage: ownMessage
})

const personalizedMessageArrow = () => 'Arrow functions simplicy!'
const falcon9 = RocketArrow('FALCON', personalizedMessageArrow)

console.log(falcon9.name)
console.log(falcon9.launchMessage())