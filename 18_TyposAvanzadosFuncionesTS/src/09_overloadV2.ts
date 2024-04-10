// Ulternae => [U,L,T,E,R,N,A,E]
// [U,L,T,E,R,N,A,E] => Ulternae

// export function changeData(data: string) : string[]
// export function changeData(data: string[]) : string

// export function changeData(data: string | string[]) : string | string[] {
//   if (Array.isArray(data)) {
//     return data.join('')
//   } else {
//     return data.split('')
//   }
// }

// console.log(changeData('Ulternae').reverse())
// console.log(changeData(['U','l','t','e','r','n','a','e']).includes('ter'))

export function changeData(data: string) : string[]
export function changeData(data: string[]) : string
export function changeData(data: number) : boolean

export function changeData(data: unknown) : unknown {
  if (Array.isArray(data)) {
    return data.join('')
  } else if (typeof data === 'string'){
    return data.split('')
  } else if (typeof data === 'number') {
    return !!data
  }
}

console.log(changeData('Ulternae').reverse())
console.log(changeData(['U','l','t','e','r','n','a','e']).includes('ter'))
console.log(changeData(0))
