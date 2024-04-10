
// URLs de la API y configuración
const API_URL_RANDOM = "https://api.thedogapi.com/v1/images/search";
const API_URL_FAVORITES = "https://api.thedogapi.com/v1/favourites";
const API_KEY = "live_wEpj18h4lHZXbH4bAE6oqMMrpWo1ghUW5J17Uj3zSkEyprq4Vf6KpSi8dKU2xN8h";

// Elementos del DOM
const dogsRandoms_container = document.querySelector(".dogsRandoms_container");
const dogsFavorites_container = document.querySelector('.dogsFavorites_container');
const buttom_newDog = document.querySelector("#dogsRandoms_buttons-new");
const buttom_count = document.querySelector("#dogsRandoms_buttons-count");
const error_dogs_randoms = document.querySelector("#errorDogsRandoms");
const error_dogs_aleatory = document.querySelector("#errorDogsAleatory");

// Muestra mensajes de error
function errorSeeMessage({ textContent, message, error = "" }) {
  textContent.textContent = message + error;
  textContent.style.display = "flex";
}

// Obtiene perros de forma aleatoria
async function getRandomDogs(apiUrl, apiKey) {
  try {
    const response = await fetch(`${apiUrl}?limit=${buttom_count.value}&api_key=${apiKey}`);
    if (response.ok) {
      const data = await response.json();
      return data.map((value) => value.url);
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    errorSeeMessage({ textContent: error_dogs_randoms, message: "Hubo un error: ", error });
  }
}

// Carga y muestra los perros aleatorios
async function loadDisplayRandomDogs() {
  try {
    const urls = await getRandomDogs(API_URL_RANDOM, API_KEY);
    updateDisplay(urls, dogsRandoms_container, "dogsRandoms_img", "dogs_selectFavorite", "<3");
  } catch (error) {
    console.error("Hubo un error al obtener las imágenes de perros:", error);
  }
}

// Obtiene perros favoritos
async function getFavoritesDogs(apiUrl, apiKey) {
  try {
    const response = await fetch(apiUrl, { headers: { "x-api-key": apiKey } });
    if (response.ok) {
      const data = await response.json();
      return data.map((data) => data.image);
    } else if (response.status === 404) {
      throw new Error("Selecciona perros para guardar en favoritos");
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    errorSeeMessage({ textContent: error_dogs_aleatory, message: "Hubo un error: ", error });
  }
}

// Carga y muestra los perros favoritos
async function loadDisplayFavoriteDogs() {
  try {
    const data = await getFavoritesDogs(API_URL_FAVORITES, API_KEY);
    updateDisplay(data.url, dogsFavorites_container, "dogsFavorites_img", "dogs_unselectFavorite", "X", data.id);
  } catch (error) {
    console.error("Hubo un error al obtener las imágenes favoritas de perros:", error);
  }
}

// Actualiza el contenedor de imágenes
function updateDisplay(urls, container, imgClass, buttonClass, buttonText, id) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  urls.forEach((url, index) => {
    const img = document.createElement("img");
    const article = document.createElement("article");
    const button = document.createElement("button");

    img.src = url;
    img.id = `${imgClass}-${index + 1}`;
    img.className = 'dogs_img';

    button.textContent = buttonText;
    button.id = `${buttonClass}-${index + 1}`;
    button.className = buttonClass
    button.onclick = saveFavoriteDog()
    article.appendChild(img);
    article.appendChild(button);
    container.appendChild(article);


  });
}

// Seleccionar nuevo mascota a favoritos
saveFavoriteDog = async (imageID) => {
  const newFavorite = await fetch(API_URL_FAVORITES, {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      "x-api-key": API_KEY,
    },
    body: JSON.stringify({
      "image_id": imageID,
    }),
  });
  const data = await newFavorite;
  console.log(data)
};

// Eventos
buttom_newDog.addEventListener("click", () => loadDisplayRandomDogs());

// Inicialización
loadDisplayRandomDogs();
loadDisplayFavoriteDogs();
saveFavoriteDog();