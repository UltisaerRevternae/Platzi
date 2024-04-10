// Create powerfullGirl objets
function PowerpuffGirl(name, color, power) {
  this.name = name
  this.color = color
  this.power = power
  this.isLeader = false

  this.displayInfo = function() {
    console.log(`Powerpuff Girl Information \n 
      Name: ${this.name}
      Color: ${this.color}
      Power: ${this.power}
      ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
    `)
  }

  this.becameLeader = function () {
    this.isLeader = true 
    console.log(`The ${this.name} has become the leader of the Powerpuff Girl \n`)
  }
}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice Breath')
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super Strengh')
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Flight')

blossom.becameLeader()

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()