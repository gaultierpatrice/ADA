let life = 20
let magic = 0
let mind = 10

for (i = 1; i <= 7; i++) {
  let response = prompt("What do you want to do today?")

  if (response == "study") {
    magic += 3
    mind -= 1
    console.log(
      `you studied well, you gained ${magic} points of magic and lost ${mind} points of mind`
    )
  } else if (response == "duel") {
    let result = Math.random()
    if (result > 0.5) {
      magic += 5
      mind += 3
      console.log(
        `Congrats, you won the duel! You now have ${magic} points in magic and ${mind} points in mind`
      )
    } else if (result < 0.5) {
      life -= 5
      mind -= 3
      console.log(
        `Crap, you lost! You now have ${life} points in magic and ${mind} points in mind`
      )
    }
  } else if (response == "sleep") {
    life += 5
    mind += 3
    console.log(
      `You slept well , you have ${life} life points and ${mind} mind points`
    )
  } else {
    console.log("You didn't do anything today")
  }

  if (life <= 0) {
    console.log("You're dead!")
  }
}

magic > 10 && life > 0
  ? console.log("you passed the week")
  : console.log("you have to take another week")
