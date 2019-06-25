import * as constants from '~/app/containers/Todos/constants';

import {
  IAddTodo,
  IEditTodo,
  ICompleteTodo,
  IOpenTodo,
  IToggleAddTodoView,
  ISetSessionTodos,
  IDeleteTodo
} from './interfaces';
import { ITodoInfo, ITodoModel } from '~/app/containers/Todos/models';

export const addTodo = (data: ITodoInfo): IAddTodo => ({
  ...data,
  type: constants.ADD_TODO
});

export const setSessionTodos = (todos: ITodoModel[]): ISetSessionTodos => ({
  todos,
  type: constants.SET_SESSION_TODOS
});

export const deleteTodo = (id: number): IDeleteTodo => ({
  id,
  type: constants.DELETE_TODO
});

export const toggleAddTodoView = (isOpen: boolean): IToggleAddTodoView => ({
  isOpen,
  type: constants.TOGGLE_ADD_TODO_VIEW
});

export const editTodo = (id: number, data: ITodoInfo): IEditTodo => ({
  id,
  ...data,
  type: constants.EDIT_TODO
});

export const completeTodo = (id: number): ICompleteTodo => ({
  id,
  type: constants.COMPLETE_TODO
});

export const openTodo = (id: number): IOpenTodo => ({
  id,
  type: constants.OPEN_TODO
});

export type AddTodo = typeof addTodo;
export type EditTodo = typeof editTodo;
export type ToggleAddTodoView = typeof toggleAddTodoView;
export type CompleteTodo = typeof completeTodo;
export type OpenTodo = typeof openTodo;
export type SetSessionTodos = typeof setSessionTodos;
export type DeleteTodo = typeof deleteTodo;

export type AllTodoActions =
  | AddTodo
  | EditTodo
  | CompleteTodo
  | OpenTodo
  | SetSessionTodos
  | DeleteTodo;
export interface ITodoActionMethods {
  addTodo: AddTodo;
  editTodo: EditTodo;
  completeTodo: CompleteTodo;
  openTodo: OpenTodo;
  toggleAddTodoView: ToggleAddTodoView;
  setSessionTodos: SetSessionTodos;
  deleteTodo: DeleteTodo;
}
