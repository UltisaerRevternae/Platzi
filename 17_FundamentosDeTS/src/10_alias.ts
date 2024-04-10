(() => {
  type UserID = string | number

  // Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
  shirtSize = 'S'

  const greeting = (myDinamicVar: UserID, size: Sizes) => {
    typeof myDinamicVar === 'string'
      ?    console.log(myDinamicVar.toUpperCase())
      :    console.log(myDinamicVar.toExponential(2))
  }

  greeting('asd' , 'M' )
  greeting(0.2 , 'XL')
})()
