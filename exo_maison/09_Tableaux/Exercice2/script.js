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

    studentAverages[student.name] = {
      average: average,
      major: student.major,
      absences: student.absences,
    }
  }
  console.log(studentAverages)
  return studentAverages
}

const studentAverages = averageGradeByStudent(students)

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
  return
}

studentByProgram(students)

function bestAverageStudent(studentAverages) {
  let bestStudent = null
  let bestAverage = 0

  for (const name in studentAverages) {
    const avg = studentAverages[name].average
    if (avg > bestAverage) {
      bestAverage = avg
      bestStudent = name
    }
  }
  console.log(`${bestStudent} as the better average: ${bestAverage}`)
  return { bestStudent, bestAverage }
}

bestAverageStudent(studentAverages)

function averageAndAbsenceByProgram(studentAverages) {
  let csTotalAvg = 0,
    csTotalAbs = 0,
    csCount = 0
  let mathTotalAvg = 0,
    mathTotalAbs = 0,
    mathCount = 0
  let physTotalAvg = 0,
    physTotalAbs = 0,
    physCount = 0

  for (const name in studentAverages) {
    const student = studentAverages[name]
    if (student.major === "Computer Science") {
      csTotalAvg += student.average
      csTotalAbs += student.absences
      csCount++
    } else if (student.major === "Mathematics") {
      mathTotalAvg += student.average
      mathTotalAbs += student.absences
      mathCount++
    } else if (student.major === "Physics") {
      physTotalAvg += student.average
      physTotalAbs += student.absences
      physCount++
    }
  }

  // then compute and print
  if (csCount > 0) {
    console.log("Computer Science:")
    console.log("  Average of averages:", csTotalAvg / csCount)
    console.log("  Average of absences:", csTotalAbs / csCount)
  }

  if (mathCount > 0) {
    console.log("Mathematics:")
    console.log("  Average of averages:", mathTotalAvg / mathCount)
    console.log("  Average of absences:", mathTotalAbs / mathCount)
  }

  if (physCount > 0) {
    console.log("Physics:")
    console.log("  Average of averages:", physTotalAvg / physCount)
    console.log("  Average of absences:", physTotalAbs / physCount)
  }
}

averageAndAbsenceByProgram(studentAverages)

function addGradeToClaire(students) {
  students["A001"].grades.push(0)

  console.log(students["A001"].grades)
}

addGradeToClaire(students)
