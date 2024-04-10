const API = 'https://api.escuelajs.co/api/v1'

fetchData = (API) => { return fetch(API)}

// fetchData(`${API}/products`)
//   .then(data => data.json())
//   .then(products => {
//       console.log(products[0])
//       return products
//   })
//   .then(products => console.log(products[1].category))
//   .catch(error => console.error('Error:', error));

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    return fetchData(`${API}/categories/${products[0].category.id}`)
  })
  .then(response => response.json())
  .then(categories => console.log(categories))
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('Peticion success'))

