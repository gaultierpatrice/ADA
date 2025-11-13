sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda")

function sendMessage(message, fromName, toName) {
  console.log(
    "From : " + fromName + " to : " + toName + " Message : " + message
  )
}

// sendMessage()
sendMessage("Super on se voit mardi !", "Linda", "Marc")

let toName = "Jean"
let fromName = "Ada"
let message = "Je t'apprends à coder tes premières fonctions"
sendMessage(message, fromName, toName)
