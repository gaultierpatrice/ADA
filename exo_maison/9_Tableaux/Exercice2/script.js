const students = {
  A001: {
    id: "A001",
    name: "Alice Martin",
    age: 22,
    major: "Computer Science",
    grades: [14, 16, 12, 18, 15],
    absences: 3,
    courses: ["JavaScript", "Algorithms", "Database"],
  },
  A002: {
    id: "A002",
    name: "Bob Dupont",
    age: 24,
    major: "Mathematics",
    grades: [11, 9, 15, 8, 13],
    absences: 7,
    courses: ["Calculus", "Statistics", "Algebra"],
  },
  A003: {
    id: "A003",
    name: "Claire Leroy",
    age: 21,
    major: "Computer Science",
    grades: [17, 19, 16, 18, 20],
    absences: 1,
    courses: ["JavaScript", "Web Development", "Data Structures"],
  },
  A004: {
    id: "A004",
    name: "David Moreau",
    age: 23,
    major: "Physics",
    grades: [12, 14, 11, 10, 13],
    absences: 5,
    courses: ["Mechanics", "Quantum Physics", "Thermodynamics"],
  },
  A005: {
    id: "A005",
    name: "Emma Bernard",
    age: 22,
    major: "Computer Science",
    grades: [15, 17, 16, 14, 19],
    absences: 2,
    courses: ["JavaScript", "Networks", "Security"],
  },
}

function averageGradeByStudent(students) {
  let studentAverages = {}
  for (const id in students) {
    const student = students[id]
    const grades = student.grades
    let sum = 0
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i]
    }
    const average = sum / grades.length
    console.log(`${student.name}: ${average}`)
    studentAverages.name = student.name
    studentAverages.average = average
  }

  return studentAverages
  console.log(studentAverages)
}

averageGradeByStudent(students)

function studentByProgram() {
  let studentsInPhysics = []
  let studentsInMathematics = []
  let studentsInComputerScience = []
  for (const id in students) {
    const student = students[id]
    switch (student.major) {
      case "Computer Science":
        studentsInComputerScience.push(student.name)
        break
      case "Physics":
        studentsInPhysics.push(student.name)
        break
      case "Mathematics":
        studentsInMathematics.push(student.name)
        break
      default:
        console.log(`${student.name} have no major informed.`)
    }
  }
  console.log(`
    Students in Computer Science: ${studentsInComputerScience}
    Students in Physics: ${studentsInPhysics}
    Students in Mathematics: ${studentsInMathematics}
    `)
}

studentByProgram(students)

console.log(averages)

function bestAverageStudent(averages) {
  let bestStudent = null
  let bestAverage = 0

  for (const name in averages) {
    const avg = averages[name]
    if (avg > bestAverage) {
      bestAverage = avg
      bestStudent = name
    }
  }
  console.log(`${bestStudent} as the better average: ${bestAverage}`)
  return { bestStudent, bestAverage }
}

bestAverageStudent()

function averageByProgram() {}

averageByProgram()

function addGrade() {}

addGrade()
