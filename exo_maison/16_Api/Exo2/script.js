async function fetchTodos() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?completed=false"
    )
    const todos = await response.json()
    const container = document.getElementById("container")

    console.log("Data is:", todos)

    for (const todo of todos) {
      const todoDiv = document.createElement("div")

      todoDiv.innerHTML = `<h3>${todo.title}</h3>`

      if (!todo.completed) {
        const p = document.createElement("p")
        p.textContent = "To complete"
        todoDiv.appendChild(p)
      }
      container.appendChild(todoDiv)
    }
  } catch (error) {
    console.error("Error fetching todos:", error)
  }
}

fetchTodos()
