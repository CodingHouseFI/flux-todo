import AppDispatcher from '../AppDispatcher'

const TodoActions = {
  createTodo(todo) {
    AppDispatcher.dispatch({
      type: 'CREATE_TODO',
      todo
    })
  }
}

export default TodoActions
