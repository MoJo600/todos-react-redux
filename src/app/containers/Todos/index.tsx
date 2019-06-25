import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  ITodoActionMethods,
  addTodo,
  editTodo,
  completeTodo,
  openTodo,
  toggleAddTodoView,
  setSessionTodos,
  deleteTodo
} from './actions';
import { TodoState, ITodoInfo, ITodoModel } from '~/app/containers/Todos/models';
import { TODOS_LOCAL_STORAGE_KEY } from '~/app/constants';
import TodoPageComponent from '~/app/containers/Todos/components/TodosPage';
import { GlobalStyleComponent } from '~/app/components/GlobalStyles';

export interface IDispatchToProps extends ITodoActionMethods {}

export interface IStateToProps {
  todosState: TodoState;
}
export interface ITodosContainerProps extends IStateToProps, IDispatchToProps {}

export class TodosContainer extends React.Component<ITodosContainerProps> {
  constructor(props: ITodosContainerProps, context?: any) {
    super(props, context);
  }

  componentWillMount = () => {
    const storedTodos = window.localStorage.getItem(TODOS_LOCAL_STORAGE_KEY);
    const parsedTodos = storedTodos ? JSON.parse(storedTodos) : null;
    this.props.setSessionTodos(parsedTodos);
  };

  render() {
    const {
      addTodo,
      editTodo,
      openTodo,
      completeTodo,
      toggleAddTodoView,
      setSessionTodos,
      deleteTodo
    } = this.props;
    const allActions: ITodoActionMethods = {
      addTodo,
      editTodo,
      openTodo,
      completeTodo,
      toggleAddTodoView,
      setSessionTodos,
      deleteTodo
    };
    return (
      <>
        <GlobalStyleComponent />
        <TodoPageComponent
          todos={this.props.todosState.todos}
          showAddView={this.props.todosState.showAddView}
          actions={allActions}
          totalTodos={this.props.todosState.todos ? this.props.todosState.todos.length : 0}
        />
      </>
    );
  }
}

const mapStateToProps = (globalState: TodoState) => {
  return globalState;
};

const mapDispatchToProps = (dispatch: Dispatch): ITodoActionMethods => {
  return {
    addTodo: (data: ITodoInfo) => dispatch(addTodo(data)),
    editTodo: (id: number, data: ITodoInfo) => dispatch(editTodo(id, data)),
    completeTodo: (id: number) => dispatch(completeTodo(id)),
    openTodo: (id: number) => dispatch(openTodo(id)),
    toggleAddTodoView: (isOpen: boolean) => dispatch(toggleAddTodoView(isOpen)),
    setSessionTodos: (data: ITodoModel[]) => dispatch(setSessionTodos(data)),
    deleteTodo: (id: number) => dispatch(deleteTodo(id))
  };
};

const connectedTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);

export default connectedTodos;
