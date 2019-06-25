import * as React from 'react';
import { Portal } from '../../../../components/Portal';
import classNames from 'classnames';
import TodoTextInput from '../TodoTextInput';
import DatePickerComponent from '../DatePicker';
import { ITodoInfo } from '~/app/containers/Todos/models';
import styled from 'styled-components';
import { ToggleAddTodoView } from '~/app/containers/Todos/actions';

export interface IAddTodoModal {
  toggleAddTodoView: ToggleAddTodoView;
  saveTodo: (data: ITodoInfo) => void;
  className?: string;
}

export interface IAddTodoModalState {
  text: string;
  date: string;
}

export class AddTodoComponent extends React.Component<IAddTodoModal, IAddTodoModalState> {
  constructor(props: IAddTodoModal, context?: any) {
    super(props, context);
  }

  onClose = (data?: any) => {
    this.props.toggleAddTodoView(false);
  };

  onSave = () => {
    if (this.state.date === '') {
      return alert('Please enter a valid date');
    }
    if (this.state.text === '') {
      return alert('Please enter a non-empty task');
    }
    this.props.saveTodo({
      due: this.state.date,
      text: this.state.text,
      completed: false
    });
    this.props.toggleAddTodoView(false);
  };

  state = {
    text: '',
    date: ''
  };

  setText = (text: string) => {
    console.log('setting text', text);
    this.setState({ text });
  };

  setDate = (date: string) => {
    console.log('setting date', date);
    this.setState({ date });
  };

  getRootClassNames = () => {
    return classNames({
      addRoot: true,
      normal: true
    });
  };

  getButtonClassNames = (buttonClass: any) => {
    return classNames({
      [buttonClass]: true,
      button: true
    });
  };

  renderButtons = () => (
    <div className="buttons">
      <button className={this.getButtonClassNames('addButton')} onClick={this.onSave}>
        {' '}
        Add
      </button>
      <button className={this.getButtonClassNames('cancelButton')} onClick={this.onClose}>
        Cancel
      </button>
    </div>
  );

  render() {
    return (
      <Portal withModalView className={this.props.className}>
        <div className={this.getRootClassNames()}>
          <button
            className="destroy"
            onClick={() => {
              this.props.toggleAddTodoView(false);
            }}
          />
          <h2>Add Task</h2>
          <TodoTextInput
            newTodo
            onChange={this.setText}
            placeholder={`What is your task?`}
            text={this.state.text}
            onClickEnter={this.onClose}
          />
          <DatePickerComponent
            newTodo
            onChange={this.setDate}
            placeholder={'When is it due on?'}
            value={this.state.date}
            onClickEnter={this.onClose}
          />
          {this.renderButtons()}
        </div>
      </Portal>
    );
  }
}

export default styled(AddTodoComponent)`
  h2 {
    position: relative;
    display: flex;
    width: 100%;
    font-size: 50px;
    font-weight: 300;
    text-align: center;
    justify-content: center;
    color: rgba(175, 47, 47, 0.3);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    -ms-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }

  .normal {
    background: #fff;
    margin: 20px 0 0 30px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .addRoot {
    position: fixed;
    top: 50%;
    left: 50%;
    margin: -250px;
    width: 500px;
    height: 500px;
  }

  .addRoot .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 5px;
    bottom: 0;
    width: 40px;
    height: 40px;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
  }

  .addRoot .destroy:hover {
    color: #af5b5e;
  }

  .addRoot .destroy:after {
    content: '×';
  }

  .addRoot:hover .destroy {
    display: block;
  }

  .addRoot .text {
  }

  .addRoot .buttons {
    position: relative;
    width: 100%;
    margin: 80px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .addRoot .buttons .addButton {
    margin-left: 30px;
  }

  .addRoot .buttons .cancelButton {
    margin-right: 30px;
  }

  .addRoot .buttons .button {
    width: 140px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  .addRoot .buttons .button:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;
