(() => {
  let myDinamicVar: string | number
  myDinamicVar = 135
  myDinamicVar = 'mjlkk'
  console.log(myDinamicVar)

  const greeting = (myText: string | number) => {
    typeof myText === 'string'
      ?    console.log(myText.toUpperCase())
      :    console.log(myText.toExponential(2))
  }

  greeting('asd')
  greeting(0.2)

})()
