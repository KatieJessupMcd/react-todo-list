import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleClick() {
    this.props.remove(this.props.id);
  }

  handleEdit() {
    this.props.edit(this.props.id, this.props.task);
  }

  // showEditForm ?

  render() {
    return (
      <div className="to-do-list" id={this.props.id}>
        {' '}
        {this.props.task}
        <button onClick={this.handleClick}>X</button>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
}

export default Todo;
