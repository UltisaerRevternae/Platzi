const API = "https://api.escuelajs.co/api/v1";

fetchData = async (url) => {
  return fetch(url).then(response => response.json())
}

function* saveData(values) {
  for (const value of values) {
    yield value;
  }
}

dataAPI = async () => {
  try {
    
    const products = await fetchData(`${API}/products`);
    const product = await fetchData(`${API}/products/${products[0].id}`);
    const category = await fetchData(`${API}/categories/${product.category.id}`);

    const values = [
      products,
      product,
      category
    ]
    return generator = saveData(values);
  } catch (error) {
    console.error(error);
  }
}

let generator;

dataAPI().then(gen => {
  generator = gen
  console.log(generator.next().value)
})