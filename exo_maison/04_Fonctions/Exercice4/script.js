function preparerPate() {
  console.log(
    `Pâte prête avec ${farine}g de farine, ${lait}ml de lait, ${oeufs} oeufs et ${sucre}g de sucre.`
  )
}

function cuirePate() {
  console.log(
    `Crêpe cuite avec ${farine}g de farine, ${lait}ml de lait, ${oeufs} oeufs et ${sucre}g de sucre.`
  )
}

let farine = 250
let lait = 500
let oeufs = 3
let sucre = 50

preparerPate()
cuirePate()

farine = 25
lait = 50
oeufs = 1
sucre = 10

preparerPate()
cuirePate()
