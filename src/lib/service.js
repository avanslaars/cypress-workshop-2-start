import fetch from 'cross-fetch'

function checkStatus(response) {
  if (response.ok) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const saveTodo = todo =>
  fetch('http://localhost:3030/api/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(checkStatus)
    .then(res => res.json())

export const loadTodos = () =>
  fetch('http://localhost:3030/api/todos')
    .then(checkStatus)
    .then(res => res.json())

export const destroyTodo = id =>
  fetch(`http://localhost:3030/api/todos/${id}`, { method: 'DELETE' })
    .then(checkStatus)
    .then(res => res.json())

export const updateTodo = todo =>
  fetch(`http://localhost:3030/api/todos/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(checkStatus)
    .then(res => res.json())
