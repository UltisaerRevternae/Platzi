(() => {
  let myDinamicVar: any;
  myDinamicVar = 100
  myDinamicVar = '100'
  myDinamicVar = null
  myDinamicVar = NaN
  myDinamicVar = {}
  myDinamicVar = 'Hola'
  const rta = (myDinamicVar as string)
  console.log(rta.charAt(0))

  myDinamicVar = 1213
  const rta2 = (<number>myDinamicVar)
  console.log(rta2.toString())

})()
