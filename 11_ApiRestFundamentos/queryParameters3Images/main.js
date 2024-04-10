const API = 'https://rickandmortyapi.com/api'

const img1 = document.querySelector('#ImageRick-1')
const img2 = document.querySelector('#ImageRick-2')
const img3 = document.querySelector('#ImageRick-3')

const buttom = document.querySelector("#NewImage")
const page = document.querySelector("#page")

getImagesRandom = (value) => {
  let numbers = new Set()
  while (numbers.size < 3) {
    let aleatory = Math.floor(Math.random() * value)
    numbers.add(aleatory)
  }
  return [...numbers]
}

getMorty = async (url) => {
  const response = await fetch(`${url}/character/?page=${page.value}`)
  const data = await response.json()
  const results = await data.results
  const images = getImagesRandom(results.length)
  img1.src = results[images[0]].image
  img2.src = results[images[1]].image
  img3.src = results[images[2]].image
}
getMorty(API)

buttom.addEventListener('click', () => getMorty(API))

