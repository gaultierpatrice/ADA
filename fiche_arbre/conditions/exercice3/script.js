let tmp = 15

if (tmp < 0) {
  console.log("Freezing weather.")
} else if (tmp < 10) {
  console.log("Very cold weather.")
} else if (tmp < 20) {
  console.log("Cold weather.")
} else if (tmp < 30) {
  console.log("Normal in temp.")
} else if (tmp < 40) {
  console.log("Its Hot.")
} else {
  console.log("Its very hot.")
}

tmp = 45

switch (true) {
  case tmp < 0:
    console.log("Freezing weather.")
    break
  case tmp < 10:
    console.log("Very cold weather.")
    break
  case tmp < 20:
    console.log("Cold weather.")
    break
  case tmp < 30:
    console.log("Normal in temp.")
    break
  case tmp < 40:
    console.log("Its Hot.")
    break
  case tmp > 40:
    console.log("Its very hot.")
}
