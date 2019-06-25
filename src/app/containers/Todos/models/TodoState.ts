import { ITodoModel, ITodoInfo } from './TodoModels';

export interface ITodoState {
  todos: ITodoModel[];
  showAddView: boolean;
  newTodo?: ITodoInfo;
}
export type TodoState = ITodoState;

export const initialState: TodoState = {
  todos: [],
  showAddView: false
};
