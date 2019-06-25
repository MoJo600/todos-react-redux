import * as React from 'react';
import { ITodoModel } from '~/app/containers/Todos/models';
import TodoList from '../TodoList';
import styled from 'styled-components';
import {
  EditTodo,
  ToggleAddTodoView,
  CompleteTodo,
  DeleteTodo
} from '~/app/containers/Todos/actions';

export interface ITodoGroupProps {
  className?: string;
  todos: ITodoModel[];
  totalTodos: number;
  editTodo: EditTodo;
  toggleAddTodoView: ToggleAddTodoView;
  completeTodo: CompleteTodo;
  removeTodo: DeleteTodo;
  groupType: TodoGroupTypes;
}

export enum TodoGroupTypes {
  OVERDUE = 'Overdue',
  TODAY = 'Today'
}

export class TodoGroupComponent extends React.Component<ITodoGroupProps> {
  constructor(props: ITodoGroupProps, context?: any) {
    super(props, context);
  }

  renderHeaderText = () => `${this.props.groupType} - ${this.props.totalTodos} Tasks`;

  renderHeaderSection = () => {
    return (
      <section className="header">
        <h3>{this.renderHeaderText()}</h3>
        <hr />
      </section>
    );
  };

  allActions = {
    completeTodo: this.props.completeTodo,
    removeTodo: this.props.removeTodo
  };

  canShowDueDate = () => this.props.groupType === TodoGroupTypes.OVERDUE;

  renderTodoList = () => {
    return (
      <div className="todoList">
        <TodoList
          todos={this.props.todos}
          actions={this.allActions}
          showDueDate={this.canShowDueDate()}
        />
      </div>
    );
  };

  renderNoTodosText = () => {
    if (this.props.groupType === TodoGroupTypes.OVERDUE) {
      return `You don't have any Overdue todos.`;
    }
    return `You don't have any todos due today.`;
  };

  renderNoTodos = () => {
    return <div className="noTodos">{this.renderNoTodosText()}</div>;
  };

  renderListSection = () => {
    if (this.props.todos.length > 0) {
      return this.renderTodoList();
    }
    return this.renderNoTodos();
  };

  render() {
    return (
      <div className={this.props.className}>
        {this.renderHeaderSection()}
        {this.renderListSection()}
      </div>
    );
  }
}

export default styled(TodoGroupComponent)`
  margin: 20px 0;

  .header {
    padding-left: 30px;
  }

  .noTodos {
    text-align: center;
    font-weight: 300;
    font-size: x-large;
    padding: 30px 0;
  }

  .todoList {
    background: #fff;
    margin: 20px 0 0 30px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
`;