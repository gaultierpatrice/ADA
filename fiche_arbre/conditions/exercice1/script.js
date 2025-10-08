const numbers = [6, -8, 0]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    console.log("Ce nombre est négatif")
  } else if (numbers[i] === 0) {
    console.log("Ce chiffre est égal à zéro")
  } else {
    console.log("Ce nombre est positif")
  }
}
