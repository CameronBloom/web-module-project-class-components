import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    this.props.handleToggle(this.props.todo.id);
  }
  render() {
    return (
      <li onClick={this.handleClick}>{ this.props.todo.name } { this.props.todo.completed ? "- completed!" : "- incomplete"}</li>
    )
  }
}
