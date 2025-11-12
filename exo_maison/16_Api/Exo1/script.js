async function fetchTodos() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/120"
    )
    const todo = await response.json()
    const container = document.getElementById("container")

    console.log("Todo number 120:", todo)
  } catch (error) {
    console.error("Error fetching todos:", error)
  }
}

fetchTodos()
