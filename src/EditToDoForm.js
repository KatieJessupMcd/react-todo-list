import React, { Component } from 'react';

class EditToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.state.task, this.props.currentTaskId);
    this.setState({ task: '' });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">Edit:</label>
        <input
          name="task"
          placeholder={this.props.currentTaskName}
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit">Update</button>
        <button type="submit">Cancel</button>
      </form>
    );
  }
}

export default EditToDoForm;
