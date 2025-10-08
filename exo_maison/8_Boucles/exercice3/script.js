let numberBreakDown = parseInt(
  prompt("Quel chiffre pour commencer le décompte?")
)

while (isNaN(numberBreakDown)) {
  console.log("non")
  numberBreakDown = prompt("Quel chiffre pour commencer le décompte?")
}

for (let i = numberBreakDown; i >= 0; i--) {
  console.log(i)
}
