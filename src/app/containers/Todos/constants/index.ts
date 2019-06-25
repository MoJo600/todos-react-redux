export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;

export const EDIT_TODO = 'EDIT_TODO';
export type EDIT_TODO = typeof EDIT_TODO;

export const DELETE_TODO = 'DELETE_TODO';
export type DELETE_TODO = typeof DELETE_TODO;

export const COMPLETE_TODO = 'COMPLETE_TODO';
export type COMPLETE_TODO = typeof COMPLETE_TODO;

export const COMPLETE_ALL = 'COMPLETE_ALL';
export type COMPLETE_ALL = typeof COMPLETE_ALL;

export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export type CLEAR_COMPLETED = typeof CLEAR_COMPLETED;

export const OPEN_TODO = 'OPEN_TODO';
export type OPEN_TODO = typeof OPEN_TODO;

export const TOGGLE_ADD_TODO_VIEW = 'TOGGLE_ADD_TODO_VIEW';
export type TOGGLE_ADD_TODO_VIEW = typeof TOGGLE_ADD_TODO_VIEW;

export const SET_SESSION_TODOS = 'SET_SESSION_TODOS';
export type SET_SESSION_TODOS = typeof SET_SESSION_TODOS;

export type ActionConstants =
  | ADD_TODO
  | EDIT_TODO
  | DELETE_TODO
  | COMPLETE_TODO
  | COMPLETE_ALL
  | CLEAR_COMPLETED
  | OPEN_TODO
  | TOGGLE_ADD_TODO_VIEW
  | SET_SESSION_TODOS;
