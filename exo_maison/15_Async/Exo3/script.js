async function fetchOffers() {
  const response = await fetch("https://dummyjson.com/products", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json())

  // const offers = await response.json()
  console.log(response)

  const container = document.getElementById("responseContainer")
  response.products.forEach((product) => {
    const productDiv = document.createElement("div")
    productDiv.innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.images[0]}" alt="${product.title}" />
      <p>${product.category}</p>
      <p>${product.price} $</p>
      <p>${product.description}</p>
    `
    container.appendChild(productDiv)
  })
}

fetchOffers()
