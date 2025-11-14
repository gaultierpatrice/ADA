function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    return "Erreur: Vous devez passer un tableau de nombres";
  }

  let sum = 0;

  for (const number of numbers) {
    if (typeof number !== "number" || Number.isNaN(number)) {
      return sum;
    }
    sum += number;
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // Devrait retourner 10
console.log(sumArray([1, 2])); // Devrait retourner 3
console.log(sumArray([0])); // Devrait retourner 0
console.log(sumArray([1, 0])); // Devrait retourner 1

console.log(sumArray([1, "Haha"])); // Devrait retourner 1
console.log(sumArray()); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(sumArray("Huhu")); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
