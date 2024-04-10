// Ulternae => [U,L,T,E,R,N,A,E]
// [U,L,T,E,R,N,A,E] => Ulternae

export function changeData(data: string | string[]) : string | string[] {
  if (Array.isArray(data)) {
    return data.join('')
  } else {
    return data.split('')
  }
}

console.log(changeData('Ulternae'))
console.log(changeData(['U','l','t','e','r','n','a','e']))
