import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import uuid from 'uuid';

let _todos = [
  {
    _id: 1,
    task: 'do stuff',
    createdAt: Date.now(),
    isComplete: false
  },
  {
    _id: 2,
    task: 'do more stuff',
    createdAt: Date.now(),
    isComplete: true
  },
  {
    _id: 3,
    task: 'do more stuffier stuff',
    createdAt: Date.now(),
    isComplete: false
  }
];

class TodoStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_TODOS':
          _todos = action.todos;
          this.emit('CHANGE');
          break;
        case 'CREATE_TODO':
          let { todo } = action;

          todo._id = uuid();
          todo.createdAt = Date.now();
          todo.isComplete = false;

          _todos.push(todo);
          this.emit('CHANGE');
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _todos;
  }
}

export default new TodoStore();
