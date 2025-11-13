function addThreeNumbers() {
  const resultatAddition = 1 + 2 + 3
  console.log(`Le resultat de la somme est ${resultatAddition}`)
}

function addThreeNumbersWithArg(nb1, nb2, nb3) {
  const resultatAddition = nb1 + nb2 + nb3
  console.log(`Le resultat de la somme est ${resultatAddition}`)
}

addThreeNumbers()

let nb1 = 12
let nb2 = 56
let nb3 = 3

addThreeNumbersWithArg(nb1, nb2, nb3)

addThreeNumbersWithArg(2, 6, 30)

addThreeNumbersWithArg(20, 60, 300)

addThreeNumbersWithArg(200, 600, 3000)
