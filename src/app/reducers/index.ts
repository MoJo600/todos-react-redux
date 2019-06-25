import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from '~/app/containers/Todos/reducer';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  todosState: todoReducer as any
});
