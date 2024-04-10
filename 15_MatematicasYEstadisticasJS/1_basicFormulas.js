const PI = Math.PI

const perimetroCuadrado = ((data) =>( (data * 4) + 'cm').padStart(8, ' '))
const areaCuadrado = (data) => ((data ** 2) + 'cm^2').padStart(10, ' ')

const perimetroTriangulo = (lado1, lado2, base) => ((lado1 + lado2 + base) + 'cm').padStart(8, ' ')
const areaTriangulo = (altura, base) => (((base * altura) / 2) + 'cm^2').padStart(10, ' ')

const perimetroCirculo = (radio) => (((radio * 2) * PI).toFixed(3) + 'cm').padStart(8, ' ')
const areaCirculo = (radio) => (((radio ** 2) * PI).toFixed(3) + 'cm^2').padStart(10, ' ')

const perimetroTrianguloIsoceles = (lados, base) => (((lados * 2) + base) + 'cm').padStart(8, ' ')
const areaTrianguloIsoceles = (lados, base) => {
  if (lados === base) return 'La base y los lados no deben tener la misma altura, cambialos'
  const altura = Math.sqrt((lados ** 2) - ((base ** 2) / 4))
  return (((base * altura) / 2).toFixed(3) + 'cm^2').padStart(10, ' ')
}

const perimetroTrianguloEscaleno = (lado1, lado2, lado3) => ((lado1 + lado2 + lado3) + 'cm').padStart(8, ' ')
const areaTrianguloEscaleno = (lado1, lado2, lado3) => {
  const lados = new Set([lado1, lado2, lado3]);
  if (lados.size !== 3) return 'Los lados no deben coincidir entre ellos, cambialos '
  const S = (lado1 + lado2 + lado3) / 2
  return (Math.sqrt(S * (S - lado1) * (S - lado2) * (S - lado3)).toFixed(3) + 'cm^2').padStart(10, ' ')
}




console.log({
  'cuadrado          ': {
    perimetro: perimetroCuadrado(5),
    area: areaCuadrado(5)
  }
})
console.log({
  'triangulo         ': {
    perimetro: perimetroTriangulo(6, 6, 4),
    area: areaTriangulo(5.5, 4)
  }
})
console.log({
  'circulo           ': {
    perimetro: perimetroCirculo(3),
    area: areaCirculo(3)
  }
})
console.log({
  'trianguloIsoceles ': {
    perimetro: perimetroTrianguloIsoceles(6, 3),
    area: areaTrianguloIsoceles(6, 3)
  }
})
console.log({
  'trianguloEscaleno ': {
    perimetro: perimetroTrianguloEscaleno(6, 3, 4),
    area: areaTrianguloEscaleno(6, 3, 4)
  }
})
