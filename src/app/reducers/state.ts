import { TodoState } from '~/app/containers/Todos/models';

export interface RootState {
  todosState: TodoState;
  metadata?: any;
}
