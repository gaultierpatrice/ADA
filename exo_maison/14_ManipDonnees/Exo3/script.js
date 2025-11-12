const fs = require("fs")
const filepath = "data.json"

const content = fs.readFileSync(filepath, { encoding: "utf8", flag: "r" })
const data = JSON.parse(content)
// write your code bellow

console.log("Type of Data : ", typeof data)

console.log(data[0])

console.log(data.length)

console.log(data[4])

const totalAge = data.reduce((sum, candidate) => sum + candidate.age, 0)
const averageAge = totalAge / data.length

console.log("Average candidate age:", averageAge)
