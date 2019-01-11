import React, { Component } from 'react';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state);
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
        <label htmlFor="todo">To do:</label>
        <input
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit" id="add-btn">
          Add New To Do Item
        </button>
      </form>
    );
  }
}

export default NewToDoForm;
