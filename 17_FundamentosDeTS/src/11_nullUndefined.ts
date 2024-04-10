(() => {

  let myNull: null = null
  let myUndefined: undefined = undefined

  let number : number | null = null
  let string : string | undefined = undefined

  const hi = (name: string | null) => {
    let hello = 'Hola '
    console.log(hello , name || 'Bro?')

    let hello2 = 'asd'
    hello2 += name?.toLocaleUpperCase() || '  BRO'
    console.log(hello2)
  }

  hi(null)
  hi('asd')

})()
