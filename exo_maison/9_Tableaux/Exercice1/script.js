const books = [
  {
    id: 1,
    title: "JavaScript for Beginners",
    author: "Alice Martin",
    year: 2020,
    pages: 300,
    genre: "programming",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Advanced React",
    author: "Bob Dupont",
    year: 2021,
    pages: 450,
    genre: "programming",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Art History",
    author: "Claire Leroy",
    year: 2019,
    pages: 280,
    genre: "art",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Python Data Science",
    author: "David Moreau",
    year: 2022,
    pages: 520,
    genre: "programming",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Design Patterns",
    author: "Alice Martin",
    year: 2018,
    pages: 320,
    genre: "programming",
    rating: 4.1,
  },
  {
    id: 6,
    title: "Modern Painting",
    author: "Emma Laurent",
    year: 2020,
    pages: 190,
    genre: "art",
    rating: 3.9,
  },
]

function searchByAuthor(author) {
  let result = []
  for (let i = 0; i < books.length; i++) {
    if (books[i].author === author) {
      result.push(books[i].title)
    }
  }
  console.log(result)
}

searchByAuthor("Alice Martin")

function pagesAverageByGenre(genre) {
  let totalPages = 0
  let booksInGenre = 0
  for (let i = 0; i < books.length; i++) {
    if (books[i].genre === genre) {
      totalPages += books[i].pages
      booksInGenre++
    }
  }
  const average = totalPages / booksInGenre
  console.log(average)
}

pagesAverageByGenre("art")
pagesAverageByGenre("programming")

function mostRecentBook() {
  let result = []
  for (let i = 0; i < books.length; i++) {
    result.push(books[i].year)
  }
  const indexOfMaxValue = result.indexOf(Math.max(...result))
  console.log(books[indexOfMaxValue].title)
}

mostRecentBook(books)

function authorsList() {
  let result = []
  for (let i = 0; i < books.length; i++) {
    result.push(books[i].author)
  }
  console.log(result)
}

authorsList(books)

function classByGenre() {
  let resultProgramming = []
  let resultArt = []
  for (let i = 0; i < books.length; i++) {
    switch (books[i].genre) {
      case "programming":
        resultProgramming.push(books[i].title)
        break
      case "art":
        resultArt.push(books[i].title)
    }
  }
  console.log(`Genre programming : ${resultProgramming}`)
  console.log(`Genre art : ${resultArt}`)
}

classByGenre(books)
