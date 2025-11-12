// Utility function to create a delay
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchOffers() {
  const container = document.getElementById("responseContainer")
  const loader = document.getElementById("loader")

  // Show loader
  loader.style.display = "block"

  try {
    // Start fetch and minimum delay at the same time
    const [response] = await Promise.all([
      fetch("https://corsproxy.io/?https://codepassport.dev/api/offers").then(
        (res) => res.json()
      ),
      wait(4000),
    ])

    // Clear old content if any
    container.innerHTML = ""

    // Render the offers
    response.forEach((offer) => {
      const offerDiv = document.createElement("div")
      offerDiv.innerHTML = `
        <h3>${offer.titre}</h3>
        <p>${offer.description}</p>
      `
      container.appendChild(offerDiv)
    })
  } catch (error) {
    container.innerHTML =
      "<p>Failed to load offers. Please try again later.</p>"
    console.error(error)
  } finally {
    // Hide loader
    loader.style.display = "none"
  }
}

fetchOffers()
