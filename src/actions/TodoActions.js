import API from '../API'

const TodoActions = {
  getAllTodos: API.getAllTodos,
  createTodo(todo) {
    API.createTodo(todo);
  }
}

export default TodoActions
