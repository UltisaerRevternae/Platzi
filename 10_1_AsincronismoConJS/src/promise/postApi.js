const API = "https://api.escuelajs.co/api/v1";

postData = (API, data) => {
  const response = fetch(API, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};

const data = {
  title: "Shirt",
  price: 920,
  description: "New collection of shirts",
  categoryId: 1,
  images: ["https://i.imgur.com/QkIa5tT.jpeg"],
};

postData(`${API}/products/`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));

