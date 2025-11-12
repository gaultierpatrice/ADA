async function fetchOffers() {
  const response = await fetch("https://codepassport.dev/api/offers", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json())

  // const offers = await response.json()
  console.log(response)
  const container = document.getElementById("responseContainer")
  response.forEach((offer) => {
    const offerDiv = document.createElement("div")
    offerDiv.innerHTML = `
      <h3>${offer.titre}</h3>
      <p>${offer.description}</p>
    `
    container.appendChild(offerDiv)
  })
}

fetchOffers()
