// AXIOS CONFIGURATION INITIAL
const API_AXIOS = axios.create({
  baseURL: 'https://api.thedogapi.com/v1/',
  headers: {'X-API-KEY': 'live_wEpj18h4lHZXbH4bAE6oqMMrpWo1ghUW5J17Uj3zSkEyprq4Vf6KpSi8dKU2xN8h'}
})
// API

const API_URL_RANDOM = "https://api.thedogapi.com/v1/images/search";
const API_URL_FAVORITES = "https://api.thedogapi.com/v1/favourites";
const API_URL_UPLOAD = "https://api.thedogapi.com/v1/images/upload";
const API_URL_FAVORITES_DELETE = (id) =>
  `https://api.thedogapi.com/v1/favourites/${id}`;

const API_KEY =
  "live_wEpj18h4lHZXbH4bAE6oqMMrpWo1ghUW5J17Uj3zSkEyprq4Vf6KpSi8dKU2xN8h";

// DOM

const dogsRandoms_container = document.querySelector(".dogsRandoms_container");
const dogsFavorites_container = document.querySelector(
  ".dogsFavorites_container"
);
const buttom_newDog = document.querySelector("#dogsRandoms_buttons-new");
const buttom_count = document.querySelector("#dogsRandoms_buttons-count");
const message_error = document.querySelector(".message_error");
const img_previewContainer = document.querySelector(".dogs_img--preview");
const form = document.querySelector("#uploadForm");
const file_upload = document.querySelector("#file")
const button_upload = document.querySelector('#buttonUpload')
const button_preview = document.querySelector('#buttonPreview')

// ERROR
errorSeeMessage = ({ message, error = "" }) => {
  message_error.textContent = message + error;
  message_error.style.display = "flex";
};

// OBTENER PERROS
getRandomDogs = async () => {
  const response = await fetch(
    `${API_URL_RANDOM}?limit=${buttom_count.value}&api_key=${API_KEY}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    errorSeeMessage({ message: "Hubo un error: ", error: response.status });
  }
};

// CARGAR LA INFORMACION DE LOS PERRROS
const loadDisplayRandomDgs = async () => {
  try {
    const data = await getRandomDogs();
    while (dogsRandoms_container.firstChild) {
      dogsRandoms_container.removeChild(dogsRandoms_container.firstChild);
    }
    data.forEach((data, index) => {
      const img = document.createElement("img");
      const article = document.createElement("article");
      const button = document.createElement("button");

      img.src = data.url;
      img.id = `dogsRandoms_img-${index + 1}`;
      img.className = "dogs_img";

      article.className = 'dogs_imgContainer'
      button.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.992379 5.27574C0.114738 4.35337 -0.982322 1.54013 1.6506 0.433284C4.28352 -0.673561 5.5 0.695846 5.5 1.61822C5.5 0.665236 7.07355 -0.710308 9.54937 0.433269C12.0252 1.57685 10.7579 4.16206 9.93267 5.11504L5.59999 10.1182L0.992379 5.27574ZM2.35049 1.34258C0.196282 2.21771 1.09388 4.44201 1.81195 5.17129L5.58181 8.99999L9.12673 5.04423C9.80196 4.29075 10.8388 2.24674 8.81312 1.34256C6.78745 0.43839 5.5 1.52597 5.5 2.27945C5.5 1.55017 4.5047 0.467444 2.35049 1.34258Z" fill="currentColor"/>
      </svg>
      `;
      
      button.className = "dogs_button";
      button.value = data.id;

      article.appendChild(img);
      article.appendChild(button);
      dogsRandoms_container.appendChild(article);

      button.addEventListener("click", async () => {
        await addFavoriteDog(button.value);
        loadDisplayFavoriteDgs();
      });
    });
  } catch (error) {
    errorSeeMessage({
      message: "Hubo un error al obtener las imágenes de perros: ",
      error: error,
    });
  }
};

// OBTENER LOS PERROS FAVORITPS
getFavoritesDogs = async () => {
  const response = await fetch(API_URL_FAVORITES, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else if (response.status === 404) {
    errorSeeMessage({
      message: "Selecciona perros para guardar en favoritos",
    });
  } else {
    errorSeeMessage({
      message: "Hubo un error: ",
      error: response.status,
    });
  }
};

// CARGAR LOS PERROS FAVORITOS
const loadDisplayFavoriteDgs = async () => {
  try {
    const data = await getFavoritesDogs();
    while (dogsFavorites_container.firstChild) {
      dogsFavorites_container.removeChild(dogsFavorites_container.firstChild);
    }

    data.forEach((data, index) => {
      const img = document.createElement("img");
      const article = document.createElement("article");
      const button = document.createElement("button");

      img.src = data.image.url;
      img.id = `dogsFavorites_img-${index + 1}`;
      img.className = "dogs_img";

      button.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.16667 7L0 5.83333L2.33333 3.5L0.583333 1.75L0 1.16667L1.16667 0L3.5 2.33333L5.83333 0L7 1.16667L4.66667 3.5L7 5.83333L5.83333 7L3.5 4.66667L1.16667 7Z" fill="currentColor"/>
        </svg>
      `;
      button.className = "dogs_button dogs_img-favotires";
      button.value = data.id;

      article.className = 'dogs_imgContainer'
      article.appendChild(img);
      article.appendChild(button);
      dogsFavorites_container.appendChild(article);

      button.addEventListener("click", async () => {
        await deleteFavoriteDog(button.value);
        loadDisplayFavoriteDgs();
      });
    });
  } catch (error) {
    console.error(
      "Hubo un error al obtener las imágenes favoritas de perros:",
      error
    );
  }
};

// AGREGAR PERROS FAVORITOS
addFavoriteDog = async (id) => {
  const {status} = await API_AXIOS.post('/favourites', {
    image_id: id
  })
  if (status === 200) loadDisplayFavoriteDgs();

  // const response = await fetch(API_URL_FAVORITES, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //     "x-api-key": API_KEY,
  //   },
  //   body: JSON.stringify({
  //     image_id: id,
  //   }),
  // });
  // if (response.ok) {
  //   loadDisplayFavoriteDgs();
  // }
};

// ELIMINAR PERROS FAVORIDOS
deleteFavoriteDog = async (id) => {
  try {
    const response = await fetch(API_URL_FAVORITES_DELETE(id), {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "x-api-key": API_KEY,
      },
    });

    if (response.ok) {
      loadDisplayFavoriteDgs();
    } else {
      errorSeeMessage({
        message: "Error al eliminar el perro favorito: ",
        error: response,
      });
    }
  } catch (error) {
    console.error("Error al eliminar el perro favorito:", error);
  }
};

// SUBIR NUEVO PERRO

uploadDogPhoto = async () => {
  const formData = new FormData(form);
  const response = await fetch(API_URL_UPLOAD, {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
    },
    body: formData,
  });
  const data = await response.json();
  if (response.status === 400) {
    errorSeeMessage({
      message: "Hubo un error: ",
      error: `${response.status} ${data.message}`,
    });
    console.log(`Hubo un error: ... ${response.status} ${data.message}`);
  } else {
    console.log("Foto de dog cargada :)");
    console.log({ data });
    console.log(data.url);
    addFavoriteDog(data.id);
  }
};

// PREVISUALIZACION DE LA IMAGEN 
previewImage = () => {
  img_previewContainer.innerHTML = ''
  const reader = new FileReader()
  reader.onload = () => {
    const img = new Image()
    img.src = reader.result
    img.className = 'img--preview'
    img_previewContainer.appendChild(img)
  }
  reader.readAsDataURL(event.target.files[0])
}

// EVENTOS
button_preview.addEventListener('click', () =>  file_upload.click())
file_upload.addEventListener("change", () => previewImage())
button_upload.addEventListener("click", () => uploadDogPhoto());
buttom_newDog.addEventListener("click", () => loadDisplayRandomDgs());

loadDisplayRandomDgs();
loadDisplayFavoriteDgs();
getFavoritesDogs();
