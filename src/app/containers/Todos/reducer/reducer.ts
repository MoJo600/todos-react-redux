import { ITodoActions } from '~/app/containers/Todos/actions';
import { TodoState, initialState, ITodoModel } from '~/app/containers/Todos/models';
import {
  ADD_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  TOGGLE_ADD_TODO_VIEW,
  SET_SESSION_TODOS,
  DELETE_TODO
} from '~/app/containers/Todos/constants';

const uuid = require('uuid/v4');

export const todoReducer = (state: TodoState = initialState, action: ITodoActions): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo: ITodoModel = {
        id: uuid(),
        text: action.text,
        due: action.due,
        completed: action.completed
      };
      return {
        ...state,
        todos: state.todos ? state.todos.concat([newTodo]) : [newTodo]
      };
    case SET_SESSION_TODOS:
      return {
        ...state,
        todos: action.todos
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id)
      };
    case TOGGLE_ADD_TODO_VIEW:
      return {
        ...state,
        showAddView: action.isOpen
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text, due: action.due } : todo
        )
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: todo.completed ? false : true } : todo
        )
      };
    default:
      return state;
  }
};
