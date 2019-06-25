import * as React from 'react';
import { ITodoModel } from '~/app/containers/Todos/models';
import { ITodoActionMethods } from '~/app/containers/Todos/actions';
import TodoGroupComponent, { TodoGroupTypes } from '../TodoGroup';
import moment from 'moment';
import Header from '../Header';
import AddTodoComponent from '../AddTodo';
import FooterComponent from '../Footer';
import styled from 'styled-components';

export interface ITodosPageProps {
  className?: string;
  todos: ITodoModel[];
  totalTodos: number;
  actions: ITodoActionMethods;
  showAddView: boolean;
}

export class TodoPageComponent extends React.Component<ITodosPageProps> {
  constructor(props: ITodosPageProps, context?: any) {
    super(props, context);
  }

  todayDate = moment(new Date().toISOString());

  getOverdueTodos = () => {
    return this.props.todos
      ? this.props.todos.filter((todo) => {
          return moment(todo.due).isBefore(this.todayDate, 'day');
        })
      : [];
  };

  getTodayTodos = () => {
    return this.props.todos
      ? this.props.todos.filter((todo) => {
          return moment(todo.due).isSame(this.todayDate, 'day');
        })
      : [];
  };

  renderAddTodoModal = () => {
    if (this.props.showAddView) {
      return (
        <AddTodoComponent
          toggleAddTodoView={this.props.actions.toggleAddTodoView}
          saveTodo={this.props.actions.addTodo}
        />
      );
    }
    return;
  };

  renderFooter = () => {
    if (!this.props.showAddView) {
      return <FooterComponent toggleAddTodoView={this.props.actions.toggleAddTodoView} />;
    }
    return;
  };

  render() {
    const { editTodo, completeTodo, toggleAddTodoView, deleteTodo } = this.props.actions;
    const todayTodos = this.getTodayTodos();
    const overdueTodos = this.getOverdueTodos();
    return (
      <div className={this.props.className}>
        <Header />
        <TodoGroupComponent
          groupType={TodoGroupTypes.TODAY}
          totalTodos={todayTodos.length}
          todos={todayTodos}
          editTodo={editTodo}
          completeTodo={completeTodo}
          toggleAddTodoView={toggleAddTodoView}
          removeTodo={deleteTodo}
        />
        <TodoGroupComponent
          groupType={TodoGroupTypes.OVERDUE}
          totalTodos={overdueTodos.length}
          todos={overdueTodos}
          editTodo={editTodo}
          completeTodo={completeTodo}
          removeTodo={deleteTodo}
          toggleAddTodoView={toggleAddTodoView}
        />
        {this.renderAddTodoModal()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default styled(TodoPageComponent)`
  margin: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
