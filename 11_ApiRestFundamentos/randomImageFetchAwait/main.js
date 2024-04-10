const MAX_IMAGES_API = 827
const API = 'https://rickandmortyapi.com/api'

const img = document.querySelector('#ImageRick')
const buttom = document.querySelector("#NewImage")

getMortyRandom = () => {
  return Math.floor(Math.random() * MAX_IMAGES_API)
}

getMorty = async (url) => {
  const response = await fetch(`${url}/character/${getMortyRandom()}`)
  const data = await response.json()
  img.src = data.image
}
getMorty(API)

buttom.addEventListener('click', () => getMorty(API))