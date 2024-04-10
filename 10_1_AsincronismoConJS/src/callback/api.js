const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  const httpRequest = new XMLHttpRequest();
  
  httpRequest.open('GET', urlApi, true);
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        try {
          const data = JSON.parse(httpRequest.responseText);
          callback(null, data);
        } catch (error) {
          callback(new Error('Error parsing JSON'), null);
        }
      } else {
        callback(new Error(`HTTP Error: ${httpRequest.status}`), null);
      }
    }
  };
  httpRequest.send();
}

fetchData(`${API}/products`, function(error1, data1) {
  if(error1) return console.error(error1)
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2){
    if (error2) return console.error(error2)
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
      if (error3) return console.error(error2)
      console.log({
        data1: data1[0],
        data2: data2.title,
        data3: data3.name
      })
    })
  })
})
// // Nueva manera
// fetch('https://api.escuelajs.co/api/v1/products')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));