let numberBreakDown = parseInt(
  prompt("Quel chiffre pour commencer le décompte?")
)

while (isNaN(numberBreakDown) || numberBreakDown < 0 || numberBreakDown > 10) {
  alert("Veuillez entrer un nombre entre 1 et 10 svp")
  numberBreakDown = prompt("Quel chiffre pour commencer le décompte?")
}

for (let i = numberBreakDown; i >= 0; i--) {
  console.log(i)
}
