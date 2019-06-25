import * as constants from '~/app/containers/Todos/constants';
import { ITodoInfo, ITodoModel } from '~/app/containers/Todos/models';

export interface IActionBase {
  type: constants.ActionConstants;
}

export interface IAddTodo extends ITodoInfo, IActionBase {
  type: constants.ADD_TODO;
}

export interface IDeleteTodo extends IActionBase {
  id: number;
  type: constants.DELETE_TODO;
}

export interface IToggleAddTodoView extends IActionBase {
  type: constants.TOGGLE_ADD_TODO_VIEW;
  isOpen: boolean;
}

export interface ISetSessionTodos extends IActionBase {
  type: constants.SET_SESSION_TODOS;
  todos: ITodoModel[];
}

export interface IEditTodo extends ITodoInfo, IActionBase {
  id: number;
  type: constants.EDIT_TODO;
}

export interface IOpenTodo extends IActionBase {
  id: number;
  type: constants.OPEN_TODO;
}

export interface ICompleteTodo extends IActionBase {
  id: number;
  type: constants.COMPLETE_TODO;
}

export type ITodoActions =
  | ICompleteTodo
  | IEditTodo
  | IAddTodo
  | IOpenTodo
  | IToggleAddTodoView
  | IDeleteTodo
  | ISetSessionTodos;
