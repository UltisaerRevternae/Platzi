const API = "https://api.escuelajs.co/api/v1";

fetchData = async (API) => {
  const response = await fetch(API);
  const data = await response.json();
  return data
};

dataAPI = async (API) => {
  try {
    const products = await fetchData(`${API}/products`);
    const product = await fetchData(`${API}/products/${products[0].id}`);
    const category = await fetchData(`${API}/categories/${product.category.id}`);

    // console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.error(error);
  }
}

dataAPI(API)


