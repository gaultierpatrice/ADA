function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {
  return `Rapport utilisateur :
    Nom : ${nom}
    Age : ${age}
    Ville : ${ville}
    Profession : ${profession}
    Catégorie : ${userAgeCategory(age)}
    Statut : ${userIsSubscriber(estAbonne)}`;
}

function userAgeCategory(age) {
  if (age < 18) return `Jeune`;
  if (age < 60) return `Adulte`;
  return `Senior`;
}

function userIsSubscriber(estAbonne) {
  return `${estAbonne ? "Abonné" : "Non abonné"}`;
}

let rapport = genererRapportUtilisateur(
  "Alice",
  68,
  "Paris",
  "Développeuse",
  false
);

console.log(rapport);
