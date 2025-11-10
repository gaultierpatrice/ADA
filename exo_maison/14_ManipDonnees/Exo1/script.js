const candidates = [
  "Le Filip",
  "Ruby On The Nail",
  "Leona Winter",
  "Lula Strega",
  "Misty Phoenix",
  "Perseo",
  "Norma Bell",
  "Edeha Noire",
  "Magnetica",
  "Afrodite Amour",
]

console.log(candidates[0])
console.log(candidates[7])

const list = document.getElementById("tableau")
candidates.forEach((name) => {
  const li = document.createElement("li")
  li.textContent = name
  list.appendChild(li)
})
