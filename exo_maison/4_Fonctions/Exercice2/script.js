let squaredNumber = null

function squareNumber(int) {
  squaredNumber = int * int
  console.log("Squared:", squaredNumber)

  let multiplied = multiplyByTen(squaredNumber)
  console.log("Multiplied by ten:", multiplied)

  return squaredNumber
}

function multiplyByTen(squaredNumber) {
  return squaredNumber * 10
}

int = prompt("Quel est le nombre à mettre au carré puis multiplier par dix?")

console.log(int)

squareNumber(int)
