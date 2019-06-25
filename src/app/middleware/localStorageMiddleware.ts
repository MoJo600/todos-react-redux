import { Middleware } from 'redux';
import { TODOS_LOCAL_STORAGE_KEY } from '~/app/constants';

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  window.localStorage.setItem(
    TODOS_LOCAL_STORAGE_KEY,
    JSON.stringify(store.getState().todosState.todos)
  );
};
