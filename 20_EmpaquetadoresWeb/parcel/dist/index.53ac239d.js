const e=document.querySelector("#app");(async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"),a=await t.json(),s=a?.map(e=>`
      <article class="Card">
        <img src=${e.images[0]}>
        <h2>
          ${e.title} <small>Precio $ ${e.price} </small>
        </h2>
      </article>
    `).join(""),c=document.createElement("section");c.classList.add("Items"),c.innerHTML=s,e.append(c)})();
//# sourceMappingURL=index.53ac239d.js.map
