function canDrive(nom, age) {
  if (age >= 17) {
    console.log(`${nom} est autorisé à conduire en France`)
  } else {
    console.log(`${nom} n'est pas autorisé à conduire en France`)
  }
}

canDrive("Mathieu", 22)
canDrive("Lea", 15)
canDrive("Jean", 17)
