import React, { Component } from 'react';
import NewToDoForm from './NewToDoForm';
import Todo from './Todo';
import uuid from 'uuid/v4';
import EditToDoForm from './EditToDoForm';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentlyEdited: '',
      currentlyEditedId: '',
      edit: false
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  renderTasks() {
    return (
      <ol id="to-do-list">
        {this.state.tasks.map(t => (
          <li key={t.id}>
            <Todo
              id={t.id}
              task={t.task}
              remove={this.removeTodo}
              edit={this.showEditForm}
            />
            {/*  Conditional, if edit button is clicked, render EditTodo */}
          </li>
        ))}
      </ol>
    );
  }

  addTodo(task) {
    let newTask = { ...task, id: uuid() };
    this.setState(currState => ({
      tasks: [...currState.tasks, newTask]
    }));
  }

  updateTodo(task, taskId) {
    // Use the taskId passed through to update the task
    // get the task name from edit form's state
    this.setState(currState => ({
      tasks: currState.tasks.map(function(t) {
        if (t.id === taskId) {
          t.task = task;
        }
        return t;
      })
    }));
    this.setState({ edit: false });
  }

  removeTodo(taskId) {
    this.setState(currState => ({
      tasks: currState.tasks.filter(t => t.id !== taskId)
    }));
  }

  showEditForm(taskId, taskName) {
    // this should display an edit form
    this.setState({
      edit: true,
      currentlyEdited: taskName,
      currentlyEditedId: taskId
    });
  }

  render() {
    if (this.state.edit) {
      return (
        <div className="TodoList">
          To-Do List
          <NewToDoForm addTodo={this.addTodo} />
          <EditToDoForm
            updateTodo={this.updateTodo}
            currentTaskName={this.state.currentlyEdited}
            currentTaskId={this.state.currentlyEditedId}
          />
          {this.renderTasks()}
        </div>
      );
    }

    return (
      <div className="TodoList">
        To-Do List
        <NewToDoForm addTodo={this.addTodo} />
        {this.renderTasks()}
      </div>
    );
  }
}

export default ToDoList;
