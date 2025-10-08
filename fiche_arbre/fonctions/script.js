function repeterPhrase(phrase, nbRepetitions) {
  for (let i = 0; i < nbRepetitions; i++) {
    console.log(phrase)
  }
}
repeterPhrase("coucou", 3)

function calculPoints(pointsActuels, pointsAjoutes) {
  const total = pointsActuels + pointsAjoutes
  console.log(`Vous avez ${total} points!`)
}

calculPoints(25, 56)

function presentation(prenom, maison) {
  console.log(`${prenom} appartient à ${maison}`)
}

presentation("gotgot", "Gryffondor")
